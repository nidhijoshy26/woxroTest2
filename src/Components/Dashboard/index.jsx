import React from 'react';
import { useState } from 'react';
import './styles.css';

const Dashboard = () => {
    const [inputValues,setInputValues] = useState([]);
    const [input1,setInput1] =useState('');
    const [input2,setInput2] = useState('');

    const handleAdd =()=>{
        if(input1 && input2){
            setInputValues([...inputValues,{field1:input1,field2: input2}]);
            setInput1('');
            setInput2('');
        }
    }

    const handleRemove=(index)=>{
        const updateValues =[...inputValues];
        updateValues.splice(index,1);
        setInputValues(updateValues);

    }



  return (
      <div>
          <div>
              <h1>Director And Movies</h1>
              <input type='text' placeholder='Director Name' className='drctor-name' value={input1} onChange={(e) => setInput1(e.target.value)} />
              <input type='text' placeholder='Movie Name' className='mv-name' value={input2} onChange={(e) => setInput2(e.target.value)} />
              <button type='submit' className='add-btn' onClick={handleAdd}>Add</button>
          </div>
          <div>
            {inputValues.map((input,i)=>{
              return(
                  <div key={i}>
                    <p className='inpt1'>{input.field1} ,{input.field2}</p>
                      <button className='rmv-btn' onClick={() => { handleRemove(i) }}>Remove</button>
                  </div>
              )
               
            })}
          </div>

      </div>
  )
}

export default Dashboard;