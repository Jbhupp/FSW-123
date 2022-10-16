//export file for array of todo objects with a property


const { v4: uuidv4 } = require('uuid');
export const todos=[

    {text: "Wake Up",
    id: uuidv4(),
    isComplete: true
    },

    {text: "Shower and get ready",
    id: uuidv4(),
    isComplete: true
    },

    {text: "Eat Breakfast",
    id: uuidv4(),
    isComplete: false
    },

    {text: "Go to work",
    id: uuidv4(),
    isComplete: false
    }
];