import { FormEvent, useEffect, useState } from "react";
import Dropzone from "./Dropzone";

export default function Form() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!file) {
      setError("You must select a file");
      return;
    }
  };

  useEffect(() => {
    if (file) {
      setError(null);
    }
  }, [file]);

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="fileInput"
        className="font-medium leading-none mb-3 inline-block"
      >
        Your grid file
      </label>
      <div className="mb-7">
        <Dropzone inputId="fileInput" file={file} setFile={setFile} />
        {error && <p className="text-red-500 mt-2 font-semibold">{error}</p>}
      </div>
      <button className="w-full bg-black hover:bg-black/80 transition-colors text-white px-4 py-2.5 rounded-md font-medium disabled:pointer-events-none disabled:opacity-50">
        Generate
      </button>
    </form>
  );
}
