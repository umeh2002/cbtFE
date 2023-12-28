import { useQuery } from "@tanstack/react-query";
import { getAllQuestions } from "../APIs/api";

export const useGetAllQuestions = () => {
  const { data } = useQuery({
    queryKey: ["getQuestions"],
    queryFn: getAllQuestions,
    // refetchInterval: 1000,
  });
  return data;
};
