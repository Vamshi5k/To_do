import React from 'react'
import Todo from './components/Todo'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div className='bg-red-600 grid py-4 min-h-screen'>
      <div><Toaster position='top-right' reverseOrder={false}/></div>
      <Todo />
    </div>
  )
}

export default App
