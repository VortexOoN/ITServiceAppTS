import React, { useState } from "react";
import Button, { ButtonColor } from "./Button";
function Form() {
        return (
        <>
            <div className="text-center">
                <h1 className="display-3">Contact form</h1>
                <p>Send us message</p>
            </div>
            <form>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Name and Last Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example: Jan Kowalski"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">E-mail adress</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Example: jan@kowalski@gmail.com"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput3" className="form-label">Telephone number</label>
                    <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Example: +48 100 200 300"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={5}></textarea>
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
                <button type="button" 
                className="btn btn-dark ms-2">Attach Photo</button>
            </form>

        </>

    )
}
export default Form;