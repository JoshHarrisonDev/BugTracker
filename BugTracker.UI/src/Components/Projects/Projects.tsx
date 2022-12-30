import {
  Button,
  Card,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "./Projects.css";

import { SubmitHandler, useForm} from "react-hook-form";
import { useCreateProject } from "./projectQueries";

type Props = {};
export type CreateProjectFormValues = {
  name: string;
  description: string;
}

const Projects = (props: Props) => {
  const [isCreateProjectOpen, setisCreateProjectOpen] = React.useState(false);

  const {register, handleSubmit} = useForm<CreateProjectFormValues>()

  const handleClickOpen = () => {
    setisCreateProjectOpen(true);
  };

  const handleClose = () => {
    setisCreateProjectOpen(false);
  };
  const {mutate} = useCreateProject()

  const onSubmit: SubmitHandler<CreateProjectFormValues> = (data) => {

    mutate(data);
    
  }

  return (
    <div className="projects-container">
      <Typography variant="h3">Projects</Typography>
      <div className="projects-navbar">
        <Button onClick={handleClickOpen} variant="contained">
          Create
        </Button>
      </div>
      <div className="projects-main">
        {isCreateProjectOpen && (
          <Card className="projects-create-form">
            <Typography variant="h4">Create Project</Typography>
            <TextField {...register("name")} className="projects-create-form-name" label="Name" />
            <TextField
            {...register("description")}
              className="projects-create-form-description"
              label="Description"
              rows={6}
              multiline
            />

            <Button onClick={handleSubmit(onSubmit)}>Create Project</Button>
            <Button
              onClick={handleClose}
              className="projects-create-form-close"
            >
              Cancel
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Projects;
