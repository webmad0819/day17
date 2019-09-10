EPOCH unix time: https://en.wikipedia.org/wiki/Unix_time

Please see: `Comparison Queries Cheat Sheet` at http://learn.ironhack.com/#/learning_unit/6471

## #1 
  
Yields all the movies with a rate greater or equals to 8.9, showing the title, the rate but no id, sorted by rate descendant.

filter: `{rate: {$gte: 8.9}}`

project: `{title: 1, rate: 1, _id: 0}`

sort: `{rate: -1}`

## #2

// to do: find regexp negation as per question
  
Yields all the containing in the title the word Knight

filter: `{title: /Knight/gi}`

## #3

Yields all the movies that are not The Dark Knight

filter: `{title: {$ne: "The Dark Knight"}}`

## #4
  
Yields the movie with the chosen id

filter: `{_id: ObjectId('5d776be31be232a0c7086a61')}`

## #5
  
Yields all the movies of the year 2000 with a rate of 8.5 

filter: `{$and: [{year: 2000}, {rate: 8.5}]}`

## #6
  
Yields all the movies of the year 2000 and all the movies of a   8.5 rate

filter: `{$or: [{year: 2000}, {rate: 8.5}]}`

## #7
  
Yields all the movies not having 8.8 as their rate

filter: `{rate: {$ne: 8.8}}`

## #8
  
Yields all the movies having 8.8 as their rate

filter: `{rate: {$eq: 8.8}}`

## #9
  
Yields all the movies not the year 2000 or the director containing Lumet in their name

filter: `{$nor: [{year: 2000}, {director: /Lumet/gi}]}`

## #10
  
Yields only 20 movies

limit: `20`

## #11
  
Yields only 20 movies starting in the 41th movie

limit: `20`
skip: `40`

## #12
  
Yields all the movies that are science fiction or drama (all of both categories)

filter: `{genre: {$in: ["Sci-Fi", "Drama"]}}`

## #13
  
Yields all the movies that are not science fiction

filter: `{genre: {$nin: ["Sci-Fi"]}}`

## #14
  
Yields all the movies that are both science fiction and drama

filter: `{genre: {$all: ["Sci-Fi", "Drama"]}}`

## #14
  
Yields all the restaurants having an A grade but also a score greater or equals to 15. Please remember this applies to arrays of objects.

filter: `{ grades: { $elemMatch: { grade: "A", score: { $gte: 15 } } } }`

## #15
  
Yields all the movies not having director 

filter: `{director: {$exists: false}}`

## #16
  
Yields all the movies not having director and having year greater than 1972

filter: `{$and: [{director: {$exists: false}}, {year: {$gt: 1972}}]}`
