import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/_global.scss";
import "./sass/home.scss";
import "./sass/features-styles/welcome.scss";
import "./sass/features-styles/create-journey.scss";
import "./sass/features-styles/destination-container.scss";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);
