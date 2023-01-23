import React from "react";
import CheckBox from "./CheckBox";

export default function TodoItem(props) {
    const { data, changeStatus } = props;
    const handleChange = (checked) => changeStatus(data.id, checked);
    const itemRef = React.useRef(null);

    const className =
        "todo-item ui-state-default " +
        (data.completed === true ? "completed" : "pending");

    React.useEffect(() => {
        // setTimeout(() => {
        itemRef.current.style.transform = "translatex(25px)";
        itemRef.current.style.opacity = 1;
        itemRef.current.style.transition = "all 0.5s ease-in-out";
        // }, 100);
    }, [data]);

    return (
        <li className={`${className}`} ref={itemRef}>
            <div className="checkbox">
                <label>
                    <CheckBox
                        checked={data.completed}
                        onChange={handleChange}
                    />{" "}
                    {data.text}
                </label>
            </div>
        </li>
    );
}
