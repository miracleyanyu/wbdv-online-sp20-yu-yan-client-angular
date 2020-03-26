import {Injectable} from '@angular/core';

@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (quizId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yyan/quizzes/${quizId}/questions`)
    .then(response => response.json())
  findQuestionById = (questionId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yyan/questions/${questionId}`)
    .then(response => response.json())

  // findQuestionsForQuiz = (quizId) =>
  //   fetch(`http://localhost:3000/api/quizzes/${quizId}/questions`)
  //   .then(response => response.json())
}
