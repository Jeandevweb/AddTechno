import React from "react";
import TechnoItem from "../components/TechnoItem";
//import {v4 as uuidv4} from 'uuid';

const TechnoList = ({ technos, handleDeleteTechno }) => {
    



  return (
    <div className="techno-list">
      <h1>Toutes les technos</h1>
      <div>
        {technos.map((techno) => (
          <TechnoItem techno={techno} key={techno.technoid} handleDeleteTechno={handleDeleteTechno}/>
        ))}
      </div>
    </div>
  );
};

export default TechnoList;
