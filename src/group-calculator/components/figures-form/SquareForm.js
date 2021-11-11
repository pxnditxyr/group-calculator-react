import { useState } from 'react';

import { useForm } from '../../hooks/useForm';
import { Results } from '../calculator-card/Results';

import { getSquareArea, getSquarePerimeter } from '../../calculators/squareCalcs';

import '../../styles/figuresForm.css';


export const SquareForm = () => {

    const [ figureResults, setFigureResults ] = useState([]);

    const { form, handleInputChange } = useForm({
        sideValue: "",
    })
    const { sideValue } = form;

    const handleSubmit = ( event ) => {
        event.preventDefault();
        const area = getSquareArea( parseFloat( sideValue ) );
        const perimeter = getSquarePerimeter( parseFloat( sideValue ) );
        setFigureResults([
            { 
                name: "Square Area",
                value: area,
            },
            { 
                name: "Square Perimeter",
                value: perimeter,
            },
        ]);
    };

    return (
        <>
            <form onSubmit={ handleSubmit } className="card__form">
                <label htmlFor="square-length"> Side of Square </label>
                <input 
                    id="square-side"
                    type="number"
                    placeholder="Side"
                    name="sideValue"
                    onChange={ handleInputChange }
                    value={ sideValue }
                    required
                />
                <button type="submit"> Solve </button>
            </form>
            <Results 
                figureResults={ figureResults }
            />
        </>
    );
};
