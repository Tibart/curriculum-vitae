import React from 'react'
import ReactDOM from 'react-dom/client'
import 'virtual:uno.css'
import '@unocss/reset/sanitize/sanitize.css'
import '@unocss/reset/sanitize/assets.css'
import CV from './cv.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CV />
  </React.StrictMode>,
)
