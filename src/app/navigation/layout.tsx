import NavigationPage from "./nav";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div >
      <div >
        <NavigationPage />
      </div>
      <div >{children}</div>
    </div>
  );
}