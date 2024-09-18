import { useState } from "react"
const Accordion = ({title, answer}) => {
    const[accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="yes">
        <button className="acc_btn" onClick={() => setAccordionOpen(!accordionOpen)}>
            <span>{title}</span>
            {accordionOpen ? <span className="plus_minus">-</span>: <span className="plus_minus">+</span>}
            
        </button>
        <div className={`answer_style ${
            accordionOpen ? `answer_style1` : `answer_style2`
            }`}>
            <div className="answer">{answer}</div>
        </div>
    </div>
  )
}

export default Accordion