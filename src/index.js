import React, { createContext, useState } from 'react';
<<<<<<< HEAD
=======
// import ReactDOM from 'react-dom';
>>>>>>> ecd12fee99ade558821884b9c650c3afab8d4306
import ReactDOM from 'react-dom/client';
import App from './App';
import Spinner from './Spinner';
import reportWebVitals from './reportWebVitals';
import SearchSection from './componants/SearchSection';
import "./index.css"

const EnableSpinner = createContext();

const Root = () => {
  const [spinner, setSpinnerState] = useState(false);

  return (
    <React.StrictMode>
      <EnableSpinner.Provider value={setSpinnerState}>
        
      <div className='spinner'>
        {spinner ? <Spinner /> : <App />}
      </div>  
      </EnableSpinner.Provider>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<Root />);

reportWebVitals();
export { EnableSpinner };
