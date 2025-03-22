import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPastes, updateToPastes } from '../Redux/PasteSlice';
import toast from 'react-hot-toast/headless';
import { Link } from 'react-router-dom';


const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handledelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div className="paste-container">
      <input
        type="search"
        placeholder="Search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="filter-data">
        {filteredData.length > 0 ? (
          filteredData.map
          ((paste) => (
            <div key={paste._id} className="paste-item">
              <h3 className="title">{paste.title}</h3>
              <div className="content">{paste.content}</div>
              <div className="buttons">

                <button className="edit-button"
                    onClick={() => {
                  const newContent = prompt("Edit your paste:", paste?.content);
                  if (newContent?.trim()) {
                      const updatedPaste = { ...paste, content: newContent };dispatch(updateToPastes(updatedPaste));
                    setSearchTerm(prev => prev + " ");}}}>Edit</button>
                 

                <button className="Delete-button" 
                    onClick={() => handledelete(paste?._id)}>Delete</button>

                <button className="Copy-button"
                onClick={() => {navigator.clipboard.writeText(paste?.content);alert("Paste Copied") }}>Copy</button>

                <button className="Share-button"  
                onClick={() => 
                {navigator.share({title: paste?.title,text: paste?.content,}).catch(() => alert("Sharing failed!"));}} >Share</button>
                
              </div>
              <div> 
                {new Date(paste.createdAt).toLocaleString()}
              </div>
            </div>
          ))
        ) : (
          <p>No pastes found.</p>
        )}
      </div>
    </div>
  );
};

export default Paste;
