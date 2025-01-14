// //firebaseservice
// const {
//   getAuth,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } = require("firebase/auth");
// const { getDatabase, ref, set, get } = require("firebase/database");
// const firebase = require("firebase/app");
// const { initializeApp } = require("firebase/app");

// const firebaseConfig = {
//   apiKey: "AIzaSyCeGxY9MZnIACV8g-9vE3Zb1fbatKKKjoc",
//   authDomain: "mariles.firebaseapp.com",
//   databaseURL: "https://mariles-default-rtdb.firebaseio.com",
//   projectId: "mariles",
//   storageBucket: "mariles.appspot.com",
//   messagingSenderId: "773629840415",
//   appId: "1:773629840415:web:1249b75e77ea0d86d8592a",
// };

// firebase.initializeApp(firebaseConfig);

// const auth = getAuth();
// const db = getDatabase();

// const loginUser = async (email, password) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const user = userCredential.user;

//     const pelajarRef = ref(db, `pelajar/${user.uid}`);
//     const snapshot = await get(pelajarRef);
//     if (snapshot.exists()) {
//       return { success: true, username: snapshot.val().username };
//     } else {
//       return { success: false, message: "Data pelajar tidak ditemukan." };
//     }
//   } catch (error) {
//     return { success: false, message: error.message };
//   }
// };

// const registerUser = async (username, email, password, phone) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const userId = userCredential.user.uid;

//     const counterRef = ref(db, "user_counter/");
//     const counterSnapshot = await get(counterRef);
//     let userIdCounter = 1;

//     if (counterSnapshot.exists()) {
//       userIdCounter = counterSnapshot.val() + 1;
//     }

//     await set(counterRef, userIdCounter);

//     await set(ref(db, `pelajar/${userId}`), {
//       user_id: userIdCounter,
//       username,
//       email,
//       phone,
//       role: "pelajar",
//     });

//     return { success: true };
//   } catch (error) {
//     return { success: false, message: error.message };
//   }
// };

// module.exports = { loginUser, registerUser };

// // authController.js
// const { getAuth } = require("firebase/auth");
// const { getDatabase, ref, get, set } = require("firebase/database");

// // Middleware untuk autentikasi token
// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];

//   if (!token) return res.status(401).json({ message: "Token tidak tersedia" });

//   getAuth()
//     .verifyIdToken(token)
//     .then((decodedToken) => {
//       req.user = decodedToken;
//       next();
//     })
//     .catch(() => res.status(403).json({ message: "Token tidak valid" }));
// };

// // Fungsi untuk login
// const handleLogin = async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     return res.status(400).json({
//       success: false,
//       message: "Email dan password tidak boleh kosong.",
//     });
//   }

//   const result = await loginUser(email, password);
//   if (result.success) {
//     return res.status(200).json({ success: true, username: result.username });
//   } else {
//     return res.status(400).json({ success: false, message: result.message });
//   }
// };

// // Fungsi untuk register
// const handleRegister = async (req, res) => {
//   const { username, email, password, phone } = req.body;

//   if (!username || !email || !password || !phone) {
//     return res.status(400).json({
//       success: false,
//       message: "Semua field harus diisi.",
//     });
//   }

//   const result = await registerUser(username, email, password, phone);
//   if (result.success) {
//     return res
//       .status(200)
//       .json({ success: true, message: "Registrasi berhasil." });
//   } else {
//     return res.status(400).json({ success: false, message: result.message });
//   }
// };

// // Fungsi untuk mendapatkan data pengguna
// const getUserData = async (req, res) => {
//   const { uid } = req.user;

//   try {
//     const db = getDatabase();
//     const userRef = ref(db, `pelajar/${uid}`);
//     const snapshot = await get(userRef);

//     if (snapshot.exists()) {
//       return res.status(200).json({
//         success: true,
//         data: snapshot.val(),
//       });
//     } else {
//       return res.status(404).json({
//         success: false,
//         message: "Data pengguna tidak ditemukan.",
//       });
//     }
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Terjadi kesalahan pada server.",
//     });
//   }
// };

// // Fungsi login menggunakan Firebase
// const loginUser = async (email, password) => {
//   try {
//     const auth = getAuth();
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const user = userCredential.user;
//     return { success: true, username: user.displayName || user.email };
//   } catch (error) {
//     return { success: false, message: error.message };
//   }
// };

// // Fungsi registrasi menggunakan Firebase
// const registerUser = async (username, email, password, phone) => {
//   try {
//     const auth = getAuth();
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const user = userCredential.user;

//     await set(ref(getDatabase(), `pelajar/${user.uid}`), {
//       username,
//       email,
//       phone,
//     });

//     return { success: true };
//   } catch (error) {
//     return { success: false, message: error.message };
//   }
// };

// module.exports = {
//   handleLogin,
//   handleRegister,
//   getUserData,
//   authenticateToken,
// };
