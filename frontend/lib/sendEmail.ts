import axios from "axios";
//Setting a function to send post method on /api/send-mail, definig which data should send to api
const sendEmail = async (
  email: string,
  message: string,
  firstname: string,
  lastname: string
) => {
  return axios({
    method: "post",
    url: "/api/send-mail",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    data: {
      email: email,
      firstname: firstname,
      lastname: lastname,
      message: message,
    },
  });
};

export default sendEmail;
