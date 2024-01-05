# task-tracker
Task Tracker: It is simple full-stack web app using Node.js, Express, MongoDB Atlas, and Docker. Enables users to manage tasks with CRUD operations via a user-friendly interface.

- Users can view the list of tasks on the main page.
- They can create a new task with a title, description, and status.
- Tasks can be edited and updated, including changing the status.
- Users can delete tasks they no longer need.

How to deploy in the local machine:
1. Open Docker in the Background
2. Download the folder into the local machine and import it in VS Code.
3. Open the terminal in VS Code and enter the following commands
   
        docker build -t task-tracker .

        docker run -p 3000:3000 task-tracker
