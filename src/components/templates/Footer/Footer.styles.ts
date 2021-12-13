import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgcmain};
  padding: 3rem 1.5rem;
  text-align: center;
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  width: 100%;
  text-align: center;

  h3 {
    color: white;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.fontgrey1};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    padding-bottom: 10px;
  }

  a {
    color: ${({ theme }) => theme.colors.fontgrey2};
    font-size: ${({ theme }) => theme.fontSizes.l};
    text-decoration: none;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.fontgrey1};
  }
`;

export const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.fontgrey2};
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
  a > *:hover {
    color: ${({ theme }) => theme.colors.fontgrey1};
  }
`;
