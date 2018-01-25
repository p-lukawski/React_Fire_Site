import React from 'react';

class Bottom extends React.Component {
    render() {
        return (
            <div id={"bottom"}>
                <p>Can you build the website of my dreams?</p>
                <p>Yup, we can do that.</p>
                <button>Learn More</button>
            </div>
        )
    }
}
class Menu extends React.Component {
    render() {
        return (

            <li>
                <a href={this.props.link}>{this.props.name}</a>
            </li>
        )
    }
}
class Header extends React.Component {
    render() {
        return (
            <div id={"header"}>
                <div id={"image"}>
                    <img src="images/plane.png" alt=""/>
                    <p>ESCAPE</p>
                    <a name={"home"}></a>
                </div>
                <nav>
                    <ul>
                        <Menu link={"#home"} name={"Home"}/>
                        <Menu link={"#services"} name={"Services"}/>
                        <Menu link={"#clients"} name={"Clients"}/>
                        <Menu link={"#team"} name={"Team"}/>
                        <Menu link={"#contact"} name={"Contact"}/>
                    </ul>
                </nav>
            </div>

        )
    }
}
export default class Home extends React.Component {
    render() {
        return (
            <div id={"home"}>
                <Header/>
                <Bottom/>
            </div>
        )
    }
}