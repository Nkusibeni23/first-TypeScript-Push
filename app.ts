type user = {
  name: string;
  age: number;
  isMarried: boolean;
  hubbies: string[];
  gender?: string;
};

const user: user = {
  name: "johnDoe",
  age: 18,
  isMarried: false,
  hubbies: ["Playing Soccer", "Watching Movies"],
  gender: "Male",
};

const userTwo: user = {
  name: "johnDoe",
  age: 18,
  isMarried: false,
  hubbies: ["Playing Soccer", "Watching Movies"],
};

const users: user[] = [user];
