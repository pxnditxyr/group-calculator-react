import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { Results } from '../calculator-card/Results';

import { getCircleArea, getCirclePerimeter } from '../../calculators/circleCalcs';

import '../../styles/figuresForm.css';


export const CircleForm = () => {

    const [ figureResults, setFigureResults ] = useState([]);

    const { form, handleInputChange } = useForm({
        radioValue: ""
    })
    const { radioValue} = form;

    const handleSubmit = ( event ) => {
        event.preventDefault();
        const area = getCircleArea( parseFloat( radioValue ) );
        const perimeter = getCirclePerimeter( parseFloat( radioValue ));
        setFigureResults([
            { 
                name: "Circle Area",
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
                <label htmlFor="circle-radio"> Radio of Circle </label>
                <input 
                    id="circle-radio"
                    type="number"
                    placeholder="Length"
                    name="radioValue"
                    onChange={ handleInputChange }
                    value={ radioValue }
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


