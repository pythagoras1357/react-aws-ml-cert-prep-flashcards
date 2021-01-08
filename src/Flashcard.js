import React, { useState, useEffect, useRef } from 'react'

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false)
  const [height, setHeight] = useState('initial')

  const frontEl = useRef()
  const backEl = useRef()

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height
    const backHeight = backEl.current.getBoundingClientRect().height
    //console.log("setMaxHeight" + frontHeight + " : " + backHeight)
    setHeight(Math.max(frontHeight, backHeight))
  }

  function checkAnswer(a) {
    //console.log("your answer: " , a.option)
    //console.log("correct answer: " + flashcard.answer)
   /* if(flashcard.answer === a.option){
      addCorrectAnswer(correctAnswers.push(a))
    }
    else{
      alert("nope, that's incorrect")
    }*/
    //onCorrectAnswer(a)
    flashcard.answer === a.option ? alert("yep, that's correct") : alert("nope, that's incorrect")
  }
  useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options])
  // this is messing things up! commenting
  /*useEffect(() => {
    window.addEventListener('resize', setMaxHeight)
    return () => window.removeEventListener('resize', setMaxHeight)
  }, [])*/
/* funkiness on the height of these, hence the + 6 ? */
  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      style={{ height: height }}
    >   
      <div className="front" style={{ height: height + 6}} ref={frontEl}>
        {flashcard.question}
        <div className="flashcard-options">
          {flashcard.options.map(option => {
            return <div className="flashcard-option" key={option}>
            <button className="btn option-btn" onClick={() => checkAnswer({option})}>{option}</button>
            </div>
          })}
        </div>
        <button className={`btn view-btn ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)} >see answer</button>
      </div>
      <div className="back" onClick={() => setFlip(!flip)} style={{ height: height + 6 }} ref={backEl}>{flashcard.answer}</div>
    </div>
  )
}
