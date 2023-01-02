import { useQuery, UseQueryOptions } from "react-query";
import { BASE_URL, Issue, ResponseModel } from "../../types";

export const useGetIssuesForProject = (
  id: number
) => {
  return useQuery(`GetIssuesForProject${id}`, async () => {
    const result = await fetch(`${BASE_URL}Issue/GetIssuesForProject/${id}`); 
    return result.json() as Promise<ResponseModel<Issue[]>>;
  });
};
