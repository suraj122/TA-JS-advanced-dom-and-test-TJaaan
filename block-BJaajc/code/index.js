function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

function isPallindrome(str) {
  if (str.split("").reverse().join("")) {
    return true;
  } else false;
}

module.exports = getFullName;
// module.exports = isPallindrome;
