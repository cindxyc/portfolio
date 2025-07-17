import { useRef, useEffect } from 'react';

const FadeIn = ({ children, duration = 300 }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        element.style.opacity = '0';
        element.style.transition = `opacity ${duration}ms ease-in-out`;

        const timeoutId = setTimeout(() => {
            element.style.opacity = '1';
        }, 0);

        return () => clearTimeout(timeoutId);
    }, [duration]);

    return (
        <div ref={elementRef} style={{ opacity: 0 }}>
            {children}
        </div>
    );
};

export default FadeIn;