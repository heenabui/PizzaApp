import React from "react";

const Sauce = ({ setForm, formData, navigation }) => {
    const { sauce, whiteSauce } = formData;

    const { next, previous } = navigation;

    return (
        <div className="form">
            <h1>Step 2: Add Sauce</h1>

            <select name="sauce" onChange={setForm} value={sauce}>
                <option value="redSauce">Red sauce</option>
                <option value="whiteSauce">White sauce</option>
                <option value="greenPesto">Green pesto</option>
            </select>

            {
                sauce === 'whiteSauce' &&
                <div className='heading-step' name='milk' onChange={setForm}>
                    <label >Milk</label><br />
                    <input className='radio-btn' type="radio" name='whiteSauce' id="Dairy" value="dairy" checked={whiteSauce === "dairy"} />
                    <label htmlFor="Dairy">Dairy</label><br />
                    <input className='radio-btn' type="radio" name='whiteSauce' id="Dairy-free" value="dairy-free" checked={whiteSauce === "dairy-free"} />
                    <label htmlFor="Dairy-free">Dairy-free</label><br />
                </div>
            }

            <div>
                <button onClick={previous}>Previous</button>
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
};

export default Sauce;
