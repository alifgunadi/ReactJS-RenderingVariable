import React from "react";

export default class List extends React.Component {
    state = {
        users: ['Alif', 'Zaqi', 'Difa', 'Doni']
    }
    
    render() {
        return(
            <div>
                <ul>
                {
                    this.state.users.map(function(user, index) {
                        return <li key={index}>{user}</li>
                    })
                }
                </ul>
                
            </div>
        )
    }
}