// Entry point
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'; // Import your main stylesheet
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);