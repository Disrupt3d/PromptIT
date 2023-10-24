"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ModeToggle } from "./ModeToggle";

export const Nav = () => {
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState(null);

  const [toggleDropdown, setToggleDropdown] =useState(false)

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProviders();
  }, []);

  const signOut = () => {
    return console.log("click");
  };
  return (
    <nav className=" flex justify-between items-center w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 items-center">
        {/*<Image src="/assets/images/logo.svg" alt="chadPrompts" width={30} height={30} className=" object-contain"    />*/}
        <h2 className="   ml-2 text-2xl font-black ">
          Prompt
          <span className=" text-slate-100 text-4xl font-extrabold ml-1 px-3 py-1  rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            IT
          </span>
          <span className="ml-5"><ModeToggle /></span>
    
        </h2>
      </Link>

      {/* Desktop navigation */}
      
      <div className="sm:flex hidden">
        
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link
              href="/create-prompt"
              className={buttonVariants({ variant: "outline" })}
            >
              Create new Prompt
            </Link>
            <Button onClick={signOut} >
              Sign Out
            </Button>
            <Link href="/profile">
              <Image
                src="/assets/images/profile.svg"
                width={37}
                height={37}
                className="rounded-full mr-2"
                alt="profile picture"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <Button
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  variant="primary"
                >
                  Sign In
                </Button>
              ))}
          </>
        )}
      </div>

      {/* Mobile navigation */}

      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/profile.svg"
              width={37}
              height={37}
              className="rounded-full mr-2"
              alt="profile picture"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
                <div className="absolute right-0 mr-2 top-full mt-3 w-full p-5 rounded-lg  shadow-slate-300  border-2  min-w-[210px] flex flex-col gap-2 justify-end items-end;">
                    <Link href="/profile" className="text-sm font-inter text-gray-700 dark:text-slate-100 hover:text-gray-500 font-medium;"
                    onClick={() => setToggleDropdown(false)
                    }>
                    My profile
                    
                    </Link>
                    <Link href="/create-prompt" className="text-sm font-inter text-gray-700 dark:text-slate-100 hover:text-gray-500 font-medium;"
                    onClick={() => setToggleDropdown(false)
                    }>
                    Post a Prompt
                    
                    </Link> 
                    <Button onClick={() => {
                        setToggleDropdown(false)
                        signOut()
                    }}>
                        Sign Out

                    </Button>


                </div>

            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <Button
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  variant="primary"
                >
                  Sign In
                </Button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};
