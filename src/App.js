import React from 'react'
import Header from './component/pages/Header'
import Content from './component/Content'
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector } from "react-redux"


const App = () => {

  const { color } = useSelector(state => state.site)

  return (
    <Router>
      <Header />
      <div className={color ? "color-mode" : ""}>
        <Content />
      </div>
    </Router>
  )
}

export default App