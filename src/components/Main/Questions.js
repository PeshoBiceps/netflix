import { useState } from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { questions } from "./data";
import { FaAngleRight } from "react-icons/fa";

const Questions = () => {
  const [open, setOpen] = useState(null);

  const openQuestion = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <Container>
      <Wrap>
        <h1>Frequently Asked Questions</h1>

        {questions.map((data, index) => (
          <List key={index}>
            <ListQuestion onClick={() => openQuestion(index)}>
              <button>{data.question}</button>
              {open === index ? (
                <AiOutlineClose style={{ fontSize: "30px" }} />
              ) : (
                <AiOutlinePlus style={{ fontSize: "30px" }} />
              )}
            </ListQuestion>
            <AnimatePresence initial={false}>
              {open === index ? (
                <motion.section
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ListAnswer>
                    <span>{data.answer}</span>
                    {data.answerBonus === "none" ? (
                      ""
                    ) : (
                      <>
                        <br />
                        <br />
                        <span>{data.answerBonus}</span>
                      </>
                    )}
                  </ListAnswer>
                </motion.section>
              ) : (
                ""
              )}
            </AnimatePresence>
          </List>
        ))}
        <ButtonWrap>
          <h1>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h1>
          <Register>
            <Link to="/register">
              Get Started
              <FaAngleRight />
            </Link>
          </Register>
        </ButtonWrap>
      </Wrap>
    </Container>
  );
};

export default Questions;

const Container = styled.div`
  margin-top: 8px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  max-width: 1100px;
  padding: 30px;
  h1 {
    padding: 30px;
    font-size: 50px;
    margin: 10px;
  }
  @media (max-width: 530px) {
    padding: 0;
    h1 {
      font-size: 26px;
    }
  }
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 815px;
  border-bottom: 8px solid #000;
`;

const ListQuestion = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #303030;
  padding: 28px;
  border-bottom: 1px solid #000;
  cursor: pointer;
  button {
    border: none;
    background-color: transparent;
    font-weight: 400;
    color: #fff;
    font-size: 26px;
    @media (max-width: 530px) {
      font-size: 22px;
    }
  }
`;

const ListAnswer = styled.div`
  background-color: #303030;
  padding: 32px;
  text-align: left;
  span {
    font-size: 26px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 19px;
    letter-spacing: 1px;
    margin: 0;
  }
  @media (max-width: 400px) {
    h1{
      font-size: 16px;
    }
  }
`;

const Register = styled.div`
  margin:10px 0px;
  background-color: #e50914;
  display: flex;
  border-radius: 2px;
  transition: 0.1s ease-in-out;
  cursor: pointer;
  a {
    font-size: 20px;
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 186px;
    height: 50px;
  }
  :hover {
    background-color: #f40612;
  }
`;
