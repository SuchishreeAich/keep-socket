const svc = require('./notes.service');

const shareNotes = (req, res) => {
  try {
    const note = req.body;
    const userId = req.query.userName;

    //let msg = "userId" + userId + " body" + JSON.stringify(req.body)
    if (note && userId) {
      // res.status(201).send({message: msg});
      svc.shareNotes(note, userId)
        .then((response) => {
          res.status(response.status).send(response);
        }).catch((error) => {
          res.status(error.status).send({ message: "Share Failed" });
        });
    } else {
      res.status(403).send({ message: "Share Failed" });
    }

  } catch (error) {
    res.status(error.status).send(error);
  }

};

const getNoteForUserID = (req, res) => {
  try {
    const userId = req.query.userName;
    svc.getNoteForUserID(userId)
      .then((response) => {
        res.status(response.status).send(response);
      }).catch((error) => {
        // console.log('error', error);
        // res.status(200).send({message : 'Error occured 1'});
        res.status(error.status).send({message : 'Error occured 1'});
      });

  } catch (error) {
    res.status(200).send({message : 'Error occured 2'});
  }

  //res.status(200).send({message : "Get all the notes"});
};

module.exports = {
  shareNotes,
  getNoteForUserID
}