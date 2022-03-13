
//async-await-fetch

async function getData() {
  const data1 = await (
    await fetch("https://jsonplaceholder.typicode.com/users/1")
  ).json();
  const data2 = await (
    await fetch("https://jsonplaceholder.typicode.com/users/2")
  ).json();
  const data3 = await (
    await fetch("https://jsonplaceholder.typicode.com/users/3")
  ).json();
  const data4 = await (
    await fetch("https://jsonplaceholder.typicode.com/users/4")
  ).json();

  console.log(data4);
  console.log(data3);
  console.log(data2);
  console.log(data1);
}

getData();