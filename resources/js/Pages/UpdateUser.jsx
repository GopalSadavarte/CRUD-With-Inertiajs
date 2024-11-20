import Layout from './Layout/Layout'
import Input from './Components/Input'
import Label from './Components/Label'
import Button from './Components/Button'
import ErrorBox from './Components/ErrorBox'
import { useState } from 'react'
import { router } from '@inertiajs/react'
import { useContext } from 'react'
import { Context } from './Components/Context'

export default function UpdateUser ({ user }) {
    const [userState, setUserState] = useState({
        name: user.name,
        email: user.email,
        age: user.age,
        phone: user.phone,
        address: user.address
    })
    const [errors, setError] = useState({})
    const theme = useContext(Context)
    const handleSubmit = e => {
        e.preventDefault()
        router.put(`/users/update/${user.id}`, userState, {
            onSuccess: () => {
                router.visit('/')
            },
            onError: errors => {
                setError(errors)
            },
            preserveScroll: true
        })
    }
    return (
        <Layout>
            <div
                className={`container-fluid mx-8 my-5 w-9/12 ${
                    theme[0] === 'light' ? '' : 'bg-gray-300'
                }`}
            >
                <div className='heading mx-1'>
                    <h1 className='text-3xl uppercase p-4 text-gray-800 font-extralight'>
                        Update User
                    </h1>
                </div>
                <div className='form-container m-1 p-5 shadow-md w-full'>
                    <form onSubmit={handleSubmit} autoComplete='off'>
                        <div className='block my-2 w-full'>
                            <Label forLabel='name' children='Name' />
                            <Input
                                type='text'
                                id='name'
                                value={userState.name}
                                placeholder='Enter your name'
                                state={userState}
                                setState={setUserState}
                            />
                            <ErrorBox errorKey={errors.name} />
                        </div>
                        <div className='block my-2 w-full'>
                            <Label forLabel='email'>Email</Label>
                            <Input
                                type='email'
                                id='email'
                                value={userState.email}
                                placeholder='Enter your email'
                                state={userState}
                                setState={setUserState}
                            />
                            <ErrorBox errorKey={errors.email} />
                        </div>
                        <div className='block my-2 w-full'>
                            <Label forLabel='age'>Age</Label>
                            <Input
                                type='number'
                                id='age'
                                value={userState.age}
                                placeholder='Enter your age'
                                state={userState}
                                setState={setUserState}
                            />
                            <ErrorBox errorKey={errors.age} />
                        </div>
                        <div className='block my-2 w-full'>
                            <Label forLabel='phone'>Phone No.</Label>
                            <Input
                                type='number'
                                id='phone'
                                value={userState.phone}
                                placeholder='Enter your phone no.'
                                state={userState}
                                setState={setUserState}
                            />
                            <ErrorBox errorKey={errors.phone} />
                        </div>
                        <div className='block my-2 w-full'>
                            <Label forLabel='address' children='Address' />
                            <Input
                                type='text'
                                id='address'
                                value={userState.address}
                                placeholder='Enter your address'
                                state={userState}
                                setState={setUserState}
                            />
                            <ErrorBox errorKey={errors.address} />
                        </div>
                        <div className='form-element'>
                            <Button />
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
