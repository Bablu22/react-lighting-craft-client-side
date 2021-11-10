import { useEffect, useState } from "react"
import initializeFirebase from "../FIrebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";


initializeFirebase()
const useFirebase = () => {

    const [user, setUser] = useState({})
    const [isLooding, setIsLooding] = useState(true)
    const [error, setError] = useState('')

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const registeruser = (email, password, name, location, history) => {
        setIsLooding(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setError('')

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
            })
            .catch((error) => {

                setError(error.message)

            })
            .finally(() => setIsLooding(false))
    }

    const loginUser = (email, password, location, history) => {
        setIsLooding(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)

                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLooding(false))

    }
    const googleLogIn = (location, history) => {
        setIsLooding(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setError('')
                console.log(result.user);
            }).catch((error) => {

                setError(error.message)

            })
            .finally(() => setIsLooding(false))

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLooding(false)
        });
    }, [])

    const logOut = () => {
        setIsLooding(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            setError(error.message)
        })
            .finally(() => setIsLooding(false))
    }

    return {
        user,
        registeruser,
        logOut,
        loginUser,
        isLooding,
        error,
        googleLogIn
    }
}
export default useFirebase