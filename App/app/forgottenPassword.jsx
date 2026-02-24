import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useState } from "react";
import InputField from "./Components/inputfieldComponent";
import AntDesign from "@expo/vector-icons/AntDesign";
import ImageLogo from "./Components/imageLogo";


export default function ForgotPassword() {
    const [email, setEmail] = useState("");

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.imageContainer}>
                                        <ImageLogo/>
                        </View>

            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <AntDesign name="left" size={18} color="#333" />
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.title}>Forgot password</Text>
            <Text style={styles.subtitle}>Please enter your email to reset the password</Text>

            {/* Input */}
            <InputField
                label="Your Email"
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            {/* Reset Button */}
            <TouchableOpacity style={styles.resetButton} onPress={() => router.push("/otpverification")}>
                <Text style={styles.resetButtonText}>Reset Password</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f6ff",
        paddingHorizontal: 24,
        paddingTop: 60,
    },
    imageContainer:{
        justifyContent: "center",
        marginBottom:60
    },
    backButton: {
        width: 38,
        height: 38,
        borderRadius: 20,
        backgroundColor: "#e8e8e8",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#000",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: "#888",
        marginBottom: 28,
    },
    resetButton: {
        backgroundColor: "#007AFF",
        paddingVertical: 16,
        borderRadius: 30,
        alignItems: "center",
        marginTop: 8,
    },
    resetButtonText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "700",
    },
});