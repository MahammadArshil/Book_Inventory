const BookSet = require("../model/booksetModel");
const BookSetItem = require("../model/booksetitemModel");

//Create Book Set
exports.createBookSet = async (req, res) => {
  const { board_id, medium_id, class_id, year_id, set_name, books } = req.body;

  const bookSet = await BookSet.create({
    board_id,
    medium_id,
    class_id,
    year_id,
    set_name
  });

  const items = books.map(b => ({
    book_set_id: bookSet._id,
    book_id: b.book_id,
    quantity: b.quantity
  }));

  await BookSetItem.insertMany(items);

  res.json({ message: "Book Set Created", bookSet });
};


//Get Book Set (With Filter)
exports.getBookSets = async (req, res) => {
  const filter = req.query;

  const sets = await BookSet.find(filter)
    .populate("board_id medium_id class_id year_id");

  res.json(sets);
};


//Update Book Set
exports.updateBookSet = async (req, res) => {
  const { id } = req.params;
  const { books, ...data } = req.body;

  await BookSet.findByIdAndUpdate(id, data);

  await BookSetItem.deleteMany({ book_set_id: id });

  const newItems = books.map(b => ({
    book_set_id: id,
    book_id: b.book_id,
    quantity: b.quantity
  }));

  await BookSetItem.insertMany(newItems);

  res.json({ message: "Book Set Updated" });
};


//Delete Book Set
exports.deleteBookSet = async (req, res) => {
  const { id } = req.params;

  await BookSet.deleteOne({ _id: id });
  await BookSetItem.deleteMany({ book_set_id: id });

  res.json({ message: "Book Set Deleted" });
};
