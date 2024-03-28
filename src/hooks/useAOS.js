import React, {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css'

function useAOS() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
}

export default useAOS;