// import OTPVerification from './Components/OTP';
// import { router } from 'expo-router';

// export default function OTPRegister() {
//   return (
//     <OTPVerification 
//       phoneNumber="(+44) 20 1234 5629"
//       backButtonText="Register"
//       onSuccess={() => {
//         console.log("I was clicked!!");
//         router.push('userInfo')}}
//     />
//   );
// }

import OTPVerification from './Components/OTP';
import { router } from 'expo-router';

export default function OTPRegister() {
  
  const handleSuccess = () => {
    console.log("SUCCESS FUNCTION CALLED!");
    router.push('/userInfo');
  };

  console.log("Passing onSuccess:", handleSuccess);

  return (
    <OTPVerification 
      phoneNumber="(+44) 20 1234 5629"
      backButtonText="Register"
      onSuccess={handleSuccess}
    />
  );
}
// ```

// Then check your console - you should see:
// ```
// Passing onSuccess: [Function handleSuccess]