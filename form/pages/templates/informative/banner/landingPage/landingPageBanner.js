const landingPageBannerTemplate = {
    "tag": "section",
    "children": [
      {
        "tag": "article",
        "children": [
          {
            "tag": "p",
            "content": "And let {{{{img}}}} chull handle the rest."
          }
        ]
      },
      {
        "tag": "div",
        "children": [
          {
            "tag": "p",
            "content": "{{uniqueWorkspaceText}}"
          },
          {
            "tag": "div",
            "attributes": {
              "class": "button-container"
            },
            "children": [
              {
                "tag": "button",
                "attributes": {
                  "class": "tryBtn"
                },
                "content": "{{tryBtnText}}"
              },
              {
                "tag": "button",
                "attributes": {
                  "class": "haveMoreBtn"
                },
                "content": "{{haveMoreBtnText}}"
              }
            ]
          }
        ]
      }
    ]
  }

  export {landingPageBannerTemplate}