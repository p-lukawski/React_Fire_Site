import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div id={"teamH"}>
                <a name={'team'}/>
                <p>Amazing <strong>Team</strong></p>
                <p>These wonderful people make work enjoyable</p>
            </div>
        )
    }
}
class Twitter extends React.Component {
    render() {
        return (
            <div className={"dot"}>
                <img src="images/tblack.png" alt=""/>
            </div>
        )
    }
}
class Facebook extends React.Component {
    render() {
        return (
            <div className={"dot"}>
                <img src="images/fblack.png" alt=""/>
            </div>
        )
    }
}
class Pinterest extends React.Component {
    render() {
        return (
            <div className={"dot"}>
                <img src="images/pblack.png" alt=""/>
            </div>
        )
    }
}
class Gplus extends React.Component {
    render() {
        return (
            <div className={"dot"}>
                <img src="images/gblack.png" alt=""/>
            </div>
        )
    }
}
class Members extends React.Component {
    render() {
        return (
            <div id={"members"}>
                <div id={"firstMember"} className={"member"}>
                    <div className={"memberPhoto"}>
                    </div>
                    <p>Kimberly Thompson</p>
                    <p>Marketer</p>
                    <div>
                        <Twitter/>
                        <Facebook/>
                        <Pinterest/>
                    </div>
                </div>
                <div id={"secondMember"} className={"member"}>
                    <div className={"memberPhoto"}>
                    </div>
                    <p>Rico Massimo</p>
                    <p>Coder</p>
                    <div>
                        <Twitter/>
                        <Facebook/>
                        <Gplus/>
                    </div>
                </div>
                <div id={"thirdMember"} className={"member"}>
                    <div className={"memberPhoto"}>
                    </div>
                    <p>Uku Mason</p>
                    <p>Graphic Designer</p>
                    <div>
                        <Facebook/>
                        <Pinterest/>
                    </div>
                </div>
            </div>
        )
    }
}
class Footer extends React.Component {
    render() {
        return (
            <div id={"teamFooter"}>
                <p>Aau acidic additive anaerobic barrel bittering bitterness bock carbonation
                cask craft fermentation imperial life saccharification specific yeast beef biltong brisket</p>
            </div>
        )
    }
}
export default class Team extends React.Component {
    render() {
        return (
            <div id={"teamSection"}>
                <Header/>
                <Members/>
                <Footer/>
            </div>
        )
    }
}