(function() {
    var questions = [{
      question: "Le coronavirus se propage par un contact avec un(e):",
      choices: ["Animal Domestique", "Personne infectée"],
      correctAnswer: 1
    }, {
      question: "Pour se protéger de  coronavirus, il faut éviter le contact des mains avec",
      choices: ["L'oreille, le ventre et le dos", "La bouche, le nez ou les yeux"],
      correctAnswer: 1
    }, {
      question: "En cas de toux, il faut se couvrir la bouche et le nez avec le pli du coude",
      choices: ["Vrai", "faux"],
      correctAnswer: 0
    }, {
      question: "Pour se protéger du COVID‑19 il faut garder une distance de sécurité avec des",
      choices: ["Personnes symptomatiques", "Personnes allergiques"],
      correctAnswer: 0
    }, {
      question: "Pour se protéger du coronavirus il faut laver les mains avec de l'eau et ?",
      choices: ["du savon- une solution hydro alcoolique", "Sel et body lotion"],
      correctAnswer: 0
    },
    
    
    {
        question: "En cas d'apparition des symptomes de la coronavirus, il faut éviter ",
        choices: ["Les lieux publics", "Seulement les marchés"],
        correctAnswer: 0
      },{
        question: "Le seul moyen de transport autorisé à circuler est le taxi individuel ? ",
        choices: ["vrai", "faux"],
        correctAnswer: 0
      },{
        question: "Peut-on encore faire du covoiturage ?      ",
        choices: ["du savon- une solution hydro alcoolique", "Sel et body lotion"],
        correctAnswer: 0
      },{
        question: "Le coronavirus a été décrit pour la 1ère fois en",
        choices: ["janvier 2020", "Décembre 2019        "],
        correctAnswer: 1
      },{
        question: "Selon l'OMS, le MERS-CoV se transmettait à l'homme     ",
        choices: ["Des oiseaux", " Du dromadaire"],
        correctAnswer: 0
      }




];
    
    var questionCounter = 0; 
    var selections = []; 
    var quiz = $('#quiz');
    
   
    displayNext();
    
    $('#next').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {        
        return false;
      }
      choose();
      
      if (isNaN(selections[questionCounter])) {
        alert('Please make a selection!');
      } else {
        questionCounter++;
        displayNext();
      }
    });
    
    $('#prev').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      choose();
      questionCounter--;
      displayNext();
    });
    
    $('#start').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      questionCounter = 0;
      selections = [];
      displayNext();
      $('#start').hide();
    });
    
    $('.button').on('mouseenter', function () {
      $(this).addClass('active');
    });
    $('.button').on('mouseleave', function () {
      $(this).removeClass('active');
    });
    
   
    function createQuestionElement(index) {
      var qElement = $('<div>', {
        id: 'question'
      });
      
      var header = $('<h2>Question ' + (index + 1) + ':</h2>');
      qElement.append(header);
      
      var question = $('<p>').append(questions[index].question);
      qElement.append(question);
      
      var radioButtons = createRadios(index);
      qElement.append(radioButtons);
      
      return qElement;
    }
    
    function createRadios(index) {
      var radioList = $('<ul>');
      var item;
      var input = '';
      for (var i = 0; i < questions[index].choices.length; i++) {
        item = $('<li>');
        input = '<input type="radio" name="answer" value=' + i + ' />';
        input += questions[index].choices[i];
        item.append(input);
        radioList.append(item);
      }
      return radioList;
    }
    
    function choose() {
      selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }
    
    function displayNext() {
      quiz.fadeOut(function() {
        $('#question').remove();
        
        if(questionCounter < questions.length){
          var nextQuestion = createQuestionElement(questionCounter);
          quiz.append(nextQuestion).fadeIn();
          if (!(isNaN(selections[questionCounter]))) {
            $('input[value='+selections[questionCounter]+']').prop('checked', true);
          }
          
          if(questionCounter === 1){
            $('#prev').show();
          } else if(questionCounter === 0){
            
            $('#prev').hide();
            $('#next').show();
          }
        }else {
          var scoreElem = displayScore();
          quiz.append(scoreElem).fadeIn();
          $('#next').hide();
          $('#prev').hide();
          $('#start').show();
        }
      });
    }
    
    function displayScore() {
      var score = $('<p>',{id: 'question'});
      
      var numCorrect = 0;
      for (var i = 0; i < selections.length; i++) {
        if (selections[i] === questions[i].correctAnswer) {
          numCorrect++;
        }
      }
      
      score.append('You got ' + numCorrect + ' questions out of ' +
                   questions.length + ' right!!!');
      return score;
    }
if(numCorrect==10){


}

  })();