import { CSSProperties, JSX } from "react";
import ProjectContainerWrapper from "./ProjectContainerWrapper.tsx";

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
        textAlign: 'center',
        flex: '3 3', // flex-grow: 2, flex-shrink: 1, flex-basis: 300px
        minWidth: '300px',
    };

    const rightColumnStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flex: '2 2', // flex-grow: 1, flex-shrink: 1, flex-basis: 200px
        minWidth: '200px',
    };

    const carouselStyle :CSSProperties = {
        aspectRatio: '16/9',
        width: '100%',
        backgroundColor: 'var(--background-secondary)',
        borderRadius: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <div>
            <ProjectContainerWrapper>
                <div style={containerStyle}>
                    <div style={leftColumnStyle}>
                        {testText1} 
                        <br/><br/>
                        {testText1}
                    </div>
                    <div style={rightColumnStyle}> 
                        <div style={{fontSize: 'var(--font-size-4xl)', lineHeight: 1}}>Dustin Halsey</div>
                        <div style={{fontSize: 'var(--font-size-xl)', margin: '0', lineHeight: 1}}>Software Engineer</div>
                        <div style={carouselStyle}>
                            
                        </div>
                    </div>
                </div>
            </ProjectContainerWrapper>
        </div>
    )
}

export default Home
