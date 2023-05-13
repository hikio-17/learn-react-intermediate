import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddNote from './pages/AddNote'
import DetailNote from './pages/DetailNote'

function App () {
  return (
    <>
      <header>
        <h3>MyNotes</h3>
        <div>
          <input type='text' placeholder='Search by title ...'/>
          <Navbar />
        </div>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/notes/new' element={<AddNote />} />
          <Route path='/notes/:id' element={<DetailNote />} />
        </Routes>
      </main>
    </>
  )
}

export default App
