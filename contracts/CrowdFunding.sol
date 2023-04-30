// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract CrowdFunding {
    struct Project {
        address owner;
        string title;
        string description;
        uint256 deadline;
        uint256 goal;
        uint256 currentValue;
        string image;
        address[] investors;
        uint256[] investments;
    }

    mapping(uint256 => Project) public projects; // using that we can get projects by projects[0]

    uint256 public numberOfProjects = 0;

    function createProject(
        address _owner,
        string memory _title,
        string memory _description,
        uint256 _deadline,
        uint256 _goal,
        string memory _image
    ) public returns (uint256) {
        Project storage project = projects[numberOfProjects];

        require(project.deadline < block.timestamp, "The deadline should be a date in the future.");

        project.owner = _owner;
        project.title = _title;
        project.description = _description;
        project.goal = _goal;
        project.deadline = _deadline;
        project.currentValue = 0;
        project.image = _image;

        numberOfProjects++;

        return numberOfProjects -1;
    }

    function investToProject(uint256 _id)  public payable {
        uint256 amount = msg.value;

        Project storage project = projects[_id];
        project.investors.push(msg.sender);
        project.investments.push(amount);

        (bool sent,) = payable(project.owner).call{value: amount}("");

        if(sent) {
            project.currentValue = project.currentValue + amount;
        }
    }

    function getInvestors(uint256 _id) public view  returns (address[] memory, uint256[] memory) {
        return (projects[_id].investors, projects[_id].investments);
    }

    function getProjects() public view returns (Project[] memory)  {
        Project[] memory allProjects = new Project[](numberOfProjects);

        for(uint i = 0; i < numberOfProjects; i++) {
            Project storage project = projects[i];
            allProjects[i] = project;
        }

        return allProjects;
    }
}
