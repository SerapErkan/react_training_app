//async-await-axios

(async () => {
  const { data: user1 } = await axios("https://jsonplaceholder.typicode.com/users/1");
  const { data: user2 } = await axios("https://jsonplaceholder.typicode.com/users/2");
  const { data: user3 } = await axios("https://jsonplaceholder.typicode.com/users/3");
  const { data: user4 } = await axios("https://jsonplaceholder.typicode.com/users/4");

  console.log(user4);
  console.log(user3);
  console.log(user2);
  console.log(user1);
})();


