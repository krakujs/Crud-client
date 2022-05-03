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
                    <input type="text" name="name" id="" placeholder='Yesh Rajawat' />
                </div>

                <div className="singleItem">
                    <label htmlFor="username">UserName</label>
                    <input type="text" name="username" id="" placeholder='jiinxx007' />
                </div>

                <div className="singleItem">
                    <label htmlFor="phone">Phone Number </label>
                    <input type="text" name="phone" id="" placeholder='7014198476' />
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