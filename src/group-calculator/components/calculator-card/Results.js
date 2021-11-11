import '../../styles/results.css';

export const Results = ({ figureResults }) => {

    return (
        <div className="calc__results">
            {
                figureResults.map( figureResult => (
                    <li key={ figureResult.name }>
                        <span> { figureResult.name } </span>
                        <p> { figureResult.value } </p>
                    </li>
                ))
            }
        </div>
    )
}
