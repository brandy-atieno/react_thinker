import React,{useState} from 'react';

const Form2 = () => {
    const[inputs,setInputs]=useState({});
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInputs(values=>({...values,[name]:value}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputs);
    }
  return (
    <div className='container2'>
        <form className='form2' onSubmit={handleSubmit}>
            <label> Age :
            <input type='text' name='name' value={inputs.name || '' } onChange={handleChange}/>

            </label><br></br>
            <label> Career :
            <input type='text' name='career' value={inputs.career || ''} onChange={handleChange}/>

            </label><br></br>
            <input className='btn2' type='submit'/>
        </form>
    </div>
  )
}

export default Form2;