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
        </form>
    );
};

export default InputBox;
