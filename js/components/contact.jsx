import React from 'react';

class Points extends React.Component {
    render() {
        return (
            <div className={"point"}>
                <div className={"icon"}>
                    <img src={this.props.img} alt=""/>
                </div>
                <p>{this.props.content}</p>
            </div>
        )
    }
}
class Contacts extends React.Component {
    render() {
        return (
            <div id={"contacts"}>
                <div id={"greetings"}>
                    <a name={'contact'}/>
                    <p>Say <strong>Hello</strong></p>
                    <p>Don't be shy, drop us an email and say hello! we are really nice bunch of people</p>
                </div>
                <div id={"points"}>
                    <div id={"pointsFirstCol"}>
                        <Points img={"images/phone.png"} content={"(416)555-0000"}/>
                        <Points img={"images/tw.png"} content={"@escape"}/>
                        <Points img={"images/g.png"} content={"plus.com/escape"}/>
                    </div>
                    <div id={"pointsSecCol"}>
                        <Points img={"images/mail.png"} content={"hello@escape.com"}/>
                        <Points img={"images/f.png"} content={"facebook.com/escape"}/>
                        <Points img={"images/p.png"} content={"pinterest.com/escape"}/>
                    </div>
                </div>
            </div>
        )
    }
}
class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Your Name*',
            mail: 'Your Email*',
            text: 'Your Message*',
        }
    }

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value,
        })
    };

    handleChangeMail = (event) => {
        this.setState({
            mail: event.target.value,
        })
    };

    handleChangeText = (event) => {
        this.setState({
            text: event.target.value,
        })
    };


    render() {
        return (
            <div id={"form"}>
                <form>
                    <input type="text" onChange={this.handleChangeName} placeholder={ this.state.name }/>
                    <input type="email" onChange={this.handleChangeMail} placeholder={ this.state.mail }/>
                    <input type="text" onChange={this.handleChangeText} placeholder={ this.state.text }/>
                </form>
            </div>
        )
    }
}
class Footer extends React.Component {
    render() {
        return (
            <div id={"lastFooter"}>
                <p>© 2014 Escape by FreebiesXpress Made in Torrnto</p>
            </div>
        )
    }
}
export default class Contact extends React.Component {
    render() {
        return (
            <div id={"contactSection"}>
                <div id={"contact-row"}>
                    <Contacts/>
                    <Form/>
                </div>
                <Footer/>
            </div>
        )
    }
}