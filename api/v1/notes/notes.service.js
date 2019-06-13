const dao = require('./notes.dao');

const shareNotes = (notes, userIds) => {
  return dao.shareNotes(notes, userIds);
};

const getNoteForUserID = (userIds) => {
  return dao.getNoteForUserID(userIds);
};

module.exports = {
  shareNotes,
  getNoteForUserID
}