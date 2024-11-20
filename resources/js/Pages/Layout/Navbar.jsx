import { Context } from '../Components/Context'
import { Switch } from '@mui/material'
import { useContext } from 'react'
export default function Navbar () {
    const theme = useContext(Context)
    function update (e) {
        e.preventDefault()
        if (theme[0] === 'light') {
            theme[3](true)
            theme[1]('dark')
        } else {
            theme[3](false)
            theme[1]('light')
        }
    }
    return (
        <header>
            <nav
                className={`flex gap-56 p-2 shadow-md ${
                    theme[0] === 'light' ? 'bg-gray-400' : 'bg-gray-600'
                }`}
            >
                <div className='nav-heading heading mx-20 px-30'>
                    <h2 className='heading text-white font-sans text-4xl'>
                        CRUD
                    </h2>
                </div>
                <div className='search-bar w-9/12'>
                    <input
                        type='search'
                        placeholder='search here..'
                        className='outline-slate-400 border-2 border-gray-300 rounded-xl p-2 w-full placeholder:px-3 '
                    />
                </div>
                <div className='profile flex'>
                    <button onClick={update}>
                        {theme[0] === 'light' ? 'Dark' : 'Light'}
                    </button>
                    <Switch onChange={update} checked={theme[2]} />
                </div>
            </nav>
        </header>
    )
}
