import { Header } from "@/components/header";

export const metadata = {
  title: "Manage Page",
};
const ComponentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="py-10 px-10">{children}</div>
    </>
  );
};

export default ComponentLayout;
