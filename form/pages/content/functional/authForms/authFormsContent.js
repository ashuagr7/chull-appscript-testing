const authFormContent = {
    "brandHeader": "Having a Chull",
    "signupBtn": "Sign Up",
    "signinBtn": "Sign In",
    "signupFormChildren": [
      {
        "tag": "input",
        "attributes": {
          "type": "email",
          "placeholder": "Email",
          "id": "email",
          "required": true
        }
      },
      {
        "tag": "input",
        "attributes": {
          "type": "name",
          "placeholder": "Username",
          "id": "username",
          "required": true
        }
      },
      {
        "tag": "input",
        "attributes": {
          "type": "password",
          "placeholder": "Password",
          "id": "password",
          "required": true
        }
      },
      {
        "tag": "button",
        "attributes": {
          "type": "submit"
        },
        "content": "Sign Up"
      },
      // ... more children for social buttons
      {
        "tag": "button",
        "attributes": {
          "class": "social-btn google"
        },
        "content": "<i class='ri-google-fill'></i>Continue with Google"
      },
      {
        "tag": "button",
        "attributes": {
          "class": "social-btn phone"
        },
        "content": "<i class='ri-phone-fill'></i>Continue with Phone"
      },
      {
        "tag": "button",
        "attributes": {
          "class": "social-btn facebook"
        },
        "content": "<i class='ri-facebook-circle-fill'></i>Continue with Facebook"
      }
    ],
    "signinFormChildren": [
      {
        "tag": "input",
        "attributes": {
          "type": "email",
          "placeholder": "Email",
          "id": "login-email",
          "required": true
        }
      },
      {
        "tag": "input",
        "attributes": {
          "type": "password",
          "placeholder": "Password",
          "id": "login-password",
          "required": true
        }
      },
      {
        "tag": "button",
        "attributes": {
          "type": "submit"
        },
        "content": "Sign In"
      },
      // ... more children for social buttons
      {
        "tag": "button",
        "attributes": {
          "class": "social-btn google"
        },
        "content": "<i class='ri-google-fill'></i>Continue with Google"
      },
      {
        "tag": "button",
        "attributes": {
          "class": "social-btn phone"
        },
        "content": "<i class='ri-phone-fill'></i>Continue with Phone"
      },
      {
        "tag": "button",
        "attributes": {
          "class": "social-btn facebook"
        },
        "content": "<i class='ri-facebook-circle-fill'></i>Continue with Facebook"
      },
      {
        "tag": "button",
        "attributes": {
          "class": "social-btn facebook"
        },
        "content": "<i class='ri-qr-code-line'></i>Login with QR"
      }
    ]
  }


  export {authFormContent}
  