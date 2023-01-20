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

    return (
        <>
            <form onSubmit={(e) => submit(e)}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Note"
                    onChange={handleInputChanges}
                    value={inputs}
                />
                <input className="buttonAdd" type="submit" value="Add" />
                <button className="buttonClear" onClick={() => updateInput("")}>
                    Clear
                </button>
            </form>
        </>
    );
};

export default InputBox;
