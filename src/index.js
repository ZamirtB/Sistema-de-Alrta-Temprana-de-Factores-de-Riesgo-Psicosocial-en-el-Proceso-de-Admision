import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Ficha } from "./Componentes/Ficha";
import { Login} from "./Componentes/Login";


ReactDOM.render(
  <React.StrictMode>
    
   
    <Login />

    <Ficha />
  </React.StrictMode>,
  document.getElementById('root')
);

