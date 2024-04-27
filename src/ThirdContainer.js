import React from "react";
import './SecondContainer.css';
import './ThirdContainer.css';
import {motion,useScroll,useTransform,useMotionValueEvent} from "framer-motion";

function ThirdContainer () {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })
  const opacity = useTransform(scrollY, [869, 1400], [0,1]);
  const scale = useTransform(scrollY, [869, 1400], [0.8, 1]);

return (
  <motion.div style={{opacity}} className="white-container-for-second">
    <h2 className='third-paragraph'>My Tech Stack</h2>
    <div className="tech-stack">
              <div className="stack">
                <h2 className="frontend">Front-End</h2>
              </div>
              <div className="stack"> <h2 className="backend">Back-End</h2>
              </div>
              <div className="stack"> <h2 className="database">Database</h2>
              </div>
              <div className="stack"> <h2 className="database">DevOps</h2>
              </div>
            </div>
  </motion.div>
  );
}

export default ThirdContainer;