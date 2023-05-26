import React, { useEffect } from "react";
import Card from "../card";

const departmentData = [
  {
    id: "b9936a25-22e1-4126-a8b2-84791816f146",
    department: "Markets",
    description:
      "Porro incidunt tempora ipsam exercitationem sunt consectetur sint. Eaque vero ut quod amet dolorem voluptatem. Saepe nam odio mollitia consequuntur.",
    date: "2023-05-23T06:58:19.497Z",
  },
  {
    id: "2aa7b89d-dd88-4bc9-b907-972d4dc050f8",
    department: "Research",
    description:
      "Quibusdam similique praesentium cum in occaecati. Impedit at fuga expedita beatae natus. Itaque rerum consequatur.",
    date: "2023-05-22T22:04:18.530Z",
  },
  {
    id: "7db2dcf3-a70b-47ab-b959-42d7c1edbbc8",
    department: "Program",
    description:
      "Expedita magnam officia suscipit occaecati. Odit dolore quae a. Labore sit commodi.",
    date: "2023-05-23T01:20:50.141Z",
  },
  {
    id: "b064ecb8-af65-4722-8329-8dc0b0aec5e9",
    department: "Quality",
    description:
      "Doloribus maxime inventore odit unde occaecati explicabo. Architecto molestiae ea repudiandae. Dolor odit laboriosam ad alias ducimus quibusdam sunt nesciunt nulla.",
    date: "2023-05-23T03:16:44.859Z",
  },
  {
    id: "22404f08-f118-4843-9e02-d1a50c4586c5",
    department: "Intranet",
    description:
      "Et repellat impedit iusto recusandae et dolorem libero blanditiis. Iure a quos quidem ipsa harum nisi adipisci. Tempore unde blanditiis quo non deserunt qui quas sint.",
    date: "2023-05-22T18:24:19.761Z",
  },
  {
    id: "8e6ec694-d653-4bf0-8350-f246ded467a3",
    department: "Program",
    description:
      "Sint necessitatibus quisquam non rerum vero. Esse dicta commodi delectus. Minus ducimus quidem mollitia.",
    date: "2023-05-23T01:07:27.398Z",
  },
  {
    id: "61a3c0bd-b5e2-4ec7-aeee-d0cb1568212c",
    department: "Directives",
    description:
      "Labore exercitationem repudiandae consequuntur vel suscipit neque recusandae. Quas delectus eaque doloremque ab ratione maiores. Ex totam iusto aliquid inventore eum ipsa excepturi.",
    date: "2023-05-22T21:41:28.898Z",
  },
  {
    id: "8033dacb-ea8f-42e5-8cf0-38bdcee183ad",
    department: "Usability",
    description:
      "Architecto architecto impedit sit recusandae provident quisquam dolore earum atque. Hic corrupti tempora. Veniam voluptates ullam nesciunt repellendus nostrum pariatur voluptatibus.",
    date: "2023-05-23T05:05:53.302Z",
  },
  {
    id: "bc082c31-6582-4b80-a863-2c17d9287844",
    department: "Metrics",
    description:
      "Harum id quos. Fugit praesentium necessitatibus possimus necessitatibus id corrupti. Delectus itaque blanditiis blanditiis iste explicabo ut optio exercitationem.",
    date: "2023-05-22T14:01:53.216Z",
  },
  {
    id: "2dee2d54-5a2c-4127-b339-48ef98ef632e",
    department: "Solutions",
    description:
      "Facilis maiores veniam. Odio quas ipsa. Ratione ex veniam repellendus dolorum iste officia illum.",
    date: "2023-05-22T19:28:30.409Z",
  },
];

const departmentApi =
  "https://testsyncoffice.netlify.app/.netlify/functions/api/getDepartmentData";

const Department = () => {
  const fetchingDeratmentData = async () => {
    try {
      const response = await fetch(departmentApi);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingDeratmentData();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 mt-[20px] h-[73vh] overflow-auto pr-[10px]">
      {departmentData.map((eachCard) => (
        <Card key={eachCard.id}
          mainHead={eachCard.department}
          descriptionPara={eachCard.description}
          cardDate={eachCard.date}
        />
      ))}
    </div>
  );
};

export default Department;
