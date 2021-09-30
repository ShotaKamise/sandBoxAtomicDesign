import { PrimaryButton } from "./components/atoms/buttons/PrimaryButton";
import { SecondaryButton } from "./components/atoms/buttons/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/UserCard";
import "./styles.css";

export default function App() {
  const user = {
    image: "https://source.unsplash.com/0ShQCkRWIII",
    name: "tetetst",
    email: "fwejisd@gamicljasie",
    phone: "090-3245-2532",
    company: {
      name: "垢かか"
    },
    website: "あsdファs"
  };
  return (
    <div className="App">
      <PrimaryButton>アイウエオ</PrimaryButton>
      <PrimaryButton>検索</PrimaryButton>
      <SecondaryButton>アイウエオ</SecondaryButton>
      <br />
      <br />
      <SearchInput />
      <br />
      <br />
      <UserCard user={user} />
    </div>
  );
}
