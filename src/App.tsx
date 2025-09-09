import { ThemeToggle } from "./components/theme-toggle"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default App;
