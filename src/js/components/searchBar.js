import React, { useContext } from "react";
import { useRef, useEffect } from "react";
import { Theme } from "../content";

const SearchBar = () => {
  const searchBar = useRef(null);
  const {setSearchTerm, setIsRandom, isRandom } = useContext(Theme)
  // const [name, setName] = useState();
  const handleChange = () =>{
    if(isRandom){
      setIsRandom(false)
      setSearchTerm(searchBar.current.value);
    }else{
      setSearchTerm(searchBar.current.value);
    }
  }
  const handleClick = () =>{
    setIsRandom(!isRandom)
  }
  useEffect(() => {
    searchBar.current.focus();
  });
  return (
    <div className="search">
      <form action="" className="form">
        <input type="text" className="input" ref={searchBar} onChange={handleChange} />
        <button className="form-btn" type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <button className="rand-btn" onClick={handleClick}>Random</button>
    </div>
  );
};

export default SearchBar;
