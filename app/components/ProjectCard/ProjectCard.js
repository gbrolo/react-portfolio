import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardText, Fade } from 'reactstrap';
import { FaExternalLinkAlt, FaGithub, FaCodepen } from 'react-icons/fa';
import './project_card.css';

class ProjectCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fadeIn: true,
        }
    }

    render() {
        return (
            <Fade in={this.state.fadeIn} timeout={1000} className="wrapper-card">
                <div >
                    <Card className="card-inner">
                        <CardBody>       
                            <div className="roboto-font year-container">
                                { this.props.data.year }
                            </div>                                                 
                            <CardTitle className="roboto-condensed-font title-text">{ this.props.data.title }</CardTitle>                        
                            <div className="links-container">
                                {
                                    this.props.data.url &&
                                    <a target="_blank" href={this.props.data.url}>
                                        <FaExternalLinkAlt />
                                    </a>
                                }
                                {
                                    this.props.data.github &&
                                    <a target="_blank" href={this.props.data.github}>
                                        <FaGithub />
                                    </a>
                                }
                                {
                                    this.props.data.codepen &&
                                    <a target="_blank" href={this.props.data.codepen}>
                                        <FaCodepen />
                                    </a>
                                }
                            </div>
                            <CardText className="abel-font desc-text">{ this.props.data.description }</CardText>                            
                        </CardBody>
                    </Card>
                </div>
            </Fade>
        );
    }
}

export default ProjectCard;