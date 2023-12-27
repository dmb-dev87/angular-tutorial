const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

const documents = {};

io.on("connection", socket => {
    let previousId;

    const safeJoin = currentid => {
        socket.leave(previousId);
        socket.join(currentid, () => console.log(`Socket ${socket.id} joined room ${currentid}`));
        previousId = currentid;
    };

    socket.on("getDoc", docId => {
        safeJoin(docId);
        socket.emit("document", documents[docId]);
    })

    socket.on("addDoc", doc => {
        documents[doc.id] = doc;
        safeJoin(doc.id);
        io.emit("documents", Object.keys(documents));
        socket.emit("document", doc);
    })

    socket.on("editDoc", doc => {
        documents[doc.id] = doc;
        socket.to(doc.id).emit("document", doc);
    });

    io.emit("documents", Object.keys(documents));

    console.log(`Socket ${socket.id} has connected`);
});

http.listen(5555, () => {
    console.log('Listening on port 5555');
});