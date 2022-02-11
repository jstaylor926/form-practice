import * as React from 'react';
import TextInputWithLabel from "./TextInputWithLabel";

interface BasicFormProps {
    searchTerm?: any;
    id?: string;
    onInputChange?: any;
    inputLabel?: any;
    isFocused?: any;
}

const BasicForm = ({searchTerm, id, onInputChange, inputLabel, isFocused}:BasicFormProps) => {
    return (
        <form>
            <div>
                <TextInputWithLabel
                    id={id}
                    onInputChange={onInputChange}
                    value={searchTerm}
                    type='text'
                    isFocused={isFocused}
                >
                    <strong>{inputLabel}</strong>
                </TextInputWithLabel>
            </div>
            <div>
                <button>
                    Submit

                </button>
            </div>
        </form>
    )
}

export default BasicForm;