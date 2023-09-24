const landingPageCardsTemplate = {
    "tag": "div",
    "attributes": {
      "class": "card-container"
    },
    "children": [
      {
        "tag": "div",
        "attributes": {
          "class": "card"
        },
        "repeat": "cards",
        "children": [
          {
            "tag": "img",
            "attributes": {
              "src": "{{imgSrc}}",
              "alt": "Card Image"
            }
          },
          {
            "tag": "h3",
            "content": "{{title}}"
          },
          {
            "tag": "p",
            "content": "{{description}}"
          },
          {
            "tag": "p",
            "content": "{{footer}}"
          }
        ]
      }
    ]
  }
  

  export {landingPageCardsTemplate}