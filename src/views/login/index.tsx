import { useState } from 'react'
import css from './login.module.scss'
import { userStore } from '../../shared/utils/userStore'

function Login() {
  const [write, setWrite] = useState("")
  const {setUserName} = userStore()
  const [error, setError] = useState(false)

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
    setWrite(e.target.value)
  }
  const handleClick = () =>{
    console.log(write)
    if(write === "") {
      setError(true)
      setTimeout(() => setError(false), 3000);
      return;
    }
    localStorage.setItem("user-julio-todo", write)
    setUserName(write)
  }
  return (
    <div className={css.saludo}>
      <p>Hola! Soy Julio la capibara</p>
      <img src="/icons/logo128.png" alt="" />
      <input className={error?"red":""} value={write} onChange={handleChange}  type="text" placeholder="Dime tu nombre" />
      <button onClick={handleClick} className={css.btn}>Listo!</button>
      {
        error && "Escribe tu nombre!!"
      }
    </div>
  )
}
export default Login