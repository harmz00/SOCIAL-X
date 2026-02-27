import Onboarding from "react-native-onboarding-swiper"
import { View, Text, Image, TouchableOpacity } from "react-native"
import ImageLogo from "../Components/imageLogo";
import AuthButton from "../Components/buttons";
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';

export default function OnboardingScreen() {
    return(
        <Onboarding 
            showDone={false} 
            showSkip={false}
            bottomBarColor="#ffffff"
            bottomBarHeight={100}
            NextButtonComponent={({ onPress }) => (
                <TouchableOpacity style={{backgroundColor: "#007AFF", marginHorizontal:20, paddingHorizontal:12, paddingVertical:8, borderRadius:15, display:"flex", flexDirection:"row", gap:5}} onPress={onPress}>
                    <Text style={{color: "#ffffff", fontWeight:"700", fontSize:18}}>Next</Text>
                    <Feather name="arrow-right" size={24} color="white" />
                </TouchableOpacity>
            )}
            pages={[
                {
                    backgroundColor: "#ffffff", 
                    title: <Image source={require("../../assets/images/onboard1.jpg")} style={{width:300, height:300, borderRadius:200}} />, 
                    subtitle: <ImageLogo/>,  
                },
                {
                    backgroundColor: "#ffffff",
                    title:  <Image source={require("../../assets/images/onboard2.jpg")} style={{width:300, height:300}} />,
                    subtitle: 
                        <View>
                            <Text style={{textAlign: "center", paddingHorizontal:20}}>Level up your social game: post without limits, vibe with who gets you, and watch your world get way more lit along the way</Text>
                            <AuthButton text="Sign in" style={{marginTop: 50}} onPress={() => router.push("/login")}/>
                            <AuthButton text="Join Now" style={{backgroundColor: "#ffffff"}} textStyle={{color: "#000000"}} onPress={() => router.push("/signup")}/>
                        </View>,
                }  
            ]}
            containerStyles={{
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 50            
            }} />
    );
}