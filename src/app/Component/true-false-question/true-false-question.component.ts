import {Component, Input, OnInit} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question = {_id: '', type: '', title: '', question: '', answer: '', correct: ''};
  grading = false;
  answer = '';
  faCheck = faCheck; faTimes = faTimes;

  grade = () => { this.grading = true; };

  setDefault = () => { if (this.grading) { this.grading = false; } };

  ngOnInit(): void {
  }

}
