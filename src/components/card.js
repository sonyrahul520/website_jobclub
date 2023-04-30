import './card.css';
import React from 'react'; 
export default function Card(){

    const [list, setList] = React.useState([]);
    const [inputList, setInputList] =React.useState('');
    
    function getValue(event){
        setInputList(event.target.value);
    }
     function addList(){
            const newList = list.concat({ inputList });
            setList(newList);
            console.log(list);
            setInputList('');
            
    }

    return(
    <div className="container">
        <div className="box text-center bg-white">
        <div className="row mt-5">
            <h4>Grocery Bud</h4>
       </div>
       
        <div className="row m-2">
            <div className="input-group input-group-sm">
                 <input type="text" className="form-control ml-2" value={inputList} onChange={getValue} ></input>
                 <div className="input-group-append">
                     <button onClick={addList} type="button" className="btn btn-info">Add Item</button>
           </div>
        </div>
        <div className='row m-2'>
        <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
        </div>
           
        </div>
      </div>
    </div>
    );
   
}