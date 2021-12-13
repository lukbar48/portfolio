import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgcmain};
  padding: 4rem 1.5rem;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  h2 {
    color: ${({ theme }) => theme.colors.fontgrey1};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-bottom: 1.5rem;
  }

  p {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.l};
    color: ${({ theme }) => theme.colors.fontgrey2};
    letter-spacing: 0.5px;
    margin-bottom: 2.5rem;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    h2 {
      font-size: ${({ theme }) => theme.fontSizes.xxl};
    }
    p {
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }
  }
`;

export const TechWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1100px;
`;
