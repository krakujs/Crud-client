import React from 'react'
import './Card.scss';
import Axios from 'axios';
import Form from '../formDialog/Form';

const Card = (props) => {


    return (

    
    <div className='card'>
        <h1>User</h1>
        <div className="editDiv">
            Edit
        </div>
        <div className="top">
        <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
        </div>
        <div className="right">
            <div className="singleItem">
                <span className='title'>Name: </span>
                <input className='value' placeholder={props.userItem.name}></input>
            
            </div>
            <div className="singleItem">
                <span className='title'>UserName: </span>
                <input className='value' placeholder={props.userItem.username}></input>
            </div>
            <div className="singleItem">
                <span className='title'>Phone: </span>
                <input className='value' placeholder={props.userItem.phone}></input>
            </div>
            
        </div>
    </div>
    <div className="bottom">
        <button onClick={()=> props.handleDelete(props.userItem._id)} >Delete</button>
    </div>
        </div>
        
  )
}
export default Card;
