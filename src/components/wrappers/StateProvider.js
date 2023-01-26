import React, { useState } from "react";
import { FILTER_ALL } from "../../services/filter";
import { MODE_CREATE, MODE_NONE } from "../../services/mode";
import { objectWithOnly, wrapChildrenWith } from "../../util/common";
import {
    getAll,
    addToList,
    updateStatus,
    removeItems,
} from "../../services/todo";

function StateProvider(props) {
    const [query, setQuery] = useState("");
    const [mode, setMode] = useState(MODE_CREATE);
    const [filter, setFilter] = useState(FILTER_ALL);
    const [list, setList] = useState(getAll());
    const data = { query, mode, filter, list };
    const actions = {
        addNew,
        changeFilter,
        changeStatus,
        changeMode,
        setSearchQuery,
        removeItem,
    };

    function addNew(text) {
        let updatedList = addToList(list, {
            text,
            completed: false,
        });

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
    function removeItem(itemId) {
        const updatedList = removeItems(list, itemId);

        setList(updatedList);
    }

    let children = wrapChildrenWith(props.children, {
        data,
        actions,
    });

    return <div>{children}</div>;
}

export default StateProvider;
