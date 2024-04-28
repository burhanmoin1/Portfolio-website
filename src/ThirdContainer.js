import React from "react";
import './SecondContainer.css';
import './ThirdContainer.css';
import {motion,useScroll,useTransform,useMotionValueEvent} from "framer-motion";
import reactimg from './Logos/FrontendStack/react-L.png';
import htmlimg from './Logos/FrontendStack/html-L.png';
import cssimg from './Logos/FrontendStack/css-L.png';
import jsgif from './Logos/FrontendStack/javascript-logo.png';
import djangogif from './Logos/BackendStack/django-logo.png';
import pythonlogo from './Logos/BackendStack/python-logo.png';
import nodejlogo from './Logos/BackendStack/nodejs-logo.png';
import cpplogo from './Logos/BackendStack/c++-logo.png';
import mongodblogo from './Logos/DatabaseStack/mongodb-logo.png';
import mysqllogo from './Logos/DatabaseStack/mysql-logo.png';
import postgreslogo from './Logos/DatabaseStack/postgres-logo.png';
import githublogo from './Logos/DevOpsStack/github-logo.png';
import awslogo from './Logos/DevOpsStack/aws-logo.png';
import firebaselogo from './Logos/DevOpsStack/firebase-logo.png';

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
                <div className="frontend-image-container">
                <a href={'https://react.dev/'} target="_blank" rel="noopener noreferrer">
                  <motion.img whileHover={{scale:1.2, transition: {delay: 0.1}}} className="react-img" src={reactimg} alt="react-logo" /></a>
                  <a href={'https://html.com/'} target="_blank" rel="noopener noreferrer">
                  <motion.img whileHover={{scale:1.2, transition: {delay: 0.1}}} className="react-img" src={htmlimg} alt="html-logo" /></a>
                  <a href={'https://www.w3.org/Style/CSS/Overview.en.html'} target="_blank" rel="noopener noreferrer">
                  <motion.img whileHover={{scale:1.2, transition: {delay: 0.1}}} className="react-img" src={cssimg} alt="css-logo" /></a>
                  <a href={'https://www.javascript.com/'} target="_blank" rel="noopener noreferrer">
                  <motion.img whileHover={{scale:1.2, transition: {delay: 0.1}}} className="react-img" src={jsgif} alt="javascript-logo"/></a>
                </div>
              </div>
              <div className="stack"> <h2 className="backend">Back-End</h2>
              <div className="backend-image-container">
                  <a href={'https://www.djangoproject.com/'} target="_blank" rel="noopener noreferrer">
                  <motion.img whileHover={{scale:1.2, transition: {delay: 0.1}}} className="react-img" src={djangogif} alt="django-logo" /></a>
                  <a href={'https://nodejs.org/en'} target="_blank" rel="noopener noreferrer">
                  <motion.img whileHover={{scale:1.2, transition: {delay: 0.1}}} className="react-img" src={nodejlogo} alt="nodejs-logo" /></a>
                  <a href={'https://cplusplus.com/'} target="_blank" rel="noopener noreferrer">
                  <motion.img whileHover={{scale:1.2, transition: {delay: 0.1}}} className="react-img" src={cpplogo} alt="cpp-logo" /></a>
                  <a href={'https://python.org/'} target="_blank" rel="noopener noreferrer">
                  <motion.img whileHover={{scale:1.2, transition: {delay: 0.1}}} className="react-img" src={pythonlogo} alt="python-logo" /></a>
                </div>
              </div>
              <div className="stack"> <h2 className="database">Database</h2>
              <div className="backend-image-container">
              <a href={'https://www.postgresql.org/'} target="_blank" rel="noopener noreferrer">
                  <motion.img whileHover={{scale:1.2, transition: {delay: 0.1}}} className="react-img" src={postgreslogo} alt="mysql-logo" /></a>
                  <a href={'https://www.mongodb.com/'} target="_blank" rel="noopener noreferrer">
                  <motion.img whileHover={{scale:1.2, transition: {delay: 0.1}}} className="react-img" src={mongodblogo} alt="mongodb-logo" /></a>
                  <a href={'https://www.mysql.com/'} target="_blank" rel="noopener noreferrer">
                  <motion.img whileHover={{scale:1.2, transition: {delay: 0.1}}} className="react-img" src={mysqllogo} alt="mysql-logo" /></a>
                </div>
              </div>
              <div className="stack"> <h2 className="database">DevOps</h2>
              <div className="backend-image-container">
              <a href={'https://www.github.com'} target="_blank" rel="noopener noreferrer">
                  <motion.img whileHover={{scale:1.2, transition: {delay: 0.1}}} className="react-img" src={githublogo} alt="github-logo" /></a>
                  <a href={'https://aws.amazon.com/'} target="_blank" rel="noopener noreferrer">
                  <motion.img whileHover={{scale:1.2, transition: {delay: 0.1}}} className="react-img" src={awslogo} alt="aws-logo" /></a>
                  <a href={'https://firebase.google.com/'} target="_blank" rel="noopener noreferrer">
                  <motion.img whileHover={{scale:1.2, transition: {delay: 0.1}}} className="react-img" src={firebaselogo} alt="aws-logo" /></a>
                </div>
              </div>
            </div>
  </motion.div>
  );
}

export default ThirdContainer;