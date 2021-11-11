import { useState } from 'react';

export const useForm = ( initialValue ) => {
    const [ form, setForm ] = useState( initialValue );

    const handleInputChange = ({ target }) => {
        setForm({
            ...form,
            [ target.name ]: target.value,
        });
    };

    return ({
        form,
        handleInputChange,
    });

};
