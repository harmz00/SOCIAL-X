import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import ImageLogo from "./Components/imageLogo";
import InputField from "./Components/inputfieldComponent";
import { SafeAreaView } from "react-native-safe-area-context";


export default function ResetPassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.imageContainer}><ImageLogo/></View>

            {/* Header */}
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Reset Password</Text>
                <View style={styles.activeUnderline} />
            </View>

            {/* Subtitle */}
            <Text style={styles.subtitle}>
                Create a new password for your account
            </Text>

            {/* Inputs */}
            <InputField
                label="New Password"
                placeholder="Enter new password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <InputField
                label="Confirm Password"
                placeholder="Retype new password"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />

            {/* Reset Button */}
            <TouchableOpacity style={styles.resetButton} onPress={() => router.push("/signin")}>
                <Text style={styles.resetButtonText}>Reset Password</Text>
            </TouchableOpacity>

            {/* Back to Login */}
            <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={() => router.push("/login")}>
                    <Text style={styles.loginLink}>Back to Sign in</Text>
                </TouchableOpacity>
            </View>

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
    logoPlaceholder: {
        alignItems: "center",
        marginBottom: 30,
    },
    logoText: {
        fontSize: 26,
        fontWeight: "800",
        color: "#007AFF",
        letterSpacing: 2,
    },

    // Header
    headerContainer: {
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
        paddingBottom: 10,
    },
    headerTitle: {
        fontSize: 16,
        color: "#000",
        fontWeight: "700",
        marginBottom: 10,
    },
    activeUnderline: {
        height: 2,
        backgroundColor: "#007AFF",
        borderRadius: 2,
        position: "absolute",
        bottom: -1,
        left: 0,
        width: 120,
    },

    // Subtitle
    subtitle: {
        fontSize: 14,
        color: "#888",
        marginBottom: 28,
        lineHeight: 21,
    },

    // Reset Button
    resetButton: {
        backgroundColor: "#007AFF",
        paddingVertical: 16,
        borderRadius: 30,
        alignItems: "center",
        marginTop: 8,
        marginBottom: 28,
    },
    resetButtonText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "700",
    },

    // Bottom
    bottomContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    loginLink: {
        color: "#007AFF",
        fontWeight: "700",
        fontSize: 14,
    },
});
