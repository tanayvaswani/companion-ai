import { UserButton } from "@clerk/nextjs";

const RootPage = () => {
  return (
    <main>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
};

export default RootPage;
