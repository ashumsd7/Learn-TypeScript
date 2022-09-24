import React from "react";

interface IProps {
  name: string;
  age: number;
  title: string;
}

const Customer: React.FC<IProps> = ({ name, age, title }: IProps) => {
  return (
    <>
      <div className="flex flex-col w-1/2 gap-2 p-2 font-semibold bg-white border rounded-md shadow-md">
        <div>Title: {title}</div>

        <div>Name : {name}</div>

        <div>Age: {age}</div>
      </div>
    </>
  );
};

export default Customer;
