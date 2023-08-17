import About from "@/components/About/About";
import Portfolio from "@/components/Portfolio/Portfolio";
import Welcome from "@/components/Welcome/Welcome";

export default function Home() {
  return (
    <main className="flex justify-center items-center">
      <div className="flex flex-col justify-start items-center w-4/5 min-h-screen">
        <Welcome />
        <About />
        <Portfolio />
      </div>
    </main>
  );
}
