import { useEffect, RefObject } from 'react';

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: (event: MouseEvent) => void,
) => {
    useEffect(() => {
        const listener = (event: MouseEvent) => {
            const el = ref?.current;
            if (!el || el.contains((event?.target as Node) || null)) {
                return;
            }

            handler(event); // Call the handler only if the click is outside of the element passed.
        };

        document.addEventListener('mousedown', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]); // Reload only if ref or handler changes
};