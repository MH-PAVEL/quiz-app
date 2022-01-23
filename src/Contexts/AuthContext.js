import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import "../firebase";

const AuthContext = createContext(false)

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    // signup fumnction
    async function signup(email, pass, username) {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, pass);

        // update profile
        await updateProfile(auth.currentUser, {
            displayName: username,
        });

        const user = auth.currentUser;
        setCurrentUser({
            ...user,
        });
    }

    // login funtion 
    function login(email, pass) {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, pass);
    }


    // logout funtion 
    function logout(email, pass) {
        const auth = getAuth();
        return signOut(auth);
    }
    const value = {
        currentUser,
        signup,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}