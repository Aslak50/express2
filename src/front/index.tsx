import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './ui/App'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import 'normalize.css/normalize.css'

const container = document.getElementById('root')
if (container) {
  createRoot(container).render(<App />)
}
