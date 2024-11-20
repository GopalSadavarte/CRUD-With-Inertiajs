import { Link, usePage } from '@inertiajs/react'
import { useContext } from 'react'
import { Context } from '../Components/Context'
export default function Sidebar () {
    const page = usePage()
    function isActive (name) {
        return page.url === name
    }

    const theme = useContext(Context)
    return (
        <aside
            className={`min-h-screen w-52 ${
                theme[0] === 'light' ? 'bg-gray-300' : 'bg-gray-500'
            } rounded-sm`}
        >
            <hr className='border border-gray-400' />
            <div className='nav-links px-8 py-3 '>
                <ul>
                    <li className='p-3'>
                        <Link
                            preserveScroll
                            href='/'
                            as='button'
                            className={
                                isActive('/')
                                    ? 'text-xl text-blue-900 hover:opacity-10 hover:transition-opacity hover:delay-200 '
                                    : 'text-xl text-white hover:opacity-10 hover:transition-opacity hover:delay-200 '
                            }
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li className='p-3'>
                        <Link
                            preserveScroll
                            href='/user/create/new'
                            as='button'
                            className={
                                isActive('/user/create/new')
                                    ? 'text-xl text-blue-900 hover:opacity-10 hover:transition-opacity hover:delay-200 '
                                    : 'text-xl text-white hover:opacity-10 hover:transition-opacity hover:delay-200 '
                            }
                        >
                            New Record
                        </Link>
                    </li>
                    <li className='p-3'>
                        <Link
                            preserveScroll
                            href='#'
                            as='button'
                            className={
                                isActive('/service')
                                    ? 'text-xl text-blue-900 hover:opacity-10 hover:transition-opacity hover:delay-200 '
                                    : 'text-xl text-white hover:opacity-10 hover:transition-opacity hover:delay-200 '
                            }
                        >
                            Services
                        </Link>
                    </li>
                    <li className='p-3'>
                        <Link
                            preserveScroll
                            href='#'
                            as='button'
                            className={
                                isActive('/contact')
                                    ? 'text-xl text-blue-900 hover:opacity-10 hover:transition-opacity hover:delay-200 '
                                    : 'text-xl text-white hover:opacity-10 hover:transition-opacity hover:delay-200 '
                            }
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}
