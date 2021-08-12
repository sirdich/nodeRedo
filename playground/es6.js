//object property shorthand

const name = 'Nicholas';
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: 'Thetford',
};

console.log(user);

//object destructuring

const product = {
  label: 'Red Notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2,
};

const { label: productLabel, stock, rating = 5 } = product;
console.log(productLabel, stock, rating);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction('order', product);
