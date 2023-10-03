import React,{useState} from 'react';

const Form = () => {
    const[name,setName]=useState('');
    const[hobby,setHobby]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(`${name},${hobby}`);
    };


  return (
    <div className='container'>
    <form className='form' onSubmit={handleSubmit}>
            <label>Enter your name:
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            </label><br></br>
            <label>Enter your hobby:
            <input type='text' value={hobby} onChange={(e)=>setHobby(e.target.value)}/>
            </label>
            <br></br>
            <input className='btn' type='submit'/>
        </form>
    </div>
  )
}

export default Form