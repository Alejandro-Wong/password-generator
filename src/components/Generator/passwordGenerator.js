
// Characters to be used in password
const regularChars = [
    'q','w','e','r','t','y','u','i','o',
    'p','a','s','d','f','g','h','j','k','l',
    'z','x','c','v','b','n','m',
];

const numberChars = ['0','1','2','3','4','5','6','7','8','9']

const specialChars = [
    '~','`','!','@','#','$','%','^','&','(',')',
    '_','+','=','{','}','|','\\',':',';','"','<',
    '>','.','/','?'
];

function getRandomIndex(array) {
    const index = Math.floor(Math.random() * array.length);
    return index
};

export default function generatePassword(length, numCap, numSpec, numNum) {
    /*
    Generate password of custom length, number of capital letters, 
    number of special characters, and number of numbers. 
    */
   
    // Initializations
    let password = [];
    const usedIndexes = [];
    const passwordLength = length;


    // Start with random regular characters
    for (let i = 0; i < passwordLength; i++) {
        password.push(regularChars[getRandomIndex(regularChars)])
    }

    // Capitalize letters at random indexes
    let capCount = 0;
    while (capCount < numCap) {
        const randomIndex = getRandomIndex(password);
        usedIndexes.push(randomIndex);
        password[randomIndex] = password[randomIndex].toUpperCase();
        capCount++;
    };
    
    // Insert special characters at unused random indexes
    let specialCharCount = 0;
    while (specialCharCount < numSpec) {
        const randomIndex = getRandomIndex(password);
        while (!usedIndexes.includes(randomIndex)) {
            password[randomIndex] = specialChars[getRandomIndex(specialChars)];
            usedIndexes.push(randomIndex);
            specialCharCount++;
        }
    };

    // Insert numebrs at random indexes
    let numCount = 0;
    while (numCount < numNum) {
        const randomIndex = getRandomIndex(password);
        while (!usedIndexes.includes(randomIndex)) {
            password[randomIndex] = numberChars[getRandomIndex(numberChars)];
            usedIndexes.push(randomIndex);
            numCount++;
        }
    };

    password = password.join('');
    return password;
};


