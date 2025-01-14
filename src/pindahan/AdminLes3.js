import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Image} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Atur Les</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        {/* Nama Les */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Nama Les</Text>
          <TextInput style={styles.input} placeholder="Masukkan nama les" />
        </View>

        {/* Deskripsi */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Deskripsi</Text>
          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="Masukkan deskripsi"
            multiline
          />
        </View>

        {/* No Handphone */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>No Handphone</Text>
          <TextInput style={styles.input} placeholder="Masukkan no handphone" />
        </View>

        {/* Alamat */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Alamat</Text>
          <TextInput style={styles.input} placeholder="Masukkan alamat" />
        </View>

        {/* Pilihan Kelas */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Pilihan Kelas</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.button}>
              <Text>Private</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>Public</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Hari Operasional */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Hari Operasional</Text>
          <View style={styles.row}>
            <TextInput style={styles.input} placeholder="Hari mulai" />
            <Text style={styles.separator}>-</Text>
            <TextInput style={styles.input} placeholder="Hari akhir" />
          </View>
        </View>

        {/* Jam Operasional */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Jam Operasional</Text>
          <View style={styles.row}>
            <TextInput style={styles.input} placeholder="Jam mulai" />
            <Text style={styles.separator}>-</Text>
            <TextInput style={styles.input} placeholder="Jam akhir" />
          </View>
        </View>

        {/* Kelas */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Kelas</Text>
          <Text style={styles.subLabel}>Jenjang</Text>
          <TextInput style={styles.input} placeholder="Masukkan jenjang" />
          <Text style={styles.subLabel}>Layanan Mapel</Text>
          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="Masukkan layanan mapel"
            multiline
          />
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="plus" size={16} />
          </TouchableOpacity>
        </View>

        {/* Harga */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Harga</Text>
          <TextInput style={styles.input} placeholder="Masukkan harga" />
        </View>

        {/* Fasilitas */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Fasilitas</Text>
          <View style={styles.iconGroup}>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="" size={16} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="wifi" size={16} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="desktop" size={16} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="fa-cutlery" size={16} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Banner */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Banner</Text>
          <View style={styles.banner}>
            <Icon name="image" size={48} color="#888" />
            <TouchableOpacity style={styles.uploadButton}>
              <Text>Upload</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imagePreviewContainer}>
            <View style={styles.imagePreview}>
              <Image
                style={styles.image}
                source={{
                  uri: "https://storage.googleapis.com/a1aa/image/YmBY4Bwb0HZ0BZVLbwkTzCNjZJkUd6rirB4iMb8i1d1dxgAF.jpg",
                }}
              />
            </View>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="plus" size={16} />
            </TouchableOpacity>
          </View>
          <Text style={styles.note}>*Upload foto dalam format PNG, JPG</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#bfdbfe",
    padding: 16,
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  form: {
    padding: 16,
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 10,
    fontSize: 14,
    color: "#333",
  },
  subLabel: {
    marginTop:5,
    marginBottom: 10,
    fontSize: 14,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    backgroundColor: "#fff",
  },
  textarea: {
    height: 60,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 8,
  },
  button: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  separator: {
    marginHorizontal: 8,
    fontSize: 18,
    color: "#333",
  },
  iconGroup: {
    flexDirection: "row",
    gap: 8,
  },
  iconButton: {
    marginTop: 15, 
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 50,
    padding: 12,
  },
  banner: {
    alignItems: "center",
    padding: 16,
    backgroundColor: "#e3e3e3",
    borderRadius: 8,
  },
  uploadButton: {
    marginTop: 8,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  imagePreview: {
    marginTop : 20,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  image: {
    width: 64,
    height: 64,
  },
  note: {
    marginTop: 8,
    fontSize: 12,
    color: "#e3342f",
  },
});
