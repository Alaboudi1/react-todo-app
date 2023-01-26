import React, { useState } from "react";
import { FILTER_ALL } from "../../services/filter";
import { MODE_CREATE, MODE_NONE } from "../../services/mode";
import { objectWithOnly, wrapChildrenWith } from "../../util/common";
import { getAll, addToList, updateStatus } from "../../services/todo";

const StateProvider = (props) => {
    const [query, setQuery] = useState("");
    const [mode, setMode] = useState(MODE_CREATE);
    const [filter, setFilter] = useState(FILTER_ALL);
    const [list, setList] = useState(getAll());

    let children = wrapChildrenWith(props.children, {
        data: { query, mode, filter, list },
        actions: objectWithOnly(
            {
                addNew,
                changeFilter,
                changeStatus,
                changeMode,
                setSearchQuery,
            },
            [
                "addNew",
                "changeFilter",
                "changeStatus",
                "changeMode",
                "setSearchQuery",
            ]
        ),
    });

    return <div>{children}</div>;

    function addNew(text) {
        const updatedList = addToList(list, { text, completed: false });

        setList(updatedList);
    }

    function changeFilter(filter) {
        setFilter(filter);
    }

    function changeStatus(itemId, completed) {
        const updatedList = updateStatus(list, itemId, completed);

        setList(updatedList);
    }

    function changeMode(mode = MODE_NONE) {
        setMode(mode);
    }

    function setSearchQuery(text) {
        setQuery(text || "");
    }
};

export default StateProvider;
