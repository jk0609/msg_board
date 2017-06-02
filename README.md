# Best Message Board (Week 2 Advanced JS Project)

#### By Jonathon Kang

## Description

Exercise in Node.JS and Ember. Practice using Ember to setup a project, connect it to a Firebase data store and establish a one-to-many relationship between two models. The site emulates a basic Q&A message board where users can post questions and get answers from other users.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Setup/Installation Requirements
1. Clone the directory to your local machine and navigate to project root directory.
2. Open your Node.JS terminal and run $ npm install.
3. Run $ ember serve to initiate the directory and take it live at localhost:4200.

## Technologies Used

HTML/CSS
Bootstrap
Javascript/Node.JS
Ember
Bower

### License

Copyright 2017 Jonathon Kang

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Planning
1. Configuration/dependencies
  * Node.js/npm
  * Ember
  * Ember-Bootstrap
  * Emberfire

2. Layout
  * Two models, questions have a one-to-many with comments.
  * Questions include: author, body and notes. Add and edit
  * Answers include: author and body. Add only
  * Navbar with: site name, home page link, contact link, social
  * Routes: index, one-question, about, contact
  * Components: question-tile, new-question, answer-tile, new-answer, update-question

3. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style
