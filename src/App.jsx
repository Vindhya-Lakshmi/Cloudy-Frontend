import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <>
      <div >
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
      <div className='App'>
        <img src="src/assets/images.jpg" alt="" />
        <button class="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
          Click Me
        </button>
      </div>
    </>
  )
}

export default App;
