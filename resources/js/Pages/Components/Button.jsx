import { AiFillPlusCircle, AiFillDelete } from 'react-icons/ai'
export default function Button ({ type = 'submit', func }) {
    return type === 'submit' ? (
        <button
            type='submit'
            className='py-2 flex px-3 hover:bg-blue-200 transition-all delay-200 rounded hover:text-gray-600 bg-blue-500 text-white'
        >
            Save
            <AiFillPlusCircle className='mt-1 ml-2' />
        </button>
    ) : (
        <button
            onClick={func}
            className='mx-32 flex py-2 px-3 bg-red-500 rounded hover:bg-red-200 text-white hover:text-red-600 transition-all delay-200'
        >
            Cancel
            <AiFillDelete className='mt-1 ml-2' />
        </button>
    )
}
