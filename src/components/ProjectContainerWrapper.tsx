import { CSSProperties, ReactNode, forwardRef } from "react";

interface ProjectContainerWrapperProps {
    children?: ReactNode;
    style?: CSSProperties;
}

const ProjectContainerWrapper = forwardRef<HTMLDivElement, ProjectContainerWrapperProps>(
    ({ children, style: customStyle }, ref) => {

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

        return (
            <div ref={ref} style={{...defaultStyle, ...customStyle}}>
                {children}
            </div>
        );
    }
);

ProjectContainerWrapper.displayName = 'ProjectContainerWrapper';

export default ProjectContainerWrapper;