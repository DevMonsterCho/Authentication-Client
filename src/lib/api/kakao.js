import axios from "lib/axios";

export const get = () =>
  axios
    .get("/api/kakao/join")
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(e => console.error(e));
