import React, { Component } from 'react';
import JeopardyService from '../../jeopardySerivce';
import JeopardyDisplay from '../jeopardydisplay/JeopardyDisplay'


//import our service

class Jeopardy extends Component {

    //set our initial state and set up our service as this.client on this component
    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {},
            score: 0

        }
    }
    //get a new random question from the API and add it to the data object in state
    getNewQuestion() {
        return this.client.getQuestion().then(result => {
            this.setState({
                data: result.data[0]
            })
        })
    }
    submitClick = (event) => {

        let score;
        let response = this.state.answer;
        let value = this.state.data.value;
        let valueScore = this.state.score;
        console.log(this.state.data.answer)
        console.log(this.state.data.value)
        console.log(this.state.score)
        if (response === this.state.data.answer) {
            score = valueScore + value;
            alert('CORRECT ANSWER')
        } else {
            score = valueScore - value;
            alert('WRONG ANSWER PLEASE TRY HARDER :joy:')

        }
        this.setState({
            score,
            response: "",
        });

        this.getNewQuestion();
    };
    handleChange = (event) => {
        this.setState({ response: event.target.value });
    };


    //when the component mounts, get a the first question
    componentDidMount() {
        this.getNewQuestion();
    }


    //display the results on the screen
    render() {

        let category = "loading";  // Thanks to Eric this help lot.//https://kenzie.zoom.us/rec/play/uMIoc7-sqTo3SIXH5gSDVPR8W47sLa-sgydN-vZbzRzgAiQCN1Pzb7VGY-FjNzlf2MSEd_56UYrT65qh?startTime=1598537517000
        if (this.state.data.category && this.state.data.category.title) {
            category = this.state.data.category.title;
        }

        return (
            <div>
                <JeopardyDisplay
                    question={this.state.data.question}
                    value={this.state.data.value}
                    category={category}
                    score={this.state.score}
                />
                <input id='answer'></input><button onClick={this.submitClick}>Submit</button>
            </div>
        );
    }
}
export default Jeopardy;