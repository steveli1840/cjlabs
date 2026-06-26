import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/home/Hero";
import { LatestPosts } from "@/components/home/LatestPosts";
import { ValueProps } from "@/components/home/ValueProps";

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <ValueProps />
      <LatestPosts />
    </SiteShell>
  );
}
