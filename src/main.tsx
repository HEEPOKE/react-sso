import ReactDOM from "react-dom/client";
import AppRouter from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/home.scss"
import "./styles/index.scss"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppRouter />
);
