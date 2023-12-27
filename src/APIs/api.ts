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
