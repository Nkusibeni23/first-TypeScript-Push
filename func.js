var calculateMyAge = function (birthYear) {
    // the age according to the birthYear
    return new Date(Date.now()).getFullYear() - birthYear;
};
var myAge = calculateMyAge(2000);
console.log(myAge);
function greetMe(userInfo) {
    return (userInfo.name +
        ". it's nice to know that you are" +
        " " +
        userInfo.age +
        " years old.");
}
console.log(greetMe({ name: "John Doe", age: myAge }));
