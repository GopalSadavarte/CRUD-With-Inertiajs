import { createContext, useState } from 'react'
const Context = createContext()
function ContextProvider ({ children }) {
    const [theme, setTheme] = useState('light')
    const [check, setChecked] = useState(false)

    return (
        <Context.Provider value={[theme, setTheme, check, setChecked]}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }
