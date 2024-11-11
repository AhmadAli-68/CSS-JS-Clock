const secondHand = document.querySelector('.second-hand')
const minsHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date(); //? --> Get the current date and time
    const seconds = now.getSeconds(); //? --> returns the current seconds
    const secondsDegrees = ((seconds / 60) * 360) + 90; //* --> Calculates the rotation in degrees for the second hand. This formula converts seconds to degrees (since a full circle is 360) and adds 90 to align the clock's hands correctly.
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90; //* --> calculates the rotation for the minute hand, accounting for the minute and how far the second hand has moved. It also adds 90deg for proper alignment.
    minsHand.style.transform = `rotate(${minsDegrees}deg)`

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90; //* --> calculates the rotation for the hour hand, considering both the hour and the minutes passed, and adds 90deg for alignment.
    hourHand.style.transform = `rotate(${hourDegrees}deg)` //! --> This property is used to rotate each hand element according to the calculated degrees.
    // console.log(seconds);

}

setInterval(setDate, 1000) //? repeatedly calls the setDate function evert 1000 milliseconds (1 second) to keep the clock updated

setDate(); //? --> is also called once initially to set the hands immediately without waiting for the first interval.


//! const secondsDegrees = ((seconds / 60) * 360) + 90;
//? --> seconds is a number between 0 and 59, representing the current second of the minute.

//? --> (seconds / 60) gives the fraction of a full minute that has passed. For example, if seconds = 30, then (seconds / 60) = 0.5.

//? --> (seconds / 60) * 360 converts this fraction into degrees. Since a full circle is 360°, multiplying the fraction by 360° gives the appropriate rotation angle for the second hand. For instance, if seconds = 30, the angle would be 0.5 * 360 = 180°.

//? --> The + 90 shifts the zero degree point. By default, a rotation of 0° in CSS starts at the 3 o'clock position, so adding 90° makes the zero degree position point at the top (12 o'clock), aligning the second hand correctly.

//! const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
//? --> mins is a number between 0 and 59, representing the current minute of the hour.

//? --> (mins / 60) gives the fraction of the hour that has passed. For example, if mins = 15, then (mins / 60) = 0.25.

//? --> (mins / 60) * 360 converts this fraction into degrees. Since 60 minutes make a full circle, multiplying by 360° gives the correct rotation for the minute hand. For example, if mins = 15, the angle would be 0.25 * 360 = 90°.

//*     --> ((seconds / 60) * 6) adds a smaller adjustment to reflect the current second. This ensures the minute hand gradually moves as the seconds pass.

//*     --> (seconds / 60) gives the fraction of the current minute that has passed.

//*     --> Since a minute's worth of movement is 6° (360° / 60 = 6° per minute), we multiply this fraction by 6 to get the degree adjustment. For example, if seconds = 30, the adjustment is 0.5 * 6 = 3°.

//? --> The + 90 is the same as before, shifting the zero degree position to point at the top (12 o'clock).

//! const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
//? --> hour is a number between 0 and 23, representing the current hour of the day. Since we are working with a 12-hour clock, hour will effectively be between 0 and 11.

//? --> (hour / 12) gives the fraction of the 12-hour cycle that has passed. For example, if hour = 3, then (hour / 12) = 0.25.

//? --> (hour / 12) * 360 converts this fraction into degrees. Since a full 12-hour rotation is 360°, multiplying the fraction by 360° gives the correct angle. For example, if hour = 3, the angle is 0.25 * 360 = 90°.

//? --> ((mins / 60) * 30) adds a smaller adjustment to reflect the current minute.

//*     --> (mins / 60) gives the fraction of the current hour that has passed.

//*     --> Since one hour corresponds to 30° of rotation (360° / 12 = 30° per hour), we multiply this fraction by 30. For example, if mins = 30, the adjustment is 0.5 * 30 = 15°.

//? --> The + 90 again shifts the starting position to the top (12 o'clock).