import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import { AppInit } from './app/init/AppInit'
import { router } from './app/router/router'
import { store } from './app/store/store'
import './index.css'

import './i18n/i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppInit />
    <Suspense fallback={<div>Завантаження...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </Provider>
)
