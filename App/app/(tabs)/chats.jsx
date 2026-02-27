import { 
  View, 
  Text, 
  TextInput, 
  ScrollView, 
  TouchableOpacity, 
  Modal,
  StyleSheet 
} from 'react-native';
import { useState } from 'react';
import { Feather, Ionicons, FontAwesome } from '@expo/vector-icons';
import ChatItem from '../Components/chatItem';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Chats() {
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddMenu, setShowAddMenu] = useState(false);

  // Sample chat data
  const chats = [
    {
      id: 1,
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'David Wayne',
      lastMessage: 'Thanks a bunch! Have a great day! 😊',
      time: '10:25',
      unreadCount: 5,
    },
    {
      id: 2,
      profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
      name: 'Edward Davidson',
      lastMessage: 'Great, thanks so much! 👍',
      time: '22:20 09/05',
      unreadCount: 12,
    },
    {
      id: 3,
      profilePic: 'https://randomuser.me/api/portraits/women/3.jpg',
      name: 'Angela Kelly',
      lastMessage: 'Appreciate it! See you soon! 🚀',
      time: '10:45 08/05',
      unreadCount: 1,
    },
    {
      id: 4,
      profilePic: 'https://randomuser.me/api/portraits/women/4.jpg',
      name: 'Jean Dare',
      lastMessage: 'Hooray! 🎉',
      time: '20:10 05/05',
      unreadCount: 0,
    },
    {
      id: 5,
      profilePic: 'https://randomuser.me/api/portraits/men/5.jpg',
      name: 'Dennis Borer',
      lastMessage: 'Your order has been successfully delivered',
      time: '17:02 05/05',
      unreadCount: 0,
    },
    {
      id: 6,
      profilePic: 'https://randomuser.me/api/portraits/women/6.jpg',
      name: 'Cayla Rath',
      lastMessage: 'See you soon!',
      time: '11:20 05/05',
      unreadCount: 0,
    },
    {
      id: 7,
      profilePic: 'https://randomuser.me/api/portraits/women/7.jpg',
      name: 'Erin Turcotte',
      lastMessage: "I'm ready to drop off your delivery. 👍",
      time: '19:35 02/05',
      unreadCount: 0,
    },
    {
      id: 8,
      profilePic: 'https://randomuser.me/api/portraits/men/8.jpg',
      name: 'Rodolfo Walter',
      lastMessage: 'Appreciate it! Hope you enjoy it!',
      time: '07:55 01/05',
      unreadCount: 0,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {searchActive ? (
          <>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search"
                placeholderTextColor="#999"
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoFocus
              />
            </View>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => {
                setSearchActive(false);
                setSearchQuery('');
              }}
            >
              <Feather name="x" size={24} color="#fff" />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View style={styles.logoContainer}>
              <Ionicons name="chatbubbles" size={28} color="#fff" />
              <Text style={styles.logoText}>E-Chat</Text>
            </View>
            <View style={styles.headerIcons}>
              <TouchableOpacity 
                style={styles.iconButton}
                onPress={() => setSearchActive(true)}
              >
                <Feather name="search" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.iconButton}
                onPress={() => setShowAddMenu(true)}
              >
                <Feather name="plus" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>

      {/* Add Menu Modal */}
      <Modal
        visible={showAddMenu}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowAddMenu(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowAddMenu(false)}
        >
          <View style={styles.addMenu}>
            <TouchableOpacity style={styles.menuItem}>
              <FontAwesome name="user-plus" size={20} color="#333" />
              <Text style={styles.menuText}>Add Friend</Text>
            </TouchableOpacity>
            
            <View style={styles.menuDivider} />
            
            <TouchableOpacity style={styles.menuItem}>
              <FontAwesome name="users" size={20} color="#333" />
              <Text style={styles.menuText}>Create Group</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Chat List */}
      <ScrollView style={styles.chatList} showsVerticalScrollIndicator={false}>
        {chats.map((chat) => (
          <ChatItem
            key={chat.id}
            profilePic={chat.profilePic}
            name={chat.name}
            lastMessage={chat.lastMessage}
            time={chat.time}
            unreadCount={chat.unreadCount}
            onPress={() => console.log('Chat pressed:', chat.name)}
          />
        ))}
      </ScrollView>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 15,
  },
  iconButton: {
    padding: 5,
  },
  searchContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchInput: {
    fontSize: 16,
    color: '#333',
  },
  closeButton: {
    marginLeft: 12,
    padding: 5,
  },
  chatList: {
    flex: 1,
  },

  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-start',
    paddingTop: 120,
    paddingHorizontal: 20,
  },
  addMenu: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 5,
    alignSelf: 'flex-end',
    minWidth: 180,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    gap: 12,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  menuDivider: {
    height: 1,
    backgroundColor: '#f0f0f0',
  },
});
