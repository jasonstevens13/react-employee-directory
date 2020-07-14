import React from "react";

function Filter(props) {
    return (
        <div>
            <div className="input-group mb-3">
                <input
                    onChange={props.handleFilter}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Filter Employee List By Last Name"
                    id="search"
                />
            </div>
        </div>

    );
}

export default Filter;

