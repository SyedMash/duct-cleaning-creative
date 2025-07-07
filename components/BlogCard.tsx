import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  slug: string;
  author: string;
  date: string;
  image: string;
}

const BlogCard = ({ author, date, title, slug, image }: BlogCardProps) => {
  return (
    <Link
      href={`/blogs/${slug}`}
      className={"relative h-48 space-y-2 overflow-hidden rounded-2xl"}
    >
      <Image
        src={"/images/frame_0001.jpg"}
        alt={title}
        fill={true}
        className={"object-cover"}
      />
      <div
        className={
          "absolute inset-0 flex size-full flex-col justify-center gap-3 p-4 backdrop-blur-sm"
        }
      >
        <h1 className={"font-manrope text-xl font-semibold"}>{title}</h1>
        <p className={"text-brand-gray font-semibold"}>{author}</p>
        <p className={"text-brand-gray font-semibold"}>{date}</p>
      </div>
    </Link>
  );
};
export default BlogCard;
