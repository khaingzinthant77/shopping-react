import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/Routers";

const root = document.getElementById("root");
createRoot(root).render(<RouterProvider router={routers} />);
