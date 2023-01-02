import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import "./Projects.css";

import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateProject, useDeleteProject, useGetProjects } from "./projectQueries";
import { CreateProjectFormValues, Project } from "../../types";
import { useNavigate } from "react-router-dom";


type CreateProjectCardProps = {
  handleClose: () => void;
};

const CreateProjectCard = ({ handleClose }: CreateProjectCardProps) => {
  const { register, handleSubmit } = useForm<CreateProjectFormValues>();
  const { mutate, isSuccess } = useCreateProject();


  const onSubmit: SubmitHandler<CreateProjectFormValues> = (data) => {
    mutate(data);
    
      handleClose();
    
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
 
  const {mutate: DeleteProject} = useDeleteProject();

  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    DeleteProject(id);
  }

  const handleOpenProject = (id:number) => {

    navigate(`/Projects/${id}`)
  }

  return (
    <div className="project-list">
      {projects &&
        projects.map((project, index) => {
          return (
            <Card key={index} className="project-item">
              <Typography onClick={() => handleOpenProject(project.id)} variant="h5">{project.name}</Typography>
              <Skeleton variant="circular" width={50} height={50} />
              <CardContent>
                <Typography variant="body1">{project.description}</Typography>
                <Typography variant="body1">
                  {`Issues: ${project.issueCount}`}
                </Typography>
                <Button onClick={() => handleDelete(project.id)}>Delete</Button>
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
      <Typography className="projects-title" variant="h3">
        Projects
      </Typography>
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
