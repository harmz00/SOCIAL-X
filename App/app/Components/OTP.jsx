import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect, useRef } from 'react';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function OTPVerification({ 
  phoneNumber = "(+44) 20 1234 5629",
  backButtonText = "Login",
  onSuccess
}) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(45);
  const [isError, setIsError] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Timer countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleOtpChange = (value, index) => {
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setIsError(false);

    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleResend = () => {
    if (canResend) {
      setTimer(45);
      setCanResend(false);
      setOtp(['', '', '', '']);
      setIsError(false);
      inputRefs[0].current?.focus();
    }
  };

  const handleSubmit = () => {
    console.log('handleSubmit called!');
    const code = otp.join('');
    console.log('OTP code:', code);
    console.log('Code length:', code.length);
    console.log('isComplete:', isComplete);
    console.log('onSuccess exists?', !!onSuccess);
    
    if (code.length === 4) {
      console.log('Code is 4 digits, calling onSuccess...');
      if (onSuccess) {
        console.log('Calling onSuccess now!');
        onSuccess();
      } else {
        console.log('ERROR: onSuccess is not defined!');
      }
    } else {
      console.log('ERROR: Code is not 4 digits');
    }
  };

  const isComplete = otp.every(digit => digit !== '');
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')} : ${secs.toString().padStart(2, '0')}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Feather name="arrow-left" size={20} color="#00B8FF" />
          <Text style={styles.backButtonText}>{backButtonText}</Text>
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Register</Text>
        
        <View style={styles.headerBottom}>
          <Text style={styles.headerSubtitle}>Enter OTP Code</Text>
          <Text style={styles.phoneNumber}>Sent to : {phoneNumber}</Text>
        </View>
      </View>

      <View style={styles.content}>
        {/* Timer and Resend */}
        <View style={styles.timerContainer}>
          <Feather name="clock" size={16} color="#666" />
          <Text style={styles.timerText}>{formatTime(timer)}</Text>
          <TouchableOpacity 
            onPress={handleResend}
            disabled={!canResend}
          >
            <Text style={[styles.resendText, canResend && styles.resendActive]}>
              Resend Code
            </Text>
          </TouchableOpacity>
        </View>

        {/* OTP Input Boxes */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <View key={index} style={styles.otpWrapper}>
              <TextInput
                ref={inputRefs[index]}
                style={[
                  styles.otpInput,
                  digit && styles.otpInputFilled,
                ]}
                value={digit}
                onChangeText={(value) => handleOtpChange(value, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                keyboardType="number-pad"
                maxLength={1}
                selectTextOnFocus
              />
              <View style={[
                styles.otpUnderline,
                digit && styles.otpUnderlineFilled,
              ]} />
            </View>
          ))}
        </View>

        {/* Submit Button */}
        <TouchableOpacity 
          style={[styles.submitButton, isComplete && styles.submitButtonActive]}
          disabled={!isComplete}
          onPress={() => {
            console.log('Button pressed! isComplete:', isComplete);
            handleSubmit();
          }}
        >
          <Feather name="arrow-right" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#00B8FF',
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
    alignSelf: 'flex-start',
    marginBottom: 25,
    gap: 5,
  },
  backButtonText: {
    color: '#00B8FF',
    fontSize: 16,
    fontWeight: '700',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30,
  },
  headerBottom: {
    alignItems: 'center',
  },
  headerSubtitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  phoneNumber: {
    color: '#fff',
    fontSize: 16,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#f5f5f5',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 40,
  },
  timerText: {
    fontSize: 16,
    color: '#666',
  },
  resendText: {
    fontSize: 16,
    color: '#ccc',
    marginLeft: 15,
  },
  resendActive: {
    color: '#00B8FF',
    fontWeight: '600',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  otpWrapper: {
    alignItems: 'center',
  },
  otpInput: {
    width: 60,
    height: 70,
    fontSize: 36,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  otpInputFilled: {
    color: '#000',
  },
  otpInputError: {
    color: '#FF4444',
  },
  otpUnderline: {
    width: 60,
    height: 3,
    backgroundColor: '#333',
    marginTop: 5,
  },
  otpUnderlineFilled: {
    backgroundColor: '#00B8FF',
  },
  otpUnderlineError: {
    backgroundColor: '#FF4444',
  },
  errorText: {
    color: '#FF4444',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  submitButton: {
    position: 'absolute',
    right: 20,
    bottom: 40,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#B0E0FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonActive: {
    backgroundColor: '#00B8FF',
  },
});
