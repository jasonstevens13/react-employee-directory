import React from "react";

function Input() {
    return (
        <div>
            <div className="input-group mb-3">
                <input className="form-control"></input>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Filter</button>
                </div>
            </div>
        </div>

    );
}

export default Input;

