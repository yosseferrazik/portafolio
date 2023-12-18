import { createRoot } from "react-dom/client";

import App from "./App";

import "./Index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
