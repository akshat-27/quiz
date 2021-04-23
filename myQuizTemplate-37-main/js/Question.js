class Question {

    constructor() {
      this.input = createInput("Name");
      this.input1 = createInput("Answer");
      this.question = createElement('h2');
      this.title = createElement('h3');
      this.option1 = createElement('h5');
      this.option2 = createElement('h5');
      this.option3 = createElement('h5');
      this.option4 = createElement('h5');
    }
    hide(){
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.option.hide();
    }
  
    display(){
      this.title.html("MyQuiz");
      this.title.position(350, 0);
      this.question.html("Q- Which type of carbon bond does an Alkane consist of?");
      this.question.position(150, 80);
      this.option1.html("1: single bond");
      this.option1.position(150, 130);
      this.option2.html("2: double bond");
      this.option2.position(150, 150);
      this.option3.html("3: triple bond");
      this.option3.position(150, 170);
      this.option4.html("4: tetra bond");
      this.option4.position(150, 190);
      
      this.input.position(100, 260);
      this.input1.position(500, 260);
        }
  }
  