import axios from "axios";

const sendEmail = async (
  email: string,
  message: string,
  firstname: string,
  lastname: string
) => {
  return axios({
    method: "post",
    url: "/api/send-mail",
    data: {
      email: email,
      firstname: firstname,
      lastname: lastname,
      message: message,
    },
  });
};

export default sendEmail;
