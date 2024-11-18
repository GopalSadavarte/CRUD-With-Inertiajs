import { Link } from '@inertiajs/react'
export default function Sidebar () {
    function isActive (name) {
        return window.location.href.includes(name)
    }
    return (
        <aside className='min-h-screen w-52 bg-gray-500 rounded-sm'>
            <hr className='border border-gray-400' />
            <div className='nav-links px-8 py-3 '>
                <ul>
                    <li className='p-3'>
                        <Link
                            preserveScroll
                            href='/'
                            as='button'
                            className={
                                isActive('/home')
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
