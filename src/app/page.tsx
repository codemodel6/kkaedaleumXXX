export default function Home() {
  return (
    // <div className="flex-col bg-red-500 w-full" style={{ height: "2000px" }}>
    //   <div className="bg-yellow-300 w-full h-56"></div>
    //   <div className="bg-green-400 w-full h-56"></div>
    //   <div className="bg-blue-300 w-full h-56"></div>
    // </div>
    <div
      // className="snap-y snap-mandatory overflow-y-scroll"
      className="snap-y snap-mandatory"
      style={{ height: "calc(100vh - 6rem)" }}
    >
      <section className="h-screen snap-start bg-blue-500 flex items-center justify-center">
        <h1 className="text-white text-4xl">First Screen</h1>
      </section>
      <section className="h-screen snap-start bg-green-500 flex items-center justify-center">
        <h1 className="text-white text-4xl">Second Screen</h1>
      </section>
      <section className="h-screen snap-start bg-red-500 flex items-center justify-center">
        <h1 className="text-white text-4xl">Third Screen</h1>
      </section>
      <section className="h-screen snap-start bg-yellow-500 flex items-center justify-center">
        <h1 className="text-white text-4xl">Fourth Screen</h1>
      </section>
    </div>
  );
}
