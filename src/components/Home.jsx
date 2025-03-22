import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../Redux/PasteSlice';




const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setSearchParam] = useSearchParams();
    const pasteId = searchParams.get('pasteId');
    const dispatch = useDispatch();

    function createPaste() {
      const paste ={
        title: title,
        content: value,
        _id : pasteId || 
             Date.now().toString(36),
          createdAt:new Date().toISOString(),
      }
      if(pasteId){
        // i want to update
          dispatch(updateToPastes(paste));
      }
      else {
        // create 
        dispatch(addToPastes(paste));
      }
        // after creation or updation
        setTitle('');
        setValue('');
        setSearchParam({});

    }
  return (
    <div>
      <div className="Home-link">
        <div className="input-container">
          <input
            className="paste-input"
            type="text"
            placeholder="Enter Title Here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="create-button" onClick={createPaste}>
            {pasteId ? "Update Paste" : "Create My Paste"}
          </button>
        </div>
      </div>
    <div>
       <textarea id="pasteArea"
       value={value}
       placeholder='Enter Your Content Here'
       onChange={(e)=> setValue(e.target.value)}
       rows={20}
       ></textarea>
    </div>
    </div>
    
  )
}

export default Home