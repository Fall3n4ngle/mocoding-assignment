import Form from "./components/Form";

function App() {
  return (
    <div className="py-24">
      <div className="max-w-[600px] mx-auto">
        <h1 className="text-center text-4xl font-semibold mb-4">
          Generate image
        </h1>
        <p className="text-center text-lg text-zinc-500 mb-8">
          Upload .gird file to generate an image that demonstrates the global
          sea temperature map
        </p>
        <Form />
      </div>
    </div>
  );
}

export default App;
