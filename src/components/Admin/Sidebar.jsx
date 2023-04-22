import React, { useState } from "react";
import { sidebarLinks } from "../../util/constaints";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
  const [idx, setIdx] = useState(null);

  return (
    <Wrapper className="w-1/5 h-screen bg-white p-4">
      <h2 className="text-center text-xl font-semibold mb-4" >PLANTY STORE</h2>
      {sidebarLinks.map((link, index) => (
        <div key={link._id}>
          <button
            className={`p-2 flex items-center justify-between hover:bg-gray-200 w-full bg-gray-100 rounded-lg mb-2 `}
            onClick={() => index !== idx ? setIdx(index) : setIdx(null) }
          >
            {link.children ? (
              <>
                {link.title} {idx === index ? <IoIosArrowUp /> : <IoIosArrowDown /> } 
              </>
            ) : (
              <Link
                className="w-full text-left hover:bg-gray-200"
                to={link.url}
              >
                {link.title}
              </Link>
            )}
          </button>
          {link?.children && (
            <ul className={`${index === idx && "active"}`}>
              {link.children.map((cl) => (
                <li
                  key={cl._id}
                  className="p-2 hover:bg-sky-700 hover:text-white capitalize rounded mb-2 "
                >
                  <Link to={cl.url} className="block">
                    {cl.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ul {
    height: 0;
    overflow: hidden;
  }

  ul.active {
    transition: height 0.7s ease;
    height: 100%;
  }
`;

export default Sidebar;
