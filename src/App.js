import { useEffect, useLayoutEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import Airplane from "./scenes/Airplane";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.scrollY);
      // console.log("get");
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    const el = document.getElementById(window.location.hash.slice(1));
    if (el) {
      window.scroll(0, el.offsetTop);
    }
  }, [window.location.hash]);

  return (
    <div className="app bg-deep-blue relative">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="bg-pattern-landing">
        <div className="w-5/6 mx-auto md:min-h-full">
          {isAboveMediumScreens && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}
          <Landing setSelectedPage={setSelectedPage} />
        </div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:min-h-full">
        <MySkills setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="bg-pattern-projects">
        <div className="w-5/6 mx-auto">
          <Projects setSelectedPage={setSelectedPage} />
        </div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Contact setSelectedPage={setSelectedPage} />
      </div>

      <Airplane height={"140px"} />
      <Footer className="z-10" />
    </div>
  );
}

export default App;