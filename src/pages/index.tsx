import MainContent from "../../components/MainContent";
import Sidebar from "../../components/Sidebar";

export default function Home() {
  return (
    <div className='h-screen overflow-hidden'>
      <main className='flex'>
        <Sidebar />
        <MainContent />
      </main>

      <div>{/* Player */}</div>
    </div>
  );
}
