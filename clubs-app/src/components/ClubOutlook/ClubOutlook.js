import React, {Component} from 'react';
import classes from './ClubOutlook.module.css';
import Clubportal from './ClubPortal/ClubPortal';
import club0 from '../../assets/club0.jpg'
import club1 from '../../assets/club1.jpg'
import club2 from '../../assets/club2.jpg'
import club3 from '../../assets/club3.jpg'

class ClubOutlook extends Component {

    state = {
        activeImage: 0,
        images: [
            "none",
            "none",
            "none",
            "none"
        ]
    };

    componentDidMount = () => {
        this.currentSlide(0)
    };

    currentSlide = (num) =>{
        for (let a = 0;  a < this.state.images.length; a++){
            let image = this.state.images;
            if (a !== num) {
                image[a] = "none"
            } else {
                image[a] = ""
            }
            this.setState({images: image});
        }
    };

    next = (num) => {
        if (this.state.activeImage < this.state.images.length-1) {
            this.currentSlide(num+1);
            this.setState({activeImage: this.state.activeImage+1})
        }
    };

    prev = (num) => {
        if (this.state.activeImage > 0) {
            this.currentSlide(num-1);
            this.setState({activeImage: this.state.activeImage-1})
        }
    };

    render() {
        return (
            <div className={classes.ClubOutlook}>
                <div className={classes["slideshow-container"]}>

                    <Clubportal
                        display={this.state.images[0]}
                        src={club0}
                        title={"Book Club"}
                        caption={"Join us for our reading sessions."}
                    />

                    <Clubportal
                        display={this.state.images[1]}
                        src={club3}
                        title={"Finance Association"}
                        caption={"Join our sessions discussing stocks and firms."}
                    />

                    <Clubportal
                        display={this.state.images[2]}
                        src={club1}
                        title={"Dance Group"}
                        caption={"Dance with us every Thursday!"}
                    />

                    <Clubportal
                        display={this.state.images[3]}
                        src={club2}
                        title={"Astrology Society"}
                        caption={"Find out what your horoscope says about you."}
                    />

                    <button
                        className={classes.prev}
                        style={{display: this.state.activeImage > 0 ? "":"none"}}
                        onClick={() => this.prev(this.state.activeImage)}>
                        &#10094;
                    </button>
                    <button
                        className={classes.next}
                        style={{display: this.state.activeImage < this.state.images.length-1 ? "":"none"}}
                        onClick={() => this.next(this.state.activeImage)}>
                        &#10095;
                    </button>

                </div>
                <br/>
                {/*
                <div style={{"text-align":"center"}}>
                    <button className={classes.dot} onClick={() => this.currentSlide(0)}/>
                    <button className={classes.dot} onClick={() => this.currentSlide(1)}/>
                    <button className={classes.dot} onClick={() => this.currentSlide(2)}/>
                </div>*/}
            </div>
        )
    }

};

export default ClubOutlook;