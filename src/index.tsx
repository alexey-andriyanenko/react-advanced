import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";


import {App} from "./app";
import { Providers } from "./providers";


const rootElement = document.getElementById("root") || document.body;
const root = ReactDOM.createRoot(rootElement);

root.render(<BrowserRouter> <Providers> <App /> </Providers> </BrowserRouter>);
