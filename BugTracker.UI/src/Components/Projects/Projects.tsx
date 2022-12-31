import {
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import "./Projects.css";

import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateProject, useGetProjects } from "./projectQueries";
import { CreateProjectFormValues, Project } from "../../types";

type CreateProjectCardProps = {
  handleClose: () => void;
};

const CreateProjectCard = ({ handleClose }: CreateProjectCardProps) => {
  const { register, handleSubmit } = useForm<CreateProjectFormValues>();
  const { mutate, isSuccess } = useCreateProject();

  const onSubmit: SubmitHandler<CreateProjectFormValues> = (data) => {
    mutate(data);
    if (isSuccess) {
      handleClose();
    }
  };
  return (
    <Card className="projects-create-form">
      <Typography variant="h4">Create Project</Typography>
      <TextField
        {...register("name")}
        className="projects-create-form-name"
        label="Name"
      />
      <TextField
        {...register("description")}
        className="projects-create-form-description"
        label="Description"
        rows={6}
        multiline
      />

      <Button onClick={handleSubmit(onSubmit)}>Create Project</Button>
      <Button onClick={handleClose} className="projects-create-form-close">
        Cancel
      </Button>
    </Card>
  );
};

type ProjectListProps = {
  projects: Project[] | undefined;
};
const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="project-list">
      {projects &&
        projects.map((project, index) => {
          return (
            <Card key={index} className="project-item">
              <Typography variant="h5">{project.name}</Typography>
              <CardContent>
                <Typography variant="body1">{project.description}</Typography>
                <Typography variant="body1">
                  {project.issues ? `Issues: ${project.issues}` : `Issues: 0`}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
    </div>
  );
};

type ProjectsProps = {
  isCreateProjectOpen: boolean;
  handleClickOpen: () => void;
  handleClose: () => void;
};
const Projects = ({
  isCreateProjectOpen,
  handleClickOpen,
  handleClose,
}: ProjectsProps) => {
  const { data, isLoading, isError } = useGetProjects();

  return (
    <div className="projects-container">
      <Typography className="projects-title" variant="h3">Projects</Typography>
      <div className="projects-main">
        {isCreateProjectOpen && <CreateProjectCard handleClose={handleClose} />}
        {isError
          ? "Error"
          : isLoading
          ? "Loading"
          : !isCreateProjectOpen &&
            data && <ProjectList projects={data.data} />}
      </div>
    </div>
  );
};

export default Projects;
