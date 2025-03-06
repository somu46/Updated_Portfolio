import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Loading from './Components/Loader/loading';


const waitPromise = (time) => new Promise((resolve) => setTimeout(resolve, time));

const App = lazy(() => waitPromise(2500).then(() => import("./App.js")));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
    <App />
    </Suspense>
  </React.StrictMode>
);


