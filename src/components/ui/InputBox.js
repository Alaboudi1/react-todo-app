import React from "react";
import enhance from "../hoc/wrapInputBox";

const InputBox = (props) => {
    const { addNew } = props;
    const [inputs, updateInput] = React.useState("");

    const handleInputChanges = (e) => {
        updateInput(e.target.value);
    };

    const submit = (e) => {
        addNew(inputs);
        e.preventDefault();
    };
    const fetchData = () => {
        fetch("https://www.boredapi.com/api/activity/").then((data) => {
            if (data.activity) addNew(data.activity);
        });
    };

    return (
        <form onSubmit={submit}>
            <input
                type="text"
                className="form-control"
                placeholder="Note"
                onChange={handleInputChanges}
            />
            <input className="buttonAdd" type="submit" value="Add" />
            <input
                className="buttonClear"
                type="button"
                value="Fetch"
                onClick={fetchData}
            />
        </form>
    );
};

export default InputBox;
