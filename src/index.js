import React from "react";
import ReactDom from 'react-dom/client';
import App from './App';
import './index.css';
import "antd/dist/antd.css";

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);