import { CalcHeader } from './components/calculator-card/CalcHeader';
import { CalcBody } from './components/calculator-card/CalcBody';
import { CalcFooter } from './components/calculator-card/CalcFooter';

import './groupCalculator.css'

export const GroupCalculator = () => {
    return (
        <article className="calc">
            <CalcHeader figureTitle="Rectangle" />
            <CalcBody />
            <CalcFooter />
        </article>
    )
}
