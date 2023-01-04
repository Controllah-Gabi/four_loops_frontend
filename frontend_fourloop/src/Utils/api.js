import axios from "axios";

const codes = axios.create({
  baseURL: "https://fourloops12345.onrender.com/api",
});

export const Login = (email, password) => {
  const postBody = {
    email: email,
    password: password,
  };
  return codes.post(`/signin`, postBody).then((res) => {
    return res.data;
  });
};

export const Logout = () => {
  return codes.post(`/signout`).then((res) => {
    return res.data;
  });
};

export const getPosts = () => {
  return codes.get("/posts").then((res) => {
    return res.data.result;
  });
};

export const getCodes = () => {
  return codes.get("/codes").then((res) => {
    return res.data.result;
  });
};

export const patchPostLikes = (post_id) => {
  const path = `/posts/${post_id}`;
  return codes.patch(path, { likes: +1 }).then((res) => {
    return res.data.result.likes;
  });
};

export const patchCodeLikes = (code_id) => {
  const path = `/codes/${code_id}`;
  return codes.patch(path, { likes: +1 }).then((res) => {
    return res.data.result.likes;
  });
};

export const getPostById = (post_id) => {
  return codes(`/posts/${post_id}`).then((res) => {
      return res.data.result;
  });
};

export const getCodesById = (code_id) => {
  return codes(`/codes/${code_id}`).then((res) => {
      return res.data.result;
  });
};

export const getComments = (post_id) => {
  return codes(`/posts/${post_id}/comments`).then(res => {
   
     return res.data.result
  });
};

export const getCommentsCode = (code_id) => {
  return codes(`/codes/${code_id}/comments`).then(res => {
    
     return res.data.result
  });
};

export const postUser = (email, firstname, lastname, password) => {
  const newUser = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
  };
  return codes.post("/register-user", newUser).then((res) => {
    return res.data.result;
  });
};

export const postComment = (newComment, post_id) => {
  const commentBody = {
      body: newComment
  };
  return codes.post(`/posts/${post_id}/comments`, commentBody).then((res) => {
      console.log(res.data)
      return res.data.result;
  })
};