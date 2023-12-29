import { Component, OnInit } from '@angular/core';
import quizz_questions from '../../../assets/data/quizz_questions.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.scss',
})
export class QuizzComponent implements OnInit {
  title: string = '';

  questions: any;
  questionSelected: any;

  answers: string[] = [];
  answerSelected: string = '';

  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  finished: boolean = false;

  ngOnInit(): void {
    if (quizz_questions) {
      this.finished = false;
      this.title = quizz_questions.title;
      this.questions = quizz_questions.questions;

      this.questionIndex = 0;
      this.questionMaxIndex = this.questions.length;

      this.questionSelected = this.questions[this.questionIndex];
    }
  }
}
