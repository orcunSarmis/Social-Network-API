  # **Social Network API**

  ![GitHub license](https://img.shields.io/badge/license-GPL3.0-blue.svg)
  
  ## Description 
  
  This repository holds the code for a simple social network API. Because the focus of this repo is to demonstrate knowledge and a grasp of the back-end of a possible   web application, there is no front-end or deployed app. The interested party would need to incorporate a REST API client such as Insomnia or Postman to test the API   routes and simulate client-side server requests. In brief, Node.js is paired with the server framework Express.js to establish API routes and the corresponding HTTP   request methods; a NoSQL, MongoDB database is paired with the object-document mapper (ODM) Mongoose for holding the data and defining the schema/models,               respectively. A user can create a thought, a reaction to another user's thought, add and remove friends; routes have also been built for getting all users and         thoughts, and deleting users and thoughts.
  
  Find All Users
  
  ![Find all user](https://user-images.githubusercontent.com/79064464/179919148-e427dc9e-5218-448c-8191-98385aa12614.png)
  
  Add Friend
  
  ![add friend ](https://user-images.githubusercontent.com/79064464/179919357-fbce1185-d464-4b51-ae6c-9fe9493067f6.png)

   Delete Friend
   
  ![delete a friend](https://user-images.githubusercontent.com/79064464/179919510-d1e95a58-6ee8-4cf7-be55-286a6f13953b.png)
  
  Add Reaction
  
  ![adding reaction](https://user-images.githubusercontent.com/79064464/179919624-78ec9a53-57fe-41d8-a92c-0b1f276c5ec8.png)


  ## Table of Content

  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Installation](#installation)
  * [Tests](#tests)
  * [Licence](#license)
  * [Questions](#questions)

  ## Usage

  In the command line, `run npm` start to initiate server. NOTE: This repository consists of only the backend. The routes are located in the `routes/api` folder and     can be tested with API test clients such as Insomnia Core or Postman.
  To demonstrate how to use the full scope of this applications capabilities, I have recorded a video going through each group of routes using Insomnia.
  
  The API uses the following endpoints:
  
  - /api/users - To add a new user, find all users
  - /api/users/:id - To find one user byv id, delete a user, update a user
  - /api/users/:userId/friends/:friendId - To add a friend to a user, or to delete a friend
  - /api/thoughts - Add a new thought, find all thoughts
  - /api/thoughts/:id - Find one thought, update thought, delete thought
  - /api/thoughts/:thoughtId/reactions - post a new reaction to a thought
  - /api/thoughts/:thoughtId/reactions/:reactionId - delete a reaction

  ## Contributing

  Ideas to improve this application are welcome, [email](yorcunsarmis@gmail.com) me please.

  ## Installation

  To install the application yourself, fork the project from [GitHub](https://github.com/orcunSarmis/Social-Network-API), run `npm i` then run `npm start` in the command line.

  ## Tests

  Video demo of endpoint tests

  ## License

   This project is licensed under the [GPL 3.0](https://choosealicense.com/licenses/gpl-3.0/) license. 

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at yorcunsarmis@gmail.com. You can find more of my work at [orcunSarmis](https://github.com/orcunSarmis/).
