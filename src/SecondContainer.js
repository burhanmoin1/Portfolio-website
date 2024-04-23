import React, {useRef} from "react";
import "./SecondContainer.css";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

function SecondContainer () {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })
  const opacity = useTransform(scrollY, [100,500], [0,1]);
  const scale = useTransform(scrollY, [100, 500], [0.8, 1]);

  return (
    <div  className="second-container">
        <motion.div ref={ref} style={{opacity, scale}} className="black-container-for-second">
            <p className='second-paragraph'>I specialize in creating eye-catching and captivating designs. Pairing them with robust and comprehensive backends, making sure that the websites are responsive, secure and meet the needs of my clients.</p>
        </motion.div>
    </div>
  );
}

export default SecondContainer;