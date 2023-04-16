import React from "react";
import styled from "styled-components";

const Newsletter = () => {
  return (
    <Wrapper className="section">
      <div className="left">
        <h2>Join our newsletter and get 20% off</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
          magni qui aperiam? Impedit fugiat mollitia enim quia inventore
          temporibus maiores?
        </p>
      </div>
      <div className="right">
        <input type="email" name="newsLetterMail" id="NewsLetterMail" className="input-newsletter" placeholder="Enter e-mail" />
        <button className="btn btn-news-letter" >Subscribe</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  width: 84%;
  align-items: center;
  margin: 15px auto;
  padding: 15px;
  border-radius: 15px;
  background-color: var(--light-green-clr);
  .left {
    flex: 5;
  }
  .right{
    flex: 7;
    .input-newsletter {
      width: 300px;
      padding: 10px;
      border: none;
      border-radius: 5px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      margin-left: 15px;
    }
    .btn-news-letter {
      background-color: var(--ligt-pink-clr);
      padding: 10px;
      font-weight: 600;
      letter-spacing: 2px;
      border-top-right-radius:15px;
      border-bottom-right-radius:15px;
    }
  }

  @media only screen and (max-width : 900px) {
    flex-direction: column;
    .input-newsletter {
      margin-top: 15px;
    }
  }
  @media only screen and (max-width : 560px) {
    .input-newsletter {
      width:40% !important;
    }
    .btn-news-letter {
      
    }
  }
`;

export default Newsletter;
