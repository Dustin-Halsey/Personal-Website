import { CSSProperties } from "react";
import ProjectContainerWrapper from "./ProjectContainerWrapper";

const fallbackProjectName = "--- [ MISSING PROJECT NAME ] ---";

const fallbackBodyText = `Lorem ipsum dolor sit amet consectetur adipiscing elit.
Quisque faucibus ex sapien vitae pellentesque sem placerat.\n\n
In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada
lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
litora torquent per conubia nostra inceptos himenaeos.`;

export default function ProjectContainer() {
    const headerStyle: CSSProperties = {
        textAlign: 'center',
    };

    return (<>
        <h1 style={headerStyle}>
            {fallbackProjectName}
        </h1>
        <ProjectContainerWrapper>
            {fallbackBodyText}
        </ProjectContainerWrapper>
    </>);
}