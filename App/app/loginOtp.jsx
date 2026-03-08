import OTPVerification from "./Components/OTP";
import { router } from "expo-router";

export default function LoginOtp() {
  return (
    <OTPVerification
      phoneNumber="(+44) 20 1234 5629"
      backButtonText="Login"
      onSuccess={() => router.push("/(tabs)/chats")}
    />
  );
}
