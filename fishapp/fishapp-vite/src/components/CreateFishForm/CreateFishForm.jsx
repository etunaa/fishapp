import React from "react";
import { useState } from "react";
import "./CreateFishForm.css";

const CreateFishForm = ({onFishSubmit})=>{
    const [fishForm, setFishForm]=useState({
        index: Math.random(),
        Name:"",
        info:"",
        region:"",
        scientificName:"",
        illustrationPhoto:"",
    });

const [formErrors, setFormErrors]=useState({});
const handleChange=(e)=>{
    const{name, value}=e.target;
    setFishForm((prevData)=>({
        ...prevData,[name]: value,
    }));
};

const handleSubmit=(e)=>{
    e.preventDefault();
    const errors=validateForm();
    setFormErrors(errors);

    if (!Object.keys(errors).length){
        onFishSubmit(fishForm);
        setFishForm({
        index: Math.random(),
        Name:"",
        info:"",
        region:"",
        scientificName:"",
        illustrationPhoto:"",
        });
    } else {
        console.log("form is invalid");
    };
}
const validateForm=()=>{
    const errors={};
    if (fishForm.Name.trim()===""){
        errors.Name="Name is required"
    }
    if (fishForm.info.trim()===""){
        errors.info="info is required"
    }
    if (fishForm.region.trim()===""){
        errors.region="region is required"
    }
    if (fishForm.scientificName.trim()===""){
        errors.scientificName="scientificName is required"
    }
    if (fishForm.illustrationPhoto.trim()===""){
        errors.illustrationPhoto="illustrationPhoto is required"
    }

    return errors;
};

return(
    <form onSubmit={handleSubmit} className="create-fish-form">
        <label className="create-fish-form-label">
            Name:
            <input
            type="text"
            name="Name"
            value={fishForm.Name}
            onChange={handleChange}
            className="create-fish-form-input"/>
        </label>
        {formErrors.Name && (
        <span className="create-fish-form-error">{formErrors.Name}</span>
      )}
      <br />
      <label className="create-fish-form-label">
        info:
        <input
          type="text"
          name="info"
          value={fishForm.info}
          onChange={handleChange}
          className="create-fish-form-input"
        />
        {formErrors.info && (
          <span className="create-fish-form-error">{formErrors.info}</span>
        )}
      </label>
      <br />
      <label className="create-fish-form-label">
        region:
        <input
          type="text"
          name="region"
          value={fishForm.region}
          onChange={handleChange}
          className="create-fish-form-input"
        />
        {formErrors.region && (
          <span className="create-fish-form-error">{formErrors.region}</span>
        )}
      </label>
      <br />
      <label className="create-fish-form-label">
        scientificName:
        <input
          type="text"
          name="scientificName"
          value={fishForm.scientificName}
          onChange={handleChange}
          className="create-fish-form-input"
        />
        {formErrors.scientificName && (
          <span className="create-fish-form-error">{formErrors.scientificName}</span>
        )}
      </label>
      <br />
      <label className="create-fish-form-label">
        illustrationPhoto:
        <input
          type="text"
          name="illustrationPhoto"
          value={fishForm.illustrationPhoto}
          onChange={handleChange}
          className="create-fish-form-input"
        />
        {formErrors.illustrationPhoto && (
          <span className="create-fish-form-error">{formErrors.illustrationPhoto}</span>
        )}
      </label>
     
      <button type="submit" className="create-fish-form-button">
        Create fish
      </button>
    </form>
  );

}

export default CreateFishForm