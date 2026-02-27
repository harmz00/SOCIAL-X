import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet,
  Modal
} from 'react-native';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PhoneLogin() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({ 
    flag: '🇬🇧', 
    code: '+44', 
    name: 'UK', 
    maxLength: 10,
    format: [3, 4, 3],
    placeholder: '020 1234 5629'
  });

  const countries = [
    { flag: '🇬🇧', code: '+44', name: 'UK', maxLength: 10, format: [3, 4, 3], placeholder: '020 1234 5629' },
    { flag: '🇺🇸', code: '+1', name: 'USA', maxLength: 10, format: [3, 3, 4], placeholder: '202 555 0123' },
    { flag: '🇳🇬', code: '+234', name: 'Nigeria', maxLength: 10, format: [3, 3, 4], placeholder: '802 123 4567' },
    { flag: '🇬🇭', code: '+233', name: 'Ghana', maxLength: 9, format: [3, 3, 3], placeholder: '024 123 456' },
    { flag: '🇿🇦', code: '+27', name: 'South Africa', maxLength: 10, format: [3, 3, 4], placeholder: '082 123 4567' },
    { flag: '🇰🇪', code: '+254', name: 'Kenya', maxLength: 10, format: [3, 3, 4], placeholder: '712 123 456' },
  ];

  // Format phone number with spaces
  const formatPhoneNumber = (text) => {
    // Safety check
    if (!text || !selectedCountry || !selectedCountry.format) return '';
    
    // Remove all non-numeric characters
    const cleaned = text.replace(/\D/g, '');
    
    // Apply formatting based on country format
    const { format } = selectedCountry;
    let formatted = '';
    let position = 0;
    
    for (let i = 0; i < format.length; i++) {
      const segmentLength = format[i];
      const segment = cleaned.slice(position, position + segmentLength);
      
      if (segment) {
        formatted += segment;
        if (i < format.length - 1 && segment.length === segmentLength) {
          formatted += ' ';
        }
      }
      
      position += segmentLength;
    }
    
    return formatted;
  };

  const handlePhoneChange = (text) => {
    // Safety check
    if (!text) {
      setPhoneNumber('');
      return;
    }
    
    // Get only numbers
    const cleaned = text.replace(/\D/g, '');
    
    // Limit to country's max length
    if (cleaned.length <= selectedCountry.maxLength) {
      setPhoneNumber(cleaned);
    }
  };

  const displayPhoneNumber = formatPhoneNumber(phoneNumber);
  const isValid = phoneNumber && phoneNumber.length === selectedCountry.maxLength;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>Login</Text>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.headerSubtitle}>Enter your{'\n'}mobile phone</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subtitle}>You will get a code via sms.</Text>

        {/* Country Code + Phone Input */}
        <View style={styles.inputContainer}>
          <TouchableOpacity 
            style={styles.countrySelector}
            onPress={() => setShowCountryPicker(true)}
          >
            <Text style={styles.flag}>{selectedCountry.flag}</Text>
            <Feather name="chevron-down" size={18} color="#333" />
          </TouchableOpacity>

          <Text style={styles.countryCode}>{selectedCountry.code}</Text>

          <TextInput
            style={styles.phoneInput}
            placeholder={selectedCountry.placeholder}
            placeholderTextColor="#ccc"
            keyboardType="phone-pad"
            value={displayPhoneNumber}
            onChangeText={handlePhoneChange}
          />
        </View>

        {/* Remember Me */}
        <TouchableOpacity 
          style={styles.rememberContainer}
          onPress={() => setRememberMe(!rememberMe)}
        >
          <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
            {rememberMe && <Feather name="check" size={16} color="#fff" />}
          </View>
          <Text style={styles.rememberText}>Remember me</Text>
        </TouchableOpacity>

        {/* Submit Button */}
        <TouchableOpacity 
          style={[styles.submitButton, isValid && styles.submitButtonActive]}
          disabled={!isValid}
          onPress={() => router.push('/otpVerification')}
        >
          <Feather name="arrow-right" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Country Picker Modal */}
      <Modal
        visible={showCountryPicker}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowCountryPicker(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowCountryPicker(false)}
        >
          <View style={styles.countryModal}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Country</Text>
              <TouchableOpacity onPress={() => setShowCountryPicker(false)}>
                <Feather name="x" size={24} color="#333" />
              </TouchableOpacity>
            </View>
            
            {countries.map((country, index) => (
              <TouchableOpacity
                key={index}
                style={styles.countryOption}
                onPress={() => {
                  setSelectedCountry(country);
                  setPhoneNumber('');
                  setShowCountryPicker(false);
                }}
              >
                <Text style={styles.countryOptionFlag}>{country.flag}</Text>
                <Text style={styles.countryOptionName}>{country.name}</Text>
                <Text style={styles.countryOptionCode}>{country.code}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
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
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 30,
    borderBottomEndRadius: 100
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
  },
  registerButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  registerButtonText: {
    color: '#00B8FF',
    fontSize: 16,
    fontWeight: '700',
  },
  headerSubtitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 36,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#00B8FF',
    paddingBottom: 8,
    marginBottom: 30,
  },
  countrySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingRight: 10,
  },
  flag: {
    fontSize: 24,
  },
  countryCode: {
    fontSize: 18,
    color: '#333',
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    fontSize: 18,
    color: '#333',
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#00B8FF',
    borderColor: '#00B8FF',
  },
  rememberText: {
    fontSize: 16,
    color: '#333',
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

  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  countryModal: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 40,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  countryOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  countryOptionFlag: {
    fontSize: 24,
    marginRight: 15,
  },
  countryOptionName: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  countryOptionCode: {
    fontSize: 16,
    color: '#666',
  },
});
