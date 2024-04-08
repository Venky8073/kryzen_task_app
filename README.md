# kryzen_task_app

## Introduction
This app facilitates task addition, management according to their status, and deletion. Furthermore, tasks can be easily rearranged by dragging within the app.

## Project Type
Fullstack

## Deplolyed App
Frontend: https://6613c961b1605487a1604154--precious-mochi-cdd060.netlify.app/
Backend: https://kryzen-backend-1.onrender.com/
Backend codebase: https://github.com/Venky8073/kryzen-backend


## Video Walkthrough of the project
https://drive.google.com/file/d/1CtmBWlv2adYlEHt1-_ATRIvvs4mYzjdZ/view?usp=sharing


## Features

- Add the tasks
- Move the task on colum to another by dragging 
- We can delete the task
- After dragging the task status will be changed


## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running. For BE/FS projects, guide the reviewer how to check mongodb schema etc.

```bash
npm install kryzen_task_app
cd kryzen_task_app
npm start
```

## Usage

![b1604382-bcf3-48d7-beee-3f39019ae734](https://github.com/Venky8073/kryzen_task_app/assets/118984511/c3b4d753-aa0e-4c20-b71a-cc51be436a50)

```bash
# In the image above, you'll notice the presence of an "Add" button and an input box. By typing in the task and clicking the "Add Task" button, you can seamlessly incorporate new tasks into the system.
#  By simply dragging the elements, you can transition your task smoothly between the "To Do," "In Progress," "Done," and "Rework" sections.
# Within each task, you'll find a delete button. With just a simple click, you can swiftly remove the task from the list.
```


## API Endpoints
In case of Backend Applications provide a list of your API endpoints, methods, brief descriptions, and examples of request/response.
GET /api/ - retrieve all items
POST /api/add - create a new item
PATCH /api/edit/:id - update a task status
DELETE /api/delete/:id - delete the task


## Technology Stack
List and provide a brief overview of the technologies used in the project.
- Node.js
- Express.js
- MongoDB
- React js
