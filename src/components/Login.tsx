import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
  projectId: "YOUR_FIREBASE_PROJECT_ID",
  // ... other config from Firebase console
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Login = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const login = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login error", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <p>Hello, {user.displayName}</p>
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-600 rounded text-white hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={login}
      className="px-6 py-3 bg-blue-600 rounded text-white hover:bg-blue-700"
    >
      Login with Google
    </button>
  );
};

export default Login;
