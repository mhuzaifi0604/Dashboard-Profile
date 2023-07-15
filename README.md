# Combo-Project
This Project is an Example of Ultimate Student Portfolio
* Note - Portfolio is still under construction
  Here are some pictures of the portfolio
* Dashboard # 01 <br><br>
<img src="./pics/Screenshot_1.png" alt="gui"><br>
* Dashboard # 02<br><br>
<img src="./pics/Screenshot_2.png" alt="gui"><br>
* Projects Page - Folded Mini Projects<br><br>
<img src="./pics/Screenshot_3.png" alt="gui"><br>
* Projects Page - Expanded Mini Projects<br><br>
<img src="./pics/Screenshot_4.png" alt="gui"><br>
* Mini Project # Currency Calculator<br><br>
<img src="./pics/Screenshot_5.png" alt="gui"><br>
* Mini Project # Notepad<br><br>
<img src="./pics/Screenshot_6.png" alt="gui"><br>

# New Feature Added - Chat With Me
This Feature renders an interface which is responsible for the following tasks
* 1- Rules that should be abided by the user entering the chat application.
* 2- Username of the one usingthe tab to send and recieve messages.
* 3- Chat interface Like a whatsapp chat multiple Users can send and recieve messages.
* 4- Chat interface contains a form where user will type a message to send and a delete button to clear his/ her screen.
* 5- Technologies for the implementation of this chat application included the use of Socketio Server with React to broadcast the message of sender to anyone live on the chat application.

* Interface for Chat Entrence<br>
<img src="./pics/Screenshot_7.png" alt="gui"><br><br>
* checks have been implemented that chat cannot be entered unless you enter a username.! <br><br>
<img src="./pics/Screenshot_8.png" alt="gui"><br><br>
* Checks for the detection of possible attacks in input fields have also been implemented using REGEX!<br><br>
<img src="./pics/Screenshot_9.png" alt="gui"><br><br>
* Upon entering Username you will get a Chat interface like this: <br><br>
<img src="./pics/Screenshot_10.png" alt="gui"><br><br>
* Let I be the sender1 and send a message as shown below: <br><br>
<img src="./pics/Screenshot_11.png" alt="gui"><br><br>
* When 2nd user will log in he will get the broadcasted message as: <br><br>
<img src="./pics/Screenshot_12.png" alt="gui"><br><br>
When You will Click on Bin icon on the right the chat screen will get cleared.

# New Feature Added
This is a Login Feature for the Chat application:
* A User need to authenticate himslef before he enters the chatroom.<br>
* when clicking on Chat With me if user is not logged in he will be redirected to the login page.<br>
* After login he will get to the Chat app.<br>
* an additional feature of Logout button has been implemented in Chat page.<br>
* clciking on Logout, user will get back to login page and will not be able to get back in without logging in again.<br>
* Authentication is being done using firebase user authentication mechanism.<br>
* Logging user out on clickin back button on browser has not been implemented since it is inconvenient for user to log in again and again in a single session, however, if the page gets refreshed the user will get logged out.<br><br>
Here is what the login Page Looks Like:<br>
Clicked on "Chat With Me" but ended up on Login Page Since i was not logged in
<img src="./pics/Screenshot_13.png" alt="gui"><br><br>
Now let's Login
<img src="./pics/Screenshot_14.png" alt="gui"><br><br>
In the Chat room, you can see the Logout button right beside the delete chat button<br><br>
<img src="./pics/Screenshot_15.png" alt="gui"><br><br>
Clciking on Logout button got me logged out of Chat rrom in to the login page and you van see that there is no forward browser button to get back into the Chat room without signing in.
<img src="./pics/Screenshot_16.png" alt="gui"><br><br>