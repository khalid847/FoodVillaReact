import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            count:0
        }
    }
    componentDidMount(){
       //API call 
    }
    render(count){
        return(
            <div>
                <h1>This is a Profile Page from class component</h1>
                <h2>Name :{this.props.name}</h2>
                <h2>count:{this.state.count}</h2>
                <button onClick={()=>{
                        this.setState(
                            {
                                count: this.state.count+1
                            }
                        );
                    }
                }>Count</button>
            </div>
        );
    }
}
export default Profile;