import React from 'react'

function JeopardyDisplay(props) {
    return (
        <div>
            <h4>Question: {props.question} ? </h4>
            <br />
            <strong>Value: </strong> {props.value}
            <br />
            <strong>Category: </strong> {props.category}
            <br />
            <strong>Users Score: </strong> {props.score}
            <br />

        </div>
    );

}
export default JeopardyDisplay