import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { FeaturevisorProvider } from "@featurevisor/react";
import { createInstance } from "@featurevisor/sdk";

const f = createInstance({
	datafileUrl: "http://localhost:8080/datafiles/staging/datafile-tag-all.json",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<FeaturevisorProvider instance={f}>
			<App />
		</FeaturevisorProvider>
	</React.StrictMode>
);
