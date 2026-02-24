import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import ImageLogo from "./Components/imageLogo";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OTPVerification() {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);

    const handleOtpChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.imageContainer}><ImageLogo/></View>

            {/* Header */}
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Verify OTP</Text>
                <View style={styles.activeUnderline} />
            </View>

            {/* Subtitle */}
            <Text style={styles.subtitle}>
                Enter the 6-digit code sent to your email/phone
            </Text>

            {/* OTP Input Boxes */}
            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpBox}
                        value={digit}
                        onChangeText={(value) => handleOtpChange(value, index)}
                        keyboardType="numeric"
                        maxLength={1}
                    />
                ))}
            </View>

            {/* Verify Button */}
            <TouchableOpacity style={styles.verifyButton} onPress={() => router.push("/newPassword")}>
                <Text style={styles.verifyButtonText}>Verify</Text>
            </TouchableOpacity>

            {/* Resend Code */}
            <View style={styles.resendContainer}>
                <Text style={styles.resendText}>Didn't receive code? </Text>
                <TouchableOpacity>
                    <Text style={styles.resendLink}>Resend</Text>
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
        width: 80,
    },

    // Subtitle
    subtitle: {
        fontSize: 14,
        color: "#888",
        marginBottom: 32,
        lineHeight: 21,
    },

    // OTP Inputs
    otpContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32,
    },
    otpBox: {
        width: 48,
        height: 56,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "700",
        color: "#000",
        backgroundColor: "#fff",
    },

    // Verify Button
    verifyButton: {
        backgroundColor: "#007AFF",
        paddingVertical: 16,
        borderRadius: 30,
        alignItems: "center",
        marginBottom: 28,
    },
    verifyButtonText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "700",
    },

    // Resend
    resendContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    resendText: {
        color: "#888",
        fontSize: 14,
    },
    resendLink: {
        color: "#007AFF",
        fontWeight: "700",
        fontSize: 14,
    },
});
