import { CSSProperties, ReactNode } from "react";

interface ProjectContainerProps {
    children: ReactNode;
}

export default function ProjectContainer({ children }: ProjectContainerProps) {

    const style: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--background-secondary)',
        padding: '2rem',
    };

    return (
        <div style={style}>
            {children}
        </div>
    );
}