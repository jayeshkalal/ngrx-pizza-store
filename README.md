# Angular/NgRx Pizza Service Restaurant
 
## Introduction
 
An angular web console app which has a practice UI to take Pizza orders and process the progress step using NGRX store.
 
## Setup for local environment
 
Follow the below steps:
 
1. `npm install` to fetch dependencies.
2. Start the app with `npm run start` and open the `http://localhost:4200/`.
 

## Screens
* Landing page
![Screenshot 2022-10-18 002417](https://user-images.githubusercontent.com/48912746/196260914-67a70e66-2348-475c-869a-ac4eec037618.jpg)

* Progress tab
![Screenshot 2022-10-18 003554](https://user-images.githubusercontent.com/48912746/196261319-636ae138-0b05-4e65-8fef-385931d1fac9.jpg)


## Description
 
State management in the application is done using the NgRx library:
 
* The `State` is an `@ngrx/entity` based state. 
* NgRx flow: `action -> [effect -> service] -> store update using reducer -> slice selection for stor state change using selector`.
* Data from store can be retrived by this way: `action -> effect -> service -> store by reducer fn`. 
* Service calls from effects only.
* Advancing the pizza to the next step (`New` -> `In Progress` -> `Done`).
* In `car-repairs-dashboard.component.ts`, add:
* Displaying all oders of pizza in each state.
