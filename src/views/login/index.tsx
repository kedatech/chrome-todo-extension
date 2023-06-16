import css from './login.module.scss'

function Login() {
  return (
    <div className={css.saludo}>
      <p>Hola! Soy Julio la capibara</p>
      <img src="/icons/logo128.png" alt="" />
      <input type="text" placeholder="Dime tu nombre" />
      <button className={css.btn}>Listo!</button>
    </div>
  )
}
export default Login