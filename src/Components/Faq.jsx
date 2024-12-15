import React from "react";
import { questions } from "../utils/faq";
import './faq.css';

const Faq = () => {
  return (
    <div className="max-w-2xl mx-auto p-5 font-sans-serif text-white">
      <h1 className="text-4xl font-bold mb-6 text-center font-otherfont text-white" style={{ textShadow: '0 0 20px #d303fc' }}>
        FAQs
      </h1>

      {questions.map((question) => (
        <div key={question.id}>
          <details className="glassmorphic-container bg-transparent rounded p-4 mb-4 font-sans border border-darkgrey transition duration-300 ease-in-out">
            <summary className="cursor-pointer font-bold text-lg text-white flex items-center justify-between hover:bg-gradient-to-br hover:from-[#fc03e3] hover:to-[#a6033c] hover:bg-clip-text hover:text-transparent focus:bg-gradient-to-br focus:from-[#fc03e3] focus:to-[#a6033c] focus:bg-clip-text focus:text-transparent transition-all duration-200">
            <span>{question.question}</span>
              <span className="text-xl text-white">&#x2699;</span>
            </summary>
            <p className="p-2 text-lg text-gray-300 transition-all duration-300 ease-in-out">
              {question.answer}
            </p>  
          </details>
        </div>
      ))}
    </div>
  );
};

export default Faq;
