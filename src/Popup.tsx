import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './views/login';
import App from './views/app';

function Popup() {
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    const queryUser = localStorage.getItem("user-julio-todo");
    if (queryUser) {
      setUser(queryUser);
    }
  }, []);

  return (
    
      <Routes>
        <Route path="/" element={user ? <App /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    
  );
}

export default Popup;
