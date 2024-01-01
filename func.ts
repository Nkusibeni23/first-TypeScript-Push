const func = () => {
  return;
};

const calculateMyAge = (birthYear: number): number => {
  // the age according to the birthYear

  return new Date(Date.now()).getFullYear() - birthYear;
};

const myAge = calculateMyAge(2000);

console.log(myAge);

function greetMe(userInfo: { name: string; age: number }): string {
  return (
    userInfo.name +
    ". it's nice to know that you are" +
    " " +
    userInfo.age +
    " years old."
  );
}

console.log(greetMe({ name: "John Doe", age: myAge }));
