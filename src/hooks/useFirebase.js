import { useEffect, useState } from "react"
import initializeFirebase from "../FIrebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";


initializeFirebase()
const useFirebase = () => {

    const [user, setUser] = useState({})
    const [isLooding, setIsLooding] = useState(true)
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const registeruser = (email, password, name, location, history) => {
        setIsLooding(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setError('')

                // save user in databse
                saveUser(email, name, 'POST')

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
                const user = result.user
                saveUser(user.email, user.displayName, 'PUT')
            }).catch((error) => {

                setError(error.message)

            })
            .finally(() => setIsLooding(false))

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
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

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://afternoon-earth-09168.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    useEffect(() => {
        fetch(`https://afternoon-earth-09168.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    return {
        user,
        registeruser,
        logOut,
        loginUser,
        isLooding,
        error,
        googleLogIn,
        admin,
        token
    }
}
export default useFirebase