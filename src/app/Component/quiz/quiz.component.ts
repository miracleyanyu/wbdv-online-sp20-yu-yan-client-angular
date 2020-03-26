import { Component, OnInit } from '@angular/core';
import {QuestionServiceClient} from '../../services/QuestionServiceClient';
import {ActivatedRoute} from '@angular/router';
import {QuizServiceClient} from '../../services/QuizServiceClient';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private QuestionService: QuestionServiceClient,
              private QuizService: QuizServiceClient,
              private route: ActivatedRoute) { }


  questions = [];
  quizId = '';
  quiz = {title: ''};

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.quizId;
      this.QuestionService.findQuestionsForQuiz(this.quizId)
      .then(questions => this.questions = questions);
      this.QuizService.findQuizById(this.quizId)
      .then(quiz => this.quiz = quiz);
    });
  }

}
