import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgcmain};
  padding: 0 1.5rem 4rem;
  text-align: center;

  h1 {
    color: ${({ theme }) => theme.colors.fontgrey1};
    margin-bottom: 1.2rem;
    visibility: visible;
    opacity: 1;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transition: opacity 0.8s cubic-bezier(0.5, 0, 0, 1) 0.8s, transform 0.8s cubic-bezier(0.5, 0, 0, 1) 0.8s;
  }

  p {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.l};
    color: ${({ theme }) => theme.colors.fontgrey2};
    letter-spacing: 0.5px;
    margin-bottom: 1.2rem;
    visibility: visible;
    opacity: 1;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
`;

export const ProjectsWrapper = styled.div`
/* display: flex; */
/* flex-wrap: wrap; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 30px;
  width: 100%;
`