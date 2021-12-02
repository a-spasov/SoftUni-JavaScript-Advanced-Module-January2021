function createAssemblyLine () {
    let result = {
        hasClima: function(car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () => {
                if (car.temp < car.tempSettings) {
                    car.temp++;
                }
                if (car.temp > car.tempSettings) {
                    car.temp--;
                }
                return car.temp;
            }
        },
        hasAudio: function(car) {
            car.currentTrack = {
                name: null,
                artist: null
            }
            car.nowPlaying = () => {
                if (car.currentTrack != null) {
                    console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
                }
            }
        },
        hasParktronic: function(car) {
                car.checkDistance = (distance) => {
                    if (distance < 0.1) {
                        console.log("Beep! Beep! Beep!");
                    } else if (distance >= 0.1 && distance < 0.25) {
                        console.log("Beep! Beep!");
                    } else if (distance >= 0.25 && distance < 0.5) {
                        console.log("Beep!");
                    } else {
                        console.log("");
                    }
                }                                    
        }
        
    };
    return result;              
}

const assemblyLine = createAssemblyLine();
const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);



