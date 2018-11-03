import React, { Component } from 'react';
import { Fade, Container, Row, Col } from 'reactstrap';
import Loader from 'react-loader-spinner';
import Logo from '../../components/Logo/Logo';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './home_page.css';

import { getProjects } from '../../firebase/ProjectsProvider/ProjectsProvider';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      loader: true
    }
  }

  componentDidMount() {
    this.getProjects();
  }

  getProjects() {
    getProjects().then(projects => {
      let projectsFixed = [];
      let row = [];
      for (var i = 0; i < projects.length; i++) {
        var j = i+1;
        row.push(projects[i]);
        if (j%4 == 0) {
          projectsFixed.push(row);
          row = [];
        } 
      }
      if (row.length > 0) { projectsFixed.push(row) }
      this.setState({ projects: projectsFixed, loader: false });
    })
    .catch(error => alert(error))
  }

  render() {
    console.log(this.state);
    return (
      <div className="wrapper-behind">
        <div className="wrapper">
          <Logo />
        </div>
        <Fade in={true} timeout={100}>
          <div className="wrapper">
            {
              this.state.loader &&
              <Fade in={true} timeout={50}>
                <Loader 
                  type="Puff"
                  color="#edf5e1"
                  height="40"	
                  width="40"
                />
              </Fade>
            }

            {
              !this.state.loader &&
              <Container>
                {
                  this.state.projects.map((projectRow, index) => {
                    return(
                      <Row key={index} style={{ marginBottom: '2%' }}>
                        {
                          projectRow[0] &&
                          <Col xs={12} sm={6} md={6} lg={3}>
                            <ProjectCard data={projectRow[0]} />
                          </Col>
                        }
                        {
                          projectRow[1] &&
                          <Col xs={12} sm={6} md={6} lg={3}>
                            <ProjectCard data={projectRow[1]} />
                          </Col>
                        }
                        {
                          projectRow[2] &&
                          <Col xs={12} sm={6} md={6} lg={3}>
                            <ProjectCard data={projectRow[2]} />
                          </Col>
                        }                        
                        {
                          projectRow[3] &&
                          <Col xs={12} sm={6} md={6} lg={3}>
                            <ProjectCard data={projectRow[3]} />
                          </Col>
                        }
                      </Row>
                    )
                  })
                }
              </Container>
            }
          </div>
        </Fade>
      </div>
    );
  }
}

export default HomePage;