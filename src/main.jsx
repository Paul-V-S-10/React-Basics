import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './MainRouter.jsx';
import './global.css';
import { MyContext } from './Hooks/ContextManager.jsx';

const Main = () => {
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={{ count, setCount }}>
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
