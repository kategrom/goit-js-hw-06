import users from './users.js';

// Task 1

// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };

// console.table(getUserNames(users));


// Task 2

// const getUsersWithEyeColor = (users, color) =>
//   users.filter((user) => user.eyeColor === color);

// console.table(getUsersWithEyeColor(users, 'blue'));


// Task 3

// const getUsersWithGender = (users, gender) => {
//   return users
//     .filter((user) => user.gender === gender)
//     .map((user) => user.name);
// };

// console.table(getUsersWithGender(users, 'male'));


// Task 4

// const getInactiveUsers = users => {
//   return users.filter(user => !user.isActive)
// };

// console.table(getInactiveUsers(users));


// Task 5

// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email)
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); 
// console.log(getUserWithEmail(users, 'elmahead@omatom.com'));


// Task 6

// const getUsersWithAge = (users, min, max) => {
//   return users.filter((user) => user.age >= min && user.age <= max);
// };

// console.table(getUsersWithAge(users, 20, 30)); 

// console.table(getUsersWithAge(users, 30, 40));


// Task 7

// const calculateTotalBalance = (users) => {
//   return users.reduce((prev, user) => prev + user.balance, 0);
// };

// console.log(calculateTotalBalance(users));


// Task 8

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName));
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); 
// console.log(getUsersWithFriend(users, 'Goldie Gentry'));


// Task 9

// const getNamesSortedByFriendsCount = (users) => {
//   const sortedUsers = users.sort((userA, userB) => {
//     return userA.friends.length - userB.friends.length;
//   });

//   const userNames = sortedUsers.map((user) => user.name);

//   return userNames;
// };

// console.log(getNamesSortedByFriendsCount(users));


// Task 10

// const getSortedUniqueSkills = (users) => {
//   return users
//     .reduce((acc, user) => {
//       user.skills.forEach((skill) => {
//         if (!acc.includes(skill)) {
//           acc.push(skill);
//         }
//       });

//       return acc;
//     }, [])
//     .sort();
// };

// console.log(getSortedUniqueSkills(users));