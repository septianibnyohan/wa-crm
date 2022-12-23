import React from 'react'
import ReactDOM from "react-dom/client";
//import ReactDOM from 'react-dom'
import './main.css'
import App from './App'
import ButtonToggle from './component/ButtonToggle'

// const App: React.FC<{}> = () => {
//   return (
//     <div>Hello World!</div>
//   )
// }

//const root = document.createElement('div')
//document.body.appendChild(root)
//ReactDOM.render(<App />, root)

const root = document.createElement("div");
root.id = "root";
root.classList.add("transform");
root.classList.add("ready");
document.body.appendChild(root)

// const root = document.createElement('div')
// document.body.appendChild(root)

const main = ReactDOM.createRoot(root);

main.render(
  <React.StrictMode>
    <div className=''>
      <ButtonToggle />
    </div>
    <App />
  </React.StrictMode>
)