import { CSSProperties, JSX } from "react"
import ProjectContainerWrapper from "./ProjectContainerWrapper"

function Resume(): JSX.Element {
    const style: CSSProperties = {
        textAlign: 'left',
    };

    return (
        <ProjectContainerWrapper style={style}>
            <h2>Education</h2>
            University of California, Santa Cruz 2019
            <ul>
                <li>BS - Honors in Computer Science: Computer Game design</li>
                <li>Relevant Courses in: Computer Graphics, Game AI, 3D Modeling/Animation, Game Systems,
                    Distributed Systems, Digital Audio, Mobile Applications</li>
            </ul>

            {/*-------------------------------------------------------------*/}

            <h2>Work Experience:</h2>

            Software Engineer — Unannounced Game Project | 2024 - Present
            <ul>
                <li>Designed and implemented UI/UX systems for a game built around HeroForge-created miniatures. </li>
                <li>Developed engine tools and workflows to support gameplay systems and content iteration. </li>
                <li>Created shaders for visualizing gameplay elements (e.g., ground movement indicators, spatial feedback)</li>
                <li>Collaborated with design and art teams to ensure intuitive player interactions and consistent visual language</li>
                <li>Contributed to both front-end interface logic and lower-level rendering/tooling systems</li>
            </ul>

            Software Engineer - HeroForge | February 2020 - Present  
            <ul>
                <li>Built and maintained features within a custom browser-based 3D rendering engine for Hero Forge using WebGL,JavaScript,CSS,HTML, and some Python</li>

                <li>Built and enhanced in-house engine tools to support content creation and real-time rendering workflows</li>
            
                <li>Implemented custom shaders to control lighting, materials, and visual appearance within the web-based 3D booth</li>
            
                <li>Major contributor to the design and development of the kitbash system, enabling freeform manipulation and placement of 3D assets</li>

                <li>Collaborated with artists and designers to improve UX usability and visual fidelity of character customization tools</li>
                
            </ul>
            
            {/*-------------------------------------------------------------*/}

            <h2>Project Experience</h2>

            Wacktory | November 2018 - September 2019 <br/>
            <ul>
                <li>Acted as Lead Programmer and Technical Artist for a team of 12, implementing and
                    overseeing the production of core game systems</li>

                <li>Designed the game from the ground up, including early concepting, prototyping,
                    core development, and polish</li>

                <li>Implemented functionality for VR interactions and mechanics</li>

                <li>Engaged in Agile development cycles and led weekly scrum sessions and
                    meetings where we discussed critical design goals and challenges</li>

                <li>Developed shader systems from scratch that gives the game its cartoony feel</li>
            </ul>


            Project Butterfly - VR Research | August 2017 - March 2018 <br/>
            <ul>
                <li>Independently developed a rehabilitative VR Game for the HTC Vive using Unity and
                    C#. The game provided real-time data on the performance of the user and served
                    as a "rehabilitation" tool for people with physical limitations such as cerebral palsy.</li>
                
                <li>Performed formative evaluations/user testing and conducted interviews for Project
                    Butterfly with consenting disabled users.</li>

                <li>Collaborated with multiple Graduate students to develop and test our Unity-based VR
                    project.</li>
            </ul>

        </ProjectContainerWrapper>
    )
}

export default Resume
