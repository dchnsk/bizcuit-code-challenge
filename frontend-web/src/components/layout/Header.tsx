export const Header: React.FC = () => (
  <header
    className={`flex flex-col min-h-[70px] p-5 w-full bg-secondary text-center items-center`}
  >
    <h1 className={`text-4xl mb-2 font-medium`}>TODO</h1>
    <button className={`w-[100px]`}>Auth</button>
  </header>
);
