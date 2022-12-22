import { useState } from "react";
import search from "../assets/icons8-search.svg";


export const SearchBar = ({ setSearchTerm }) => {
  const [newSearchTerm, setNewSearchTerm] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(newSearchTerm);
    setNewSearchTerm("");
  };
  return (
    // <form onSubmit={handleSubmit}>
    //   <label htmlFor="Search--text">Search for shows here:</label>
    //   <input
    //     id="Search--text"
    //     value={newSearchTerm}
    //     onChange={(event) => setNewSearchTerm(event.target.value)}
    //     required
    //   ></input>
    //   <button>Search</button>
    // </form>
    <div className="Search">
    <form>
  <label for="search">Search for stuff</label>
  <input id="search" type="search" placeholder="Search..." autofocus required />
  <button type="submit"><img src={search}></img></button>    
</form>
</div>
  );
};