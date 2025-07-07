import React from "react";
import Bounded from "@/components/Bounded";
import { blogPosts } from "@/constants";

const Page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const post = blogPosts.find((post) => post.slug === slug);
  if (!post) return null;

  const { title, date, author, content } = post;

  return (
    <Bounded className={"min-h-screen pt-32"}>
      <h1
        className={
          "font-manrope introElement mb-12 text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
        }
      >
        {title}
      </h1>
      {post.content.map((block, i) => {
        if (block.type === "paragraph") {
          return (
            <p key={i} className="my-4 text-base md:text-lg">
              {block.text}
            </p>
          );
        }
        if (block.type === "heading") {
          return (
            <h2 key={i} className="mt-6 text-2xl font-semibold">
              {block.text}
            </h2>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="list-inside list-disc space-y-2">
              {block.items.map((item, j) => (
                <li key={j} className={"text-base lg:text-lg"}>
                  {item}
                </li>
              ))}
            </ul>
          );
        }
      })}
    </Bounded>
  );
};
export default Page;
