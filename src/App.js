import React, { useState, useEffect, useRef } from 'react';
import FlashcardList from './FlashcardList';
import './App.css'
import { triviaCategories } from "./categoryData";
import { questions,createQuestions } from "./questionsData";

function App() {
  const [flashcards, setFlashcards] = useState([])
  const [categories, setCategories] = useState([])
  const [attemptCount, setAttemptCount] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const categoryEl = useRef()

  useEffect(() => {
        setCategories(triviaCategories)
  }, [])

  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML= str
    return textArea.value
  }

  function handleSubmit(e) {
    e.preventDefault()
    createQuestions()
    // get all questions that have this category ID
    let qs = questions.filter((q)=>{return q.categoryId === parseInt(categoryEl.current.value)})
    //console.log(qs)

    setFlashcards(qs.map((questionItem, index) => {
      const answer = decodeString(questionItem.correct_answer)
      const options = [
        ...questionItem.incorrect_answers.map(a => decodeString(a)),
        answer
      ]
      return {
        id: `${index}-${Date.now()}`,
        question: decodeString(questionItem.question),
        answer: answer,
        options: options.sort(() => Math.random() - .5)
      }
    }))
  }
/**         <div className="score" id="score-container"><div id="score-title">Score:</div><div id="score-correct">2</div>/<div id="score-total">{attemptCount}</div></div> */

  return (
    <>
      <div id="header">
        <h2>AWS ML Cert Exam Prep</h2>

      </div>
      <form className="form-header" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryEl}>
            {categories.map(category => {
              return <option value={category.id} key={category.id}>{category.name}</option>
            })}
          </select>
        </div>
        <div className="form-group">
          <button className="btn">Generate</button>
        </div>
      </form>
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
    </>
  );
}

export default App;
