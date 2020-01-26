import React from "react";
import {
    Link
} from "react-router-dom";
import "./../styles/home.css";

export default class Home extends React.Component {

    render(){

        return (
            <section>
                <div className="info">
                    <h1>
                        MessageAll
                    </h1>
                        <p>
                            MessageAll is a great substitute for regular SMS text messaging
                    </p>
                    <Link to="/react-messageall/message">
                        <div className="btn">
                            Start Now
                    </div>
                    </Link>

                    {
                        localStorage.getItem('token') ? (
                            <Link to="/react-messageall/logout">
                                <div className="btn secondary">
                                    Logout
                                </div>                                
                            </Link>
                        ) : (

                                <Link to="/react-messageall/signin">
                                <div className="btn secondary">
                                    Join Us
                                </div>
                            </Link>
                        )
                    }
                </div>
            </section>
        )
    }
}