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
        bool isClosed;
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

        require(
            project.deadline < block.timestamp,
            "The deadline should be a date in the future."
        );

        project.owner = _owner;
        project.title = _title;
        project.description = _description;
        project.goal = _goal;
        project.deadline = _deadline;
        project.currentValue = 0;
        project.image = _image;
        project.isClosed = false;

        numberOfProjects++;

        return numberOfProjects - 1;
    }

    function closeProject(uint256 projectId) public payable {
        Project storage project = projects[projectId];
        require(
            project.owner == msg.sender,
            "Only project owner can close the project"
        );
        require(!project.isClosed, "Project is already closed");
        bool processed = false;

        if (project.currentValue >= project.goal) {
            payable(project.owner).transfer(project.currentValue);
            processed = true;
        } else {
            for (uint256 j = 0; j < project.investors.length; j++) {
                payable(project.investors[j]).transfer(project.investments[j]);
            }
            processed = true;
        }
        
        project.isClosed = processed;
    }

    function investToProject(uint256 _id) public payable {
        uint256 amount = msg.value;

        Project storage project = projects[_id];

        project.investors.push(msg.sender);
        project.investments.push(amount);
        project.currentValue = project.currentValue + amount;
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function getInvestors(
        uint256 _id
    ) public view returns (address[] memory, uint256[] memory) {
        return (projects[_id].investors, projects[_id].investments);
    }

    function getProjects() public view returns (Project[] memory) {
        Project[] memory allProjects = new Project[](numberOfProjects);

        for (uint i = 0; i < numberOfProjects; i++) {
            Project storage project = projects[i];
            allProjects[i] = project;
        }

        return allProjects;
    }
}
