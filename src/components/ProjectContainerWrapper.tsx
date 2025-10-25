import { CSSProperties, ReactNode } from "react";

interface ProjectContainerWrapperProps {
    children: ReactNode;
}

export default function ProjectContainerWrapper({ children }: ProjectContainerWrapperProps) {

    const style: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(var(--gradient-degrees), 
        var(--background-secondary) 0%, 
        color-mix(in srgb, var(--background-secondary) var(--gradient-lighten-percentage), #ffffff) 50%, 
        var(--background-secondary) 100%)`,
        boxShadow: '4px 4px 8px color-mix(in srgb, var(--background-secondary) 0%, #000000 15%), inset 2px 2px 4px color-mix(in srgb, var(--background-secondary) 0%, #ffffff 10%)',
        padding: '2rem',
        margin: '50px auto',
        maxWidth: '1200px',
        width: 'calc(100% - 100px)',
    };


    return (
        <>
            <div style={style}>
                {children}
            </div>
        </>
    );
}