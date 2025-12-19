const BookSelector = ({ books, selectedBooks, setSelectedBooks }) => {

  const toggleBook = (book) => {
    const exists = selectedBooks.find(b => b.book_id === book._id);

    if (exists) {
      setSelectedBooks(selectedBooks.filter(b => b.book_id !== book._id));
    } else {
      setSelectedBooks([...selectedBooks, { book_id: book._id, quantity: 1 }]);
    }
  };

  const updateQty = (id, qty) => {
    setSelectedBooks(
      selectedBooks.map(b =>
        b.book_id === id ? { ...b, quantity: qty } : b
      )
    );
  };

  return (
    <div className="border rounded p-4">
      <h3 className="font-semibold mb-2">Select Books</h3>

      {books.map(book => {
        const selected = selectedBooks.find(b => b.book_id === book._id);

        return (
          <div key={book._id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={!!selected}
              onChange={() => toggleBook(book)}
            />

            <span className="ml-2 w-48">{book.book_name}</span>

            {selected && (
              <input
                type="number"
                min="1"
                value={selected.quantity}
                onChange={e => updateQty(book._id, e.target.value)}
                className="ml-3 w-16 border px-2 py-1"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BookSelector;
