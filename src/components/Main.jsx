import React, {Fragment} from 'react'
import Clock from "./Clock";
import UserCard from "./UserCard";


export default class Main extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userCardArr: []
        };

        this.updateUserCardArr = this.updateUserCardArr.bind(this)
    }

    updateUserCardArr(newUser){
        this.setState({
            userCardArr: [...this.state.userCardArr, newUser]
        });

    };



    render(){
        const {userCardArr} = this.state;
        return (
            <Fragment>
                <Clock updateUserCard = {this.updateUserCardArr}/>
                {userCardArr.map((item) => {
                    return (
                        <UserCard key={item.id} userData={item}/>
                    )
                })}
            </Fragment>
        )
    }
}

