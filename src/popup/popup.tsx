import React from 'react'
import ReactDOM from 'react-dom'
import './popup.css'
import * as ReactDOMClient from 'react-dom/client';

const test = <img src="icon.png" /> 

const root = document.createElement('div');
document.body.appendChild(root)
ReactDOMClient.createRoot(root).render(test)