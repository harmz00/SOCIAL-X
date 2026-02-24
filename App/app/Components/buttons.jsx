import { View, Text, TouchableOpacity } from "react-native";

export default function AuthButton({text, onPress, textStyle, style={}}) {
    return(
        <View>
            <TouchableOpacity onPress={onPress} style={[
                {backgroundColor: "#007AFF", borderRadius:10, paddingVertical:10, paddingHorizontal:12, alignItems:"center", marginHorizontal:56, marginVertical:10}, style]}>
                <Text style={[{color: "#ffffff", fontSize:15}, textStyle]}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}