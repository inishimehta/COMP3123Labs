import React, { useState } from 'react'

const DEFAULT_VALUES = {
    username: '',
    email: '',
    password: '',
    city: ''
}

export default function UserForm() {
    const [userData, setUserData] = useState(DEFAULT_VALUES)

    const handleValueChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log('Form submitted with data:', userData)
        // Here you can add further form submission logic
        // Call API for submitting form data
    }

  return (
        <div>
            <h2>User Form Component</h2>
            <form onSubmit={submitForm}>
                <label>Username:
                    <input type="text" 
                    name="username"
                    placeholder='Ente Username'
                    value={userData.username}
                    onChange={(e) => handleValueChange(e)} />
                </label>
                <br />
                <label>Email:
                    <input type="email" 
                    name="email" 
                    placeholder='Enter Email'
                    value={userData.email}
                    onChange={handleValueChange} />
                </label>
                <br />
                <label>Password:
                    <input type="password" 
                    name="password" 
                    placeholder='Enter Password'
                    value={userData.password}
                    onChange={handleValueChange} />
                </label>
                <br />
                <label>City:
                    <select name='city' onChange={handleValueChange}>
                        <option value='newyork'>New York</option>
                        <option value='losangeles'>Los Angeles</option>
                        <option value='chicago'>Chicago</option>
                        <option value='toronto'>Toronto</option>
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
