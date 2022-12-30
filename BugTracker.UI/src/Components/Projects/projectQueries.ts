import { useMutation, UseMutationOptions, useQueryClient } from "react-query";
import { CreateProjectFormValues } from "./Projects";
const BASE_URL = "https://localhost:7284/api/"
const postParams = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };


    export const useCreateProject = (options?: UseMutationOptions<any, unknown, CreateProjectFormValues, unknown>) => {
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
      }
      

