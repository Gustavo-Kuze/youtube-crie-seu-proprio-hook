import { useState, useEffect } from "react";

const useContextMenuState = defaultState => {
    const [isContextMenuOpen, setIsContextMenuOpen] = useState(defaultState);

    useEffect(() => {
        document.oncontextmenu = () => setIsContextMenuOpen(true);
        window.onclick = () => setIsContextMenuOpen(false);
    }, []);

    return isContextMenuOpen;
};

export default useContextMenuState;