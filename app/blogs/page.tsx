import React from "react";
import Bounded from "@/components/Bounded";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/constants";

const Page = () => {
  return (
    <Bounded className={"min-h-screen pt-32"}>
      <h1
        className={
          "font-manrope introElement mb-12 text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
        }
      >
        Blogs
      </h1>

      <div className={"grid grid-cols-1 gap-6 md:grid-cols-2"}>
        {blogPosts.map((post, idx: number) => (
          <BlogCard
            title={post.title}
            author={post.author}
            date={post.date}
            key={idx}
            slug={post.slug}
            image=""
          />
        ))}
      </div>
    </Bounded>
  );
};
export default Page;
