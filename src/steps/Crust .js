import React from "react";

const Crust = ({ setForm, formData, navigation }) => {
    const { crust } = formData;

    const { next } = navigation;

    return (
        <div className="form">
            <h1>Step 1: Select Your Crust</h1>
            <select name="crust" onChange={setForm} value={crust}>
                <option value="Original">Original</option>
                <option value="Gluten-free">Gluten-free</option>

            </select>

            <div>
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
};

export default Crust;
