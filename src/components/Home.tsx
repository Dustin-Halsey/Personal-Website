import { CSSProperties, JSX } from "react";
import ProjectContainerWrapper from "./ProjectContainerWrapper.tsx";
import Carousel from "./Carousel.tsx";

const testText1 = `Lorem ipsum dolor sit amet consectetur adipiscing elit.
Quisque faucibus ex sapien vitae pellentesque sem placerat.\n\n
In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada
lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
litora torquent per conubia nostra inceptos himenaeos.`

function Home(): JSX.Element {

    const containerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        gap: '2rem',
        alignItems: 'start',
        padding: '2rem',
        flexWrap: 'wrap',
    };

    const leftColumnStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'justify',
        flex: '3 3',
        minWidth: '300px',
    };

    const rightColumnStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flex: '2 2',
        minWidth: '200px',
    };

    return (
        <div>
            <ProjectContainerWrapper>
                <div style={containerStyle}>
                    <div style={leftColumnStyle}>
                        <p> Welcome to the personal website of Dustin Halsey. I am a software engineer with a background 
                            in computer game design and a strong focus on building interactive, visually rich applications. 
                            I graduated from the University of California, Santa Cruz with a Bachelor of Science in 
                            Computer Science: Computer Game Design, and have spent the past several years working professionally 
                            in the field, including six years as a software engineer at Hero Forge.
                        </p>
                        <p> As a developer, I enjoy working across the stack and taking projects from concept to fully realized 
                            systems. While my foundation is in game development, I have broadened my work to include general 
                            software engineering, web development, and real-time 3D applications. I'm especially drawn to 
                            problems that involve both technical depth and user-facing interactivity, where performance, 
                            design, and implementation all intersect.
                        </p>
                        <p>
                            This site showcases my résumé, portfolio of professional and personal projects, and a collection 
                            of experiments and side work. If you'd like to connect, feel free to reach out.
                        </p>
                    </div>
                    <div style={rightColumnStyle}> 
                        <div style={{fontSize: 'var(--font-size-4xl)', lineHeight: 1}}>
                            Dustin Halsey
                        </div>
                        <div style={{fontSize: 'var(--font-size-xl)', margin: '0', lineHeight: 1}}>
                            Software Engineer
                        </div>
                        <Carousel/>
                    </div>
                </div>
            </ProjectContainerWrapper>
        </div>
    )
}

export default Home
