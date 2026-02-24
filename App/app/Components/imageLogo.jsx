import { Image, View } from "react-native";

export default function ImageLogo() {
    return(
        <Image source={require("../../assets/images/Logo-E-Chat.png")} style={{width:300}} />
    );
}