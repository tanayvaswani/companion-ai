import { UserButton } from "@clerk/nextjs";

const RootPage = () => {
  return (
    <main>
      Hello!
      <UserButton afterSignOutUrl="/" />
    </main>
  );
};

export default RootPage;
