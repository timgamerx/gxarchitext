'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation'; // Use 'next/router' for Pages Router
import { Send } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  const textWithNewLines = "\n";
  
  return (
    
    <div className="container ml-0 mt-32 align-left"
    >
      <h1 className="text-5xl ml-5 font-bold mt-0 px-4 py-2 text-black"
      style={{ marginBottom: -13 }}>
       Most People Never Start
      </h1>
      <p className="text-lg ml-5 mt-0 px-4 py-2 text-black">
        They don't fail because they're incapable. They fail because they keep waiting.
      </p>
      <Image 
        src="/growth-architect-person.png"
        alt="Hero Image"
        width={600}
        height={400}
        className="mt-0 ml-5 mt-0 px-4 py-2 "
      />
      <p className="justify-start text-left text-lg ml-5 mt-10 mb-10 px-4 py-2 text-black whitespace-pre-line"
     >
      Most people don't fail because they're not talented.
      {textWithNewLines}
      {textWithNewLines}
      Most people fail because they never start.
      {textWithNewLines}
      {textWithNewLines}
      They spend months planning. 
      {textWithNewLines}
      Weeks researching. 
      {textWithNewLines}
      Days waiting for the "perfect moment."
      {textWithNewLines}
      But the perfect moment never comes.
      {textWithNewLines}
      {textWithNewLines}
      The truth is that every successful person once started without having everything figured out. They started with limited knowledge, limited resources, and plenty of uncertainty.
      {textWithNewLines}
      {textWithNewLines}
      The difference isn't intelligence. 
      {textWithNewLines}
      The difference isn't luck.
      {textWithNewLines}
      {textWithNewLines}
      The difference is action.
      {textWithNewLines}
      {textWithNewLines}
      While others are waiting for guarantees, builders are learning by doing.
      {textWithNewLines}
      {textWithNewLines}
      Your first attempt won't be perfect. 
      {textWithNewLines}
      Your first design won't be perfect. 
      {textWithNewLines}
      Your first business won't be perfect.
      {textWithNewLines}
      {textWithNewLines}
      But every expert was once a beginner who decided to start.
      {textWithNewLines}
      {textWithNewLines}
      Progress comes from movement, not preparation alone.
      {textWithNewLines}
      {textWithNewLines}
      Start before you're ready. 
      {textWithNewLines}
      Learn as you go. 
      {textWithNewLines}
      Improve along the way.
      {textWithNewLines}
      {textWithNewLines}
      A year from now, you'll either be glad you started today or wishing you had.
      {textWithNewLines}
      {textWithNewLines}
      What's one thing you've been putting off that you need to start?
      {textWithNewLines}
      {textWithNewLines}
      <span className="font-semibold">
      Comments below 
      </span>
      </p>
      
      <div className="flex px-4 py-2 ml-5 flex-row"
      style={{ marginTop: -50, marginBottom: 40 }}>
          <input
            type="text"
            placeholder="Type something..."
            className="border border-gray-200 — 1px flex justify-start w-70 h-12 px-4 py-2 rounded-full placeholder:italic"
          />

          <button className="flex items-center gap-2 bg-gray-200 text-white px-4 py-4 rounded-full ml-2 cursor-pointer hover:bg-gray-300 transition-colors">
            <Send size={18}
            className="text-gray-600" />
          </button>
      </div>

    <div className="flex items-start justify-start gap-3 px-4 py-2 ml-5">
  
    {/* Left Column: Name and Text Bubble stacked vertically */}
    <div className="flex flex-col">
      <p className="text-lg text-black font-semibold mb-1 ml-47">
        Emmanuel
      </p>
      {/* Message Bubble container */}
      <div className="w-70 h-25 bg-gray-200 rounded-bl-2xl rounded-br-2xl rounded-tr-2xl p-4">
        <p className="text-sm text-gray-700"
        style={{ marginTop: -7 }}>
          This is so insightful! I’m glad i could learn from this. I promise i will take action and i believe by next year, i will be here to share my testimony.
        </p>
      </div>
    </div>

    {/* Right Column: Avatar stays cleanly aligned right at the top */}
    <div className="w-[50px] h-[50px] relative shrink-0, mt-0">
      <Image 
        src="/avatar.png"
        alt="Hero Image"
        fill
        className="object-cover rounded-full"
      />
    </div>
  </div>

    <Link 
      href="/createpost" 
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-gray-200 text-white p-4 rounded-full cursor-pointer shadow-lg hover:bg-gray-300 transition-colors"
    >
      <Send size={18} className="text-gray-600" />
    </Link>

    </div>
  );
}
