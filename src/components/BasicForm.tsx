import * as React from 'react';
import TextInputWithLabel from "./TextInputWithLabel";

interface BasicFormProps {
    searchTerm?: any;
    onSearchInput?: any;
    onSearchSubmit?: any;
}

const BasicForm = ({searchTerm, onSearchSubmit, onSearchInput}:BasicFormProps) => {
    return (
        <form onSubmit={onSearchSubmit}>
            <TextInputWithLabel
                id="search"
                value={searchTerm}
                isFocused
                type='text'
                onInputChange={onSearchInput}
            >
                <strong>Search:</strong>
            </TextInputWithLabel>

            <button type="submit" disabled={!searchTerm}>
                Submit
            </button>
        </form>
    )
}

export default BasicForm;