import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import sinon from 'sinon';

let quizComponentExists = false;
let Quiz;
try {
  Quiz = require('../../Quiz.js').default;
  quizComponentExists = true;
} catch (e) {
  quizComponentExists = false;
}

let fs = require('fs');
let babylon = require('babylon')

describe('Quiz Component', () => {
  it('has a method named `showNextQuestionHandler` and a renders a QuizQuestion component with a `showNextQuestionHandlerHandler` prop @quiz-has-next-question-handler', () => {
    assert(quizComponentExists, "The Quiz component hasn't been created yet.")

    let quiz;

    try {
      quiz = shallow(<Quiz />)
    } catch (e) {
      assert(false, "We weren't able to mount the Quiz component.")
    }

    assert(quiz.find('QuizQuestion').length == 1, "We couldn't find the QuizQuestion component in the Quiz component's JSX.")
    
    assert(quiz.find('QuizQuestion').props().showNextQuestionHandlerHandler != null, "The QuizQuestion tag in Quiz's JSX doesn't have a `showNextQuestionHandlerHandler` property.")

    assert(quiz.find('QuizQuestion').props().showNextQuestionHandlerHandler.name == 'bound showNextQuestionHandler', "The QuizQuestion tag in Quiz's JSX has a `showNextQuestionHandlerHandler` property, but the value isn't set to `this.showNextQuestionHandler.bind(this)`.")

  })
})