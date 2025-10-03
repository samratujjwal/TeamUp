import React from "react";
import CreateWorkSpace from "./CreateWorkSpace.jsx";
import CreateProjectForm from "./createProjectForm.jsx";
// import LiveCodeEditor from "../projectEditor/LiveCodeEditor.jsx";

function WorkSpacePage() {
  return (
    <>
      {/* <WorkSpaceNav /> */}
      <CreateWorkSpace />
      <CreateProjectForm />
    </>
  );
}

export default WorkSpacePage;
