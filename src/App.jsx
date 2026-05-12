import React from 'react'
import AnswerLayout from './components/FullContent'
import Home from './components/Home'
import ErrorPage from './components/404'
import { Routes, Route, Link } from 'react-router-dom'
import QuizPage from './components/FullContent'

const App = () => {
  return (
    <>
      <nav>
        <Link to="/" />
        <Link to="/quiz-page" />
        <Link to="*" />
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/quiz/:subject/:chapter"
          element={<QuizPage />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App