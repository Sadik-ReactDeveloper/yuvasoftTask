import axios from "axios";
const instance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/posts"
})
export default instance

// let str="";
// for(let i=1; i<=5; i++){
//     for(let j=5; j>i; j--){
//         str=str+i
         
//     }
//     str=str+"\n"
//      console.log(str)
// }