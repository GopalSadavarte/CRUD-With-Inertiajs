import Layout from './Layout/Layout'
import { Link } from '@inertiajs/react'
export default function Home ({ users }) {
    let number = 1
    let border = 'border-2 border-solid border-gray-200'
    let thTdStyle =
        'p-3 px-4 text-gray-700 border-2 border-solid border-gray-200'
    return (
        <Layout>
            <div className='content mx-3'>
                <div className='info p-3'>
                    <h2 className='heading text-purple-700 text-3xl font-extralight'>
                        Dashboard
                    </h2>
                </div>
                <div className='users-data'>
                    <table className='table-auto table w-9/12 text-xl strip-sm  border-2 p-4 mx-10'>
                        <thead className='p-3 border-2 '>
                            <tr className={`p-3 bg-gray-300  ${border}`}>
                                <th className={thTdStyle}>Sr.No.</th>
                                <th className={thTdStyle}>Name</th>
                                <th className={thTdStyle}>Age</th>
                                <th className={thTdStyle}>Phone</th>
                                <th className={thTdStyle}>Email</th>
                                <th className={thTdStyle}>Address</th>
                                <th className={thTdStyle} colSpan='2'>
                                    Operations
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(element => {
                                return (
                                    <tr className='hover:bg-gray-300 even:bg-gray-100 hover:cursor-pointer border-collapse'>
                                        <td className={thTdStyle}>
                                            {number++}
                                        </td>
                                        <td className={thTdStyle}>
                                            {element.name}
                                        </td>
                                        <td className={thTdStyle}>
                                            {element.age}
                                        </td>
                                        <td className={thTdStyle}>
                                            {element.phone}
                                        </td>
                                        <td className={thTdStyle}>
                                            {element.email}
                                        </td>
                                        <td className={thTdStyle}>
                                            {element.address}
                                        </td>
                                        <td className={thTdStyle}>
                                            <Link
                                                href={`/user/edit/${element.id}`}
                                                as='button'
                                                className='p-2 bg-blue-600 rounded-lg text-white text-center hover:bg-blue-300 hover:text-blue-800 transition-all delay-100 text-sm'
                                            >
                                                Edit
                                            </Link>
                                        </td>
                                        <td className={thTdStyle}>
                                            <Link
                                                href={`/user/delete/${element.id}`}
                                                as='button'
                                                className='p-2 bg-red-600 text-white rounded-lg text-center hover:bg-red-300 hover:text-gray-500 transition-all delay-100 text-sm'
                                            >
                                                Delete
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}
