import { AdSliderSection } from "@/components/custom/ad-slider-section/AdSliderSection";
import { CardMision } from "@/components/custom/card-mision/CardMision";
import { CourseLocationsSection } from "@/components/custom/course-locations-section/CourseLocationsSection";
import Sidebar from "@/components/custom/sidebar-mobile/SidebarMobile";
import VideoHero from "@/components/custom/video-hero/VideoHero";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center sm:items-start">
        <Sidebar />
        <VideoHero />
        <CardMision />
        <CourseLocationsSection />
        <AdSliderSection />
      </main>
    </div>
  );
}
