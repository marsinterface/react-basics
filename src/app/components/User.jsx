import React from "react";

export class User extends  React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Popular User
                </div>
                <img class="card-img-top" src="http://is2.mzstatic.com/image/thumb/Purple111/v4/64/9f/20/649f2026-e968-0417-660c-e5ee6d7977ff/source/350x350bb.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">{this.props.user.name}</h4>
                    <p className="card-text">{this.props.user.bio}</p>
                    <strong>Programming skills:</strong>
                </div>

                <ul className="list-group">
                    {this.props.user.skills.map((skill, i) => <li className="list-group-item" key={i}>{skill}</li> )}
                </ul>

                <div className="card-footer">
                    <a href="#" className="btn btn-block btn-primary">Follow</a>
                </div>
            </div>
        );
    }
}