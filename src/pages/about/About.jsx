/** @format */

import { Link } from "react-router-dom";
import "./css/about.css";
function About() {
 return (
  <div className="about-page">
    <header className="header">
    <h1 className="welcome">
     Welcome to Quiz<span>IQ</span>u
    </h1>
   </header>
   <nav className="navbar">
    <Link to="/" className="home-btn">
     Back To Home Page
    </Link>
    <Link to="/options" className="option-btn">
     Quiz Options
    </Link>
   </nav>
   <div className="about-box">
    <h2>Why build this App?</h2>
    <p className="about-info">
    Hi Welcome to my little quiz app Quiz<span>IQ</span>u, my name is Michael Rose and I developed this application. I built this application as required during my certification Full Stack Software Developer @ Learning Poeple.</p>
    <h2>Project Guidelines</h2>
    <p> The guidelines were to create a online quiz website where users can answer a series of questions and recieve feedback or graded on thier performance. The quiz would have options and navigation like ( "next" and "submit" ) and the questions are loaded at random every time. This project is aimed at demonstrating my understanding and application of JavaScript, along with HTML and CSS for structure and styling. At the end of the quiz, users could recieve a summery of thier performance, including the number of correct answers, total score,  and informantion on the questions that were incorrect.</p>
    <h2>How the Application works</h2>
    <p> The project uses a free API called Open trivia Database. When the app opens your greeted to the home page. there are two options, the first is to learn about the application and how to use it, and the second is a link to the quiz options page. Before the options are loaded there is a call for the categories then the user selects what category, number of questions, difficulty, and mode ( true/false, multible, any) you want. Then you pick an answer and move onto the next question. Once all the questions have been answered you will recieve the results by ending the quiz. The results can then be reset after.
    </p>
    <a href="https://github.com/Jellynight/online_quiz.git">Git Repository</a>
    <p>Regards Michael</p>
   </div>
  </div>
 );
}

export default About;
