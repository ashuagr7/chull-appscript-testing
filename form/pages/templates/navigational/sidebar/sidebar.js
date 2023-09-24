const sidebarTemplate = {
    "tag": "div",
    "attributes": {
      "class": "sidebar",
      "id": "sidebar",
      "onclick": "toggleSubMenu(event)"
    },
    "children": [
      {
        "tag": "div",
        "attributes": {
          "class": "menu-item"
        },
        "repeat": "menuItems",
        "children": [
          {
            "tag": "a",
            "content": "{{title}}<i class='{{icon}}'></i>"
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
                "repeat": "subMenuItems",
                "content": "{{subMenuItem}}"
              }
            ]
          }
        ]
      }
    ]
  }

  export {sidebarTemplate}