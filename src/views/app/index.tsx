import { Config, Form, Header, List } from './components'
import { Routes, Route, Navigate} from 'react-router-dom'
function App() {
  return (
    <div>
      <Header />
      
      <Routes>
        <Route path='/' element={<Navigate to={"/list"}/>}></Route>
        <Route path='/form' element={<Form />}></Route>
        <Route path='/list' element={<List />}></Route>
        <Route path='/config' element={<Config />}></Route>
      </Routes>

    </div>
  )
}
export default App