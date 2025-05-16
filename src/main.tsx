import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Buffer } from 'buffer'

// Declare Buffer on window to fix TS error
declare global {
  interface Window {
    Buffer: typeof Buffer;
  }
}

window.Buffer = window.Buffer || Buffer;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)