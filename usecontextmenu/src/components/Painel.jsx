import React from "react";
import "./styles.css";
import useContextMenuState from "../hooks/useContextMenuState";

const Painel = () => {
    const isContextMenuOpen = useContextMenuState(false);

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
