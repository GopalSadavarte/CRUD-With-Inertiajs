import { useState } from 'react'
import Layout from './Layout/Layout'
import Label from './Components/Label'
import Input from './Components/Input'
import ErrorBox from './Components/ErrorBox'
import Button from './Components/Button'
import { router as Route } from '@inertiajs/react'
import toast, { CheckmarkIcon, ErrorIcon } from 'react-hot-toast'

export default function StoreUser () {
    const [state, setState] = useState({
        name: '',
        email: '',
        age: '',
        phone: '',
        address: ''
    })

    const [error, setError] = useState({})
    function handleSubmit (e) {
        e.preventDefault()
        Route.post('/user/store', state, {
            onError: errors => {
                console.log(errors)
                setError(errors)
                toast('Please! resolve the errors...', {
                    className: 'text-red-800 text-xl',
                    icon: <ErrorIcon />
                })
            },
            onSuccess: success => {
                setState({
                    name: '',
                    email: '',
                    age: '',
                    phone: '',
                    address: ''
                })
                toast('Data inserted successfully!', {
                    className: 'text-gray-700',
                    icon: <CheckmarkIcon />
                })
                setError({})
            },
            preserveScroll: true
        })
    }

    function handleCancel (e) {
        e.preventDefault()
        setState({
            name: '',
            email: '',
            age: '',
            phone: '',
            address: ''
        })
        setError({})
        toast('Form was reset!', {
            className: 'text-white bg-red-300',
            icon: <CheckmarkIcon className=' bg-red-600' />
        })
    }

    return (
        <Layout>
            <div className='container w-9/12 p-3'>
                <div className='form-heading'>
                    <h1 className='heading text-3xl text-gray-900 font-extralight ml-5 p-4'>
                        New User
                    </h1>
                </div>
                <div className='form-container m-3 shadow-md p-6'>
                    <form onSubmit={handleSubmit} autoComplete='off'>
                        <div className='block my-4'>
                            <Label forLabel='name'>Name</Label>
                            <Input
                                id='name'
                                value={state.name}
                                type='text'
                                placeholder='Enter your name'
                                state={state}
                                setState={setState}
                            />
                            <ErrorBox errorKey={error.name} />
                        </div>
                        <div className='block my-4'>
                            <Label forLabel='email'>Email</Label>
                            <Input
                                id='email'
                                value={state.email}
                                type='email'
                                placeholder='Enter your email'
                                state={state}
                                setState={setState}
                            />
                            <ErrorBox errorKey={error.email} />
                        </div>
                        <div className='block my-4'>
                            <Label forLabel='age'>Age</Label>
                            <Input
                                id='age'
                                value={state.age}
                                type='number'
                                placeholder='Enter your age'
                                state={state}
                                setState={setState}
                            />
                            <ErrorBox errorKey={error.age} />
                        </div>
                        <div className='block my-4'>
                            <Label forLabel='phone'>Phone No.</Label>
                            <Input
                                id='phone'
                                value={state.phone}
                                type='number'
                                placeholder='Enter your phone no.'
                                state={state}
                                setState={setState}
                            />
                            <ErrorBox errorKey={error.phone} />
                        </div>
                        <div className='block my-4'>
                            <Label forLabel='address'>Address</Label>
                            <Input
                                id='address'
                                value={state.address}
                                type='text'
                                placeholder='Enter your address'
                                state={state}
                                setState={setState}
                            />
                            <ErrorBox errorKey={error.address} />
                        </div>
                        <div className='form-element'>
                            <Button />
                            <Button type='reset' func={handleCancel} />
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
