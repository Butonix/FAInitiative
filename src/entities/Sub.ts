import { Expose } from "class-transformer";
import { JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Index } from "typeorm";
import { Entity as TOEntity, Column } from "typeorm";

import Entity from "./Entity";
import { Post } from "./Post";
import User from "./User";

@TOEntity("subs")
export default class Sub extends Entity {
  constructor(sub: Partial<Sub>) {
    super();
    Object.assign(this, sub);
  }

  @Index()
  @Column({ unique: true })
  name: String;

  @Column()
  title: String;

  @Column({ type: "text", nullable: true })
  description: String;

  @Column({ nullable: true })
  ImageUrn: String;

  @Column({ nullable: true })
  bannerUrn: String;

  @ManyToOne(() => User)
  @JoinColumn({ name: "username", referencedColumnName: "username" })
  user: User;

  @OneToMany(() => Post, (post) => post.sub)
  posts: Post[];

  @Expose()
  get imageUrl(): string {
    return this.ImageUrn
      ? `${process.env.APP_URL}/images/${this.ImageUrn}`
      : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
  }

  @Expose()
  get bannerUrl(): string | undefined {
    return this.bannerUrn
      ? `${process.env.APP_URL}/images/${this.bannerUrn}`
      : undefined;
  }
}
