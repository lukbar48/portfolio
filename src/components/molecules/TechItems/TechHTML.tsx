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

const TechHTML = () => {
  return (
    <Wrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
        <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
        <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z" />
        <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z" />
      </svg>
      <span>HTML</span>
    </Wrapper>
  );
};

export default TechHTML;
