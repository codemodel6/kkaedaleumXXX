import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex-col bg-red-500 w-full" style={{ height: "2000px" }}>
      <Header />
      <div className="bg-yellow-300 w-full h-56"></div>
      <div className="bg-green-400 w-full h-56"></div>
      <div className="bg-blue-300 w-full h-56"></div>
    </div>
  );
}
