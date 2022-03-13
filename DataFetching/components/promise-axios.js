//resolve => .then
//reject => .catch 

const getComments=(number)=>{

    return new Promise(async(resolve, reject)=>{
        if (number===1) {
            const { data: user1 } = await axios("https://jsonplaceholder.typicode.com/users/1");
            resolve(user1); 
        }
          else {
            reject(Error("bir problem var"));
          }
    });
};
getComments(1)

.then((data)=>console.log(data))
.catch((e)=>console.log(e));



