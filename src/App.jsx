import { useState } from 'react'
import List from './components/List'
import ManageTask from './components/ManageTask'
// import './App.css'
import { Navbar } from './components/Navbar'
import TaskHeader from './components/taskHeader'

function App() {
  return (
    <div>
      <Navbar />
      <TaskHeader />
      <List />
      <ManageTask />
    </div>
  )
}

export default App
