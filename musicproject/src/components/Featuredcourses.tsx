'use client'
import Link from "next/link"
import coursedata from "../data/music_cources.json"
import { BackgroundGradient } from "./ui/backgroung-gradient";
import Image from "next/image";

interface Course {
    id: number;
    titleslug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image: string
}




export default function Featuredcourses() {
  const Featuredcourses=coursedata.courses.filter((course:Course)=>course.isFeatured)

  return (
    <div className="py-12 bg-gray-900">
     <div>
          <div className="text-center">
               <h2>Featuerd Courses</h2>
               <p>Learn with the Best</p>
               </div>
     </div>
     <div
     className="mt-10"
     >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {Featuredcourses.map((course:Course)=>
        (<div key={course.id} className="flex justify-center">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {course.titleslug}
              </p>
    
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {course.description}
              </p>
              <Link href={'./courses'}>
              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                Learn More
              </button>
              </Link>
            </BackgroundGradient>
        </div>)
      )}
      </div>
     </div>
     <div className="mt-20 text-center">
          <Link href={'/courses'}>View all courses</Link>
     </div>

    </div>
  )
}
