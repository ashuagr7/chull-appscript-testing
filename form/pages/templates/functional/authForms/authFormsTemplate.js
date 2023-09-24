const authFormTemplates = {
    "tag": "div",
    "attributes": {
      "class": "form-container"
    },
    "children": [
      {
        "tag": "div",
        "attributes": {
          "class": "brand-header",
          "style": "font-family:Space Grotesk"
        },
        "content": "{{brandHeader}}"
      },
      {
        "tag": "div",
        "attributes": {
          "class": "form-toggle"
        },
        "children": [
          {
            "tag": "button",
            "attributes": {
              "id": "signup-btn",
              "class": "active"
            },
            "content": "{{signupBtn}}"
          },
          {
            "tag": "button",
            "attributes": {
              "id": "signin-btn"
            },
            "content": "{{signinBtn}}"
          }
        ]
      },
      {
        "tag": "form",
        "attributes": {
          "id": "signup-form",
          "class": "active-form"
        },
        "children": [
          // {
          //   "tag": "input",
          //   "attributes": {
          //     "type": "email",
          //     "placeholder": "Email",
          //     "id": "email",
          //     "required": "true"
          //   }
          // },
          {
            "tag": "input",
            "attributes": {
              "type": "name",
              "placeholder": "Username",
              "id": "username",
              "required": "true"
            }
          },
          {
            "tag": "input",
            "attributes": {
              "type": "password",
              "placeholder": "Password",
              "id": "password",
              "required": "true"
            }
          },
          {
            "tag": "button",
            "attributes": {
              "type": "submit"
            },
            "content": "Sign Up"
          },
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
        ]
      },
      {
        "tag": "form",
        "attributes": {
          "id": "signin-form"
        },
        "children": [
          // {
          //   "tag": "input",
          //   "attributes": {
          //     "type": "email",
          //     "placeholder": "Email",
          //     "id": "login-email",
          //     "required": "true"
          //   }
          // },
          {
            "tag": "input",
            "attributes": {
              "type": "name",
              "placeholder": "Username",
              "id": "login-username",
              "required": "true"
            }
          },
          {
            "tag": "input",
            "attributes": {
              "type": "password",
              "placeholder": "Password",
              "id": "login-password",
              "required": "true"
            }
          },
          {
            "tag": "button",
            "attributes": {
              "type": "submit"
            },
            "content": "Sign In"
          },
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
    ]
  }
  

  export {authFormTemplates}