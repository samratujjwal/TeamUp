import React from "react";
import ChooseTeamUp from "./ChooseTeamUp.jsx";
import Hero from "./Hero.jsx";
import StartTeamUp from "./StartTeamUp.jsx";
import TeamUpAction from "./TeamUpAction.jsx";
import TeamUpFeatures from "./TeamUpFeatures.jsx";

function FeaturesPage() {
  return (
    <>
      <Hero />
      <TeamUpFeatures />
      <TeamUpAction />
      <ChooseTeamUp />
      <StartTeamUp />
    </>
  );
}

export default FeaturesPage;
