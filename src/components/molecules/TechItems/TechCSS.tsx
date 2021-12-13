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
  padding: 1rem;

  svg {
    width: 75%;
  }
  span {
    display: block;
    color: white;
    font-weight: 500;
    letter-spacing: 0.6px;
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;

const TechCSS = () => {
  return (
    <Wrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
        <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
        <path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z" />
        <path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z" />
      </svg>
      <span>CSS</span>
    </Wrapper>
  );
};

export default TechCSS;
