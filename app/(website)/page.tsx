import HeroSection from "./_components/hero-section";
import { menudata } from "./_constants";

export default function Home() {
  return (
    <div>
      <HeroSection menudata={menudata} />
    </div>
  );
}
