// import { useContext } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
// import { UserContext } from "../../provider/UserProvider";
import { UserState } from "../../store/userState";
import { SecondaryButton } from "../atoms/buttons/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/0ShQCkRWIII",
    name: `${val}tetetst`,
    email: "fwejisd@gamicljasie",
    phone: "090-3245-2532",
    company: {
      name: "垢かか"
    },
    website: "あsdファs"
  };
});

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(UserState);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SContainer>
      <h2>ユーザーページです</h2>
      <SearchInput />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
