const { getAllFavorites, deleteFavoriteById } = require("../services/favorite")

function getFavorites(req, res) {
  try {
    const books = getAllFavorites()
    res.send(books)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

function postFavorite(req, res) {
  try {
    const id = req.params.id
    insertFavorite(id)
    res.status(201)
    res.send("Book inserted successfully")
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

function deleteFavorite(req, res) {
  try {
    const id = req.params.id

    if (id && Number(id)) {
      deleteFavoriteById(id)
      res.send("Favorite deleted successfully")
    } else {
      res.status(422)
      res.send("ID invalid")
    }
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

module.exports = {
  getFavorites,
  postFavorite,
  deleteFavorite
}