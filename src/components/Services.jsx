import React from "react";
import styled from "styled-components";
import sv1 from "../assets/sv-1.png";
import sv2 from "../assets/sv-2.png";
import sv3 from "../assets/sv-3.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Services = () => {
  return (
    <Wrapper>
      <div className="title">
        <h1>how we make it !</h1>
        <div className="underline"></div>
      </div>
      <div className="services">
        <AnimationOnScroll
          animateIn="animate__slideInUp"
          animateOnce={true}
          className="service-item"
        >
          <Service title="Planting And Care" img={sv1} />
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__slideInUp"
          animateOnce={true}
          className="service-item"
        >
          <Service title="Arrangement And Packaging" img={sv2} />
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__slideInUp"
          animateOnce={true}
          className="service-item"
        >
          <Service title="Shipped to you." img={sv3} />
        </AnimationOnScroll>
      </div>
    </Wrapper>
  );
};

const Service = ({ title, img }) => {
  return (
    <div className="service">
      <div className="image">
        <img src={img} alt="plants services" className="img3" />
      </div>
      <h2 className="service-title">{title}</h2>
    </div>
  );
};

const Wrapper = styled.section`
  width: 100%;
  margin-top: 70px;

  .services {
    display: flex;
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
    background-color: var(--ligt-pink-clr);
    padding: 35px;
    border-radius: 10px;
    gap: 20px;
    flex-wrap : wrap;
    .service-item {
      width: 200px;
    }
    .service {
      text-align: center;
      overflow: hidden;
      background-color: white;
      border-radius: 15px;
      padding: 15px;
      width: 200px;
      height : 200px;

      .image {
        width: 100%;
        height: 75%;
        text-align: center;
        z-index : -1;
      }
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
      .img2 {
        width: 150px;
      }
      .service-title {
        text-transform: capitalize;
        font-weight: 600;
        color: #262626;
        z-index :10;
      }
    }
  }

  @media only screen and (max-width: 550px) {
   
  }

  @media only screen and (max-width: 768px) {
    .service-item {
      width : 80% !important;
    }
    .services {
      flex-direction : column;
      justify-content :center !important;
      .service {
        width : 100%;
      }
      img {
        width : 150px !important;
      }
    }
  }

  @media only screen and (max-width: 992px) {

    .services {
      flex-wrap : wrap !important;
      justify-content : center;
    }

    .service {
      width : 150px ;
      height : 150px !important;
      .service-title {
        font-size : 1rem !important;
      }
    }

  }

  @media only screen and (min-width: 1280px) {
  }
`;

export default Services;
