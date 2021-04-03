import Head from "next/head";
import Link from "next/link";
import Axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { Post } from "../types";

dayjs.extend(relativeTime);

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    Axios.get("/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex w-full pt-vh">
      <Head>
        <title>FA Intiative</title>
      </Head>
      <div className="flex w-full h-92v">
        <Sidebar />

        <div className="flex flex-col items-center w-full h-full pt-8 bg-transparent pl-1/18">
          {posts.map((post) => (
            <div
              key={post.identifier}
              className="flex flex-col items-center w-6/12 bg-white shadow-2xl h-52 rounded-tl-4xl rounded-tr-4xl rounded-bl-3.5xl rounded-br-3.5xl mb-12"
            >
              <div className="flex items-center justify-between w-full px-10 bg-secondary h-2/7 rounded-tl-4xl rounded-tr-4xl">
                <div className="flex items-center justify-center">
                  <p className="text-base text-secondary">
                    Posted by{" "}
                    <Link href={`/u/${post.username}`}>
                      <span className="font-medium cursor-pointer text-green hover:underline">
                        /u/{post.username}
                      </span>
                    </Link>
                  </p>
                  <i className="mx-3 text-gray-300 text-xs2 fas fa-circle"></i>
                  <Link href={post.url}>
                    <p className="text-xs text-gray-400 cursor-pointer hover:underline">
                      {dayjs(post.createdAt).fromNow()}
                    </p>
                  </Link>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center mx-3">
                    <i className="mr-2 text-2xl cursor-pointer fas fa-heartbeat text-green"></i>
                    <p className="text-sm font-semibold">28</p>
                  </div>
                  <div className="flex items-center justify-center mx-3">
                    <i className="mr-2 text-2xl cursor-pointer fas fa-comment-dots text-green"></i>
                    <p className="text-sm font-semibold">5</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between w-full px-10 py-2 h-4/7">
                <div className="flex flex-col w-full">
                  <p className="mb-1 text-xl font-bold truncate text-secondary">
                    {post.title}
                  </p>
                  <p className="text-sm truncate text-secondary">{post.body}</p>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center justify-center mr-5">
                    <i className="mr-2 text-2xl cursor-pointer fas fa-heartbeat text-green"></i>
                    <p className="text-sm font-semibold">Love</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <i className="mr-2 text-2xl cursor-pointer fas fa-comment-dots text-green"></i>
                    <p className="text-sm font-semibold">Comment</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-full px-10 text-sm rounded-bl-full rounded-br-full bg-green h-1/7">
                <Link href={`/r/${post.subName}`}>
                  <img
                    className="w-6 h-auto mr-2 cursor-pointer"
                    src="/images/companylogo.png"
                    alt="company logo"
                  />
                </Link>
                <Link href={`/r/${post.subName}`}>
                  <a className="text-white">/fa/{post.subName}</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
