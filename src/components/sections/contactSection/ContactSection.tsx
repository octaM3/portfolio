import { useState, type FormEvent, type FunctionComponent } from "react";
import Subtitle from "../../text/subtitle/Subtitle";
import SimpleText from "../../text/simpleText/SimpleText";
import Button from "../../buttons/button/Button";
import IconButton from "../../buttons/iconButton/IconButton";

const ContactSection: FunctionComponent = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const body = `Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
        window.location.href = `mailto:octaviodevcuradelli@gmail.com?subject=${encodeURIComponent(
            "Contacto desde el portfolio"
        )}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div>
            <Subtitle text="Contacto" format="center" type="normal" />

            <div className="contact-grid mt-5">
                <div>
                    <SimpleText
                        color="gray"
                        size="big"
                        text="¿Tenés un proyecto en mente o querés charlar? Escribime y te respondo a la brevedad."
                    />

                    <div className="mt-4">
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="bi bi-envelope"></i>
                            </div>
                            <div>
                                <SimpleText color="gray" size="mini" className="m-0" text="Email" />
                                <SimpleText color="none" size="normal" className="m-0" text="octaviodevcuradelli@gmail.com" />
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="bi bi-geo-alt-fill"></i>
                            </div>
                            <div>
                                <SimpleText color="gray" size="mini" className="m-0" text="Ubicación" />
                                <SimpleText color="none" size="normal" className="m-0" text="Mendoza, Argentina" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <IconButton className="me-2" href="https://github.com/octaM3">
                            <i className="bi bi-github"></i>
                        </IconButton>
                        <IconButton className="me-2" href="https://www.linkedin.com/in/octavio-curadelli-258654288/">
                            <i className="bi bi-linkedin"></i>
                        </IconButton>
                        <IconButton href="mailto:octaviodevcuradelli@gmail.com">
                            <i className="bi bi-envelope"></i>
                        </IconButton>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            className="contact-input"
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            className="contact-input"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            className="contact-textarea"
                            name="message"
                            placeholder="Tu mensaje..."
                            value={form.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <Button type="blue" size="normal" text="Enviar Mensaje" />
                </form>
            </div>
        </div>
    );
};

export default ContactSection;
