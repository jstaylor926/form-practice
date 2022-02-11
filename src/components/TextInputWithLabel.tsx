import * as React from 'react';

interface TextInputWithLabelProps {
    id: any;
    onInputChange: any;
    value: any;
    type: any;
    isFocused: any;
    children: any;

}
const TextInputWithLabel = ({id, onInputChange, value, type, isFocused, children}:TextInputWithLabelProps) => {
    const inputRef = React.useRef();

    React.useEffect(() => {
        if (isFocused && inputRef.current) {
            // @ts-ignore
            inputRef.current.focus();
        }
    }, [isFocused]);

    return (
        <>
            <label htmlFor={id}>{children}</label>
            &nbsp;
            <input
                id={id}
                // @ts-ignore
                ref={inputRef}
                type={type}
                value={value}
                onChange={onInputChange}
            />
        </>
    );
}

export default TextInputWithLabel;