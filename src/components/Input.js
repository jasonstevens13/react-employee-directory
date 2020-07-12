import React from "react";

function Input(props) {
    return (
        <div>
            <div className="input-group mb-3">
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Filter Employee List"
                    id="search"
                />
                <div className="input-group-append">
                    <button onClick={props.handleFormSubmit} className="btn btn-outline-secondary" type="button" id="button-addon2">Filter</button>
                </div>
            </div>
        </div>

    );
}

export default Input;

