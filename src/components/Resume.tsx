import { JSX } from "react"
import ProjectContainerWrapper from "./ProjectContainerWrapper"

function Resume(): JSX.Element {
    return (
        <ProjectContainerWrapper>
            Education <br/>
            University of California, Santa Cruz 2019 <br/>
            BS - Honors in Computer Science: Computer Game design <br/>
            Relevant Courses in: Computer Graphics, Game AI, 3D Modeling/Animation, Game Systems,
            Distributed Systems, Digital Audio, Mobile Applications <br/>


            {/*------------*/}<br/><br/>{/*------------*/}

            Work Experience <br/>

            Software Engineer - HeroForge | February 2020 - Present <br/>

            
            {/*------------*/}<br/><br/>{/*------------*/}


            Project Experience <br/>

            Wacktory | November 2018 - September 2019 <br/>

            Acted as Lead Programmer and Technical Artist for a team of 12, implementing and
                overseeing the production of core game systems <br/>

            Designed the game from the ground up, including early concepting, prototyping,
                core development, and polish <br/>

            Implemented functionality for VR interactions and mechanics <br/>

            Engaged in Agile development cycles and led weekly scrum sessions and
                meetings where we discussed critical design goals and challenges <br/>

            Developed shader systems from scratch that gives the game its cartoony feel <br/>


            {/*------------*/}<br/><br/>{/*------------*/}


            Project Butterfly - VR Research | August 2017 - March 2018 <br/>

            Independently developed a rehabilitative VR Game for the HTC Vive using Unity and
                C#. The game provided real-time data on the performance of the user and served
                as a "rehabilitation" tool for people with physical limitations such as cerebral palsy <br/>

            Performed formative evaluations/user testing and conducted interviews for Project
                Butterfly with consenting disabled users <br/>

            Collaborated with multiple Graduate students to develop and test our Unity-based VR
                project <br/>

        </ProjectContainerWrapper>
    )
}

export default Resume
