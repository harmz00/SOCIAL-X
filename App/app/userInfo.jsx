import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';


export default function UserInformation() {
  const [name, setName] = useState('');

  const isValid = name.trim().length > 0;

  const handleSubmit = () => {
    if (isValid) {
      // Here you would save the user info
      // Then navigate to main app
      router.push('/(tabs)/chats');
    }
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
          <Text style={styles.backButtonText}>Login</Text>
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Register</Text>
        
        {/* Profile Picture */}
        <View style={styles.profileContainer}>
          <View style={styles.profilePlaceholder}>
            <Feather name="user" size={60} color="#fff" />
          </View>
          <View style={styles.editButton}>
            <Feather name="edit-2" size={16} color="#fff" />
          </View>
        </View>
      </View>

      <View style={styles.content}>
        {/* Name Input */}
        <View style={styles.inputContainer}>
          <Feather name="user" size={20} color="#333" style={styles.inputIcon} />
          <TextInput
            style={styles.nameInput}
            placeholder="Your Name"
            placeholderTextColor="#ccc"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity 
          style={[styles.submitButton, isValid && styles.submitButtonActive]}
          disabled={!isValid}
          onPress={handleSubmit}
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
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
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
    marginBottom: 40,
  },
  profileContainer: {
    position: 'relative',
    marginBottom: -50,
  },
  profilePlaceholder: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#90D5FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#fff',
  },
  editButton: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#00B8FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#333',
    paddingBottom: 8,
    marginBottom: 30,
  },
  inputIcon: {
    marginRight: 10,
  },
  nameInput: {
    flex: 1,
    fontSize: 18,
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
});
