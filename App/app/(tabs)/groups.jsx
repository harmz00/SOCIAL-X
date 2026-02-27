import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';

export default function Groups() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Groups</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Groups Screen</Text>
        <Text style={styles.subtext}>Coming soon...</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#1976D2',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  subtext: {
    fontSize: 16,
    color: '#888',
    marginTop: 10,
  },
});
