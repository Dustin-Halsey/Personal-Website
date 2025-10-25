import { CSSProperties, JSX } from "react"
import ProjectContainer from "./ProjectContainer"

function Portfolio(): JSX.Element {
    const style: CSSProperties = {
        paddingBottom: '20px',
    };
    
    return (<div style={style}>
    <ProjectContainer title="HeroForge (JS)">
        
    </ProjectContainer>
        <ProjectContainer title="Wacktory (C#)">
            <p> Wacktory™ is a new take on cooperative gameplay that bridges the gap between virtual reality and traditional couch co-op gaming. 
                Thrown into a factory full of chaos and OSHA violations galore, two couch players must work together with their VR counterpart 
                to make colored cubes and fulfill orders for trucks before time runs out.
            </p>
            <p> Wacktory was created by our student group as a capstone project in the Computer Game Design department at the 
                University of California, Santa Cruz (UCSC).  It was demoed at the 
                <a href="https://sammys.soe.ucsc.edu/home">2019 UCSC Games Showcase</a>, the largest student game festival in the country. 
                This two-day event publicly showcased student games developed at the university over the 2018-2019 academic year. 
                Out of the more than 50 games showcased, Wacktory received the <a href="https://sammys.soe.ucsc.edu/2019/awards">
                Grand Prize for "Best Overall Experience"</a> and recognition for placing <a href="https://sammys.soe.ucsc.edu/2019/awards">
                top three in Peer Choice and Design Innovation</a>.
            </p>
            <br/>
            <span>Roles on the project: </span>
            <li > Served as Lead Programmer and Technical Artist for a team of 12, implementing and overseeing the production of the core game systems. </li>
            <li > Responsible for the implementation of all Virtual Reality mechanics and interactions. </li>
            <li > Created Wacktory’s shader system from scratch to give the game its unique cartoony aesthetic.</li>
            <li> Tested and finalized game builds at various stages of production, including submission of the final build to <a href="https://store.steampowered.com/app/1082750/Wacktory/">Steam</a>. </li>
        </ProjectContainer>
        <ProjectContainer title="Alien Invasion (JS) - 2017">
            
        </ProjectContainer>
        <ProjectContainer title="Falling Up (JS) - 2017">
            
        </ProjectContainer>
        <ProjectContainer title="StarCraft II AI Bot (C++) - 2018">
        <iframe 
            src="https://www.youtube.com/embed/1jSNsDg4DbE" 
            title="Custom StarCraft II Bot" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            style={{
                width: '100%',
                height: '56.25vw',
                maxHeight: '80vh',
                aspectRatio: '16/9',
                border: 'none'
            }}
        ></iframe>
        </ProjectContainer>
        <ProjectContainer title="Recedence (GML) - 2017">
            
        </ProjectContainer>
        <ProjectContainer title="Virus Assault (Blitz Basic) - 2015">
            
        </ProjectContainer>
        <ProjectContainer title="This Website (React/TS) - 2025">
            
        </ProjectContainer>
    </div>)
}

export default Portfolio
