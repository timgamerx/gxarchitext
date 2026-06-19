"use client";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowUpRight, CloudUpload } from 'lucide-react';
import PhotoPicker from "../components/PhotoPicker";

export default function CreatePost() {
  return (
    <div className="container ml-0 mt-32 align-left">

      <div className="flex flex-row items-center justify-between">
        <h1 className="text-5xl ml-5 font-bold mt-0 px-4 py-2 text-black" style={{ marginBottom: -13 }}>
        Create Post
      </h1>
      <button className="flex items-center gap-2 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors ml-5 mt-4 bg-slate-900 hover:bg-cyan-700"
        style={{ marginRight: -120 }}>
        Post
        <ArrowUpRight size={22} />
      </button>
      </div>
     

      {/*} <p className="text-lg ml-5 mt-0 px-4 py-2 text-black">
        This is the create post page. You can add your post creation form here.
      </p>  */}

      <PhotoPicker />

   <div>
    <p className="text-xl text-black font-semibold ml-5 mt-18">Post Title:</p>
      <input type="text" placeholder="Post title..." className="text-xl text-gray-500  ml-5 mt-3 py-2 px-4 mt-2" 
        style={{ width: 600, height: 150, borderWidth: 1, borderColor: "#ccc", borderRadius: 10 }}/>
      </div>
     
      <div>
         <p className="text-xl text-black font-semibold ml-5 mt-18">Post Excerpt:</p>
        <textarea placeholder="Post excerpt..." className="text-xl text-gray-500  ml-5 mt-3 py-2 px-4 mt-2" 
         style={{ width: 600, height: 150, borderWidth: 1, borderColor: "#ccc", borderRadius: 10 }}/>
      </div>

      <div>
         <p className="text-xl text-black font-semibold ml-5 mt-18">Post Content:</p>
      <textarea placeholder="Post content..." className="text-xl text-gray-500  ml-5 mt-3 py-2 px-4 mt-2" 
        style={{ width: 600, height: 750, borderWidth: 1, borderColor: "#ccc", borderRadius: 10 }}/>
      </div>

      <div>
        <p className="text-xl text-black font-semibold mt-20 ml-5 mt-3">Category:</p>
        <select className="text-xl text-gray-500  ml-5 mt-3" 
          style={{ width: 600, height: 50 }}>
          <option>General</option>
          <option>Tech</option>
          <option>Life</option>
          <option>Business</option>
          <option>Marketing</option>
          <option>Growth</option>
          <option>Other</option>
        </select>
      </div>

      <div className="flex flex-row items-center justify-between mt-0 mb-55 ml-5"
      style={{ width: 600 }}>
      <p className="text-xl text-black font-semibold ml-5 mt-18">Allow Comments?</p>
            <input type="checkbox" className="ml-5 mt-18" 
            style={{ width: 20, height: 20, accentColor: "#012348" }}/>
      </div>
      


    </div>
  );
}
 