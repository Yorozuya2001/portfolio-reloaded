import About from "@/components/About/About";
import Welcome from "@/components/Welcome/Welcome";

export default function Home() {
  return (
    <main className="flex justify-center items-center">
      <div className="flex flex-col justify-start items-center w-4/5 min-h-screen">
        <Welcome />
        <About />
      </div>
    </main>
  );
}
