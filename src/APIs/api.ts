import axios from "axios";

const url: string = "http://localhost:1234/api";

export const registerUser = async (data: any) => {
  try {
    return await axios.post(`${url}/create-user`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const getOneUser = async (userID: string) => {
  try {
    return await axios.get(`${url}/${userID}/get-one-user`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const getAllQuestions = async () => {
  try {
    return await axios.get(`${url}/get-questions`).then((res: any) => {
      console.log(res.data.data);
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const answerQuestion = async (
  userID: string,
  questionID: string,
  data: string
) => {
  try {
    return await axios
      .post(`${url}/${userID}/${questionID}/answer-question`, data)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};
