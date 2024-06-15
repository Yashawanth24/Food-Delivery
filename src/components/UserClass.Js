import React from "react";
class UserClass extends React.Component{
   constructor(props){
 super(props);
   }
    render(){

        return(
            <>
            <h2>{this.props.name}</h2>
            <h4>{this.props.location}</h4>
            </>
        )
    }
}
export default UserClass;