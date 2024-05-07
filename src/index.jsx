import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-tailwind/react';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { HuntsProvider } from './Context/HuntsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <HuntsProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </HuntsProvider>
    </React.StrictMode>
);
