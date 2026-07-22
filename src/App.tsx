import Builder from "./components/builder/Builder";
import ReviewPanel from "./components/review/ReviewPanel";

function App() {
  return (
    <main className="mx-auto grid h-screen max-w-7xl grid-cols-1 gap-8 p-8 lg:grid-cols-[2fr_1fr]">
      <Builder />
      <ReviewPanel />
    </main>
  );
}

export default App;