const noteSvc = require('./api/v1/notes/notes.service');

const socketApp = (io) => {
  io.on('connection', (socket) => {
    // console.log('a user has connected');

    socket.on('shareNote', (data) => {
      // console.log('share note rvd');
      
      //Call post req '/share'
      try {
        noteSvc.shareNotes(data.noteId, data.userId)
          .then((response) => {
            if (response && response.status === 201) {
              socket.emit('message', `Note is shared - ${response.message}`);
              
              socket.broadcast.emit('message', 'Shared note recieved');
              //socket.broadcast.emit('getNote', data.userId); //share to everyone except the emitter
              
            } else {
              socket.emit('message', `Note is not shared - ${response.message}`);
            }

          }).catch((error) => {
            socket.emit('message', `Note is not shared - ${error.message}`);
          })
      } catch (error) {
        socket.emit('message', `Note is not shared - ${error.message}`);
      }

    });


    socket.on('getNote', (userid) => {

      try {
        noteSvc.getNoteForUserID(userid)
          .then((response) => {

            if (response && response.status === 200 && response.status !== 404) {
              
              response.notes.forEach((element, index) => {
                //noteIDList.push(element.noteId);
                socket.emit('message2', `Note ${element.id} is shared`);
                
              }); 
              
            } 

          }).catch((error) => {
            //console.log('error = ' , error);
            socket.emit('message', `Error getting note - ${error.message}`);
          });
      } catch (error) {
        socket.emit('message', `Error getting note - ${error.message}`);
      }

    });

  });
};

module.exports = socketApp;