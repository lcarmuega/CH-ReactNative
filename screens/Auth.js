import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Modal from '../components/Modal';
import { colors } from '../styles/colors';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorModal, setErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [loginView, setLoginView] = useState(false);

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorModal(true);
                setErrorMessage(errorMessage);
            })
            .finally(() => {
                setEmail("");
                setPassword("");
            });
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorModal(true);
                setErrorMessage(errorMessage);
            })
            .finally(() => {
                setEmail("");
                setPassword("");
            });
    }

    const handleCloseModal = () => {
        setErrorModal(false);
    }

    return (
        <View style={styles.container}>
            {errorModal ? <Modal message={errorMessage} handleCloseModal={handleCloseModal} /> :
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{loginView ? "Login" : "Sign Up"}</Text>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Ingrese su email">
                        </TextInput>
                    </View>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            value={password}
                            secureTextEntry={true}
                            onChangeText={setPassword}
                            placeholder="Ingrese su contraseña">
                        </TextInput>
                    </View>
                    {loginView ?
                        <TouchableOpacity onPress={handleLogin}
                            style={styles.button}>
                            <Text>Login</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={handleSignUp}
                            style={styles.button}>
                            <Text>Sign Up</Text>
                        </TouchableOpacity>
                    }
                    <View>
                        <Text style={styles.text}>{loginView ? "No tenes cuenta?" : "Ya tenes cuenta?"}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => setLoginView(!loginView)}>
                            <Text>{loginView ? "Sign Up" : "Login"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </View>
    )
}

export default Auth;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: colors.superLightBrown
    },
    innerContainer: {
        marginTop: 50
    },
    title: {
        fontSize: 25,
        margin: 5,
    },
    textInput: {
        margin: 5,
    },
    textInputContainer: {
        borderWidth: 0.5,
        borderColor: "black",
        margin: 2,
        borderRadius: 10,
        width: 250
    },
    button: {
        margin: 5,
        borderWidth: 0.5,
        borderColor: "black",
        borderRadius: 8,
        width: 100,
        alignItems: 'center',
        backgroundColor: colors.lilac
    },
    text: {
        marginTop: 20,
        margin: 5,
        fontWeight: 'bold'
    }
});