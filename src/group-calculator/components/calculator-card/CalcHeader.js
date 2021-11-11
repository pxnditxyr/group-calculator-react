import PropTypes from 'prop-types';

import '../../styles/calculatorCard.css'

export const CalcHeader = ({ figureTitle }) => {
    return (
        <section className="calc__header">
            <div className="image-container">
                <img src="./assets/images/physics-logo.jpg" alt="physics"/>
            </div>
            <span> Physics Calculator </span>
            <p> { figureTitle } </p>
        </section>

    );
};

CalcHeader.propTypes = {
    figureTitle: PropTypes.string.isRequired,
}
