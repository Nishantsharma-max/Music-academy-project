import Featuredcourses from "@/components/Featuredcourses";
import Herosection from "@/components/Herosection";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Herosection/>
      <Featuredcourses/>
    </main>
    
  );
}
