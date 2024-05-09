import React, { useState } from 'react';
import { increment } from '../../redux/counterslice';
import { useDispatch } from 'react-redux';

const Inc = () => {
    const [value, setValue] = useState(0); 
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = () => {
        dispatch(increment(value)); 
        setValue(0); 
    };

    return (
        <>
            <input id='number' type="number" value={value} onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </>
    );
};

export default Inc;
