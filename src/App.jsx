import React, { useEffect, useState } from 'react'
import './App.scss';
import {BrowserRouter as Routers ,Routes, Route} from 'react-router-dom';
import Card from './components/card/Card';
import Axios from 'axios';
import Form from './components/formDialog/Form';

const App = () => {

  const [user,setUser] = useState("");
  const [userList,setUserList] = useState([]);

  useEffect(()=>{
      Axios.get('http://localhost:3001/user/allUsers').
      then(response=>{
        console.log(response.data.users);
        setUserList(response.data.users);


        
      })
  },[]);

  const handleDeleteUser = (_id)=> {
      Axios.post('http://localhost:3001/user/delete',{_id:_id})
      .then((response) => {
        setUserList(response.data.users);

         

        



      })
  }
  // const handleUpdateUser = (user) => {
  //   Axios.put('http:/localhost:3001/user/update',{user:user})
  //   .then((response) => {
      
      
  //   })
  // }



  return (

    
<div className='App' >
      <h1></h1>
      
      <Form  className='form' />

   <div className="list">

      
            {userList.map((user)=>{
              
        return  <Card userItem={user} handleDelete={handleDeleteUser} />
        })} 

   </div>

   <Routers>
        <Routes>
          <Route path='/form' element={<Form/>}/>
        </Routes>
    </Routers>


   
    

      

    </div>
  )
}

export default App;
