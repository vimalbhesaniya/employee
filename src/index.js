import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
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
