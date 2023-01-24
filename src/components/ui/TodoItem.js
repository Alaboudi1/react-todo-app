import React from "react";
import CheckBox from "./CheckBox";

export default function TodoItem(props) {
    const { data, changeStatus } = props;
    const handleChange = (checked) => changeStatus(data.id, checked);
    const className =
        "todo-item ui-state-default " +
        (data.completed === true ? "completed" : "pending");

    const handleRemove = (e) => {
        e.preventDefault();
        changeStatus(parseInt(e.target.value), true);
    };

    return (
        <li className={className}>
            <div className="checkbox">
                <label>
                    <CheckBox
                        checked={data.completed}
                        onChange={handleChange}
                    />{" "}
                    {data.text}
                </label>
                <button
                    className="btn btn-default btn-xs pull-right"
                    onClick={handleRemove}
                    value={data.id}
                    type="button"
                >
                    <span
                        className="glyphicon glyphicon-remove text-danger"
                        style={{ fontSize: "1.5em" }}
                    />
                </button>
            </div>
        </li>
    );
}
