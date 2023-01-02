import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
} from "react-query";
import { BASE_URL, CreateProjectFormValues, Project, ResponseModel } from "../../types";

const getParams = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
};

const postParams = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};

const deleteParams = {
  method: "DELETE",
  headers: { "Content-Type": "application/json" },
};

export const useCreateProject = (
  options?: UseMutationOptions<any, unknown, CreateProjectFormValues, unknown>
) => {
  const queryClient = useQueryClient();

  return useMutation(
    "create-project",
    async (values: CreateProjectFormValues) => {
      return await fetch(`${BASE_URL}Project/CreateProject`, {
        ...postParams,
        body: JSON.stringify(values),
      })
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          return data;
        });
    },
    {
      ...options,
      onSuccess: (data, variables, context) => {
        options?.onSuccess?.(data, variables, context);
      },
    }
  );
};

export const useGetProjects = () => {
  return useQuery("GetProjects", async () => {
    const result = await fetch(`${BASE_URL}Project/GetProjects`);
    return result.json() as Promise<ResponseModel<Project[]>>;
  });
};

export const useGetProject = (id: number) => {
  return useQuery(`GetProject${id}`, async () => {
    const result = await fetch(`${BASE_URL}Project/GetProject/${id}`);
    return result.json() as Promise<ResponseModel<Project>>;
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  return useMutation("delete-project", async (id: number) => {
    const result = await fetch(`${BASE_URL}Project/DeleteProject/${id}`, {
      ...deleteParams
    });
    queryClient.invalidateQueries("GetProjects");
    return result.json() as Promise<ResponseModel<number>>;
  })
}