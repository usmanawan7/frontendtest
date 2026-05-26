import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';

export default function Home() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-col">
        <MainContent />
      </div>
    </div>
  );
}
