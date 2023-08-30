const googleLoginButton = document.getElementById("google-login");
googleLoginButton.addEventListener("click", () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	firebase
		.auth()
		.signInWithPopup(provider)
		.then((result) => {
			// User signed in with Google successfully.
			console.log("User:", result.user);
		})
		.catch((error) => {
			// An error occurred during Google sign-in.
			console.error("Error:", error);
		});
});
firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		// User is signed in.
		console.log("User is signed in:", user);
	} else {
		// User is signed out.
		console.log("User is signed out");
	}
});

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		// User is signed in.
		console.log("User is signed in:", user);
	} else {
		// User is signed out.
		console.log("User is signed out");
	}
});
