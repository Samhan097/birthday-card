// import { Card } from "@mui/material";
// import React from "react";
// import "./App.css";
// import OneCard from "./Card";

// const Birthday = () => {
//   return (
//     <Card style={{ height: 900, width: 850 }}>
//       <OneCard />
//     </Card>
//   );
// };

// export default Birthday;

import * as React from "react";
import Card from "@mui/material/Card";

// import IconButton from "@mui/material/IconButton";
// import { red } from "@mui/material/colors";
import "./App.css";
import BirthdayCard from "./Card";
// import { data } from "./data";

const Birthday = () => {
  // const newBirthday = data.map((birth) => {
  //   return <BirthdayCard key={birth.id} {...birth}></BirthdayCard>;
  // });
  return (
    <>
      <Card sx={{ width: 500, height: 850, margin: 10 }}>
        <h4>Birthdays Today</h4>
        {/* <CardHeader
        avatar={
          <Avatar style={{ height: 50, width: 43 }} aria-label="recipe">
            <img src="/Image/person-1_rfzshl.jpg" />
          </Avatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      /> */}
        <BirthdayCard />
        {/* {newBirthday} */}
      </Card>
    </>
  );
};
export default Birthday;
