import React, {useRef} from "react";
import "./SecondContainer.css";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

function SecondContainer () {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start" , "end start"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })
  const opacity = useTransform(scrollY, [100,500], [0,1])
  const margin = useTransform(scrollY, [100,500], [100,0])
  return (
    <div  className="second-container">
        <motion.div ref={ref} style={{opacity, margin}} className="black-container-for-second">
            <p className='second-paragraph'>I specialize in creating eye-catching and captivating designs. Paired with robust and comprehensive backends, my solutions effectively handle all server-side operations, including data processing, authentication, and much more.</p>
        </motion.div>
    </div>
  );
}

export default SecondContainer;