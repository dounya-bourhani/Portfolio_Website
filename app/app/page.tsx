import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

// export const metadata = {
//   stylesheet: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
// }

export default function Home() {
  return (
    <main>
      <Navbar/>
      <AboutMe/>
      <Projects/>
      <Skills/>
    </main>  
  );
}
