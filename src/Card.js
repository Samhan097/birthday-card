import React, { useState } from "react";
import { data } from "./data";
import "./App.css";
import { CardHeader } from "@mui/material";

const OneCard = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      {people.map((person) => {
        const { id, img, name, age } = person;
        return (
          <>
            <div key={id} className="grid">
              <CardHeader
                avatar={<img src={img} alt="" />}
                title={<h3 className="name">{name}</h3>}
                subheader={<h3 className="age">{age}</h3>}
              />
            </div>
          </>
        );
      })}
      <button onClick={() => setPeople([])}>clear All</button>
    </>
  );
};

export default OneCard;

// import React, { useState } from "react";
// import CardHeader from "@mui/material/CardHeader";
// import "./App.css";
// import { data } from "./data";

// function BirthdayCard() {
//   const [people, setPeople] = useState(data);
//   return (
//     <>
//       {people.map((person) => {
//         const { id, img, name, age } = person;
//         return (
//           <>
//             <div key={id}>
//               <CardHeader
//                 avatar={<img src={img} alt="" />}
//                 title={<h3 className="name">{name}</h3>}
//                 subheader={<h3 className="age">{age}</h3>}
//               />
//             </div>
//           </>
//         );
//       })}
//       <button
//         className="btn"
//         style={{ width: 450, height: 50 }}
//         onClick={() => setPeople([])}
//       >
//         Clear All
//       </button>
//     </>
//   );
// }

// export default BirthdayCard;

// import React from "react";
// function BirthdayCard({ id, img, name, age }) {
//   return (
//     <div key={id}>

//       <img src={img} alt="" />
//       <h3>{name}</h3>
//       <h4>{age}</h4>
//     </div>
//   );
// }

// export default BirthdayCard;
