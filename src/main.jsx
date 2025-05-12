import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './main.css'
import { BrowserRouter } from "react-router-dom";
import ContextProvider  from "./config/AccountContext";

createRoot(document.getElementById('root')).render(
<ContextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</ContextProvider>
)