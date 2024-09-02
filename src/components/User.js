import React from "react";
class Userclass extends React.Component{
    constructor(props){
        super(props);

this.state ={
    count: 0,
    count:1,
};


    }

    render(){
const {count}= this.state
const {name} = this.props
      return(
        <div className="user-card">
           
            
            <h2>Name :{name} </h2>
            <h3>Contact : @Ankit</h3>
            
        </div>
      )  
    }
}

export default Userclass