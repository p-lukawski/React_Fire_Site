import React from 'react';

class DevSection extends React.Component {
    render() {
        return (
            <div id={"devSection"}>
                <a name={'services'}/>
                <div className={"container"}>
                    <div className={"text"}>
                        <p>Web <strong>Development</strong></p>
                        <p>Aau barley brew brewhouse brewing caramel chiller conditioned double enzymes glass gravity hop
                            hopping hops kolsch mouthfeel noble pitching pub terminal bacon beef cow flank loin mignon
                            rump turkey. Aau acidic additive anaerobic barrel bittering bitterness bock carbonation
                            cask craft fermentation imperial life saccharification specific yeast beef biltong brisket
                            <br/>
                            <br/>
                            chuck doner meatloaf prosciutto ribeye sirloin steak tri-tip. Barley bottle brewing </p>
                    </div>
                    <div className={"pic"}>
                        <img src="images/something.png" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
class BrandSection extends React.Component {
    render() {
        return (
            <div id={"brandSection"}>
                <div className={"container"}>
                    <div className={"pic"}>
                        <img src="images/users.png" alt=""/>
                    </div>
                    <div className={"text"}>
                        <p>Identity <strong>Branding</strong></p>
                        <p>Aau barley brew brewhouse brewing caramel chiller conditioned double enzymes glass gravity hop
                        hopping hops kolsch mouthfeel noble pitching pub terminal bacon beef cow flank loin mignon
                        rump turkey. Aau acidic additive anaerobic barrel bittering bitterness bock carbonation
                        cask craft fermentation imperial life saccharification specific yeast beef biltong brisket
                        <br/>
                        <br/>
                        chuck doner meatloaf prosciutto ribeye sirloin steak tri-tip. Barley bottle brewing </p>
                    </div>
                </div>
            </div>
        )
    }
}
class ServicesGenerator extends React.Component {
    render() {
        return (
            <div className={"serviceGen"}>
                <div className={"circle"}>
                    <img src={this.props.img} alt=""/>
                </div>
                <div className={"cont"}>
                    <strong>{this.props.title}</strong>
                    <p>{this.props.content}</p>
                </div>
            </div>
        )
    }
}
class ServicesSection extends React.Component {
    render() {
        const content = "Aau barley brew brewhouse brewing caramel chiller conditioned double enzymes glass gravity";
        return (
            <div id={"services"}>
                <div className={"col"}>
                   <ServicesGenerator img={"images/Untitled.png"} title={"Branding & Identity"} content={content}/>
                    <ServicesGenerator img={"images/mapp.png"} title={"Mobile App Development"} content={content}/>
                    <ServicesGenerator img={"images/ux.png"} title={"UI/UX"} content={content}/>
                </div>
                <div className={"col"}>
                    <ServicesGenerator img={"images/w&b.png"} title={"Web & Graphic Design"} content={content}/>
                    <ServicesGenerator img={"images/animations.png"} title={"Animations"} content={content}/>
                    <ServicesGenerator img={"images/photography.png"} title={"Photography"} content={content}/>
                </div>
            </div>
        )
    }
}
export default class Services extends React.Component {
    render() {
        return (
            <div>
                <DevSection/>
                <BrandSection/>
                <ServicesSection/>
            </div>
        )
    }
}