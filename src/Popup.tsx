import { useEffect } from 'react';
import { userStore } from './shared/utils/userStore'
import Login from './views/login';
import App from './views/app';

function Popup() {
  const { userName, setUserName} = userStore()
  console.log(userName)
  useEffect(() => {
    const queryUser : string | null = localStorage.getItem("user-julio-todo");
    if (queryUser !== null) {
      setUserName(queryUser);
    }
  }, [setUserName]);

  return (
    <>
      {
        userName === null
        ?<Login />
        : <App />
      }
    </>
  );
}

export default Popup;
