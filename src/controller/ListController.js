const List = require("../model/BookList");

module.exports = {
  async CreateList(req, res) {
    const { title, author, pages, year, genre, image } = req.body;
    const book = { title, author, pages, year, genre, image };

    try {
      await List.create(book);

      res.status(201).json({ message: "Book registered successfully" });
    } catch (err) {
      res.status(500).json({ Err: "Could not register" + err });
    }
  },

  async GetList(req, res) {
    try {
      const data = await List.find({});

      res.status(201).json(data);
    } catch (err) {
      res.status(500).json({ Err: "Could not get" + err });
    }
  },
  async DeleteBook(req, res) {
    try {
      const id = req.params.id;

      const book = await List.findById({ _id: id });

      if (book != null) {
        await List.deleteOne({ _id: id });
      } else {
        return res.json("Could not delete.");
      }

      return res.status(200).json("Successfully deleted!");
    } catch (err) {
      res.status(500).json({ Err: "An error has occurred " + err });
    }
  }
};
