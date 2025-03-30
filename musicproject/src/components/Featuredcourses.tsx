import Link from "next/link"

function Featuredcourses() {
  return (
    <div className="py-12 bg-gray-900">
     <div>
          <div className="text-center">
               <h2>Featuerd Courses</h2>
               <p>Learn with the Best</p>
               </div>
     </div>
     <div>2</div>
     <div className="mt-20 text-center">
          <Link href={'/courses'}>View all courses</Link>
     </div>

    </div>
  )
}

export default Featuredcourses