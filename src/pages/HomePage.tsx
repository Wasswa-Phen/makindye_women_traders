import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { Collaborators } from "@/components/sections/Collaborators";
import { FlagshipInitiative } from "@/components/sections/FlagshipInitiative";
import { Founder } from "@/components/sections/Founder";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { Hero } from "@/components/sections/Hero";
import { Impact } from "@/components/sections/Impact";
import { LatestNews } from "@/components/sections/LatestNews";
import { Partnership } from "@/components/sections/Partnership";
import { Programmes } from "@/components/sections/Programmes";

interface HomePageProps {
  onOpenDashboard: () => void;
}

export function HomePage({ onOpenDashboard }: HomePageProps) {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutPreview />
        <FlagshipInitiative />
        <Programmes />
        <Impact />
        <GalleryPreview />
        <Founder />
        <LatestNews />
        <Collaborators />
        <Partnership />
      </main>
      <Footer onDashboard={onOpenDashboard} />
    </>
  );
}
