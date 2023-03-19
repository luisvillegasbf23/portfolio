import { useState } from "react";
import { GeneralSection } from "./components/about-me/GeneralSection";
import { Contact } from "./components/contact/Contact";
import { Hero } from "./components/hero/Hero";
import { Loader } from "./components/loader/Loader";
import sections from "./sections.json";

function App() {
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, 3000);

  return (
    <div className="App">
      {loader && <Loader />}
      {!loader && <Hero />}
      {/* about me */}
      {!loader && (
        <GeneralSection
          section={sections["about-me"]}
          link={"#skills"}
          id={"about-me"}
        />
      )}
      {/* skills */}
      {!loader && (
        <GeneralSection
          section={sections["skills"]}
          link={"#contact"}
          id={"skills"}
        />
      )}
      {/* contact */}
      {!loader && (
        <Contact
          section={sections["contact"]}
          link={"#skills"}
          id={"contact"}
        />
      )}
    </div>
  );
}

export default App;
