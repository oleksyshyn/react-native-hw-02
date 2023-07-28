import { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    const [isPasswordShow, setIsPasswordShow] = useState(true);
    const [isKeyboardShow, setIsKeyboardShow] = useState(false);

    const handleEmail = (text) => setEmail(text);
    const handlePassword = (text) => setPassword(text);

    const handleEmailFocus = () => {
        setIsEmailFocused(true);
        setIsKeyboardShow(true);
    }

    const handleEmailBlur = () => {
        setIsEmailFocused(false);
    }

    const handlePasswordFocus = () => {
        setIsPasswordFocused(true);
        setIsKeyboardShow(true);
    }

    const handlePasswordBlur = () => {
        setIsPasswordFocused(false);
    }

    const showPasswordToggle = () => {
        setIsPasswordShow(!isPasswordShow);
    };

    const keyBoardHide = () => {
        setIsKeyboardShow(false);
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={keyBoardHide}>
            <View style={styles.registerContainer}>
                
                <Text style={styles.registerTitle}>Увійти</Text>

                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >

                    <View>
                        <TextInput
                            value={email}
                            placeholder="Адреса електронної пошти"
                            onChangeText={handleEmail}
                            onFocus={handleEmailFocus}
                            onBlur={handleEmailBlur}
                            style={{
                                ...styles.input,
                                borderColor: isEmailFocused ? "#FF6C00" : "#E8E8E8", 
                                backgroundColor: isEmailFocused ? "#FFFFFF" : "#F6F6F6",
                            }}
                        />
                        <View
                            style={{
                                ...styles.showPasswordContainer,
                                marginBottom: isKeyboardShow ? 120 : 89,
                            }}
                        >
                            <TextInput
                                value={password}
                                placeholder="Пароль"
                                onChangeText={handlePassword}
                                secureTextEntry={isPasswordShow}
                                onFocus={handlePasswordFocus}
                                onBlur={handlePasswordBlur}
                                style={{
                                    ...styles.input,
                                    borderColor: isPasswordFocused ? "#FF6C00" : "#E8E8E8", 
                                    backgroundColor: isPasswordFocused ? "#FFFFFF" : "#F6F6F6",   
                                }}
                            />
                            <TouchableOpacity
                                onPress={showPasswordToggle}
                                accessibilityLabel="Показати пароль"
                            >
                                <Text style={styles.showPasswordText}>Показати</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
                    

                    <TouchableOpacity
                        accessibilityLabel="Увійти"
                        style={styles.registerButton}
                    >
                        <Text style={styles.registerButtonText}>Увійти</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        accessibilityLabel="Немає акаунту? Зареєструватися"
                        style={{
                            marginBottom: isKeyboardShow ? 225 : 148,
                        }}
                    >
                        <Text style={styles.loginLink}>Немає акаунту? Зареєструватися</Text>
                    </TouchableOpacity>
            
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    registerContainer: {
        position: "relative",
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 16,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    registerTitle: {
        fontFamily: "Roboto",
        fontSize: 30,
        marginTop: 32,
        marginBottom: 32,
        fontWeight: "500",
        textAlign: "center",
    },
    input: {
        width: "100%",
        fontFamily: "Roboto",
        height: 50,
        padding: 16,
        fontSize: 16,
        backgroundColor: "#F6F6F6",
        marginBottom: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E8E8E8",
    },
    showPasswordContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "nowrap",
        width: "100%",
        backgroundColor: "#F6F6F6",
        borderRadius: 8,
        border: "1px solid #E8E8E8",
        position: "relative",
    },
    showPasswordText: {
        position: "absolute",
        fontFamily: "Roboto",
        top: 14,
        right: 16,
        height: 25,
        fontSize: 16,
        color: "#1B4371",
    },
    registerButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF6C00",
        width: "100%",
        height: 48,
        borderRadius: 100,
        marginBottom: 16,
    },
    registerButtonText: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Roboto",
    },
    loginLink: {
        color: "#1B4371",
        fontSize: 16,
        textDecorationLine: "none",
        textAlign: "center",
    },
});

export default Login;