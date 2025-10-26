import { CSSProperties, ReactNode } from "react";
import ProjectContainerWrapper from "./ProjectContainerWrapper";

const fallbackTitle = "--- [ MISSING PROJECT NAME ] ---";

const width = '90%';
const maxWidth = '100%';

interface ProjectContainerProps {
    title?: string;
    children?: ReactNode;
    src?:string;
    href?:string; // Used if linking to a webpage (pass in frame image to src)
}

const headerStyle: CSSProperties = {
    textAlign: 'center',
    marginBottom: '-35px',
};

const srcStyle: CSSProperties = {
    width: width,
    maxWidth: maxWidth,
    aspectRatio: 16/9,
}

const linkStyle: CSSProperties = {
    width: width,
    maxWidth: maxWidth,
    height: 'auto',
    cursor: 'pointer',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
}

const IFrame = ({ src, title }: { src: string, title: string }) => {
    return (<iframe 
        src={src} 
        name={title} 
        style={srcStyle}
        scrolling="no"
        frameBorder="0"
        allowFullScreen
    >   
        <p>Your browser does not support iframes.</p>
    </iframe>

    )
}

const HRef = ({ href, src }: { href: string, src?: string }) => {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'block', textAlign: 'center' }}
        >
            {src && (
                <img 
                    src={src} 
                    alt="Project preview" 
                    style={linkStyle}
                />
            )}
        </a>
    );
}

export default function ProjectContainer({ title = fallbackTitle, children = undefined, src = '', href }: ProjectContainerProps) {


    return (<>
        <h1 style={headerStyle}>
            {title}
        </h1>
        <ProjectContainerWrapper>
            {children}
            {!!src && !href && 
                <IFrame src={src} title={title}/>
            }
            {!!href && <HRef href={href} src={src}/>}
        </ProjectContainerWrapper>
    </>);
}