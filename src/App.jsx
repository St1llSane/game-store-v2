import { Route, Routes } from 'react-router-dom'
import './styles/reset.scss'
import './app.scss'
import Header from './components/Header'
import Home from './pages/Home'

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
