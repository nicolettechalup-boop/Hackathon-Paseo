import "./Hero.css";
import HeroParticles from "./HeroParticles";
import HeroContent from "./HeroContent";
import heroVideo from "../../../assets/videos/hero.mp4";

function Hero() {
  return (
    <section className="hero">
      {/* Video de fondo */}
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Partículas */}
      <HeroParticles />

      {/* Overlay oscuro */}
      <div className="hero__overlay"></div>

      {/* Contenido */}
      <HeroContent />
    </section>
  );
}

export default Hero;