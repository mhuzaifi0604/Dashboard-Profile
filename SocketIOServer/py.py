import socketio

sio = socketio.Server(cors_allowed_origins='*')

app=socketio.WSGIApp(sio)

clients={}

@sio.on('connect')
def handle_connect(sid, environ):
    print(f"Connection from {sid}")

@sio.on('chat_message')
def handle_chat_message(sid, data):
    #rooms = clients[sid]  # Get the rooms for the client
    #for room in rooms:
    print(data)
    sio.emit('chat_message', data)  # Broadcast the message to clients in each room

# Event handler for disconnections
@sio.on('disconnect')
def handle_disconnect(sid):
    print(f'Disconnected: {sid}')
    rooms = clients.pop(sid, set())  # Remove the client and their associated rooms

if __name__ == '__main__':
    import eventlet
    eventlet.wsgi.server(eventlet.listen(('', 8000)), app)