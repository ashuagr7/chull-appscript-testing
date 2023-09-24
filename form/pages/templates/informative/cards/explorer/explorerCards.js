const explorerCardTemplate = {
    "tag": "div",
    "attributes": {
        "class": "card-container"
    },
    
    "children": [
        {
            "tag": "div",
            "repeat": "files",
            "attributes": {
                "class": "card-item"
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
                        "class": "card-info"
                    },
                    "children": [
                        {
                            "tag": "p",
                            "attributes": {
                                "class": "card-name"
                            },
                            "content": "{{filename}}"
                        },
                        {
                            "tag": "p",
                            "attributes": {
                                "class": "card-meta"
                            },
                            "content": "Last modified: {{lastModified}}"
                        }
                    ]
                },
                {
                    "tag": "p",
                    "attributes": {
                        "class": "card-size"
                    },
                    "content": "File Size: {{fileSize}}"
                }
            ]
        }
    ]
};


export {explorerCardTemplate}