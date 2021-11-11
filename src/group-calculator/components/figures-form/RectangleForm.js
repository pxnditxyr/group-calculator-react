import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { Results } from '../calculator-card/Results';

import { getRectangleArea, getRectanglePerimeter } from '../../calculators/rectangleCalcs';

import '../../styles/figuresForm.css';


export const RectangleForm = () => {

    const [ figureResults, setFigureResults ] = useState([]);

    const { form, handleInputChange } = useForm({
        lengthValue: "",
        widthValue: "",
    })
    const { lengthValue, widthValue } = form;

    const handleSubmit = ( event ) => {
        event.preventDefault();
        const area = getRectangleArea( parseFloat( lengthValue ), parseFloat( widthValue ) );
        const perimeter = getRectanglePerimeter( parseFloat( lengthValue ), parseFloat( widthValue ) );
        setFigureResults([
            { 
                name: "Rectangle Area",
                value: area,
            },
            { 
                name: "Perimeter Area",
                value: perimeter,
            },
        ]);
    };

    return (
        <>
            <form onSubmit={ handleSubmit } className="card__form">
                <label htmlFor="rectangle-length"> Length of Rectangle </label>
                <input 
                    id="rectangle-length"
                    type="number"
                    placeholder="Length"
                    name="lengthValue"
                    onChange={ handleInputChange }
                    value={ lengthValue }
                    required
                />
                <label htmlFor="rectangle-width"> Width of Rectangle </label>
                <input 
                    id="rectangle-width"
                    type="number"
                    placeholder="Width"
                    name="widthValue"
                    onChange={ handleInputChange }
                    value={ widthValue }
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
