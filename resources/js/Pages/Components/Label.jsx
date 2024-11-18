export default function Label ({ forLabel, children }) {
    return (
        <label
            htmlFor={forLabel}
            className='block text-xl mb-2 font-extralight text-gray-700'
        >
            {children}
        </label>
    )
}
