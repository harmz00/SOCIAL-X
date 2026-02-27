import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function More() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>More</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>More Screen</Text>
        <Text style={styles.subtext}>Settings and options coming soon...</Text>
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
