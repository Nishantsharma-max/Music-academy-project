import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"

function Herosection() {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    > 
    <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            fill="teal"
          />
          <div className="text-center p-4 relative z-10 w-full">
               <h1>Master the Art of Music</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium impedit pariatur vitae vel provident numquam quis ducimus nulla doloremque magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium impedit pariatur vitae vel provident numquam quis ducimus nulla doloremque magnam.</p>
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
  )
}

export default Herosection