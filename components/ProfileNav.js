import { useContext, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GenericModal from "./Modal";
import SettingsOptions from "./SettingsOptions";
import Username from "./Username";
import Button from "./styles/Button";
import FollowButton from "./FollowButton";
import { AuthContext } from "../context/auth";

const Wrapper = styled.div`
  grid-column: 2 / -1;
  grid-row: 1 / span 1;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: 1fr 1fr;
  grid-row-gap: var(--spacing-medium);
  grid-column-gap: var(--spacing-medium);
  justify-content: start;
  align-items: center;
  span {
  }
  button {
    grid-row: 2 / -1;
    grid-column: 1 / -1;
  }
  svg {
  }
  @media (min-width: 736px) {
    grid-template-rows: 1fr;
    grid-column-gap: var(--spacing-large);
    button {
      grid-row: auto;
      grid-column: auto;
    }
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

const ProfileNav = ({ id, username, verified, followerIds }) => {
  const { currentUser } = useContext(AuthContext);
  const [settingsModalIsOpen, setSettingsModalIsOpen] = useState(false);
  const openSettingsModal = () => setSettingsModalIsOpen(true);
  const closeSettingsModal = () => setSettingsModalIsOpen(false);

  return (
    <Wrapper>
      <Username user={{ username, verified }} />
      {currentUser?.id === id ? (
        <Button>
          <Link href="/account?edit">
            <a>Edit profile</a>
          </Link>
        </Button>
      ) : (
        <FollowButton
          username={username}
          userId={id}
          userFollowers={followerIds}
        />
      )}
      <StyledFontAwesomeIcon
        onClick={openSettingsModal}
        icon={["fal", "cog"]}
        color="var(--color-black)"
        size="2x"
      />
      <GenericModal
        isOpen={settingsModalIsOpen}
        onRequestClose={closeSettingsModal}
        contentLabel="Settings Modal"
        close={closeSettingsModal}
      >
        <SettingsOptions close={closeSettingsModal} />
      </GenericModal>
    </Wrapper>
  );
};

export default ProfileNav;
