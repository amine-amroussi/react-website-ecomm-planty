import React from "react";
import styled from "styled-components";

const FormArea = ({ type, name, onChange, label, placeholder, full, value }) => {
  return (
    <Wrapper isFull={full}>
      <label>{label}</label>
      <textarea
        type={type}
        name={name}
        className="input-field"
        onChange={onChange}
        placeholder={placeholder && placeholder}
        value={value}
      ></textarea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: ${(prop) => (prop.isFull ? "100%" : "50%")};
  margin-bottom: 15px;
  label {
    font-weight: 600;
  }
  textarea {
    height: 170px;
    resize: none;
    padding: 10px 15px;
    border: 1px solid var(--gray-clr);
    outline: none;
    :focus {
      border: none;
      border-bottom: 2px solid var(--green-clr);
    }
  }
`;

export default FormArea;
