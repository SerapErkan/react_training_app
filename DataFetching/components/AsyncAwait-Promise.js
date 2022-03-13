
/*
Async/await ES7 ile javascript’e kazandırılmış bir yapıdır. 
Promise yapılarını yakalamak için then ve catch bloklarını kullanıyorduk. 
Birden fazla then bloğunu birleştirerek bir zincir oluşturduğumuzda bir süre sonra kod okunamaz ve karmaşık hale gelmektedir.
Bu yüzden asenkron işlemleri daha kolay tanımlayabilmemiz için async/await yapısı ortaya çıkmıştır
 */

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
  });
};

/* 
async bir fonksiyon oluşturduk ve bunu loadData değişkenine atadık. 
Daha sonra farklı bir async bir fonksiyon içerisinde loadData’yı çağırdık.
Fakat normal çağırma biçiminden farklı olarak başına await kelimesini ekledik.
Bu kelime asenkron olan bir işlemin sonucu dönene kadar beklemesini sağlamaktadır

 getUser()
    .then((user1) => console.log(user1))
    .catch((e) => console.log(e));
getPost(1)
    .then((post) => console.log(post))
    .catch((e) => console.log(e));


*/

(async () => {
  await getUser()
    .then((user1) => console.log(user1))
    .catch((e) => console.log(e));

  await getPost(1)
    .then((post) => console.log(post))
    .catch((e) => console.log(e));
})();
