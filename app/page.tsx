import ScrollSequence from '../components/ScrollSequence';
import ActivityCampSection from '../components/ActivityCampSection';

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <ScrollSequence />
      <ActivityCampSection />
    </main>
  );
}
