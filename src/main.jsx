import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import ClientForm from './components/ClientForm';
import './styles/Form.css'; 
import Adici from './Adici';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<App />

<ClientForm />

  </React.StrictMode>
);
