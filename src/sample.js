import React, { useEffect, useState } from 'react';



const Hello = ({test1}) => {
    const [fname,setFname] = useState('');

    function changeInput(event){
       let name = event.target.value;
       setFname(name);
    }

    // useEffect( () => {
    //     console.log("use effect called");
    // },[fname])

    return (
        <div className='wrapperDiv'>
            <h1>This is hello file {fname}</h1>
            <input type='text' onChange={changeInput} />
        </div>
    )

    
}
export default Hello;