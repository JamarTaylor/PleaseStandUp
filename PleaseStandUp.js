class PleaseStandUp {
  /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */
  //input date of birth
  //then input the year
  //return current age

  howOld(birthday) {
    return -1;
  }

  /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

  timeConvert(numOfMins) {
    // divide hrs by 60
    let hours = Math.floor(numOfMins / 60);
    // calculate remainder of minutes
    let minutes = numOfMins % 60;
    // Remainder is seconds. Multiply by 60
    let seconds = minutes % 60;
    // display results hrs:min
    return hours + ":" + minutes + ":" + seconds;
  }
}

module.exports = PleaseStandUp;
