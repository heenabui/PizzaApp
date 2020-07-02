import React from "react";

const Protein = ({ setForm, formData, navigation }) => {
    const { protein } = formData;

    const { next, previous } = navigation;

    return (
        <div className="form">
            <h1>Step 4: Add Protein</h1>

            <select name="protein" onChange={setForm} value={protein}>
                <option value="Anchovies">Anchovies</option>
                <option value="Bacon">Bacon</option>
                <option value="Beef">Beef</option>
                <option value="Chicken">Chicken</option>
                <option value="Pepperoni">Pepperoni</option>
            </select>

            <div>
                <button onClick={previous}>Previous</button>
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
};

export default Protein;
