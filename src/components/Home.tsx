import { JSX } from "react";
import ProjectContainer from "./ProjectContainer.tsx";

const testText1 = `Lorem ipsum dolor sit amet consectetur adipiscing elit.
Quisque faucibus ex sapien vitae pellentesque sem placerat.\n\n
In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada
lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
litora torquent per conubia nostra inceptos himenaeos.`

function Home(): JSX.Element {
    return (
        <div>

            <h1>Welcome to My Portfolio</h1>
            <p>This is the home page</p>
            <ProjectContainer>
                {testText1} 
                <br/><br/>
                {testText1}
            </ProjectContainer>
        </div>
    )
}

export default Home
