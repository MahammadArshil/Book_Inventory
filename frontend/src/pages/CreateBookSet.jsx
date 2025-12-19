import { useEffect, useState } from "react";
import api from "../services/api";
import SelectField from "../components/SelectField";
import BookSelector from "../components/BookSelector";
import BookSetPreview from "../components/BookSetPreview";

const CreateBookSet = () => {
  const [boards, setBoards] = useState([]);
  const [mediums, setMediums] = useState([]);
  const [classes, setClasses] = useState([]);
  const [years, setYears] = useState([]);
  const [books, setBooks] = useState([]);

  const [board, setBoard] = useState("");
  const [medium, setMedium] = useState("");
  const [cls, setCls] = useState("");
  const [year, setYear] = useState("");
  const [setName, setSetName] = useState("");
  const [selectedBooks, setSelectedBooks] = useState([]);

  useEffect(() => {
    api.get("/boards").then(res => setBoards(res.data));
    api.get("/mediums").then(res => setMediums(res.data));
    api.get("/classes").then(res => setClasses(res.data));
    api.get("/years").then(res => setYears(res.data));
    api.get("/books").then(res => setBooks(res.data));
  }, []);

  const saveBookSet = async () => {
    await api.post("/book-set/create", {
      board_id: board,
      medium_id: medium,
      class_id: cls,
      year_id: year,
      set_name: setName,
      books: selectedBooks
    });

    alert("Book Set Created Successfully");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create Book Set</h1>

      <SelectField label="Board" options={boards} value={board} onChange={setBoard} />
      <SelectField label="Medium" options={mediums} value={medium} onChange={setMedium} />
      <SelectField label="Class" options={classes} value={cls} onChange={setCls} />
      <SelectField label="Academic Year" options={years} value={year} onChange={setYear} />

      <input
        type="text"
        placeholder="Set Name"
        className="w-full border px-3 py-2 mb-4"
        value={setName}
        onChange={e => setSetName(e.target.value)}
      />

      <BookSelector
        books={books}
        selectedBooks={selectedBooks}
        setSelectedBooks={setSelectedBooks}
      />

      <BookSetPreview setName={setName} selectedBooks={selectedBooks} />

      <button
        onClick={saveBookSet}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded"
      >
        Save Book Set
      </button>
    </div>
  );
};

export default CreateBookSet;
