"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
     {
       title: "Live Jamming",
       description:
         "Play and collaborate with musicians worldwide in real-time. Whether you're practicing, composing, or just having fun, our platform enables seamless live jamming sessions.",
       content: (
         <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
           Live Jamming
         </div>
       ),
     },
     {
       title: "Real-time Mixing",
       description:
         "Experience instant feedback on your tracks with real-time mixing tools. Adjust levels, apply effects, and fine-tune your sound with precision, all in real time.",
       content: (
         <div className="flex h-full w-full items-center justify-center text-white">
           <Image
             src="/mixing-console.webp"
             width={300}
             height={300}
             className="h-full w-full object-cover"
             alt="Mixing console"
           />
         </div>
       ),
     },
     {
       title: "Music Collaboration",
       description:
         "Create and edit music with your bandmates or producers from anywhere. Our platform offers seamless collaboration tools, ensuring everyone stays in sync on the latest track version.",
       content: (
         <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
           Music Collaboration
         </div>
       ),
     },
     {
       title: "Unlimited Inspiration",
       description:
         "Never run out of creative ideas! Explore sound libraries, AI-generated melodies, and chord progressions to spark your next big hit. Stay inspired and keep creating.",
       content: (
         <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
           Unlimited Inspiration
         </div>
       ),
     },
   ];
   

function Whychooseus() {
  return (
    <div className="w-full py-4">
    <StickyScroll content={content} />
     </div>
  )
}

export default Whychooseus