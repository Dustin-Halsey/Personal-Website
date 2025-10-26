import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import ProjectContainerWrapper from "./ProjectContainerWrapper";

const fallbackTitle = "--- [ MISSING PROJECT NAME ] ---";

const width = '90%';
const maxWidth = '100%';

const headerStyle: CSSProperties = {
    textAlign: 'center',
    marginBottom: '-35px',
};

const srcStyle: CSSProperties = {
    width: width,
    maxWidth: maxWidth,
    aspectRatio: 16/9,
    border: 'none'
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
        allowFullScreen
        loading="lazy"
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
                    loading="lazy"
                />
            )}
        </a>
    );
}

interface ProjectContainerProps {
    title?: string;
    children?: ReactNode;
    src?:string;  // Placed into an iFrame
    href?:string; // Used if linking to a webpage (pass in frame image to src)
}

export default function ProjectContainer({ title = fallbackTitle, children = undefined, src = '', href }: ProjectContainerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisible(true);
              observer.disconnect();
            }
          },
          { rootMargin: "400px" } // start loading 400 px before entering viewport
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
      }, []);

    return (<>
        <h1 style={headerStyle}>
            {title}
        </h1>
        {visible && <ProjectContainerWrapper ref={ref}>
            {children}
            {!!src && !href && 
                <IFrame src={src} title={title}/>
            }
            {!!href && <HRef href={href} src={src}/>}
        </ProjectContainerWrapper>}
        {!visible && <div ref={ref} style={{ height: '300px', margin: '50px auto' }} />}
    </>);
}