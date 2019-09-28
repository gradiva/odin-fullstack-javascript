# README

## Tic Tac Toe

[*Tic Tac Toe*](https://www.theodinproject.com/courses/javascript/lessons/tic-tac-toe-javascript)
following The Odin Project [JavaScript course](https://www.theodinproject.com/courses/javascript).

This project is about building a Tic Tac Toe browser game based on JavaScript, using Factory Functions and the Module Pattern, introduced by ES6. 

## Notes

Based on [this lesson](https://www.theodinproject.com/courses/javascript/lessons/factory-functions-and-the-module-pattern).

There are two versions: one located in the folder called 'old' and the latest version, located in 'src', which is the one displayed in the browser. The reason for this is that I decided to refactor the old one to separate the logic for UI, game and index orchestring the two. 

Also, in the old version I had harcoded the winning combinations and use them to compare the state of the game, whereas the latest one will actually evaluate rows, columns and diagonals without considering the amount of cells (three), but thinking on a potential extension of the game (4x4, 5x5, 10x10, etc), making it easily scalable.  

## Improvements

To display messages to players, indicating when the game has ended and who won.  

## View in browser

To view in browser click [here](https://hidden-castle-05197.herokuapp.com/).