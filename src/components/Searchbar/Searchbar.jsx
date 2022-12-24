import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

function Searchbar( { searchText, onSearchTextChange }) {
    const [input, setInput]=useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Console: refresh prevented");
    };
    return (
      <div className="hero">
          <div className="box">
            <form className='SearchBar-Container' onSubmit={onSubmit}>
              <input className='SearchBar-Input' 
              type="text" 
              value={input}
              placeholder="..."
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e)=> {
                      if (e.key === 'Enter') {
                        console.log("Console: Eingabe")
                        onSearchTextChange(e.target.value);
                        }}} />
            </form>
            <div className="icon">
            <SearchIcon sx={{ fontSize: 40 }}/>
            </div>
          </div>
      </div>
    );
}

export default Searchbar;