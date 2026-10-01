import { useEffect, useState } from "react";

// Devuelve la clave de la sección que ocupa el centro de la pantalla.
export function useActiveSection(sections: Record<string, React.RefObject<HTMLElement | null>>) {
    const [active, setActive] = useState<string>("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const key = (entry.target as HTMLElement).dataset.section;
                        if (key) setActive(key);
                    }
                });
            },
            { rootMargin: "-50% 0px -50% 0px" }
        );

        Object.entries(sections).forEach(([key, ref]) => {
            if (ref.current) {
                ref.current.dataset.section = key;
                observer.observe(ref.current);
            }
        });

        return () => observer.disconnect();
    }, [sections]);

    return active;
}
