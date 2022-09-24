import React from "react";

interface IProps {
  name: string;
  age: number;
  title: string;
}

const Customer: React.FC<IProps> = ({ name, age, title }: IProps) => {
  return <div>Customer</div>;
};

export default Customer;
