import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.1rem solid ${theme.colors.mediumGray};
    background: ${theme.colors.primaryColor};
    color: ${theme.title === 'dark' ? theme.colors.white : theme.colors.black};
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin: 2.5rem 0 1rem 0;
      padding: 0;
    }

    a i{
      color: inherit;
      text-decoration: none;
      font-size: 2.8rem;
      margin: 1rem;
      padding-bottom: 1rem;
      color: ${theme.title === 'dark' ? theme.colors.white : theme.colors.black};
      transition: all 300ms ease-in-out;
    }

    i:hover {
      color: ${theme.colors.secondaryColor};
    }

    & ${TextComponent} {
      font-size: 2rem;
    }

    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
  `}
`;
