import React, { useState } from 'react'
import './InputForm.css'

export default function InputForm() {
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [nameerr,setNameErr] = useState('');
    const [ageerr,setAgeErr] = useState('');

    const[data,setData]=useState([]);

    const onNameChangeHandler= (e)=>{
        if(e.target.value.trim().length===0){
            setNameErr("Please enter a valid name")
        }else{
            setNameErr('')
        }
        setName(e.target.value)
    }
    const onAgeChangeHandler= (e)=>{
        if(e.target.value<=0){
            setAgeErr("Please enter a valid age")
        }else{
            setAgeErr('')
        }
        setAge(e.target.value)
    }

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        if(name.trim().length===0){
            setNameErr("Please enter a valid name")
            return;
        }
        if(age<=0){
            setAgeErr("Please enter a valid age")
            return;
        }
        setData((d)=>{
            return[
                
                ...d,
                {
                    name:name,
                    age:age,
                    id: Math.random().toString() ,
                }
                
            ]

        })
        setAge('');
        setName('');
    }

    const deleteHandler = (id)=>{
        setData(data.filter((item) => item.id !== id));
    }

  return (
    <div className="w3-card-4">
    <div className="w3-container w3-brown">
      <h2>Add an User</h2>
    </div>
    <form className="w3-container form-body" onSubmit={onSubmitHandler}>
      <p>      
      <label className="w3-text-brown"><b>First Name</b></label>
      <input className="w3-input w3-border w3-sand" 
       name="first"
       type="text"
       onChange={onNameChangeHandler}
       value={name}
       />
       <err className='err'>{nameerr}</err>
       </p>
      <p>      
      <label className="w3-text-brown"><b>Age</b></label>
      <input className="w3-input w3-border w3-sand" 
      name="last" 
      type="number"
      onChange={onAgeChangeHandler}
      value={age}
      />
      <err className='err'>{ageerr}</err>
      </p>
      <p>
      <button className="w3-btn w3-brown" type='submit'>Add User</button></p>
    </form>
    {data.length===0?'No Data Found':data.map((d)=>{
        return(
            <div className="w3-panel w3-yellow " key={d.id} onClick={()=>deleteHandler(d.id)}>
            <p className='w3-sans-serif w3-wide w3-medium w3-padding-12' style={{textAlign:'left'}}>{`${d.name} is ${d.age} year old`}</p>
            
            </div>
        )
    })}
  </div>
  )
}
