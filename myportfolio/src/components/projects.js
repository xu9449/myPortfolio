import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {activeTab: 0};
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <div  className = "projects-grid">
        <Card shadow={5} style = {{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#FFF', height: '176px', background: 'url(https://www.incapp.in/img/course-icon/sp.jpg) center / cover'}} >Spring Project #1</CardTitle>
          <CardText>
            A Back-End Microservice for animal shelters and rescue groups to record and manage pet’s information.
          </CardText>
          <CardActions>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style = {{color: '#fff'}}>
            <IconButton name= "share" />
          </CardMenu>
        </Card>
        </div>
      )
    } else if(this.state.activeTab === 1){
      return(
        <div><h1> This is Angular. </h1></div>
      )
    }else if(this.state.activeTab === 2){
      return(
        <div><h1> This is Angular. </h1></div>
      )
    }else if(this.state.activeTab === 3){
      return(
        <div><h1> This is Angular. </h1></div>
      )
    }
  }


  render() {
    return (
      <div className = "category-tabs">
        <Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>Spring</Tab>
          <Tab>React</Tab>
          <Tab>React</Tab>
          <Tab>React</Tab>
      </Tabs>

      <section>
        <Grid calssName = "projects-grid">
          <Cell col={12}>
            <div classname = "content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>

      </section>
      </div>
    )
  }
}

export default Projects;
