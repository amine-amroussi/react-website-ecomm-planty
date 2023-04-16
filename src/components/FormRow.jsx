import React from "react";
import styled from "styled-components";

const FormRow = ({ type, name, onChange, value, label, placeholder, full }) => {
  return (
    <Wrapper isFull={full}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        className="input-field"
        onChange={onChange}
        placeholder={placeholder && placeholder}
        value={value}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: ${(prop) => (prop.isFull ? "100%" : "50%")};
  margin-bottom: 15px;
  transition: all .5s linear;
  label {
    font-weight: 600;
  }
  input {
    padding: 10px 15px;
    border: 1px solid var(--gray-clr);
    outline: none;
    :focus {
      border: none;
      border-bottom: 2px solid var(--green-clr);
    }
  }
`;

export default FormRow;
