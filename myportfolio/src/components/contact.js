import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
          <Grid className="contact-grid">
            <Cell col = {6}>
              <h2>Kexin(Sean) Xu</h2>
              <img src = "https://raw.githubusercontent.com/xu9449/myPortfolio/master/myportfolio/public/circle-cropped.png"
              alt = "avatar"
              style = {{height: '250px'}}
              />
              <p style = {{wideth: '75%', margin: 'auto', paddingTop: '1em'}}>
                Software Developer with a Master of Computer Science degree, with strong programming and problem-solving skills. Expertise in full-stack and backend application developments with 1 year of related experience. Passionate about developing innovative programs and writing clean and efficient programs using Java, JavaScript, SQL.
              </p>
            </Cell>

            <Cell col={6}>
              <h2>Contact Me</h2>
              <hr/>

              <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fa fa-phone-square" aria-hidden="true"/>
                      (202) 288-4624
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fa fa-envelope" aria-hidden="true"/>
                      xu9449@gmail.com
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fa fa-skype" aria-hidden="true"/>
                      2c1631eead44db0e
                    </ListItemContent>
                  </ListItem>


                </List>
              </div>
            </Cell>
          </Grid>

      </div>
    )
  }
}

export default Contact;
