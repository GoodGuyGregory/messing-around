let users = [{
  "heroimage": "https://avatars0.githubusercontent.com/u/36649901?v=4",
  "username": "GoodGuyGregory",
  "languages": { "python": 4, "java": 3, "c++": 3, "f#": 2, "ruby": 3, "swift": 1, "go": 3, "javascript": 4, "c#": 3 }
},
{
  "heroimage": "https://avatars0.githubusercontent.com/u/36649901?v=4",
  "username": "SamuraiJack",
  "languages": { "python": 2, "java": 2, "c++": 2, "f#": 2, "ruby": 2, "swift": 2, "go": 2, "javascript": 2, "c#": 2 }
},
{
  "heroimage": "https://avatars0.githubusercontent.com/u/36649901?v=4",
  "username": "AmericanFootball",
  "languages": { "python": 3, "java": 3, "c++": 3, "f#": 3, "ruby": 3, "swift": 3, "go": 3, "javascript": 3, "c#": 3 }
},
{
  "heroimage": "https://avatars0.githubusercontent.com/u/36649901?v=4",
  "username": "Goodguygregory",
  "languages": { "python": 2, "java": 2, "c++": 3, "f#": 4, "ruby": 5, "swift": 4, "go": 3, "javascript": 2, "c#": 2 }
}]

let userData = [];


console.log('Get User Names:');
console.log('================');
for (let i = 0; i < users.length; i++) {
  console.log(users[i].username);
}
console.log('ForEach User Name:');
console.log('==================');

users.forEach(user => {
  for (let lang in user.languages) {
    let userItems = {
      arg: lang
    }
    userItems[user.username] = user.languages[lang];
    userData.push(userItems);
  }
});
console.log("");
console.log("Combined User Data in single Array of separate Objects by language");
console.log("==================================================");
for (let i = 0; i < userData.length; i++) {
  console.log(userData[i]);
}

console.log(" ");
// GETTING KEYS WITH VALUES:
console.log("Accessing Keys of Objects:");
console.log("==============================");

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}


const map = { "first": "1", "second": "2" };
console.log(getKeyByValue(map, "2"));


Object.prototype.getKeyByValue = function (value) {
  for (var prop in this) {
    if (this.hasOwnProperty(prop)) {
      if (this[prop] === value)
        return prop;
    }
  }
}

var test = {
  key1: 42,
  key2: 'foo'
};

test.getKeyByValue(42);  // returns 'key1'

// Vanilla JS to return the objet's keys:
console.log(Object.keys(test));

console.log("Keys from the Users Object:");
console.log("=============================");

console.log(Object.keys(users[1].languages));
let usersLangData = Object.keys(users[1].languages);

//  Combine the properties:
console.log("Creates an Array of Objects with each Language:");
console.log("===============================================");
let LanguageData = [];
usersLangData.forEach(element => {
  // console.log("Getting Elements...");
  // console.log(element);
  let languageArgs = {};
  // console.log(`appending ${element} to their own object`);
  languageArgs["arg"] = element;
  console.log(JSON.stringify(languageArgs));
  LanguageData.push(languageArgs);
})

// Checking contents of userLangData:
console.log("Elements inside of LanguageData");
console.log("=====================================");
LanguageData.forEach(lang => {
  console.log(lang.arg);
});
console.log(" ");
// Combine UserData where the arg matches the language preference:
console.log("Combine User language values with args:");
console.log("=========================================");


for (let i = 0; i < LanguageData.length; i++) {
  const element = LanguageData[i].arg;
  console.log(element);
}

users.forEach(user => {
  for (let lang in user.languages) {
    for (let i = 0; i < LanguageData.length; i++) {
      // console.log(i);
      console.log(LanguageData[i].arg);
      if (lang == LanguageData[i].arg) {
        LanguageData[i][user.username] = user.languages[lang];
      }
    }
  }
});

console.log("Contents of LanguageData:");
console.log("============================");
LanguageData.forEach(element => {
  console.log(element);
});