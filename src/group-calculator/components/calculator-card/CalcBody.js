import { useState } from 'react';
import { RectangleForm } from '../figures-form/RectangleForm';

import '../../styles/calculatorCard.css'

export const CalcBody = () => {

    const [ figureName, setFigureName ] = useState( "Rectangle" );

    const figures = [
        { 
            "name": "Rectangle",
            "component": <RectangleForm /> 
        },
        { 
            "name": "Square",
            "component": <RectangleForm /> 
        },
        { 
            "name": "Circle",
            "component": <RectangleForm /> 
        },
        { 
            "name": "Triangle",
            "component": <RectangleForm /> 
        },
    ];

    const handleChangeFigure = ( figure ) => {
        setFigureName( figure );
    }

    return (
        <section className="calc__body">

            <div className="calc__buttons">
                {
                    figures.map(  figure => (
                        <button 
                            key={ figure.name }
                            className="btn-figures"
                            onClick={ () => handleChangeFigure( figure.name ) }
                        > 
                            { figure.name }
                        </button>
                    ))
                }
            </div>
            
            {
                figures.find( figure => figure.name === figureName ).component
            }
        </section>
    );
};
