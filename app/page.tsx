"use client";
import React, { useState, Fragment } from "react";
import Image from "next/image";
import { Send } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [typedcomment, setTypedComment] = useState("");
  const [submittedComment, setSubmittedComment] = useState("");
  // removed unused router to satisfy TypeScript
  const textWithNewLines = "\n";

  const SaveComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypedComment(event.target.value);
  };

  const SubmitMessage = () => {
    setSubmittedComment(typedcomment);
    console.log(typedcomment);
    setTypedComment("");
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      SubmitMessage();
    }
  };

  const UserComments = [
    {
      id: crypto.randomUUID(),
      name: "Guest",
      text: submittedComment,
      avatar: "/avatar.png",
    },
  ];

  return (
    <div className="container ml-0 mt-32 align-left">
      <h1
        className="text-5xl ml-5 font-bold mt-0 px-4 py-2 text-black"
        style={{ marginBottom: -13 }}
      >
        Most People Never Start
      </h1>
      <p className="text-lg ml-5 mt-0 px-4 py-2 text-black">
        They don&#39;t fail because they&#39;re incapable. They fail because
        they keep waiting.
      </p>
      <Image
        src="/growth-architect-person.png"
        alt="Hero Image"
        width={600}
        height={400}
        className="mt-0 ml-5 mt-0 px-4 py-2 "
      />
      <p className="justify-start text-left text-lg ml-5 mt-10 mb-10 px-4 py-2 text-black whitespace-pre-line">
        Most people don&#39;t fail because they&#39;re not talented.
        {textWithNewLines}
        {textWithNewLines}
        Most people fail because they never start.
        {textWithNewLines}
        {textWithNewLines}
        They spend months planning.
        {textWithNewLines}
        Weeks researching.
        {textWithNewLines}
        Days waiting for the &quot;perfect moment.&quot;
        {textWithNewLines}
        But the perfect moment never comes.
        {textWithNewLines}
        {textWithNewLines}
        The truth is that every successful person once started without having
        everything figured out. They started with limited knowledge, limited
        resources, and plenty of uncertainty.
        {textWithNewLines}
        {textWithNewLines}
        The difference isn&#39;t intelligence.
        {textWithNewLines}
        The difference isn&#39;t luck.
        {textWithNewLines}
        {textWithNewLines}
        The difference is action.
        {textWithNewLines}
        {textWithNewLines}
        While others are waiting for guarantees, builders are learning by doing.
        {textWithNewLines}
        {textWithNewLines}
        Your first attempt won&#39;t be perfect.
        {textWithNewLines}
        Your first design won&#39;t be perfect.
        {textWithNewLines}
        Your first business won&#39;t be perfect.
        {textWithNewLines}
        {textWithNewLines}
        But every expert was once a beginner who decided to start.
        {textWithNewLines}
        {textWithNewLines}
        Progress comes from movement, not preparation alone.
        {textWithNewLines}
        {textWithNewLines}
        Start before you&#39;re ready.
        {textWithNewLines}
        Learn as you go.
        {textWithNewLines}
        Improve along the way.
        {textWithNewLines}
        {textWithNewLines}A year from now, you&#39;ll either be glad you started
        today or wishing you had.
        {textWithNewLines}
        {textWithNewLines}
        What&#39;s one thing you&#39;ve been putting off that you need to start?
        {textWithNewLines}
        {textWithNewLines}
        <span className="font-semibold">Comments below</span>
      </p>

      <div
        className="flex px-4 py-2 ml-5 flex-row"
        style={{ marginTop: -50, marginBottom: 40 }}
      >
        <input
          type="text"
          placeholder="Type something..."
          onChange={SaveComment}
          value={typedcomment}
          onKeyDown={onKeyDown}
          className="border border-gray-200 — 1px flex justify-start w-70 h-12 px-4 py-2 rounded-full placeholder:italic"
        />

        <button className="flex items-center gap-2 bg-gray-200 text-white px-4 py-4 rounded-full ml-2 cursor-pointer hover:bg-gray-300 transition-colors">
          <Send size={18} className="text-gray-600" onClick={SubmitMessage} />
        </button>
      </div>

      {submittedComment.trim() !== "" &&
        UserComments.map((userComment) => {
          return (
            <Fragment key={userComment.id}>
              <div className="flex items-start justify-start gap-3 px-4 py-2 ml-5">
                <div className="flex flex-col">
                  <p className="text-lg text-black font-semibold mb-1 ml-47">
                    {userComment.name}
                  </p>

                  <p className="text-sm text-gray-700 bg-gray-300 px-4 py-2 rounded-lg max-w-[300px] whitespace-pre-line">
                    {userComment.text}
                  </p>
                </div>

                <div className="w-[50px] h-[50px] relative shrink-0, mt-0">
                  <Image
                    src={userComment.avatar}
                    alt="Hero Image"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
            </Fragment>
          );
        })}

      <Link
        href="/createpost"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-gray-200 text-white p-4 rounded-full cursor-pointer shadow-lg hover:bg-gray-300 transition-colors"
      >
        <Send size={18} className="text-gray-600" />
      </Link>
    </div>
  );
}
