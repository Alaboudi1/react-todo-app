import React from "react";
import { MSG_NO_ITEMS } from "../../assets/text/en_US";
import CheckBox from "./CheckBox";

export default function FilteredList(props) {
    const { items, changeStatus, removeItem } = props;
    const handleChange = (id, checked) => changeStatus(id, checked);
    const handleRemove = (id) => removeItem(id);
    const className = (item) =>
        "todo-item ui-state-default " +
        (item.completed === true ? "completed" : "pending");

    if (items.length === 0) {
        return <p className="alert alert-info">{MSG_NO_ITEMS}</p>;
    }

    return (
        <ul className="list-unstyled">
            {items.map((item) => (
                <li className={className(item)} key={item.id}>
                    <div className="checkbox">
                        <label>
                            <CheckBox
                                checked={item.completed}
                                onChange={(checked) =>
                                    handleChange(item.id, checked)
                                }
                            />{" "}
                            {item.text}
                        </label>
                    </div>
                    <button
                        onClick={handleRemove}
                        className="btn btn-danger btn-xs"
                        style={{
                            marginLeft: "10px",
                            marginTop: "5px",
                        }}
                    >
                        X
                    </button>
                </li>
            ))}
        </ul>
    );
}
