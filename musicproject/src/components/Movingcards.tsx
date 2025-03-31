"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const data = [
     {
       quote: "Music can change the world because it can change people. It speaks where words fail.",
       name: "Bono",
       title: "Lead Singer of U2",
     },
     {
       quote: "Without music, life would be a mistake. It gives soul to the universe and wings to the mind.",
       name: "Friedrich Nietzsche",
       title: "Philosopher",
     },
     {
       quote: "Music is the universal language of mankind. It connects hearts beyond barriers.",
       name: "Henry Wadsworth Longfellow",
       title: "Poet",
     },
     {
       quote: "One good thing about music, when it hits you, you feel no pain. Instead, you feel alive.",
       name: "Bob Marley",
       title: "Musician",
     },
     {
       quote: "To stop the flow of music would be like stopping time itself—impossible and unthinkable.",
       name: "Aaron Copland",
       title: "Composer",
     },
     {
       quote: "Music is the divine way to tell beautiful, poetic things to the heart.",
       name: "Pablo Casals",
       title: "Cellist & Composer",
     },
     {
       quote: "Where words leave off, music begins. It carries emotions words can’t describe.",
       name: "Heinrich Heine",
       title: "Poet",
     },
     {
       quote: "Music expresses that which cannot be put into words and that which cannot remain silent.",
       name: "Victor Hugo",
       title: "Writer",
     },
   ];
   
   
export default function Movingcards() {
  return (
     <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
          
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
      <h1 className="mb-20 text-teal-700">Hear our Harmony:Voices of Success</h1>
      <InfiniteMovingCards
       items={data}
       direction="right"
       speed="normal"
     />
      </div>
      
    </div>
     )
}
