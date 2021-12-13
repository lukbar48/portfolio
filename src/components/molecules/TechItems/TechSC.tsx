import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  height: 120px;
  background-color: rgba(255, 255, 255, 0.11);
  border-radius: 10px;
  margin: 0.5rem;
  padding: 1.1rem 0.5rem 1rem 0.5rem;

  img {
    width: 52%;
  }
  span {
    display: block;
    color: white;
    font-weight: 500;
    letter-spacing: 0.6px;
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;

const TechSC = () => {
  return (
    <Wrapper>
      <img src="https://styled-components.com/logo.png" alt="s-c" />
      <span>styled-comp</span>
    </Wrapper>
  );
};

export default TechSC;
