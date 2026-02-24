import { View, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import PostButton from '../Components/postButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons } from '@expo/vector-icons';
import StoryItem from '../Components/storyItem';
import PostCard from '../Components/postCard';

export default function Home() {

    const stories = [
    { id: 1, name: 'Abdul', image: 'https://randomuser.me/api/portraits/men/1.jpg', isYourStory: true },
    { id: 2, name: 'Chris', image: 'https://randomuser.me/api/portraits/men/2.jpg'},
    { id: 3, name: 'General', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: 4, name: 'Ojogbon', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 5, name: 'Sarah', image: 'https://randomuser.me/api/portraits/women/5.jpg' },
    { id: 6, name: 'Victor', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: 7, name: 'Stanley', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 8, name: 'Zainab', image: 'https://randomuser.me/api/portraits/women/5.jpg' },
    { id: 9, name: 'Hamzy', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: 10, name: 'Idris', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 11, name: 'Mike', image: 'https://randomuser.me/api/portraits/women/5.jpg' },
  ];

  // Sample data for posts
  const posts = [
    {
      id: 1,
      profilePic: 'https://randomuser.me/api/portraits/men/10.jpg',
      name: 'Oyin Dolapo',
      time: '1hr ago',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra',
      postImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      likes: 247,
      comments: 57,
    },
    {
      id: 2,
      profilePic: 'https://randomuser.me/api/portraits/men/11.jpg',
      name: 'Abdul Quayyum',
      time: '1hr ago',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra',
      postImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      likes: 189,
      comments: 32,
    },
    {
      id: 3,
      profilePic: 'https://randomuser.me/api/portraits/men/11.jpg',
      name: 'Hamzy Scamzy',
      time: '1hr ago',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra',
      postImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      likes: 189,
      comments: 32,
    },
    {
      id: 4,
      profilePic: 'https://randomuser.me/api/portraits/men/11.jpg',
      name: 'Ajayi Enitan',
      time: '1hr ago',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra',
      postImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      likes: 189,
      comments: 32,
    },
    {
      id: 5,
      profilePic: 'https://randomuser.me/api/portraits/men/11.jpg',
      name: 'Mike Tyson',
      time: '1hr ago',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra',
      postImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      likes: 189,
      comments: 32,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      
            {/* Top Bar */}
            <View style={styles.topBar}>
              <View style={styles.searchContainer}>
                <Feather name="search" size={18} color="#999" style={styles.searchIcon} />
                <TextInput
                  placeholder="Type something........."
                  placeholderTextColor="#aaa"
                  style={styles.searchInput}
                />
              </View>
              <TouchableOpacity style={styles.notificationButton}>
                <Ionicons name="notifications-outline" size={26} color="#007AFF" />
              </TouchableOpacity>
            </View>
      
            {/* Stories */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesContainer}>
              {stories.map((story) => (
                <StoryItem
                  key={story.id}
                  name={story.name}
                  image={story.image}
                  isYourStory={story.isYourStory}
                  isLive={story.isLive}
                />
              ))}
            </ScrollView>
      
            {/* Posts Feed */}
            <ScrollView style={styles.postsContainer} showsVerticalScrollIndicator={false}>
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  profilePic={post.profilePic}
                  name={post.name}
                  time={post.time}
                  caption={post.caption}
                  postImage={post.postImage}
                  likes={post.likes}
                  comments={post.comments}
                  likedBy={post.likedBy}
                />
              ))}
            </ScrollView>
      
            {/* Floating Post Button */}
            <PostButton />
      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    fontSize: 14,
    color: '#333',
  },
  notificationButton: {
    marginLeft: 20,
  },
  storiesContainer: {
    backgroundColor: '#fff',
    paddingTop:20,
    paddingBottom:90,
    paddingHorizontal: 10,
    minHeight: 130
  },
  postsContainer: {
    paddingTop: 10,
    paddingHorizontal:10
  },
})