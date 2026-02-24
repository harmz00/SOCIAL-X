import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

export default function PostCard({ 
  profilePic, 
  name, 
  time, 
  caption, 
  postImage, 
  likes, 
  comments
}) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: profilePic }} style={styles.profilePic} />
        <View style={styles.headerText}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>

      {/* Caption */}
      <Text style={styles.caption}>{caption}</Text>

      {/* Post Image */}
      <Image source={{ uri: postImage }} style={styles.postImage} />

      {/* Footer */}
      <View style={styles.footer}>
        {/* Liked by text */}
        <Text style={styles.likedByText}>
          Liked by <Text style={styles.bold}>Blazinshado</Text> and{' '}
          <Text style={styles.bold}>100+ others</Text>
        </Text>

        {/* Actions */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <AntDesign name="heart" size={20} color="red" />
            <Text style={styles.actionText}>{likes}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome name="comment-o" size={20} color="#333" />
            <Text style={styles.actionText}>{comments}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* View comments */}
      <TouchableOpacity>
        <Text style={styles.viewComments}>View all {comments} comments</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 15,
    paddingBottom: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  profilePic: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  headerText: {
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  time: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  caption: {
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 10,
  },
  postImage: {
    alignSelf:"center",
    width: "100%",
    height: 250,
    backgroundColor: '#f0f0f0',
  },
  footer: {
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  likedByText: {
    fontSize: 13,
    color: '#666',
    marginBottom: 10,
  },
  bold: {
    fontWeight: '700',
    color: '#000',
  },
  actions: {
    flexDirection: 'row',
    gap: 15,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  viewComments: {
    paddingHorizontal: 12,
    marginTop: 8,
    fontSize: 13,
    color: '#888',
  },
});