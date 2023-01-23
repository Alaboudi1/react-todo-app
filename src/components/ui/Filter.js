import React from "react";
import { getOptions } from "../../services/filter";

export default function Filter(props) {
    const options = getOptions();
    const { filter, changeFilter } = props;
    const getClass = (key) => (key === filter ? "selected" : "");

    return (
        <ul className="filters list-unstyled clearfix">
            <label>
                {Object.keys(options).map((key) => (
                    <li key={key} style={{ marginRight: "5px" }}>
                        <input
                            type="radio"
                            onClick={() => changeFilter(key)}
                            className={getClass(key)}
                            name="filter"
                        />
                        {options[key]}
                    </li>
                ))}
            </label>
        </ul>
    );
}
