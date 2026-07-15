import "./Hero.css";
import profileImage from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Oswald Toku</h1>

          <h2>Cybersecurity Analyst | AI Enthusiast | Engineer</h2>

          <p>
            I build secure, intelligent, and impactful digital solutions while
            helping organizations strengthen their cybersecurity posture.
            Explore my journey, projects, and passion for technology.
          </p>
        </div>

        <div className="hero-image">
          <div className="profile-card">
            <img
              src={profileImage} alt="Oswald Eyram Toku"
            />

            <h3>Oswald Eyram Toku</h3>

            <p>Cybersecurity • AI • Technology</p>

            <div className="fun-facts">
  <div className="fun-fact">
    <h4>♟️ Fun Fact 1</h4>
    <p>I enjoy playing chess and solving strategic problems.</p>
  </div>

  <div className="fun-fact">
    <h4>🔐 Fun Fact 2</h4>
    <p>I'm passionate about cybersecurity and digital resilience.</p>
  </div>

  <div className="fun-fact">
    <h4>🤖 Fun Fact 3</h4>
    <p>I enjoy building AI-powered applications and automation tools.</p>
  </div>

  <div className="fun-fact">
    <h4>📚 Fun Fact 4</h4>
    <p>I studied Philosophy and Psychology before transitioning into technology.</p>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;