"use client";

import { useState, useEffect } from "react";
import { Form } from "./ui/form";
import { Input } from "./ui/input";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 flex flex-wrap justify-around">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [loading, setLoading] = useState();
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const [allPosts, setAllPosts] = useState([]);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();
    setAllPosts(data);
  };

  useEffect(() => {
    setLoading(true);
    fetchPosts();
    setLoading(false);
  }, []);

  return (
    <div className="flex w-11/12 flex-col mt-12">
      {console.log("post", allPosts)}

      <section className="w-full">
        <Form className="relative w-full flex-center">
          <Input
            type="text"
            placeholder="Search for a #tag, a keyword or an username"
            value={searchText}
            onChange={handleSearchChange}
            required
            className=" font-regular text-xl"
          />
        </Form>

        {loading ? (
          <div className="flex w-full text-center items-center justify-center mx-auto">
            <p className=" text-xl">Loading data</p>
            <div className="flex w-auto justify-center items-center relative  h-20 ml-2">
              <div className="w-5 h-5 rounded-full bg-rose-500 m-2 inline-block animate-bounce"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500 m-2 inline-block animate-bounce"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500 m-2 inline-block animate-bounce"></div>
            </div>
          </div>
        ) : searchText ? (
          <PromptCardList
            data={searchedResults}
            handleTagClick={handleTagClick}
          />
        ) : (
          <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
        )}
      </section>
    </div>
  );
};

export default Feed;
