const numOfPeopleInBus = upDownArr => {
    return upDownArr.reduce((peopleOnBus, stationUpDown) => peopleOnBus + stationUpDown[0] - stationUpDown[1], 0);
}

