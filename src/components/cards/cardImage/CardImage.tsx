import { useState, type FunctionComponent } from "react";
import "../cards.css";

interface CardImageProps {
    src: string;
    alt: string;
    className: string;
}

// Muestra un esqueleto mientras la imagen carga y un placeholder si no existe o falla
const CardImage: FunctionComponent<CardImageProps> = ({ src, alt, className }) => {
    const [status, setStatus] = useState<"loading" | "loaded" | "error">(src ? "loading" : "error");

    if (status === "error") {
        return (
            <div className={`${className} card-img-placeholder`} role="img" aria-label={alt}>
                <i className="bi bi-image"></i>
                <span>{alt}</span>
            </div>
        );
    }

    return (
        <div className={`card-img-frame ${status === "loading" ? "card-img-skeleton" : ""}`}>
            <img
                className={`${className} ${status === "loading" ? "card-img-hidden" : ""}`}
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setStatus("loaded")}
                onError={() => setStatus("error")}
            />
        </div>
    );
}

export default CardImage;
