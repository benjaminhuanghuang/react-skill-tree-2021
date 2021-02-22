type FavoriteNumber = string | number;
let num: FavoriteNumber = "6";

// Utility type


// Get the type of the parameters of a method
//Parameters<typeof http>

type Person = {
  name: string;
  age: number;
};

// tom can have "partial" fields of Persion
const tom: Partial<Person> = {
  age: 30,
};

// delete fileds from existd type
const jack: Omit<Person, 'name'> = {
  age: 30,
};

// delete 'name' and 'age' from existd type
const ken: Omit<Person, 'name'|'age'> = {
  age: 30,
};
