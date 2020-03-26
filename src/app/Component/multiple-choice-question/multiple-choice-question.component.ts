import {Component, Input, OnInit} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question = {_id: '', type: '', title: '', question: '', choices: [], correct: '', answer: '' };
  grading = false;
  answer = '';
  faCheck = faCheck; faTimes = faTimes;

  grade = () => { this.grading = true; };

  setDefault = () => { if (this.grading) { this.grading = false; } };

  ngOnInit(): void {
  }

}
