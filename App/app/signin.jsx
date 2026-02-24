import { View, Text, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageLogo from "./Components/imageLogo";
import { StyleSheet } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import InputField from "./Components/inputfieldComponent";



export default function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.imageContainer}>
                <ImageLogo/>
            </View>

                        {/* Tabs */}
                        <View style={styles.tabsContainer}>
                            <TouchableOpacity style={styles.tab}>
                                <Text style={[styles.tabText, styles.activeTabText]}>Sign in</Text>
                                <View style={styles.activeUnderline} />
                            </TouchableOpacity>
            
                            <TouchableOpacity style={styles.tab} onPress={() => router.push("/signup")}>
                                <Text style={styles.tabText}>Sign up</Text>
                                <View style={styles.inactiveUnderline} />
                            </TouchableOpacity>
                        </View>
            
                        {/* Inputs */}
                        <View style={styles.form}>
                            <InputField
                                label="E-mail/Phone"
                                placeholder="Email/Phone"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                            />

                            <InputField
                                label="Password"
                                placeholder="Enter password"
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setPassword}
                            />
            
                            {/* Forgot Password */}
                            <TouchableOpacity style={styles.forgotContainer} onPress={() => router.push("./forgottenPassword")}>
                                <Text style={styles.forgotText}>Forgot Password?</Text>
                            </TouchableOpacity>
            
                            {/* Login Button */}
                            <TouchableOpacity style={styles.loginButton} onPress={() => router.push("/(tabs)/home")}>
                                <Text style={styles.loginButtonText}>Login</Text>
                            </TouchableOpacity>
            
                            {/* Divider */}
                            <View style={styles.dividerContainer}>
                                <View style={styles.dividerLine} />
                                <Text style={styles.dividerText}>Or signin with</Text>
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
                            <Text style={styles.bottomText}>Don't have an Account? </Text>
                            <TouchableOpacity onPress={() => router.push("/signup")}>
                                <Text style={styles.signupLink}>Sign up</Text>
                            </TouchableOpacity>
                            </View>

                        </View>
            
                        {/* Bottom Link */}
                        

        </SafeAreaView>
    );
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#f0f6ff",
        paddingHorizontal: 24,
        paddingTop: 30,
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
    forgotContainer: {
        alignItems: "flex-end",
        marginBottom: 24,
        marginTop: 4,
    },
    forgotText: {
        color: "#333",
        fontWeight: "600",
        fontSize: 14,
    },

    // Login Button
    loginButton: {
        backgroundColor: "#007AFF",
        paddingVertical: 16,
        borderRadius: 30,
        alignItems: "center",
        marginBottom: 28,
    },
    loginButtonText: {
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
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 60,
    },
    bottomText: {
        color: "#888",
        fontSize: 14,
    },
    signupLink: {
        color: "#007AFF",
        fontWeight: "700",
        fontSize: 14,
    },
    
});