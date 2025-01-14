// import React from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Image,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// const App = () => {
//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Cari tempat les..."
//           style={styles.searchInput}
//         />
//         <Icon name="search" size={20} color="#555" style={styles.searchIcon} />
//       </View>

//       <Image
//         source={{ uri: 'https://placehold.co/600x200' }}
//         style={styles.mainImage}
//       />

//       <View style={styles.contentContainer}>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <Image
//             source={{ uri: 'https://placehold.co/100x100' }}
//             style={styles.thumbnail}
//           />
//           <Image
//             source={{ uri: 'https://placehold.co/100x100' }}
//             style={styles.thumbnail}
//           />
//           <Image
//             source={{ uri: 'https://placehold.co/100x100' }}
//             style={styles.thumbnail}
//           />
//           <Image
//             source={{ uri: 'https://placehold.co/100x100' }}
//             style={styles.thumbnail}
//           />
//         </ScrollView>

//         <View style={styles.headerRow}>
//           <Text style={styles.title}>Ganesha Operation</Text>
//           <Text style={styles.hours}>Buka 07.00 - 21.00</Text>
//         </View>

//         <View style={styles.infoRow}>
//           <Icon name="map-marker-alt" size={16} color="#555" style={styles.icon} />
//           <Text style={styles.infoText}>Jl. Jend. Ahmad Yani No.75 B</Text>
//         </View>

//         <View style={styles.infoRow}>
//           <Icon name="phone-alt" size={16} color="#555" style={styles.icon} />
//           <Text style={styles.infoText}>0811-2386-138</Text>
//         </View>

//         <View style={styles.infoRow}>
//           <Icon name="bookmark" size={16} color="#555" style={styles.icon} />
//           <Text style={styles.infoText}>17 Disimpan</Text>
//         </View>

//         <View style={styles.pricingContainer}>
//           {['SD', 'SMP', 'SMA'].map((level, index) => (
//             <View key={index} style={styles.pricingBox}>
//               <Text style={styles.pricingTitle}>{level}</Text>
//               <Text style={styles.pricingSubjects}>Matematika</Text>
//               <Text style={styles.pricingSubjects}>Bahasa Inggris</Text>
//               <Text style={styles.pricingSubjects}>Bahasa Indonesia</Text>
//               <Text style={styles.pricingPrice}>Rp.{800000 + index * 200000}</Text>
//             </View>
//           ))}
//         </View>

//         <Text style={styles.sectionTitle}>Fasilitas</Text>
//         <View style={styles.facilityRow}>
//           <Icon name="wifi" size={24} color="#555" style={styles.icon} />
//           <Icon name="tv" size={24} color="#555" style={styles.icon} />
//           <Icon name="chalkboard-teacher" size={24} color="#555" style={styles.icon} />
//           <Icon name="book" size={24} color="#555" style={styles.icon} />
//         </View>

//         <Text style={styles.sectionTitle}>Kelas</Text>
//         <View style={styles.classTags}>
//           <Text style={styles.tag}>Private</Text>
//           <Text style={styles.tag}>Public</Text>
//         </View>

//         <Text style={styles.sectionTitle}>Deskripsi</Text>
//         <Text style={styles.description}>
//           Ganesha Operation adalah bimbingan belajar tatap muka berbasis teknologi
//           online yang telah berhasil mengantarkan 50.000 lebih siswa diterima di
//           PTN dan PT Kedinasan, 2.500 lebih di antaranya diterima di fakultas impian
//           pada tahun 2022 dan angka tersebut terus meningkat setiap tahunnya.
//         </Text>

//         <Text style={styles.sectionTitle}>Beri penilaian</Text>
//         <View style={styles.ratingRow}>
//           {[...Array(5)].map((_, i) => (
//             <Icon key={i} name="star" size={24} color="#ccc" />
//           ))}
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f3f3f3',
//   },
//   searchContainer: {
//     position: 'relative',
//     padding: 10,
//     backgroundColor: '#b3d7ff',
//   },
//   searchInput: {
//     backgroundColor: '#e0f0ff',
//     borderRadius: 8,
//     padding: 10,
//     paddingLeft: 40,
//     fontSize: 16,
//     color: '#333',
//   },
//   searchIcon: {
//     position: 'absolute',
//     left: 20,
//     top: 15,
//   },
//   mainImage: {
//     width: '100%',
//     height: 200,
//   },
//   contentContainer: {
//     padding: 16,
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//   },
//   thumbnail: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//     marginRight: 8,
//   },
//   headerRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginVertical: 8,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   hours: {
//     fontSize: 14,
//     color: '#888',
//   },
//   infoRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 4,
//   },
//   infoText: {
//     fontSize: 14,
//     color: '#555',
//   },
//   icon: {
//     marginRight: 8,
//   },
//   pricingContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 16,
//   },
//   pricingBox: {
//     backgroundColor: '#007bff',
//     borderRadius: 8,
//     padding: 8,
//     flex: 1,
//     marginHorizontal: 4,
//     alignItems: 'center',
//   },
//   pricingTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   pricingSubjects: {
//     fontSize: 12,
//     color: '#fff',
//   },
//   pricingPrice: {
//     marginTop: 8,
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginVertical: 8,
//   },
//   facilityRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   classTags: {
//     flexDirection: 'row',
//     marginVertical: 8,
//   },
//   tag: {
//     backgroundColor: '#e0e0e0',
//     padding: 8,
//     borderRadius: 16,
//     marginRight: 8,
//     fontSize: 14,
//     color: '#555',
//   },
//   description: {
//     fontSize: 14,
//     color: '#555',
//   },
//   ratingRow: {
//     flexDirection: 'row',
//     marginVertical: 8,
//   },
// });

