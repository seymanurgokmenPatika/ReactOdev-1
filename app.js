import axios from "axios";

let datas = async(Number) => {
    let {data: users} = await axios("https://jsonplaceholder.typicode.com/users/"+Number);
    let {data: posts}= await axios("https://jsonplaceholder.typicode.com/posts?userId="+Number);
    return{users,posts};
}

export default datas;