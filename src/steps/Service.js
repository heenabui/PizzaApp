import React from "react";

const Service = ({ setForm, formData, navigation }) => {
    const { service } = formData;
    const { next, previous } = navigation;

    return (
        <div className="form">
            <h1>Step 5: Select Service Type </h1>
            <label >Service</label><br />
            <div className='heading-step' name='service' onChange={setForm}>
                <input className='radio-btn' type="radio" name='service' value="Delivery" checked={service === "Delivery"} />
                <label htmlFor="Dairy">Delivery</label><br />
                <input className='radio-btn' type="radio" name='service' value="Carryout" checked={service === "Carryout"} />
                <label htmlFor="Carryout">Carryout</label><br />
            </div>

            <div>
                <button onClick={previous}>Previous</button>
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
};

export default Service;
