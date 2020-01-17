import React, { useState } from 'react';
import './Leaderboard.css'

const id  = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };


const InputForm = ({tableColumns , setTableColumns}) => {
    const [data, setData] = useState({
        id: '',
        firstName:'',
        lastName: '',
        score: '',
    })

    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value, id: id()})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTableColumns([...tableColumns, data])
    }
    return (
        <div>
            <from className='form'>
                <label>First Name</label>
                <input type='text' name='firstName' onChange={handleChange} value={data.firstName}/>
                <label>Last Name</label>
                <input type='text' name='lastName' onChange={handleChange} value={data.lastName}/>
                <label>Score</label>
                <input type='number' name='score' onChange={handleChange} value={data.score}/>
                <input type="submit" value="Submit" onClick={handleSubmit}/>
            </from>
        </div>
    )
}

export default InputForm;