import { db } from '../firebase/config'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
import { useState, useEffect } from 'react';

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoadnig] = useState(null)

    //Cleanup
    // deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth();

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }

    //Register User
    const createUser = async (data) => {
        checkIfIsCancelled();

        setLoadnig(true);
        setError(null);

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoadnig(false)

            return user

        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message)

            let systemErrorMessage

            if (error.message.includes("Password")) {
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres."
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "E-mail ja cadastrado"
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde"
            }

            setLoadnig(false)
            setError(systemErrorMessage);
        }
    }

    //Logout user
    const logout = () => {
        checkIfIsCancelled();
        signOut(auth)
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
    }
}