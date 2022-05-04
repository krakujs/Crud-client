import React from 'react'
import './Form.scss';
const Form = () => {
  return (
    <div className='form'>
        <div className="top">
        <h1>Update User Info</h1>
        </div>
        <div className="formDiv">
            <form action="">
                
                <div className="singleItem">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="" placeholder='Enter your name' />
                </div>

                <div className="singleItem">
                    <label htmlFor="username">UserName</label>
                    <input type="text" name="username" id="" placeholder='Enter username' />
                </div>

                <div className="singleItem">
                    <label htmlFor="phone">Phone Number </label>
                    <input type="text" name="phone" id="" placeholder='Enter phone number' />
                </div>

            </form>
            <div className="bottom">
            <button > Update User</button>
            </div>
        </div>
    </div>
  )
}

export default Form