import { CSSProperties, ReactNode } from "react";
import ProjectContainerWrapper from "./ProjectContainerWrapper";

const fallbackTitle = "--- [ MISSING PROJECT NAME ] ---";

interface ProjectContainerProps {
    title?: string;
    children?: ReactNode;
    src?:string;
}

const headerStyle: CSSProperties = {
    textAlign: 'center',
    marginBottom: '-35px',
};

const srcStyle: CSSProperties = {
    width: '90%',
    aspectRatio: 16/9,
    border: 'none',
    overflow: 'hidden'
}

export default function ProjectContainer({ title = fallbackTitle, children = undefined, src = '' }: ProjectContainerProps) {

    return (<>
        <h1 style={headerStyle}>
            {title}
        </h1>
        <ProjectContainerWrapper>
            {children}
            {!!src && <iframe 
                src={src} 
                name="bestgameever" 
                style={srcStyle}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
            >   
                <p>Your browser does not support iframes.</p>
            </iframe>}
        </ProjectContainerWrapper>
    </>);
}