import { Link } from '@inertiajs/react'
export default function Navbar () {
    return (
        <header>
            <nav className='flex gap-56 p-2 shadow-md bg-gray-600'>
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
                <div className='profile'>
                    <select className='outline-slate-400 border-2 border-gray-400 rounded-xl p-2 px-6 w-40 cursor-pointer'>
                        <option value=''>
                            <Link
                                href='/profile'
                                as='button'
                                className='cursor-pointer'
                            >
                                Profile
                            </Link>
                        </option>
                        <option value=''>
                            <Link href='/logout' as='button'>
                                Logout
                            </Link>
                        </option>
                    </select>
                </div>
            </nav>
        </header>
    )
}
