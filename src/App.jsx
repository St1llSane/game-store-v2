import { Route, Routes } from 'react-router-dom'
import './app.scss'
import Header from './components/Header'
import Home from './pages/Home'

function App() {
  return (
    <main className="app">
      <div className="app__wrapper">
        <Header />
        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}
      </div>
    </main>
  )
}

export default App
