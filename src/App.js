import React from 'react'
import Header from './component/Header'
import Content from './component/Content'
import { BrowserRouter as Router } from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Content />
      </div>
    </Router>
  )
}

export default App