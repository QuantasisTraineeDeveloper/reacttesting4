import React from "react";
import { CustomContainer, CustomSelect } from "./index.style";

// useEffect(() => {
//   var selected = value;
//   if (selected === "Free plan") {
//     return <p>hello</p>;
//   } else if (selected === "Free plan") {
//     return <p>hello1</p>;
//   } else if (selected === "Free plan") {
//     return <p>hello2</p>;
//   } else if (selected === "Free plan") {
//     return <p>hello3</p>;
//   } else {
//     return <p></p>;
//   }
//   return () => {
//     cleanup;
//   };
// }, []);

const MobPlanSelect = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const data = [
    {
      title: "Basic Features",
      icon: <img src="/icons/check-icon.svg" alt=""></img>,
    },
    {
      title: "Course Videos",
      icon: <img src="/icons/check-icon.svg" alt=""></img>,
    },
    {
      title: "Email help",
      icon: <img src="/icons/close-icon.svg" alt=""></img>,
    },
    {
      title: "Query tool access",
      icon: <img src="/icons/close-icon.svg" alt=""></img>,
    },
    {
      title: "Built-in Code testing",
      icon: <img src="/icons/close-icon.svg" alt=""></img>,
    },
    {
      title: "Complete access to courses",
      icon: <img src="/icons/close-icon.svg" alt=""></img>,
    },
    {
      title: "Chat help",
      icon: <img src="/icons/close-icon.svg" alt=""></img>,
    },
    {
      title: "Course teaching license",
      icon: <img src="/icons/close-icon.svg" alt=""></img>,
    },
  ];
  return (
    <CustomContainer>
      <CustomSelect
        defaultValue="Free plan"
        onChange={handleChange}
        options={[
          {
            value: "Free plan",
          },
          {
            value: "Standard plan",
          },
          {
            value: "Silver plan",
          },
          {
            value: "Premium plan",
          },
        ]}
      />
      <div>
        {data.map((item, i) => (
          <div key={i} className="cards">
            <p>
              {item.title}
              <img src="/icons/info-icon.svg" alt="" />
            </p>
            <span>{item.icon}</span>
          </div>
        ))}
      </div>
    </CustomContainer>
  );
};

export default MobPlanSelect;
