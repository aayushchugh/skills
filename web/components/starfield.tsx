import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export function Starfield() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background"
      aria-hidden="true"
    >
      <StarsBackground starDensity={0.00015} />
      <ShootingStars
        className="motion-reduce:hidden"
        starColor="#ffffff"
        trailColor="#a3a3a3"
        minDelay={2600}
        maxDelay={7000}
      />
    </div>
  );
}
