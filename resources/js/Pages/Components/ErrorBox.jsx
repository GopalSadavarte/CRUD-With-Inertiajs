export default function ErrorBox ({ errorKey }) {
    return (
        <small className='text-red-700'>
            {errorKey && <span>{errorKey}</span>}
        </small>
    )
}
