import { CSSProperties, ReactNode } from "react";
import ProjectContainerWrapper from "./ProjectContainerWrapper";

const fallbackTitle = "--- [ MISSING PROJECT NAME ] ---";

interface ProjectContainerProps {
    title?: string;
    children?: ReactNode;
}

export default function ProjectContainer({ title = fallbackTitle, children = undefined }: ProjectContainerProps) {
    const headerStyle: CSSProperties = {
        textAlign: 'center',
    };

    return (<>
        <h1 style={headerStyle}>
            {title}
        </h1>
        <ProjectContainerWrapper>
            {children}
        </ProjectContainerWrapper>
    </>);
}