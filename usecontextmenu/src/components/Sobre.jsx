import React, { useState, useEffect } from "react";
import "./styles.css";

const Sobre = () => {
    const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

    useEffect(() => {
        document.oncontextmenu = () => setIsContextMenuOpen(true);
        window.onclick = () => setIsContextMenuOpen(false);
    }, []);

    return (
        <div>
            <div className="panel">
                <h1>Sobre Este App</h1>
                <p>{isContextMenuOpen ? "Aberto" : "fechado"}</p>
                <p className={'texto'}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Accusantium soluta fuga, sint dolores architecto optio vitae
                    maxime necessitatibus? Sapiente non eum aspernatur
                    dignissimos nemo dolorum accusamus unde iusto id aut?
                </p>
            </div>
        </div>
    );
};

export default Sobre;