// export default App;

// import React from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Image,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// const App = () => {
//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Cari tempat les..."
//           style={styles.searchInput}
//         />
//         <Icon name="search" size={20} color="#555" style={styles.searchIcon} />
//       </View>

//       <Image
//         source={{ uri: 'https://placehold.co/600x200' }}
//         style={styles.mainImage}
//       />

//       <View style={styles.contentContainer}>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <Image
//             source={{ uri: 'https://placehold.co/100x100' }}
//             style={styles.thumbnail}
//           />
//           <Image
//             source={{ uri: 'https://placehold.co/100x100' }}
//             style={styles.thumbnail}
//           />
//           <Image
//             source={{ uri: 'https://placehold.co/100x100' }}
//             style={styles.thumbnail}
//           />
//           <Image
//             source={{ uri: 'https://placehold.co/100x100' }}
//             style={styles.thumbnail}
//           />
//         </ScrollView>

//         <View style={styles.headerRow}>
//           <Text style={styles.title}>Ganesha Operation</Text>
//           <Text style={styles.hours}>Buka 07.00 - 21.00</Text>
//         </View>

//         <View style={styles.infoRow}>
//           <Icon name="map-marker-alt" size={16} color="#555" style={styles.icon} />
//           <Text style={styles.infoText}>Jl. Jend. Ahmad Yani No.75 B</Text>
//         </View>

//         <View style={styles.infoRow}>
//           <Icon name="phone-alt" size={16} color="#555" style={styles.icon} />
//           <Text style={styles.infoText}>0811-2386-138</Text>
//         </View>

//         <View style={styles.infoRow}>
//           <Icon name="bookmark" size={16} color="#555" style={styles.icon} />
//           <Text style={styles.infoText}>17 Disimpan</Text>
//         </View>

//         <View style={styles.pricingContainer}>
//           {['SD', 'SMP', 'SMA'].map((level, index) => (
//             <View key={index} style={styles.pricingBox}>
//               <Text style={styles.pricingTitle}>{level}</Text>
//               <Text style={styles.pricingSubjects}>Matematika</Text>
//               <Text style={styles.pricingSubjects}>Bahasa Inggris</Text>
//               <Text style={styles.pricingSubjects}>Bahasa Indonesia</Text>
//               <Text style={styles.pricingPrice}>Rp.{800000 + index * 200000}</Text>
//             </View>
//           ))}
//         </View>

//         <Text style={styles.sectionTitle}>Fasilitas</Text>
//         <View style={styles.facilityRow}>
//           <Icon name="wifi" size={24} color="#555" style={styles.icon} />
//           <Icon name="tv" size={24} color="#555" style={styles.icon} />
//           <Icon name="chalkboard-teacher" size={24} color="#555" style={styles.icon} />
//           <Icon name="book" size={24} color="#555" style={styles.icon} />
//         </View>

//         <Text style={styles.sectionTitle}>Kelas</Text>
//         <View style={styles.classTags}>
//           <Text style={styles.tag}>Private</Text>
//           <Text style={styles.tag}>Public</Text>
//         </View>

//         <Text style={styles.sectionTitle}>Deskripsi</Text>
//         <Text style={styles.description}>
//           Ganesha Operation adalah bimbingan belajar tatap muka berbasis teknologi
//           online yang telah berhasil mengantarkan 50.000 lebih siswa diterima di
//           PTN dan PT Kedinasan, 2.500 lebih di antaranya diterima di fakultas impian
//           pada tahun 2022 dan angka tersebut terus meningkat setiap tahunnya.
//         </Text>

