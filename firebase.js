
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyDvvjh4BynHYyxfnHmiVMwZLATY8e4a120",
	authDomain: "online-learning-platform-412b8.firebaseapp.com",
	projectId: "online-learning-platform-412b8",
	storageBucket: "online-learning-platform-412b8.appspot.com",
	messagingSenderId: "234709339081",
	appId: "1:234709339081:web:1ff034128bb1b2bf837618",
	measurementId: "G-PG8JVEJLV6",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
