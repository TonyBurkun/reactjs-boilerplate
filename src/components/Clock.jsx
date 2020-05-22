import React from 'react'
import {convertTime} from "../utils/convertTime";
import {User} from '../models/user'

export default class Clock extends React.Component{
    constructor(props){
        super(props);
        this.timerID = null;

        this.state = {
            date: new Date(),
        }
    }

    componentDidMount(){
        this.timerID = setInterval(() => {
            this.setState({
                date: new Date()
            });

            const {updateUserCard} = this.props;
            let randomUserObj = new User();



            updateUserCard(randomUserObj);

        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    render(){

        const {date} = this.state;
        return <div>{convertTime(date)}</div>

    }
}