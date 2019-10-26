import React from "react";
import "./styles.css";
import useContextMenuState from "../hooks/useContextMenuState";

const Sobre = () => {
    const isContextMenuOpen = useContextMenuState(false);

    return (
        <div>
            <div className="panel">
                <h1>Sobre Este App</h1>
                <p>{isContextMenuOpen ? "Aberto" : "fechado"}</p>
                <p className={'texto'}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore in nemo sed amet dignissimos sint, vero, obcaecati quasi neque praesentium tempore corporis eveniet totam, temporibus modi. Tempore molestias iusto pariatur blanditiis sequi ullam voluptatum nisi ab nemo aperiam, ipsum eveniet, quisquam, quaerat veritatis perspiciatis? Quis hic obcaecati omnis, dicta aperiam nesciunt sapiente voluptatibus velit excepturi? Velit quibusdam autem aperiam, delectus iste rem iusto obcaecati saepe. Minus dignissimos, sit facilis rem dolor distinctio nobis libero delectus nesciunt doloribus, suscipit possimus dolore.
                </p>
            </div>
        </div>
    );
};

export default Sobre;
