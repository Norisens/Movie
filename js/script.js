"use strict";
//Вопрос: количество просмотренных фильмов
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//Создаётся база данных
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//Число из вопроса помещается в цикл, и повторяется до того числа фильмов котороё ввёл пользователь
let i = 0;
while (i < numberOfFilms) { 

    //Задаются вопросы определенное количество раз
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
    
    //Помещаются в базу данных
    personalMovieDB.movies[a] = b;
    i++;
};

console.log(personalMovieDB);