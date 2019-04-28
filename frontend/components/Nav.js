import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CurrentUser from './CurrentUser';
import Signout from './Signout';
import Search from './Search';
import LogoImage from './LogoImage';
import LogoText from './LogoText';

const Wrapper = styled.nav`
  width: 100%;
  max-width: ${({ theme }) => theme.default.maxWidth};
  font-family: var(--default-font-family);
  font-style: normal;
  color: ${({ theme }) => theme.default.textColor};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: center;
  padding: var(--spacing-medium);
`;

const NavActions = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  font-size: 1.8rem;
`;

const LogoWrapper = styled.div`
  display: grid;
  grid-template-columns: 32px 120px;
  grid-column-gap: var(--spacing-small);
  align-items: center;
  a {
    height: 32px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

const UploadAnchor = styled.a`
  background-color: var(--color-primary);
  padding: var(--spacing-tiny);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: var(--color-primary-lighter);
  }
`;

const UploadIcon = styled(FontAwesomeIcon)`
  width: 24px !important; /* override font awesome styles */
`;

const Nav = ({ theme }) => (
  <CurrentUser>
    {({ data: { currentUser } }) =>
      currentUser ? (
        <Wrapper theme={theme}>
          <LogoWrapper>
            <Link href={`/`}>
              <a>
                <LogoImage fillColor="var(--color-black)" />
              </a>
            </Link>
            <Link href={`/`}>
              <a>
                <LogoText fillColor="var(--color-black)" />
              </a>
            </Link>
          </LogoWrapper>
          <Search />
          <NavActions>
            <li>
              <Link href={`/explore?id=${currentUser.id}`}>
                <a>
                  <FontAwesomeIcon
                    icon={["fal", "compass"]}
                    color="var(--color-black)"
                    size="lg"
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/liked?id=${currentUser.id}`}>
                <a>
                  <FontAwesomeIcon
                    icon={["fal", "heart"]}
                    color="var(--color-black)"
                    size="lg"
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/user?id=${currentUser.id}`}>
                <a>
                  <FontAwesomeIcon
                    icon={["fal", "user"]}
                    color="var(--color-black)"
                    size="lg"
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/upload">
                <UploadAnchor>
                  <UploadIcon
                    icon={["fal", "plus"]}
                    color="var(--color-white)"
                    size="lg"
                  />
                </UploadAnchor>
              </Link>
            </li>
          </NavActions>
        </Wrapper>
      ) : null
    }
  </CurrentUser>
);

export default Nav;
