import { useEffect, useState } from "react";

const useScroolY = () => {
    const [scrollY, setScrollY] = useState({
        scrollY: 0,
    });

    useEffect(() => {
        if (typeof window != 'undefined') {
            function handleScroll() {
                setScrollY({
                    scroll: window.scrollY,
                });
            }
            window.addEventListener("scroll", handleScroll);

            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return scrollY;
}
export default useScroolY;