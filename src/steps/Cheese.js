import React from "react";

const Cheese = ({ setForm, formData, navigation }) => {
    const { cheese, } = formData;

    const { next, previous } = navigation;

    return (
        <div className="form">
            <h1>Step 3: Add Cheese</h1>
            <select name="cheese" onChange={setForm} value={cheese}>
                <option value="Mozzarella">Mozzarella</option>
                <option value="Dairy-free-cheese">Dairy-free cheese</option>
                <option value="Gorgonzola">Gorgonzola</option>
                <option value="Parmesan">Parmesan</option>
            </select>

            <div>
                <button onClick={previous}>Previous</button>
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
};

export default Cheese;
