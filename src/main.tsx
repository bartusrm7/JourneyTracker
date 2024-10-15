import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/_global.scss";
import "./sass/home.scss";
import "./sass/features-styles/welcome.scss";
import "./sass/features-styles/create-journey.scss";
import "./sass/features-styles/destination-container.scss";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
