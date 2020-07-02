import React from "react";

import ItemForm from "./ItemForm";

const Names = ({ setForm, formData, navigation }) => {
  const { name } = formData;

  const { next, previous } = navigation;

  return (
    <div className="form">
      <h1>Step 7: Give Attractive Name </h1>
      <ItemForm
        label="Pizza Name"
        name="name"
        value={name}
        onChange={setForm}
      />

      <div>
        <button onClick={previous}>Previous</button>
        <button disabled={!name} onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Names;
