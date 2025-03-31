import Featuredcourses from "@/components/Featuredcourses";
import Herosection from "@/components/Herosection";
import Instructer from "@/components/Instructer";
import Movingcards from "@/components/Movingcards";
import Upcommingwebinars from "@/components/Upcommingwebinars";
import Whychooseus from "@/components/Whychooseus";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Herosection/>
      <Featuredcourses/>
      <Whychooseus/>
      <Movingcards/>
      <Upcommingwebinars/>
      <Instructer/>
    </main>
    
  );
}
