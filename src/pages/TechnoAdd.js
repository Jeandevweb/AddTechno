import React from "react";
import { useState } from "react";

const TechnoAdd = ({ handleAddTechno }) => {
  const [techno, setTechno] = useState({
    technoName: "",
    technoCategory: "",
    technoDescription: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTechno(techno);
    setTechno({
        technoName: "",
        technoCategory: "",
        technoDescription: "",
    })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTechno({ ...techno, [name]: value });
  };

  return (
    <div className="techno-add">
      <h1>Ajouter une techno</h1>
      <div>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="technoName">Name:</label> <br />
          <input
            type="text"
            name="technoName"
            id="technoName"
            value={techno.technoName}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <label htmlFor="technoCategory">Categories:</label>
          <br />
          <select
            name="technoCategory"
            id="technoCategory"
            value={techno.technoCategory}
            onChange={(e) => handleChange(e)}
          >
            <option value="">Selectionner une catégorie</option>
            <option value="front">Front</option>
            <option value="back">Back</option>
            <option value="fullstack">Fullstack</option>
            <option value="autre">Autre</option>
          </select>
          <br />
          <label htmlFor="technoDescription">Ajouter une description:</label>
          <br />
          <textarea
            name="technoDescription"
            id="technoDescription"
            cols="30"
            rows="10"
            value={techno.technoDescription}
            onChange={(e) => handleChange(e)}
          ></textarea>
          <br />
          <input className="btn" type="submit" value="Ajouter" />
        </form>
      </div>
    </div>
  );
};

export default TechnoAdd;
