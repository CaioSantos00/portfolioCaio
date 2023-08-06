import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react"; 

export default function OutletReact() {
  const [sectionVisible, setSectionVisible] = useState(false)

  const rastrearUrl = useLocation();

  useEffect(() => {
    setSectionVisible(true);
    const timer = setTimeout(() => {
      setSectionVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [rastrearUrl]);

  return (
    <>
      <Header />
      <section>
        <div id="section" className={sectionVisible ? "slide-in" : ""}>
          <Outlet />
        </div>
      </section>
    </>
  );
}
