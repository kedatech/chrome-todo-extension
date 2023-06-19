import { useEffect } from 'react'
import { Config, Form, Header, List } from './components'
import { Routes, Route, useNavigate} from 'react-router-dom'
function App() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate("/list")
  }, [])
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/form' element={<Form />}></Route>
        <Route path='/list' element={<List />}></Route>
        <Route path='/config' element={<Config />}></Route>
      </Routes>
    
    </div>
  )
}
export default App