import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import { v4 as uuidv4 } from "uuid";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const signINWithGoogle = async () => {
  await signInWithPopup(auth, googleProvider);
};

export const signINWithGitHub = async () => {
  await signInWithPopup(auth, githubProvider);
};

export const Menus = [
  { id: uuidv4(), name: "Projects", uri: "/home/Projects" },
  { id: uuidv4(), name: "Collections", uri: "/home/collections" },
  { id: uuidv4(), name: "Profile", uri: "/home/profile" },
];

export const signOutAction = async () => {
  await auth.signOut().then(() => {
    window.location.reload();
  });
};
