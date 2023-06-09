import { CrowdFunding } from "../../typechain-types";
import { bigNumberishToNumber } from "./bigIntToNumber";

export const convertProjectData = (data: CrowdFunding.ProjectStructOutput[]) =>
  data.map((project, idx) => {
    const deadline = new Date(bigNumberishToNumber(project.deadline));
    const goal = bigNumberishToNumber(project.goal);
    const currentValue = bigNumberishToNumber(project.currentValue);

    return {
      id: idx,
      owner: project.owner,
      title: project.title,
      description: project.description,
      deadline,
      goal,
      currentValue,
      image: project.image,
      investors: project.investors,
      investments: project.investments.map((value) =>
        bigNumberishToNumber(value)
      ),
      isClosed: project.isClosed,
    };
  });
