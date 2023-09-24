const listDeskTemplate ={
    "tag": "div",
    "attributes": {
      "class": "list-container-desk"
    },
    "children": [
      {
        "tag": "div",
        "attributes": {
          "class": "list-header"
        },
        "children": [
          {
            "tag": "p",
            "content": ""
          },
          {
            "tag": "p",
            "attributes": {
              "class": "name-header"
            },
            "content": "Name"
          },
          {
            "tag": "p",
            "attributes": {
              "class": "owner-header"
            },
            "content": "Owner"
          },
          {
            "tag": "p",
            "attributes": {
              "class": "last-modified-header"
            },
            "content": "Last Modified"
          },
          {
            "tag": "p",
            "attributes": {
              "class": "file-size-header"
            },
            "content": "File Size"
          }
        ]
      },
      {
        "tag": "div",
        "attributes": {
          "class": "list-item"
        },
        "repeat": "folder",
        "children": [
          {
            "tag": "i",
            "attributes": {
              "class": "ri-file-text-fill"
            }
          },
          {
            "tag": "p",
            "attributes": {
              "class": "item-name"
            },
            "content": "{{folderName}}"
          },
          {
            "tag": "p",
            "attributes": {
              "class": "item-owner"
            },
            "content": "{{ownerName}}"
          },
          {
            "tag": "p",
            "attributes": {
              "class": "item-last-modified"
            },
            "content": "{{lastModified}}"
          },
          {
            "tag": "p",
            "attributes": {
              "class": "item-size"
            },
            "content": "{{fileSize}}"
          }
        ]
      }
    ]
  }
export {listDeskTemplate}  