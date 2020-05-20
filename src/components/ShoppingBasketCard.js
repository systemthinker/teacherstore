import React from "react";
import { selectUsers, selectTeachers } from "../store/selectors";
import { useSelector } from "react-redux";

export default function ShoppingBasketCard() {
  const users = useSelector(selectUsers);
  const teachers = useSelector(selectTeachers);

  const filteredTeacher = teachers.filter((teacher) => {
    if (users.basket.includes(teacher.id)) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div>
      <h2>Hi {users.name}!</h2>
      <h4>Shoppingcart contains the following items:</h4>
      <ul>
        <li>
          <p>{users.basket}</p>
        </li>
      </ul>
      {filteredTeacher.map((teacher) => {
        return <p>{teacher.name}</p>;
      })}
    </div>
  );
}
