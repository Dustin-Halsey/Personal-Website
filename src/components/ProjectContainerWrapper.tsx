import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

const defaultStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: `linear-gradient(var(--gradient-degrees), 
        color-mix(in srgb, var(--background-secondary) 80%, transparent) 0%, 
        color-mix(in srgb, var(--background-secondary) 60%, transparent) 50%, 
        color-mix(in srgb, var(--background-secondary) 80%, transparent) 100%)`,
    boxShadow: `4px 4px 8px color-mix(in srgb, var(--background-secondary) 0%, #000000 15%), 
        inset   2px 2px 4px color-mix(in srgb, var(--background-secondary) 0%, #ffffff 10%)`,
    padding: '2rem',
    margin: '50px auto',
    maxWidth: '1200px',
    width: 'calc(100% - 100px)',
    backdropFilter: 'blur(5px)',
    borderRadius: '0.5rem',
};

interface ProjectContainerWrapperProps {
    children?: ReactNode;
    style?: CSSProperties;
}

function ProjectContainerWrapper({ children, style: customStyle }: ProjectContainerWrapperProps) {
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
            { rootMargin: "400px" } // start loading 400px before entering viewport
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);


    if (!visible) {
        return <div ref={ref} style={{ height: '700px', margin: '50px auto' }} />;
    }

    return (
        <div ref={ref} style={{...defaultStyle, ...customStyle}}>
            {children}
        </div>
    );
}

export default ProjectContainerWrapper;