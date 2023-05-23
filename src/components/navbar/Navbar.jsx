import React, { useState, useEffect } from 'react'
import { BiMoviePlay } from "react-icons/bi";
import { ImSearch } from "react-icons/im";
import { useNavigate } from 'react-router';
import Search from '../search/Search';
import { ApiGetSearch } from '../Strings';

import './Navbar.css'
const Navbar = () => {

  const [search, setSearch] = useState('');
  const [response, setResponse] = useState();
  const navigate = useNavigate();

  useEffect(() => {
   ApiGetSearch(search).then(r => setResponse(r))
  }, [search])

  const homeClick =()=>{
    navigate("/")
  }

  console.log(response);

  return (
    <div className='app__navbar' >
      <div className='app__navbar-top_row' >
        <button onClick={homeClick}><BiMoviePlay /></button>
        <div className='app__navbar-top_row-search' >
          <input type="text" placeholder='search' onChange={(e) => setSearch(e.target.value)} />
          <button  ><ImSearch/></button>
        </div>
      </div>
      <div>
        { response &&  <Search response={response} />}
      </div>
    </div>
  )
}

export default Navbar