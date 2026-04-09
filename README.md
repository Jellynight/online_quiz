
# ❔ Welcome to QuizIQu ❔
Online quiz CodeCademy / LearningPeople project

# ✈️ App deployed ✈️ 
🔗 https://quiziqu.netlify.app/

## 📖 About
 This projects aim was to build an online quiz where users can answer a series of questions and graded on thier performance. The project uses a free API called Open trivia Database that that I use a request to for the categories, then call again once the user selects thier preferances. When the app opens you are greeted on the home page and have two choices, options or about. If you choose options the preloades categories then the user selects what category, number of questions, difficulty, and mode( true/false, multible, any) they want. Then you pick an answer and move onto the next question. Once all the questions have been answered you will recieve the results by ending the quiz. The results can then be reset after.   

## 🖋️ Attribution - Contributers
 This project has been built in Visual Studio Code using create-react-app. The core of the project Javascript was written by me with help from documentation from react.dev, w3schools and the help of refratoring using AI. The CSS was build with the help of AI and a website called "Devsnap.me" I use to create the Border of the score. The jpeg icon came from a free site i lost track of. The string decoder function used was build using AI.        

## 🖱️ Code Structure
 Routing is done using createBrowserRouter, then the buttons act as links for navigatingt the web pages. The format is built using JSX functional components, store to save your preferances and results, slices to set your preferances and results tracking, and async thunk to call the API. I use a decoder function and parse the API response to iron out characters in the string.   

## 💥 API used 
🔗 Link: https://opentdb.com/api_config.php
  This is a free api called Open Trivia Database that uses Json. It does not require an API Key, just generate the URL to retrieve trivia questions. 

## 🧰 Dependencies
- "@reduxjs/toolkit": "^2.11.2",
-   "cra-template-redux": "2.0.0",
-   "react": "^19.2.3",
-   "react-dom": "^19.2.3",
-   "react-redux": "^9.2.0",
-   "react-router-dom": "^7.13.0",
-   "react-scripts": "5.0.1"

## 🧪 Testing - Validation
- validator.w3.org
- jigsaw.w3.org
- pagespeed.web.dev - score 99
- devtools
