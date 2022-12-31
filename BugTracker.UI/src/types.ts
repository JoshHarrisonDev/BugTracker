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
    descripion:string;
    issueStatus: IssueStatus;
    project: Project;
    epic?: Issue; 
}

enum IssueStatus {
    NotStarted,
    InProgress,
    AwaitingReview,
    AwaitingDeployment,
    Testing,
    Done
}