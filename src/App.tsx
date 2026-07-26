import Builder from "./components/builder/Builder";
import ReviewPanel from "./components/review/ReviewPanel";

function App() {
  return (
    <main className="mx-auto grid max-w-[1200px] grid-cols-[768px_380px] gap-8 py-10">
      <Builder />
      <ReviewPanel />
    </main>
  );
}

export default App;
