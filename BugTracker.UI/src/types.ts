export type ResponseModel<T> = {
    data?: T;
    message?: string;
    statusCode: number;
}

export type CreateProjectFormValues = {
    name: string;
    description: string;
  };

export type Project = {
    id: number;
    name: string;
    description: string;
    issues: Issue[];

}

export type Issue = {
    id: number;
    name: string;
    description:string;
    status: IssueStatus;
    project: Project;
    issuseType: IssueType; 
}

export enum IssueStatus {
    NotStarted,
    InProgress,
    AwaitingReview,
    AwaitingDeployment,
    Testing,
    Done
}

export enum IssueType {
    Bug,
    Story,
    Epic
}

export const BASE_URL = "https://localhost:7284/api/";