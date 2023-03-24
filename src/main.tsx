import ReactDOM from "react-dom/client";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faSquarePen,
  faTrashCan,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import AppRouter from "./routes";
import { AppContextProvider } from "./contexts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/home.scss";
import "./styles/index.scss";

library.add(fas, faSquarePen, faTrashCan, faUser, faRightFromBracket);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppContextProvider>
    <AppRouter />
  </AppContextProvider>
);
