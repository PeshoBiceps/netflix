import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Wrap>
        <Top>
          <p>Questions? Contact us.</p>
        </Top>
        <Mid>
          <a href='/'>FAQ</a>
          <a href='/'>Investor Relations</a>
          <a href='/'>Privacy</a>
          <a href='/'>Speed Test</a>
          <a href='/'>Help Center</a>
          <a href='/'>Jobs</a>
          <a href='/'>Cookie Preferences</a>
          <a href='/'>Legal Notices</a>
          <a href='/'>Account</a>
          <a href='/'>Ways to Watch</a>
          <a href='/'>Corporate Information</a>
          <a href='/'>Only on Netflix</a>
          <a href='/'>Media Center</a>
          <a href='/'>Terms of Use</a>
          <a href='/'>Contact Us</a>
        </Mid>
        <Bot>
          <p>Neflix Bulgaria</p>
        </Bot>
      </Wrap>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 8px;
  background-color: #000;
  color: #6e6e6e;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrap = styled.div`
  margin: auto;
  max-width: 1100px;
  padding: 30px;
`;
const Top = styled.div`
  font-size: 16px;
  padding-bottom: 10px;
`;
const Mid = styled.div`
  font-size: 13px;
  display: grid;
  grid-gap: 12px 105px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  a{
    text-decoration: none;
    color: #6e6e6e;
    :hover{
      text-decoration: underline;
    }
  }
`;
const Bot = styled.div`
  font-size: 16px;
  padding-top: 10px;
`;
