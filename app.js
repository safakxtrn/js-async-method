import axios from "axios";

async function getDataAsync(userId) {
  const {data: user} = await axios(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const {data: posts} = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return {user: user, posts: posts};
}

export default getDataAsync;
