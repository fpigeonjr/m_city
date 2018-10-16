import React from "react";
import { Link } from "react-router-dom";

export const Tag = props => {
  const template = (
    <div
      style={{
        background: props.bck,
        fontSize: props.size,
        color: props.color,
        padding: "5px 10px",
        display: "inline-block",
        fontFamily: "Righteous",
        ...props.add
      }}
    >
      {props.children}
    </div>
  );

  if (props.link) {
    return <Link to={props.linkTo}>{template}</Link>;
  } else {
    return template;
  }
};

export const firebaseLooper = snapshot => {
  let data = [];
  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      key: childSnapshot.key
    });
  });
  return data;
};

export const reverseArray = actualArray => {
  let reverseArray = actualArray.reverse();
  return reverseArray;
};

export const validate = element => {
  let error = [true, ""];

  if (element.validation.required) {
    const valid = element.value.trim() !== "";
    const message = `${!valid ? "This field is required" : ""} `;
    // if not valid return message, if not send original error default
    error = !valid ? [valid, message] : error;
  }

  return error;
};
