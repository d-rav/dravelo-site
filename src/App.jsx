import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StarBackground from "./components/StarBackground";

function App() {
  return (
    <>
      <StarBackground />
      <div className="fixed inset-0 -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_5%,rgba(0,0,0,0.7)_60%,rgba(6,182,212,0.5)_100%)]" />
      <main className="relative z-0 flex flex-col items-center px-4 md:px-8 lg:px-16">
        <NavBar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
