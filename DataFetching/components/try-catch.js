const getUser = () => {
  return new Promise(async (resolve, reject) => {
    const { data: user1 } = await axios("https://jsonplaceholder.typicode.com/users/1");
    resolve(user1);
  });
};
const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data: post } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
    resolve(post);
    // reject("bir hata oluştu");
  });
};

(async () => {
  
  try {
    const users = await getUser();
    const posts = await getPost(1);

    console.log(users);
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
})();


/*
Birden fazla Promise ===>
Promise.all([getPost(1),getUser()]).then(console.log).catch(console.log);
*/


