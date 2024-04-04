import {
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useCallback,
} from "react";
import { useDropzone } from "react-dropzone";
import UploadIcon from "./UploadIcon";

type Props = {
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
  inputId: string;
};

const gridValidator = (file: File) => {
  if (!file.name.endsWith(".grid")) {
    return {
      code: "invlid-extension",
      message: "You can only select .grid files",
    };
  }

  return null;
};

export default function Dropzone({ inputId, file, setFile }: Props) {
  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFile(acceptedFiles[0]);
    },
    [setFile],
  );

  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    onDrop: handleDrop,
    maxFiles: 1,
    validator: gridValidator,
  });

  const handleRemove: MouseEventHandler = (e) => {
    e.stopPropagation();
    setFile(null);
  };

  return (
    <>
      <div
        {...getRootProps()}
        className="rounded-md border-2 border-dashed border-zinc-400 flex items-center justify-center flex-col h-[240px] gap-2"
      >
        <input {...getInputProps()} id={inputId} />
        <UploadIcon />
        {file ? (
          <>
            <p className="text-lg font-semibold ">Selected file: {file.name}</p>
            <button onClick={handleRemove}>Click to remove</button>
          </>
        ) : (
          <>
            <p className="text-lg font-semibold ">
              Drag 'n' drop some file here, or click to select file
            </p>
            <span className="text-zinc-500 text-sm">(Accepts .grid file)</span>
          </>
        )}
      </div>
      {fileRejections.length > 0 && (
        <p className="text-red-500 mt-2 font-semibold">
          {fileRejections[0].errors[0].message}
        </p>
      )}
    </>
  );
}
