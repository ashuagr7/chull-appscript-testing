const listMobTemplate = {
    "tag": "div",
    "attributes": {
        "class": "list-container-phone"
    },
    "children": [
        {
            "tag": "div",
            "repeat": "folder",

            "attributes": {
                "class": "list-item"
            },

            "children": [
                {
                    "tag": "i",
                    "attributes": {
                        "class": "ri-file-text-fill"
                    }
                },
                {
                    "tag": "div",
                    "attributes": {
                        "class": "item-info"
                    },
                    "children": [
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
                                "class": "item-meta"
                            },
                            "content": "Last modified: {{lastModified}}"
                        }
                    ]
                },
                {
                    "tag": "p",
                    "attributes": {
                        "class": "item-size"
                    },
                    "content": "File Size: {{fileSize}}"
                }
            ]
        }
    ]
}


export { listMobTemplate }