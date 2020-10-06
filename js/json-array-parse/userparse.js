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

for (let i = 0; i < userData.length; i++) {
  console.log(userData[i]);
}

console.log("Combines User Data where the Language Args Match:");
console.log("==================================================");
// for (let lang in user.languages) {
//   let userItems = {
//     arg: lang
//   }
// }

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

usersLangData.forEach(element => {
  console.log("Getting Elements...");
  console.log(element);
  let languageArgs = {};
  console.log(`appending ${element} to their own object`);
  languageArgs["args"] = element;
  console.log(JSON.stringify(languageArgs));
})

// let userLangs = users.map(languages => {
//   let languageArgs = {};
//   languages = Object.keys(users[1].languages);
//   languageArgs["args"] = languages;
//   usersLangData.push(userLangs);
//   return userLangs;
// });


