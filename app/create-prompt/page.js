"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

const CreatePrompt = () => {
    const { toast } = useToast()
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: ""  });

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
          
        }),
      });

      if (response.ok) {
        toast({
            description: "Your Prompt has been posted.",
          })
          setTimeout(() => {
            router.push("/");
          }, 3000);
        
      }
      else {

        toast({
            variant:"destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your posting! refresh the page or try again.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
      }
    } catch (error) {
       
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" w-full h-full  mt-5 flex flex-col ">
      <section className="mt-10">
        <div className="flex flex-col justify-start">
          <span className="  m-5 flex text-left  lg:text-6xl text-4xl font-black w-1/4 md:w-1/2  underline decoration-pink-500 decoration-8 underline-offset-4 ">
            Create your prompt{" "}
          </span>
          <p className="  md:mt-6 mt-4  flex justify-end text-ellipsis  lg:text-2xl text-xl font-medium pr-10  ">
            Share it with the community <br />
            and let your imagination run wild <br />
            with any AI-powered platform.
          </p>
          <div className="mt-4 md:mt-12">
            <Form
              type="Create"
              post={post}
              setPost={setPost}
              submitting={submitting}
              handleSubmit={createPrompt}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreatePrompt;
