import styled from 'styled-components'
import { bx } from '../../global/breakpoints'

export const StyledLink = styled.div`
  width: ${({ fullWidth }) => fullWidth && '100%'};

  display: var(--display);

  a {
    position: relative;

    display: var(--display);

    color: ${({ active }) => (active ? 'var(--secondary-base)' : 'var(--tertiary-base)')};
    font-size: var(--fontSize-xs);
    line-height: var(--lineHeight-xs);
    font-weight: var(--fontWeight-medium);
    text-decoration: none;

    cursor: ${({ active }) => (active ? 'default' : 'pointer')};

    transition: color 0.3s;

    &:hover {
      color: ${({ active, hoverEffect }) => (hoverEffect && active ? null : 'var(--tertiary-dark)')};

      &:before {
        transform: scaleX(1);
      }
    }

    @media ${bx.md} {
      font-size: var(--fontSize-s);
      line-height: var(--fontSize-s);
      font-weight: var(--fontWeight-bold);
    }
  }
`
