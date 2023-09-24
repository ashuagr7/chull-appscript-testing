 const editorNavTemplate = {
    "tag": "nav",
    "attributes": {
      "class": "navbar"
    },
    "children": [
      {
        "tag": "div",
        "attributes": {
          "class": "logo-container"
        },
        "children": [
          {
            "tag": "img",
            "attributes": {
              "src": "{{logoSrc}}",
              "alt": "Logo",
              "class": "logo"
            }
          }
        ]
      },
      {
        "tag": "div",
        "attributes": {
          "class": "right-section"
        },
        "children": [
          {
            "tag": "div",
            "attributes": {
              "class": "search-container"
            },
            "children": [
              {
                "tag": "input",
                "attributes": {
                  "type": "text",
                  "placeholder": "Got an Itch...."
                }
              }
            ]
          },
          {
            "tag": "ul",
            "attributes": {
              "class": "nav-links"
            },
            "children": [
              {
                "tag": "li",
                "attributes": {
                  "class": "dropdown"
                },
                "repeat": "dropdowns",
                "children": [
                  {
                    "tag": "a",
                    "attributes": {
                      "id": "{{id}}",
                      "href": "{{url}}"
                    },
                    "content": "{{dropdownTitle}}"
                  },
                  {
                    "tag": "ul",
                    "attributes": {
                      "class": "dropdown-content"
                    },
                    "children": [
                      {
                        "tag": "li",
                        "repeat": "subItems",
                        "children": [
                          {
                            "tag": "a",
                            "attributes": {
                              
                              "id": "{{id}}",
                            },
                            "content": "{{subItemTitle}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "tag": "div",
        "attributes": {
          "class": "hamburger",
          "onclick": "toggleSidebar()"
        },
        "children": [
          {
            "tag": "span"
          },
          {
            "tag": "span"
          },
          {
            "tag": "span"
          }
        ]
      }
    ]
  }

  export {editorNavTemplate}