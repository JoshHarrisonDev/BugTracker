import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Issue, IssueStatus } from "../../types";
import { useGetProject } from "../Projects/projectQueries";
import { useGetIssuesForProject } from "./boardQueries";
import "./Board.css";
type Props = {};

type IssueCardProps = {
  issue: Issue;
};
const IssueCard = ({ issue }: IssueCardProps) => {
  useEffect(() => {
    console.log(issue);
  });
  return (
    <Card sx={{ minWidth: "75px" }}>
      <Typography variant="body1">{issue.name}</Typography>
      <Typography variant="body2">{issue.description}</Typography>
    </Card>
  );
};

type ColumnProps = {
  issues?: Issue[];
  issueStatus: IssueStatus;
};
const Column = ({ issues, issueStatus }: ColumnProps) => {
  return (
    <div className="col">
      <Typography variant="h6">{IssueStatus[issueStatus]}</Typography>
      {issues?.map((issue) => {
        return <IssueCard issue={issue} />;
      })}
    </div>
  );
};

export const Board = ({}: Props) => {
  let params = useParams();
  const { data: issuesResponse } = useGetIssuesForProject(Number(params["id"]));
  const { data: projectResponse } = useGetProject(Number(params["id"]));

  const issueStatusKeys = [
    IssueStatus.NotStarted,
    IssueStatus.InProgress,
    IssueStatus.AwaitingReview,
    IssueStatus.AwaitingDeployment,
    IssueStatus.Testing,
    IssueStatus.Done,
  ];

  useEffect(() => {
    console.log(issueStatusKeys);
    console.log(issuesResponse);
  }, [issueStatusKeys]);

  return (
    <div className="board-container">
      <Typography className="board-title" variant="h4">
        Project: {projectResponse?.data?.name}
      </Typography>
      <div className="board-cols">
        {issueStatusKeys.map((issueStatus) => {
          return (
            <Column
              issueStatus={issueStatus}
              issues={issuesResponse?.data?.filter(
                (issue) => issue.status === issueStatus
              )}
            ></Column>
          );
        })}
      </div>
    </div>
  );
};
