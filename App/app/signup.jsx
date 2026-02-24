import { View, Text, TouchableOpacity, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "./Components/inputfieldComponent";
import ImageLogo from "./Components/imageLogo";
import { useState } from "react";
import { router } from "expo-router";

export default function Signup() {

    const [fullName, setFullName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");

    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.imageContainer}>
                            <ImageLogo/>
            </View>
            
            {/* Tabs */}
                        <View style={styles.tabsContainer}>
                            <TouchableOpacity style={styles.tab} onPress={() => router.push("/signin")}>
                                <Text style={styles.tabText}>Sign in</Text>
                                <View style={styles.inactiveUnderline} />
                            </TouchableOpacity>
            
                            <TouchableOpacity style={styles.tab}>
                                <Text style={[styles.tabText, styles.activeTabText]}>Sign up</Text>
                                <View style={styles.activeUnderline} />
                            </TouchableOpacity>
                        </View>
            
                        {/* Inputs */}
                        <View style={styles.form}>
                            <InputField
                                label="Your Full Name"
                                placeholder="your name"
                                value={fullName}
                                onChangeText={setFullName}
                            />
                            <InputField
                                label="Email/Phone"
                                placeholder="Type your email/phone"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                            />
                            <InputField
                                label="Password"
                                placeholder="Type your password"
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setPassword}
                            />
                            <InputField
                                label="Confirm Password"
                                placeholder="Retype your password"
                                secureTextEntry={true}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />
            
                            {/* Join Now Button */}
                            <TouchableOpacity style={styles.joinButton}onPress={() => router.push("/otpverification")}>
                                <Text style={styles.joinButtonText}>Join Now</Text>
                            </TouchableOpacity>
            
                            {/* Divider */}
                            <View style={styles.dividerContainer}>
                                <View style={styles.dividerLine} />
                                <Text style={styles.dividerText}>Or sign up with</Text>
                                <View style={styles.dividerLine} />
                            </View>
            
                            {/* Social Buttons */}
                            <View style={styles.socialContainer}>
                                <TouchableOpacity style={styles.socialButton}>
                                    <Text style={styles.socialIcon}>G</Text>
                                    <Text style={styles.socialText}>Google</Text>
                                </TouchableOpacity>
            
                                <TouchableOpacity style={styles.socialButton}>
                                    <Text style={styles.socialIcon}>⊞</Text>
                                    <Text style={styles.socialText}>Microsoft</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.bottomContainer}>
                            <Text style={styles.bottomText}>By Using this app you agree with the</Text>
                            <TouchableOpacity>
                                <Text style={styles.termsLink}>Terms of Service</Text>
                            </TouchableOpacity>
                        </View>

                        </View>
            
                        
            

        </SafeAreaView>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f6ff",
        paddingHorizontal: 24,
        paddingTop: 20,
    },   
    imageContainer:{
        justifyContent: "center",
        marginBottom:60
    },   
    tabsContainer: {
        flexDirection: "row",
        marginBottom: 28,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
    },
    tab: {
        marginRight: 24,
        paddingBottom: 10,
    },
    tabText: {
        fontSize: 16,
        color: "#aaa",
        fontWeight: "500",
    },
    activeTabText: {
        color: "#000",
        fontWeight: "700",
    },
    activeUnderline: {
        height: 2,
        backgroundColor: "#007AFF",
        borderRadius: 2,
        position: "absolute",
        bottom: -1,
        left: 0,
        right: 0,
    },
    inactiveUnderline: {
        height: 2,
        backgroundColor: "transparent",
    },

    // Form
    form: {
        flex: 1,
    },

    // Join Button
    joinButton: {
        backgroundColor: "#007AFF",
        paddingVertical: 16,
        borderRadius: 30,
        alignItems: "center",
        marginTop: 8,
        marginBottom: 28,
    },
    joinButtonText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "700",
    },

    // Divider
    dividerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: "#ccc",
    },
    dividerText: {
        marginHorizontal: 10,
        color: "#888",
        fontSize: 13,
    },

    // Social Buttons
    socialContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 12,
    },
    socialButton: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        paddingVertical: 13,
        backgroundColor: "#fff",
        gap: 8,
    },
    socialIcon: {
        fontSize: 16,
        fontWeight: "700",
    },
    socialText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#333",
    },

    // Bottom
    bottomContainer: {
        alignItems: "center",
        paddingTop: 40,
    },
    bottomText: {
        color: "#888",
        fontSize: 14,
    },
    termsLink: {
        color: "#007AFF",
        fontWeight: "700",
        fontSize: 14,
    },
});