import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));

// Wait for i18next initialization before rendering
i18n.on('initialized', () => {
  root.render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
});

// Initialize i18next
i18n.init();