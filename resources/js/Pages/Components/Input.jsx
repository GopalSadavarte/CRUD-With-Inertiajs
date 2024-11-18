export default function Input ({
    type,
    id,
    value,
    placeholder,
    state,
    setState
}) {
    return (
        <input
            type={type}
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={e => {
                setState({ ...state, [id]: e.target.value })
            }}
            className='block p-3 w-full rounded outline-none border border-gray-400 focus:border-gray-500 focus:border-2'
        />
    )
}
