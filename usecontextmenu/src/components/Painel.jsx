import React, { useState, useEffect } from "react";
import "./styles.css";

const Painel = () => {
    const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

    useEffect(() => {
        document.oncontextmenu = () => setIsContextMenuOpen(true);
        window.onclick = () => setIsContextMenuOpen(false);
    }, []);

    return (
        <>
        <div className="panel">
        <h1>Painel</h1>
            <p>{isContextMenuOpen ? "Aberto" : "fechado"}</p>
        </div>
        </>
    );
};

export default Painel;
