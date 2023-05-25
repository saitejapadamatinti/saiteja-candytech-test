import React, { useEffect } from "react";
import Card from "../card";
import './index.css'

const designationData = [
  {
  "id": "c20fec36-4554-4e6e-a5ac-5987aba192e4",
  "designation": "Investor Security Engineer",
  "description": "Totam maiores quis odit exercitationem. Quas illum quod veniam inventore ullam velit modi magni aliquid. Pariatur quis iure deserunt repudiandae cum.",
  "date": "2023-05-22T16:29:03.163Z"
  },
  {
  "id": "dd32b461-f04c-430f-b7f4-244e2d4a7e28",
  "designation": "Future Program Facilitator",
  "description": "Asperiores dicta dicta rem molestiae. Sit delectus aliquam ex excepturi repellendus. Libero numquam eaque labore nihil officiis cum error doloribus.",
  "date": "2023-05-23T07:41:22.823Z"
  },
  {
  "id": "ffb00892-e40c-4113-aa0e-7c01f71d598d",
  "designation": "Global Branding Producer",
  "description": "Esse voluptate optio provident expedita velit dolores exercitationem quas in. Ex quod corporis beatae veritatis quis sapiente ratione. Placeat quisquam quam.",
  "date": "2023-05-22T15:07:30.304Z"
  },
  {
  "id": "430d541a-a2dc-4538-afe4-da9338736941",
  "designation": "Direct Group Consultant",
  "description": "Officia laborum nulla. Eligendi doloribus itaque eius quam a. Sapiente enim assumenda architecto veniam nisi excepturi laboriosam.",
  "date": "2023-05-22T20:42:49.073Z"
  },
  {
  "id": "ac6ca08c-a2fc-485d-b3c0-c08e73deba2b",
  "designation": "Future Brand Architect",
  "description": "Cupiditate libero voluptatibus quas ut voluptates ipsa. Omnis a voluptatem alias eveniet. Et id saepe officia.",
  "date": "2023-05-23T02:39:51.240Z"
  },
  {
  "id": "ac4e9ce7-a7a6-4e57-8a21-2454918dd1a5",
  "designation": "Senior Marketing Developer",
  "description": "Architecto sapiente maxime ullam voluptatum. Natus repudiandae assumenda earum ex dolore fugiat hic officia ut. Iusto animi delectus eveniet tempore eaque excepturi quisquam.",
  "date": "2023-05-23T06:54:59.872Z"
  },
  {
  "id": "4c2863a3-bdae-414a-a8ea-0684ab4f95ba",
  "designation": "Forward Mobility Officer",
  "description": "Dignissimos nihil error asperiores. Eveniet odit exercitationem eius vitae quia eius temporibus alias animi. Exercitationem autem error facere libero eos velit nisi.",
  "date": "2023-05-22T12:35:37.748Z"
  },
  {
  "id": "2a0f37eb-cdb2-4256-b72b-be3c1def2196",
  "designation": "Forward Division Developer",
  "description": "Tempore eligendi non cumque delectus maxime illo libero nam unde. Saepe officia nam aut magni temporibus reprehenderit atque ad dolorem. Dolorum labore inventore temporibus libero.",
  "date": "2023-05-23T03:49:56.651Z"
  },
  {
  "id": "e5aa739a-7dd8-49d6-8fee-6c8aae02a6d4",
  "designation": "Corporate Markets Planner",
  "description": "Corrupti quibusdam occaecati id recusandae reiciendis natus. Odit officiis fugiat sunt vel tempore enim velit quasi. Aspernatur quasi dolore.",
  "date": "2023-05-23T03:31:21.935Z"
  },
  {
  "id": "88de7068-02e0-4ce9-8ae9-1e5e5e851238",
  "designation": "Forward Configuration Producer",
  "description": "Unde blanditiis ipsum laudantium fugit hic in alias ipsam. Voluptates quisquam accusamus deserunt et ad. Harum fugiat libero consequatur fugit incidunt accusamus.",
  "date": "2023-05-22T14:17:43.490Z"
  }
  ];

// const departmentApi =
//   "https://testsyncoffice.netlify.app/.netlify/functions/api/getDepartmentData";

const Designation = () => {
  // const fetchDepartmentData = async () => {
  //   const res =  await fetch(departmentApi)
  //   console.log(res)
  // }
  // useEffect(() => {
  //   fetchDepartmentData()
  // }, []);

  return (
    <div className="designation-main-container">
      {designationData.map((eachCard) => (
        <Card
          mainHead={eachCard.designation}
          descriptionPara={eachCard.description}
          cardDate={eachCard.date}
        />
      ))}
    </div>
  );
};

export default Designation;
