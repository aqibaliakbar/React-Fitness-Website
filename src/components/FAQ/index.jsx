import { useState } from "react";
import { HiMiniPlusCircle } from "react-icons/hi2";
import { HiMiniMinusCircle } from "react-icons/hi2";

const FAQ = ({ question, answer }) => {
	const [isAnswerShowing, setIsAnswerShowing] = useState(false);
  return (
    <article className="faq" onClick={()=> setIsAnswerShowing(prev => !prev)}>
      <div>
        <h4>{question}</h4>
        <button className="faq__icon">
          {isAnswerShowing ? <HiMiniMinusCircle /> : <HiMiniPlusCircle />}
        </button>
      </div>
      {isAnswerShowing && <p>{answer}</p>}
    </article>
  );
};
export default FAQ;
