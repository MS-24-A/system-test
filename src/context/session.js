import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";
import Session from "../../models/Session";
import { getJWT, removeJWT } from "../../utils/accessToken";

const SessionContext = createContext();

export function SessionProvider({ children }) {
    const router = useRouter();
    const { query } = router;
    const [loading, setLoading] = useState(true);
    const [session, _] = React.useState(new Session(null));

    const removeSession = () => {
        removeJWT();
        setSession(new Session(null));
    }

    const setSession = (user) => {
        const newSession = new Session(user);
        _(newSession);
    }

    const isLoggedIn = () => {
        return session.isLoggedIn() && getJWT()
    }

    useEffect(() => {
        if (!isLoggedIn()) {
            removeSession();
            router.push("/");
        }
        setLoading(false);
    }, []);

    if (loading) {
        return <></>
    }

    return <SessionContext.Provider value={{ session, removeSession, setSession, isLoggedIn }}>
        {children}
    </SessionContext.Provider>
}

/**
 * @returns {{ session: Session, removeSession: Function }}
*/
export default function useSession() {
    const session = useContext(SessionContext);
    return session;
}