class ParkingSystem{
    constructor(big,medium,small){
        this.big=big
        this.medium=medium
        this.small=small
    }

    addCar(carType){
       switch(carType){
        case 1:
            this.big--
            if(this.big<0){
                return false
            } else{
                return true
            }
        case 2:
            this.medium--
            if(this.medium<0){
                return false
            } else{
                return true
            }      
        case 3:
            this.small--
            if(this.small<0){
                return false
            } else{
                return true
            }      
       }
    }
}