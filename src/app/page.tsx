import { Menu } from "@/components/custom/menu/menu";
import VideoHero from "@/components/custom/video-hero/VideoHero";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center gap-2 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-2  items-center sm:items-start">
        <Menu />
        <VideoHero/>
      </main>
    </div>
  );
}
