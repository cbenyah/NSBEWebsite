
import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';




export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>This is home.</p>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src= {require("../../Media/Images/Carousel/Item1.jpg")}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../../Media/Images/Carousel/Item1.jpg")}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../../Media/Images/Carousel/Item1.jpg")}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}