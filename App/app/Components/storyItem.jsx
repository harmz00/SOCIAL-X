import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StoryItem({ image, name, isYourStory = false }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        {isYourStory ? (
          <View style={styles.addStoryContainer}>
            <Text style={styles.plusIcon}>+</Text>
          </View>
        ) : (
          <Image source={{ uri: image }} style={styles.image} />
        )}
      </View>
      <Text style={styles.name}>{name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 12,
  },
  imageContainer: {
    width: 70,
    height: 100,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  addStoryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#ddd',
  },
  plusIcon: {
    fontSize: 30,
    color: '#007AFF',
    fontWeight: '300',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
});
