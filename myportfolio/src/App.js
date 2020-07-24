import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import Main from './components/main';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom';

class App extends Component{
  render(){
  return (
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white' }} to="/">Kexin Xu</Link>} scroll>
                    <Navigation>
                        <Link style={{textDecoration: 'none', color: 'white',fontSize: "18px" }}to="/resume">RESUME</Link>
                        <Link style={{textDecoration: 'none', color: 'white',fontSize: "18px" }}to="/projects">PROJECTS</Link>
                        <Link style={{textDecoration: 'none', color: 'white',fontSize: "18px" }}to="/contact">CONTACT</Link>
                    </Navigation>
                </Header>
                <Drawer style = {{background: 'white'}}title={<Link style={{textDecoration: 'none', color: '#1d1d1f'}} to="/">Kexin Xu</Link>} scroll>
                    <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>

        </div>

  );
}
}

export default App;
