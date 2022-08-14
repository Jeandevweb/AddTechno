import React from "react";

const TechnoItem = ({ techno, handleDeleteTechno }) => {
  return (
    <div>
      <div key={techno.technoid} className='card'>
        <h2>Nom de la technologie: {techno.technoName}</h2>
        <h3>Catégorie: {techno.technoCategory}</h3>
        <h3>Description: {techno.technoDescription}</h3>
        <div className='footer'>
            <button className='btn-delete' onClick={()=>handleDeleteTechno(techno.technoid)}>SUPPRIMER</button>
        </div>
      </div>
    </div>
  );
};

export default TechnoItem;
