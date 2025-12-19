const BookSetPreview = ({ setName, selectedBooks }) => {
  return (
    <div className="mt-4 border rounded p-4 bg-gray-50">
      <h3 className="font-semibold mb-2">Preview</h3>
      <p><strong>Set Name:</strong> {setName}</p>
      <p><strong>Total Books:</strong> {selectedBooks.length}</p>
    </div>
  );
};

export default BookSetPreview;
