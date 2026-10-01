import { useEffect } from "react";

// Agrega la clase "is-visible" a los elementos [data-reveal] cuando entran en pantalla.
// El contenido es visible por defecto; la animación solo se activa si hay JS y no se pidió movimiento reducido.
export function useReveal() {
    useEffect(() => {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduced || !("IntersectionObserver" in window)) return;

        const root = document.documentElement;
        root.classList.add("reveal-ready");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        );

        document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
            root.classList.remove("reveal-ready");
        };
    }, []);
}
