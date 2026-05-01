<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Cyberpunk Portfolio</title>
  <link rel="stylesheet" href="style.css"/>
</head>

<body>

  <div class="glow-bg"></div>

  <!-- NAV -->
  <header>
    <h1 class="logo">J.R.V</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <!-- HERO -->
  <section class="hero">
    <h2 class="glitch" data-text="CYBER DEV MODE">CYBER DEV MODE</h2>
    <p>Student • Gamer • Aspiring Web Developer</p>
    <button onclick="scrollToSection('about')">ENTER PROFILE</button>
  </section>

  <!-- ABOUT -->
  <section id="about" class="section">
    <h2>About Me</h2>
    <p>
      Hi! I'm John Raymiel Velasco, a student from the Philippines.
      I enjoy building modern web interfaces, solving problems, and learning new technologies.
      My goal is to become a full-stack developer.
    </p>
  </section>

  <!-- PROJECTS -->
  <section id="projects" class="section">
    <h2>Projects</h2>

    <div class="card-container">
      <div class="card">⚡ Cyber Portfolio UI</div>
      <div class="card">🧠 CRUD System (PHP/MySQL)</div>
      <div class="card">🎮 Game Stats Dashboard</div>
    </div>
  </section>

  <!-- SKILLS -->
  <section id="skills" class="section">
    <h2>Core IT Skills</h2>

    <div class="skill">

      <div class="skill-box">
        <p>Web Development <span>90%</span></p>
        <div class="bar"><div class="fill web"></div></div>
      </div>

      <div class="skill-box">
        <p>Backend (PHP) <span>50%</span></p>
        <div class="bar"><div class="fill php"></div></div>
      </div>

      <div class="skill-box">
        <p>MySQL Database <span>80%</span></p>
        <div class="bar"><div class="fill sql"></div></div>
      </div>

      <div class="skill-box">
        <p>Problem Solving <span>70%</span></p>
        <div class="bar"><div class="fill logic"></div></div>
      </div>

      <div class="skill-box">
        <p>Git & GitHub <span>50%</span></p>
        <div class="bar"><div class="fill git"></div></div>
      </div>

      <div class="skill-box">
        <p>Computer Basics <span>75%</span></p>
        <div class="bar"><div class="fill comp"></div></div>
      </div>

    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact" class="section">
    <h2>Contact</h2>
    <p>Email: johnraymiel@gmail.com</p>
  </section>

  <footer>
    <p>© 2026 Cyberpunk Portfolio</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
