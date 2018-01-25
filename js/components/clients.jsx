import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div id={"clientsH"}>
                <a name={'clients'}/>
                <p>Awesome <strong>Clients</strong></p>
                <p>See what nice things our clients said about us</p>
            </div>
        )
    }
}
class Bottom extends React.Component {
    render() {
        return (
            <div id={"clientsBottom"}>
                <div id={"firstDude"}>
                    <div className={"clientPhoto"}>
                        <img src="images/kid.jpg" alt=""/>
                    </div>
                    <div className={"says"}>
                        <p>Aau barley brew brewhouse brewing caramel chiller conditioned</p>
                        <p>-Jamie Richardson, Founder Of Cocoa Media</p>
                    </div>
                </div>
                <div id={"secondDude"}>
                    <div className={"clientPhoto"}>
                        <img src="images/dude.jpg" alt=""/>
                    </div>
                    <div className={"says"}>
                        <p>Aau barley brew brewhouse brewing caramel chiller conditioned</p>
                        <p>-Bart Thomson, Founder Of Rainel</p>
                    </div>
                </div>
            </div>
        )
    }
}
class Footer extends React.Component {
    render() {
        return (
            <div id={"logos"}>
                <img src="images/envato.png" alt=""/>
                <img src="images/wordpress.png" alt=""/>
                <img src="images/tuts.png" alt=""/>
                <img src="images/micro.png" alt=""/>
            </div>
        )
    }
}
export default class Clients extends React.Component {
    render() {
        return (
            <div id={"cSection"}>
                <Header/>
                <Bottom/>
                <Footer/>
            </div>

        )
    }
}