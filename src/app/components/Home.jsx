import React from "react";
import { User } from "./User";


export class Home extends React.Component {
    render() {
        var user = {
            name: "John Doe",
            bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
            skills: [
                "C++", "Javascript", "Python"
            ]
        };

        return (
            <div>
                <p>In a new React.Component!</p>
                <div className="row">
                    <div className="col-md-4">
                        <User user={user}/>
                    </div>
                    <div className="col-md-8">
                        <h1>Content will place here</h1>
                    </div>
                </div>
            </div>
        );
    }
}