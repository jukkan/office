
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Clear any cached data and force a fresh render
console.log('Office App Launcher - React version loading...');

createRoot(document.getElementById("root")!).render(<App />);
