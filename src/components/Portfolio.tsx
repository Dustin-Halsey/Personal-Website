import { CSSProperties, JSX } from "react"
import ProjectContainer from "./ProjectContainer"

function Portfolio(): JSX.Element {
    const style: CSSProperties = {
        paddingBottom: '20px',
    };
    
    return (<div style={style}>
        <ProjectContainer 
            title="HeroForge (JS/React) - (2020-2026)"
            src="src/assets/Heroforge001.png"
            href="https://www.heroforge.com/load_config%3D43360789/"
        >
            <p>
                <a href='https://heroforge.com/content/'>Hero Forge</a> is a web-based platform that allows users to design highly customizable tabletop miniatures in 3D. 
                Users can create characters by adjusting a wide range of features such as body type, clothing, gear, poses, and facial details, 
                then view and render them directly in a browser-based 3D editor. Once a design is complete, it can be ordered as a physical 
                3D-printed miniature or downloaded digitally for use in virtual tabletop games.
            </p>
            General roles on the project:
            <ul>
                <li>Developed and maintained features for a custom browser-based 3D rendering engine using WebGL,TypeScript/JavaScript, HTML, CSS, and Python</li>
                <li>Contributed to both front-end interface logic and lower-level engine, rendering, and tooling systems</li>
                <li>Ensured long-term backward compatibility of user save data by carefully designing and evolving systems to avoid breaking existing content</li>
                <li>Implemented custom shaders to control lighting, materials, and visual appearance within the web-based 3D booth.</li>
                <li>Collaborated with artists and designers to improve UX usability and visual fidelity of character customization tools.</li>
            </ul>
            <br></br>
            Notable Large Project Contributions:
            <br></br>
            <a href='https://www.youtube.com/watch?v=3DmjJDi-hug'>Kitbash:</a>
            <ul>
                <li>
                    Implemented the ability to arbitrarily place and manipulate any 3D asset on the site
                </li>
                <li>
                    Rebuilt our 3D manipulator tools for a more intuitive user controls when working directly in the 3D space.
                </li>
                <li>
                    Cross-built the supportive 2D UI functionality that also allows for the same full asset manipulation from a simple UI panel.
                </li>
            </ul>
            <a href='https://www.youtube.com/watch?v=MzaMsYxnQXA'>Face Customizer:</a>
            <ul>
                <li>
                    Improved UX functionality of the tool by creating 3D "pads" on the face to highlight which regions of the face are edited.
                </li>
                <li>
                    Added 3D manipulation functionality where the user can grab these "pads" with their cursor to deform the facial regions in realtime 3D
                </li>
            </ul>
           
        </ProjectContainer>
        {/* ------------------------------------------------------------------------------------------------------- */}
        <ProjectContainer 
            title="Wacktory (C#) - 2019"
            src="https://www.youtube.com/embed/bkwjrYXHHF0"
        >
            <p> <a href="https://www.wacktory.com/"> Wacktory™</a> is a new take on cooperative gameplay that bridges the gap between virtual reality and traditional couch co-op gaming. 
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
            <li> Tested and finalized game builds at various stages of production, including submission of the final build to 
                <a href="https://store.steampowered.com/app/1082750/Wacktory/">Steam</a>. 
            </li>
            <br/>
        </ProjectContainer>
        {/* ------------------------------------------------------------------------------------------------------- */}
        <ProjectContainer 
            title="Alien Invasion (JS) - 2017"
            src = "/games/alienInvasion/index.html"
        >
            <p> Alien Invasion is a top-down, rogue-lite shooter where the player must escape the city while fighting waves of enemies. 
                Built with the Phaser framework for JavaScript, Alien Invasion offers a fast paced shoot-em-up experience playable 
                directly in-browser and is available to play below!
            </p>
            <p> Developed as a team of five at UCSC, we were tasked with creating a game whose theme relates to current events.
                With the presidential election being the forefront of current events at the time, Alien Invasion is a satirical 
                illustration of how many citizens perceived Donald Trump's approach to external affairs policies.
            </p>
            Roles on the project:
            <li>Created the majority of art assets including the player, enemies, and environment.</li>
            <li>Handled Level design and implementation of tilemap based functionality of displaying levels</li>
            <li>Implemented some of the Functionality for weapon handling and tracking.</li>


        </ProjectContainer>
        {/* ------------------------------------------------------------------------------------------------------- */}
        <ProjectContainer 
            title="Falling Up (JS) - 2017"
            src = "/games/fallingUp/EndlessRunnerGame/index.html"
        >
            <p>
            An endless runner game created as a solo project over the span of a week to familiarize myself with the Phaser 
            framework for JavaScript. The level is procedurally generated from predefined segments and checks to ensure that 
            every pattern is possible to overcome. Try to stay alive as long as possible by inverting gravity to avoid 
            running/falling off the screen. The game is fully playable in-browser and is available to try below! 
            *Artwork and sounds taken from opengameart.org
            </p>
            
        </ProjectContainer>
        {/* ------------------------------------------------------------------------------------------------------- */}
        <ProjectContainer 
            title="StarCraft II AI Bot (C++) - 2018"
            src="https://www.youtube.com/embed/1jSNsDg4DbE" 
        >
            <p> Courtesy of Blizzard Entertainment, we utilized Starcraft II's open API to develop our very own Starcraft II bot. 
                Using this API, we implemented our AI by employing a behavioral tree approach where our bot would prioritize tasks 
                based upon what it knows about the game state at any given time. As Starcraft II is a game of imperfect 
                information due to its "fog of war" mechanic for hiding enemy units out of the range of view, 
                we taught our AI to seek out information in real-time to decide wether or not its better to attack, expand, defend, etc.
            </p>

            <p> We set out with the goal of having our AI beat Blizzard's easy bot and focused specifically on having our bot play as 
                the Terran race to do so. In the end, our AI is able to confidently and consistently beat Blizzard's official bots 
                set to medium difficulty. Our AI works on any map and against any opposing race with the only restriction being our 
                bot must play the Terran race. Check it out in action below!
            </p>
            Roles on the project:
            <li>Handled enemy base scouting procedure to learn where to attack.</li>
            <li>Implemented combat unit micro play for fighting enemy's army which included advanced techniques such as stutter stepping for marines.</li>
        
        </ProjectContainer>
        {/* ------------------------------------------------------------------------------------------------------- */}
        <ProjectContainer 
            title="Recedence (GML) - 2017"
            src="https://www.youtube.com/embed/b4rHiEosOH4"
        >
            Recedence is a simple combat-driven platformer built in Gamemaker Studio by a team of two as a means to practice 
            game development in a team environment. While the game itself isn't anything impressive in its own light, the 
            game served as a core foundation for learning git file management and splitting tasks between people.
            <br></br>
            <br></br>
            Roles on the project:
            <li>Artwork and level layout for all four levels.</li>
            <li>AI pathing and combat towards the player.</li>
            
        </ProjectContainer>
        {/* ------------------------------------------------------------------------------------------------------- */}
        <ProjectContainer 
            title="Virus Assault (Blitz Basic) - 2015"
            src="https://www.youtube.com/embed/Rbgxp8KMgQc"
        >
            Developed with the help of two friends in high school as my first "complete" video game, Virus Assault is a top-down tower defense game where you play as an IT worker named "Bob" who must protect his system from the infiltrating viruses. Created for the 2015 Future Business Leaders of America Leadership Conference's state competition for the event "Computer Game & Simulation, our team showcased our game live in front of a panel of judges. Here, we achieved first place in the state of California over all the other competing schools. This qualified us to present at the National Leadership Conference in Chicago where only the top three teams from each state could advance. Out of the 75 teams who qualified and competed nationally, we placed fifth in the nation.

            <li>I handled for all of the coding for this project as well as some of the artwork.</li>
            
        </ProjectContainer>
        {/* ------------------------------------------------------------------------------------------------------- */}
        <ProjectContainer 
            title="This Website (React/TS) - 2026"
            src="src/assets/thisWebsite.png"
            >
            <p>
                I'm naturally inclined to explore how things work, and I aim to develop a deep understanding of every project I take on. 
                For me, a finished product holds limited value if I don't fully understand the process behind its creation. With that mindset, 
                I fully built this website myself from the ground. This allows me to maintain full ownership over both its design and implementation.
            </p>
            
            <li>This website was built using HTML, CSS, TypeScript, and React, and bundled with Vite for fast development and optimized builds.</li>
            
            
        </ProjectContainer>
    </div>)
}

export default Portfolio
