import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
import Landing from './pages/Landing'
import Start from './pages/Start'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/create' element={<Home />}></Route>
        <Route path='/start' element={<Start />}></Route>
        <Route path='/quiz' element={<Quiz />}></Route>
        <Route path='/result' element={<Result />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
