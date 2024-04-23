import React, { useState } from "react";
import "./Accordion.css";

const questionsAndAnswers = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    question: "What is an accordion?",
    answer: "An accordion is a UI component that allows sections to expand or collapse when clicked.",
  },
  {
    id: 3,
    question: "What is plain CSS?",
    answer: "Plain CSS is a stylesheet language used to describe the presentation of a document written in HTML or XML.",
  },
];

const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{item.question}</h2>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div className="accordion-body">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="accordion">
      {questionsAndAnswers.map((item) => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Accordion;