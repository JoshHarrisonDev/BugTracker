import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { useGetIssuesForProject } from './boardQueries';

type Props = {
}

export const Board = ({}: Props) => {

  let params = useParams();
  const {data} = useGetIssuesForProject(Number(params["id"]))
  useEffect(() => {
    console.log(data);
    
  }, [data])
  return (
    <div>Board for</div>
  )
}