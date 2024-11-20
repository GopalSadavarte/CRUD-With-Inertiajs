import './bootstrap'
import '../css/app.css'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { StrictMode } from 'react'
import { ContextProvider } from './Pages/Components/Context'

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        return pages[`./Pages/${name}.jsx`]
    },
    setup ({ el, App, props }) {
        createRoot(el).render(
            <StrictMode>
                <ContextProvider>
                    <Toaster
                        position='top-center'
                        reverseOrder={false}
                        toastOptions={{
                            className: 'w-full text-xl text-blue-700'
                        }}
                    />
                    <App {...props} />
                </ContextProvider>
            </StrictMode>
        )
    }
})
