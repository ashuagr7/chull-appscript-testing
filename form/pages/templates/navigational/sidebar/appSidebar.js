const appSidebarTemplate = {
    "tag": "div",
    "attributes": {
      "class": "sidebar",
      "id": "sidebar",
      "onclick": "toggleSubMenu(event)"
    },
    "children": [
      {
        "tag": "h4",
        "content": "{{header}}"
      },
      {
        "tag": "div",
        "attributes": {
          "class": "menu-item"
        },
        "repeat": "menuItems",
        "children": [
          {
            "tag": "a",
            "content": "{{title}}",
            "children": [
              {
                "tag": "i",
                "attributes": {
                  "class": "ri-arrow-right-s-line"
                }
              }
            ]
          },
          {
            "tag": "ul",
            "attributes": {
              "class": "sub-menu",
              "id": "{{subMenuId}}"
            },
            "children": [
              {
                "tag": "li",
                "repeat": "subOptions",
                "content": "{{subOption}}"
              }
            ]
          }
        ]
      },
      {
        "tag": "div",
        "attributes": {
          "class": "nav-items",
          "id": "nav-items"
        },
        "children": [
          {
            "tag": "div",
            "attributes": {
              "class": "menu-item"
            },
            "repeat": "navItems",
            "children": [
              {
                "tag": "a",
                "content": "{{navTitle}}",
                "children": [
                  {
                    "tag": "i",
                    "attributes": {
                      "class": "ri-arrow-right-s-line"
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }

  export {appSidebarTemplate}