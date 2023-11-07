"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

import { format } from "date-fns";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "./ui/button";
import Link from "next/link";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };


  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 5000);
  };

  return (
    <Card className="m-2 md:w-5/12 w-full ">
      <CardHeader  onClick={handleProfileClick} className="  flex-row gap-2">
        <Image
          src={post.creator.image}
          alt="user_image"
          width={40}
          height={40}
          className="rounded-full hover:cursor-pointer"
        />
        <CardDescription>
          Posted by <span className="  font-bold">{post.creator.username}</span>
          <br />
          {format(new Date(post.createdAt), " d/MM/yyyy  H:mm")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="break-words">{post.prompt}</p>

        <Link
          href="/"
          className=" hover:opacity-60"
          onClick={() => handleTagClick && handleTagClick(post.tag)}
        >
          {" "}
          <p className=" text-rose-500 dark:text-cyan-400 text-sm font-bold text-right mt-6 border-t-2 border-slate-100 dark:border-zinc-400 cursor-pointer ">
            {post.tag}
          </p>
        </Link>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-4">
        {session?.user.id === post.creator._id && pathName === "/profile" && (
          <Button onClick={handleEdit}>Edit</Button>
        )}
        {session?.user.id === post.creator._id && pathName === "/profile" && (
          <Button variant="destructive" onClick={handleDelete}>Delete</Button>
        )}
</div>
        <Button
          variant="outline"
          onClick={() => {
            handleCopy();
          }}
        >
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={12}
            height={12}
          />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PromptCard;
