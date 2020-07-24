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
          <CardTitle style={{color: '#FFF', height: '190px', background: 'url(https://www.incapp.in/img/course-icon/sp.jpg) center / cover'}} >YaYa_PetHelper</CardTitle>
          <CardText>
            A Back-End Microservice for animal shelters and rescue groups to record and manage pet’s information.
          </CardText>
          <CardActions>
            <a href="https://github.com/xu9449/YaYa_pethelp" rel="noopener noreferrer" target="_blank">
            <Button colored>Github</Button>
            </a>
            <a href="https://github.com/xu9449/YaYa_pethelp" rel="noopener noreferrer" target="_blank">
            <Button colored>LiveDemo</Button>
            </a>
          </CardActions>
          <CardMenu style = {{color: '#fff'}}>
            <IconButton name= "share" />
          </CardMenu>
        </Card>
        </div>
      )
    } else if(this.state.activeTab === 1){
      return(
        <div  className = "projects-grid">
        <Card shadow={5} style = {{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'white', height: '190px', background: 'url(https://i.ytimg.com/vi/6zfnOrHIUtA/maxresdefault.jpg) center / cover'}} >PenguinTrail</CardTitle>
          <CardText>
            A node.js web application project to search ideal trails and update preference.
          </CardText>
          <CardActions>
            <a href="https://github.com/xu9449/PenguinTrail" rel="noopener noreferrer" target="_blank">
            <Button colored>Github</Button>
            </a>
            <a href="https://penguintrail-v01.herokuapp.com/" rel="noopener noreferrer" target="_blank">
            <Button colored>LiveDemo</Button>
            </a>
          </CardActions>
          <CardMenu style = {{color: '#fff'}}>
            <IconButton name= "share" />
          </CardMenu>
        </Card>
        </div>
      )
    }else if(this.state.activeTab === 2){
      return(
        <div  className = "projects-grid">
        <Card shadow={5} style = {{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{fontSize: '20px', color: 'white', height: '190px', background: 'url(https://blog.bismart.com/hubfs/20190903-MachineLearning.jpg) center / cover'}} >DC-EnergyStarScore-Prediction</CardTitle>
          <CardText>
            We want to build a model that can predict the Energy Star Score of Washington DC's buildings and interpret the result to find the factors which influence the score most.
          </CardText>
          <CardActions>
            <a href="https://github.com/xu9449/DC-EnergyStarScore-Prediction" rel="noopener noreferrer" target="_blank">
            <Button colored>Github</Button>
            </a>
          </CardActions>
          <CardMenu style = {{color: '#fff'}}>
            <IconButton name= "share" />
          </CardMenu>
        </Card>
        </div>
      )
    }else if(this.state.activeTab === 3){
      return(
        <div  className = "projects-grid">
        <Card shadow={5} style = {{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'white', height: '175px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQihOIHD8tKaU7M2YxF7laFkUMSoysdBxLTyw&usqp=CAU) center/cover'}} >OLC_demo</CardTitle>
          <CardText>
            An Unity Project for World Bank Group OLC team, demo and introduce the function of OLC, trying to transfer real life Knowledge into virtual reality.
          </CardText>
          <CardActions>
            <a href="https://github.com/xu9449/VRApplication-OLCdemo" rel="noopener noreferrer" target="_blank">
            <Button colored>Github</Button>
            </a>
          </CardActions>
          <CardMenu style = {{color: '#fff'}}>
            <IconButton name= "share" />
          </CardMenu>
        </Card>
        </div>

      )
    }
  }


  render() {
    return (
      <div className = "category-tabs">
        <Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>Spring</Tab>
          <Tab>MEAN</Tab>
          <Tab>Machine Learning</Tab>
          <Tab>Unity</Tab>
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
