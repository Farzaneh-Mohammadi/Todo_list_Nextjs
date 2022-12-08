This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


# ToDo App

## Getting Started

First, install node_modules and other dependencies, then run the development server:

```bash
npm i

npm run dev
# or
yarn dev
```

Then Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Description
This Project is for managing tasks with **CRUD** features: *Create* a new task and add it to the list of tasks, *Read* the List of tasks, *Update* tasks and *Delete* them

#### Technologies
- NextJS
- Material UI
- Redux


### Steps of doing the project
-  *Create template*: Create inputBox  and Add button in *Todos* component
-  Create *Redux folder structure*: action, reducer and store files
-  Create *actions* and *todoReducer* files, combine them in *rootReducer* and store them in *store* file
-  Wrap the entire App in *Provider*: *_app.js* file
-  Fetch data by *useSelector* and map through them to show the list of Todos
-  Using  *redux-persist* persist data in localStorage 

## Demo
you can see of this project [Here](https://todo-list-nextjs-one.vercel.app/)


