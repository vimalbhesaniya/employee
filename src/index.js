import React, { createContext, useState } from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import App from './App';
import Spinner from './Spinner';
import reportWebVitals from './reportWebVitals';
import "./index.css"
import firebase from "firebase/compat/app"
const firebaseConfig  = {
  storageBucket : process.env.REACT_APP_STORAGE_BUCKET
};
firebase.initializeApp(firebaseConfig)
const EnableSpinner = createContext();

const Root = () => {
  const [spinner, setSpinnerState] = useState(false);

  return (
    <React.StrictMode>
      <EnableSpinner.Provider value={[setSpinnerState , spinner]}>
      <div className='spinner'>
        {spinner&&<Spinner />}
         <App />
      </div>  
      </EnableSpinner.Provider>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<Root />);

reportWebVitals();
export { EnableSpinner };
