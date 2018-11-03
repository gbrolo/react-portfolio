import React, { Component } from 'react';
import { Row, Col, Fade } from 'reactstrap';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './logo.css';

class Logo extends Component {
  render() {
    return (
        <Fade in={true} timeout={1000} className="logo grace-font">            
            <Row>
                <Col xs={12} sm={12} md={4} lg={4}>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} className="logo-col">
                <img className="img-logo" width="100px" height="100px" src="https://avatars0.githubusercontent.com/u/14318182?s=400&u=101b254ae59296bb71e4822f339c0e7f94ae4d56&v=4" />
                <div className="logo-top">
                    Gabriel 
                </div>
                <div className="logo-bottom">
                    Brolo 
                </div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                </Col>            
            </Row>
            <Row className="logo-links">
                <Col xs={4} sm={4} md={4} lg={4}>
                
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} className="text-align-center">
                    <a target="_blank" href="https://www.linkedin.com/in/gbrolo/">
                        <FaLinkedinIn />
                    </a>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} className="text-align-center">
                    <a target="_blank" href="https://github.com/gbrolo">
                        <FaGithub />
                    </a>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4}>
                
                </Col>
            </Row>
        </Fade>
    );
  }
}

export default Logo;