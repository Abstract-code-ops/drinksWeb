import React from "react";
import { useContext } from "react";
import { Theme } from "../content";
import Searchbar from "../components/searchBar";
import Random from "../components/random";
import Drinks from "../components/drinks";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  const { cocktails, isRandom } = useContext(Theme);
  return (
    <main className="home">
      <div className="title">
        <h2 className="title-text">Find a drink</h2>
      </div>
      <Searchbar/>
      {isRandom? <Random/>:<Drinks cocktails={cocktails}/>}
      
    </main>
  );
};

export default Home;
