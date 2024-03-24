// A function that takes input as speed of car and gives out demerit points depending on the speed
function speedOfCar(speed){
    //Checks if speed is less than or equal to 70
    if (speed <= 70 ){
        console.log("Ok");
        return;
    } else {
        //Calculates the demerit points of the driver based on speed
        let demerit = Math.floor((speed - 70)/5)
        if (demerit > 0 && demerit <= 12){
            console.log(`Driver Points: ${demerit}`)
            return;
        } else if (demerit > 12){
            console.log("License Suspended")
            return
        }
    }
}