//         <Text style={styles.sectionTitle}>Beri penilaian</Text>
//         <View style={styles.ratingRow}>
//           {[...Array(5)].map((_, i) => (
//             <Icon key={i} name="star" size={24} color="#ccc" />
//           ))}
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f3f3f3',
//   },
//   searchContainer: {
//     position: 'relative',
//     padding: 10,
//     backgroundColor: '#b3d7ff',
//   },
//   searchInput: {
//     backgroundColor: '#e0f0ff',
//     borderRadius: 8,
//     padding: 10,
//     paddingLeft: 40,
//     fontSize: 16,
//     color: '#333',
//   },
//   searchIcon: {
//     position: 'absolute',
//     left: 20,
//     top: 15,
//   },
//   mainImage: {
//     width: '100%',
//     height: 200,
//   },
//   contentContainer: {
//     padding: 16,
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//   },
//   thumbnail: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//     marginRight: 8,
//   },
//   headerRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginVertical: 8,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   hours: {
//     fontSize: 14,
//     color: '#888',
//   },
//   infoRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 4,
//   },
//   infoText: {
//     fontSize: 14,
//     color: '#555',
//   },
//   icon: {
//     marginRight: 8,
//   },
//   pricingContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 16,
//   },
//   pricingBox: {
//     backgroundColor: '#007bff',
//     borderRadius: 8,
//     padding: 8,
//     flex: 1,
//     marginHorizontal: 4,
//     alignItems: 'center',
//   },
//   pricingTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   pricingSubjects: {
//     fontSize: 12,
//     color: '#fff',
//   },
//   pricingPrice: {
//     marginTop: 8,
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginVertical: 8,
//   },
//   facilityRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   classTags: {
//     flexDirection: 'row',
//     marginVertical: 8,
//   },
//   tag: {
//     backgroundColor: '#e0e0e0',
//     padding: 8,
//     borderRadius: 16,
//     marginRight: 8,
//     fontSize: 14,
//     color: '#555',
//   },
//   description: {
//     fontSize: 14,
//     color: '#555',
//   },
//   ratingRow: {
//     flexDirection: 'row',
//     marginVertical: 8,
//   },
// });

// export default App;

import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles1 from "../../styles/homeStyles";

const ForumScreens = () => {
  const navigation = useNavigation(); // Declare the navigation hook
  const handleHome = () => {
    navigation.navigate("Home");
  };
  const handleSave = () => {
    navigation.navigate("Savelist");
  };
  const data = [
    {
      id: "1",
      user: "Ucup",
      question:
        "1. Tinggi rata-rata dari 15 anak adalah 162 cm. Setelah ditambah tinggi 5 anak, tinggi rata-rata menjadi 166 cm. Tinggi rata-rata 5 anak tersebut adalah",
      options: [
        "a. 168 cm",
        "b. 172 cm",
        "c. 178 cm",
        "d. 179 cm",
        "e. 182 cm",
      ],
      comments: "2 Komentar",
      tags: ["Matematika", "Kelas 5", "SD"],
    },
    {
      id: "2",
      user: "Ucup",
      question: "2. Berapakah hasil dari 25 x 4 + 15 / 3?",
      options: ["a. 100", "b. 110", "c. 95", "d. 120", "e. 105"],
      comments: "5 Komentar",
      tags: ["Matematika", "Kelas 4", "SD"],
    },
    {
      id: "3",
      user: "Ucup",
      question:
        "3. Sebuah lingkaran memiliki diameter 10 cm. Berapakah luasnya?",
      options: [
        "a. 78.5 cm²",
        "b. 50 cm²",
        "c. 314 cm²",
        "d. 100 cm²",
        "e. 90 cm²",
      ],
      comments: "3 Komentar",
      tags: ["Matematika", "Kelas 6", "SD"],
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://placehold.co/40" }}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.username}>{item.user}</Text>
        </View>
        <Text style={styles.comments}>{item.comments}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.question}>{item.question}</Text>
        <View style={styles.options}>
          {item.options.map((option, index) => (
            <Text key={index} style={styles.option}>
              {option}
            </Text>
          ))}
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.commentButton}>
            <Text style={styles.commentButtonText}>Beri komentar</Text>
          </TouchableOpacity>
          {item.tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>
              {tag}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Icon name="arrow-left" size={20} color="#000" />
        <Text style={styles.title}>Forum</Text>
        <View />
      </View>
      <View style={styles.search}>
        <TextInput placeholder="Cari jawabanmu..." style={styles.input} />
        <TouchableOpacity style={styles.askButton}>
          <Text style={styles.askButtonText}>Bertanya</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {/* Footer */}
      <View style={styles1.footer}>
        <TouchableOpacity onPress={handleHome}>
          <FontAwesome name="home" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="comments" size={24} style={{ color: "white" }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSave}>
          <FontAwesome name="bookmark" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingTop: 40,
    backgroundColor: "#88D0E4",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: "auto",
    marginRight: "auto",
  },
  search: {
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 5,
  },
  askButton: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  askButtonText: {
    color: "#000",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontWeight: "bold",
  },
  comments: {
    color: "#999",
    fontSize: 12,
  },
  body: {
    marginBottom: 10,
  },
  question: {
    marginBottom: 10,
    fontWeight: "bold",
  },
  options: {
    marginBottom: 10,
  },
  option: {
    marginBottom: 5,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  commentButton: {
    backgroundColor: "#cfe3ff",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 5,
  },
  commentButtonText: {
    color: "#fff",
  },
  tag: {
    backgroundColor: "#ddd",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 5,
    marginBottom: 5,
  },
});

export default ForumScreens;
