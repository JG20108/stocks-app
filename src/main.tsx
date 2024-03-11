import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    // This callback will be called when a new service worker is waiting to be activated.
    // You can prompt the user to refresh the page to use the new version.
    if (confirm("A new version of the app is available. Do you want to refresh?")) {
      updateSW(); // This will skip waiting and activate the new service worker.
    }
  },
  onOfflineReady() {
    // This callback will be called when the app is ready to work offline.
    console.log("The app is now ready to work offline!");
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
