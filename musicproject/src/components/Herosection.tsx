import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"
import { BackgroundLines } from "@/components/ui/background-lines";

function Herosection() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col ">
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    > 
    <Spotlight
            className="-top-50 left-0 md:-top-20 md:left-60"
            fill="yellow"
          />
          <div className="text-center p-4 relative z-10 w-full ">
               <h1 className="font-bold text-8xl">Master the Art of Music</h1>
               <p className="text-1xl w-2xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium impedit pariatur vitae vel provident numquam quis ducimus nulla doloremque magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium impedit pariatur vitae vel provident numquam quis ducimus nulla doloremque magnam.</p>
               <div className="mt-5">
                    <Link href={"/courses"}>
                    <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-teal-200 dark:border-slate-800">
                    Explore courses
                    </Button>
                    </Link>
               </div>
          </div>

    </div>
    </BackgroundLines>
  )
}

export default Herosection