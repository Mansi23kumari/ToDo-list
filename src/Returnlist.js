import React from 'react';

const Returnlist = (props)=>{
    const deleteitem=()=>{
        console.log("deleted");
    }
    return(
    <>
    <div className='todo_style'>  
    <i className="fa fa-times" aria-hidden="true"
    onClick={deleteitem}
    />
     <li>{props.text}</li>
     </div>
     </>
    );
};

export default Returnlist;
