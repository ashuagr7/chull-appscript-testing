import { ActionCookies } from "../core/ActionCookies.js";

class Auth {
    constructor() {
        this.token = localStorage.getItem('token');
        this.baseUrl = "http://localhost:4000"
    }

    async signIn(username, password) {
        // Basic email validation using a regex
        // const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        // if (!emailPattern.test(email)) {
        //     alert('Please enter a valid email address.');
        //     return false;
        // }
        try {
            // let body = { email, password }
            // let response = SendReq.send("ehh-auth-log-nor", "POST", "login", body)
            // const data = await response.json();
            // console.log(data);
            // if (data.token) {
            //     localStorage.setItem('token', data.token);

            //     this.token = data.token;
            //     return true;
            // } else {
            //     throw new Error(data.error || 'Failed to sign in');
            // }
            console.log(username, password);
            let response = await handleAction('signin', username, password)
            console.log(response);
            console.log(response === "Authenticated");
            if (response === "Authenticated") {
                ActionCookies.setCookie("username", username);
                ActionCookies.setCookie("password", password)
                let files = await fetchAllFiles(username, password);
                console.log(files);
                if (files) {
                    for (const file of files) {
                        console.log(file);
                        localStorage.setItem(file.filename, file.content)
                    }
                }
                return true
            } else if(response !== "Authenticated") {
                throw new Error('Failed to sign In')

            }
        } catch (error) {
            console.error("Error:", error);
            return false;
        }
    }

    async signUp(username, password) {
        // Basic username validation
        if (username.trim().length === 0) {
            alert('Username cannot be empty.');
            return false;
        }

        // Basic email validation using a regex
        // const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        // if (!emailPattern.test(email)) {
        //     alert('Please enter a valid email address.');
        //     return false;
        // }

        // Basic password validation
        if (password.length < 6) {  // Assuming a minimum length of 6
            alert('Password should be at least 6 characters long.');
            return false;
        }

        try {
            // let body = { username, email, password }
            // let response = await fetch("http://167.71.238.72:3000/", {
            //     method:"POST",
            //     body:{
            //         "method": "POST",
            //         "headers": {
            //             "Content-Type": "application/json",
            //             "Authorization": "Bearer null"
            //         },
            //         "action": "register",
            //         "entityId": "ehh-auth-reg-nor",
            //         "data": {
            //             "username": "Ah",
            //             "email": "ah@gmail.com",
            //             "password": "789456123"
            //         }
            //     }


            // })

            // const data = await response.json();
            let response = await handleAction('signup', username, password)
            console.log(response);
            console.log(response === "User successfully registered");
            if (response === "User successfully registered") {
                ActionCookies.setCookie("username", username);
                ActionCookies.setCookie("password", password)
                let files = await fetchAllFiles(username, password);
                if (files) {
                    for (const file of files) {
                        localStorage.setItem(file.fileName, file.content)
                    }
                }

                return true
            } else {
                throw new Error('Failed to sign up')

            }
            // if (data.token) {
            //     localStorage.setItem('token', data.token);
            //     this.token = data.token;
            //     return true;
            // } else {
            //     throw new Error(data.error || 'Failed to sign up');
            // }
        } catch (error) {
            console.error("Error:", error);
            return false;
        }
    }

    async signOut() {
        // Clear local storage
        localStorage.clear();

        // Clear specific object stores from IndexedDB
        // Repeat for each object store you want to clear
        try {
            localStorage.clear();
            window.location.href = '/saya-dev/auth.html';
            console.log("Successfully logged out and cleared data");
        } catch (error) {
            console.error("Error during logout:", error);
        }

    }

    isAuthenticated() {
        return this.token !== null;
    }
}

const auth = new Auth()

if (document.getElementById('signin-form')) {
    // Authentication SignIn
    document.getElementById('signin-form').addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('login-username').value;
        // const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (await auth.signIn(username, password)) {
            window.location.href = "#/explorer"
            alert('Signed in successfully!');
            // Redirect or update UI
        } else {
            alert('Failed to sign in.');
        }
    });
}

if (document.getElementById('signup-form')) {
    // Authentication SignUp
    document.getElementById('signup-form').addEventListener('submit', async (e) => {
        e.preventDefault();


        const username = document.getElementById('username').value;
        // const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (await auth.signUp(username, password)) {
            window.location.href = "#/explorer"
            alert('Signed up successfully!');
            // Redirect or update UI
        } else {
            alert('Failed to sign up.');
        }
    });
}