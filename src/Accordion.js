import React, { useState } from 'react';

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="accordion-item">
    <div
      onClick={onClick}
      className="accordion-question"
      style={{ cursor: 'pointer', padding: '10px' }}
    >
      {question}
    </div>
    {isOpen && (
      <div className="accordion-answer" style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
        {answer}
      </div>
    )}
  </div>
);

// Parent Accordion Component
const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    { question: 'What services do I offer?', answer: 'React is a JavaScript library for building UIs.' },
    { question: 'How long does a website take?', answer: 'A component is a reusable UI part.' },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
