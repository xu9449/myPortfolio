import React, { Component } from 'react';
import{Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div>
          <Grid>
            <Cell  col = {4}>
              <div style={{textAlign: 'center'}}>
                <img
                  src = "https://raw.githubusercontent.com/xu9449/myPortfolio/master/myportfolio/public/circle-cropped.png"
                  alt = "avatar"
                  style = {{height: '250px'}}
                />
              </div>
              <h2 style= {{paddingTop: '0.3em'}}>Kexin Xu</h2>
              <h4 tyle = {{color: 'grey'}}>Programmer</h4>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              <p>Software Developer with a Master of Computer Science degree, with strong programming and problem-solving skills. Expertise in full-stack and backend application developments with 1 year of related experience. Passionate about developing innovative programs and writing clean and efficient programs using Java, JavaScript, SQL.</p>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              <h5>Address</h5>
              <p>2950 Van Ness Street, Washington D.C.</p>
              <h5>Phone</h5>
              <p>(202) 288-4624</p>
              <h5>Email</h5>
              <p>xu9449@gmail.com</p>
              <h5>Web</h5>
              <p>kexinxu.com</p>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            </Cell>
            <Cell className="resume-right-col" col = {8}>
              <h2>Education</h2>
              <Education
                startYear= {2017}
                endYear = {2019}
                schoolName = "George Washington University"
                schoolDescription = "Master of Science, Computer Science"
              />
              <Education
                startYear= {2012}
                endYear = {2016}
                schoolName = "Jiangnan University"
                schoolDescription = "Bachelor of Engineering, Electronic Engineering "
              />
              <hr style = {{borderTop: '3px solid #e22947'}}/>

              <h2>Experience</h2>
                <Experience
                  startYear = {2018.05}
                  endYear = {2018.08}
                  jobName = "Software Developer Intern"
                  jobDescription= "• Developed drivers on Windows in C# to help communicating and controlling devices through GPIB Protocol."
                  jobDescription2="• Implemented data processing and data visualizations using R for team presentation at Department Meetings."



                />
                <Experience
                  startYear = {2019.01}
                  endYear = {2020.03}
                  jobName = "Software Developer Consultant"
                  jobDescription=  "• Delivered world bank’s first virtual reality Application utilizing Unity Engine and react-VR, to facilitate Staff Education and Knowledge Passing."
                  jobDescription2= "• Designed and implemented new website for OLC group and coordinated multiple teams to finalize the UI design created through HTML, CSS, JavaScript."
                  jobDescription3= "• Designed applications’ user interface by using Blender, Illustrator and Photoshop."
                  jobDescription4= "• Remodeled Webinar and Podcast with Windows Form Application in C#, which successfully increased service procedure by 30%."
                />
                <h2>Skills</h2>
                <Skills
                  skill= "Java"
                  progress = {100}
                />
                <Skills
                  skill= "Spring"
                  progress = {90}
                />
                <Skills
                  skill= "SQL"
                  progress = {75}
                />
                <Skills
                  skill= "C#"
                  progress = {50}
                />
                <Skills
                  skill= "React"
                  progress = {40}
                />

            </Cell>

          </Grid>


      </div>
    )
  }
}

export default Resume;
