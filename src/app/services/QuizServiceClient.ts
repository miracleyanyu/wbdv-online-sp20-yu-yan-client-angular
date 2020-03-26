import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  // findQuizzesForCourse = (courseId) =>
  //   fetch(`https://wbdv-generic-server.herokuapp.com/api/yyan/courses/${courseId}/quizzes`)
  //   .then(response => response.json())
  findAllQuizzes = () =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yyan/quizzes`)
    .then(response => response.json())
  findQuizById = (quizId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yyan/quizzes/${quizId}`)
    .then(response => response.json())

  // findAllQuizzes = () =>
  //   fetch(`http://localhost:3000/api/quizzes`)
  //   .then(response => response.json())
  // findQuizById = (quizId) =>
  //   fetch(`http://localhost:3000/api/quizzes/${quizId}`)
  //   .then(response => response.json())
}
