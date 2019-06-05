import React from 'react';

const NumberCard = function (props) {
    // DONE 3: Added the onClick handler to the div tag and assigned it the value (cardClickHandler) which is passed down as props
    return (
        <div id={props.id} className="card-container" style={{ color: props.color }} onClick={props.cardClickHandler}>
            <span>
                {
                    /* TODO 3:
                      Render the value of prop "number" as created in the above TODO 2
                    */
                }
                {props.number}
            </span>
        </div>
    )
}

export default NumberCard;