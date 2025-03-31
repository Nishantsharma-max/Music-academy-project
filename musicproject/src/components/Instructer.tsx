"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

const people = [
     {
       id: 1,
       name: "John Doe",
       designation: "Software Engineer",
       image:""
     },
     {
       id: 2,
       name: "Robert Johnson",
       designation: "Product Manager",
       image:""
     },
     {
       id: 3,
       name: "Jane Smith",
       designation: "Data Scientist",
       image:""
     },
     {
       id: 4,
       name: "Emily Davis",
       designation: "UX Designer",
       image:""
     },
     {
       id: 5,
       name: "Tyler Durden",
       designation: "Soap Developer",
       image:""
     },
     {
       id: 6,
       name: "Dora",
       designation: "The Explorer",
       image:""
     },
   ];
 
   

function Instructer() {
  return (
     <WavyBackground className="max-w-4xl mx-auto pb-40">
     <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
       Hero waves are cool
     </p>
     <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
       Leverage the power of canvas to create a beautiful hero section
     </p>
   </WavyBackground>
  )
}

export default Instructer


{/* <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div> */}