import React from 'react';

const FormAdd = ({submitNew}) => {
    let input;

    return (
        <form>
            <input type="text" ref={value => {input = value}}/>
            <button type="button" onClick={() => { submitNew(input.value); input.value = ''}}>Add</button>
        </form>
    )
};
export default FormAdd;