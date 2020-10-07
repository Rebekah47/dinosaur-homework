const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];

}

Park.prototype.add = function(dinosaur){
    this.dinosaurs.push(dinosaur);
}

Park.prototype.remove = function(dinosaur){
    for (var i=0; i < this.dinosaurs.length; i++){
        if (this.dinosaurs[i] === dinosaur){
            this.dinosaurs.splice(i, 1);
        };
    };
};

Park.prototype.findMostAttractiveDinosaur = function(){
    var target = 0
    for (var dinosaur of this.dinosaurs){
       if (dinosaur.guestsAttractedPerDay > target){
        target = dinosaur.guestsAttractedPerDay};
   };
    for (var dinosaur of this.dinosaurs){
        if (dinosaur.guestsAttractedPerDay === target){
            return dinosaur
        };  
    };
    return dinosaur
};

Park.prototype.findBySpecies = function(species){
    let selectedDinosaurs = [];
    for (dinosaur of this.dinosaurs){
        if (dinosaur.species === species){
            selectedDinosaurs.push(dinosaur)
        };
    };
    return selectedDinosaurs;

};

Park.prototype.calculateAverageVisitorsPerDay = function(){
    var averagenumberOfVisitors = 0;
    for (dinosaur of this.dinosaurs){
        averagenumberOfVisitors += dinosaur.guestsAttractedPerDay
    };
return averagenumberOfVisitors;
} 

Park.prototype.calculateAverageVisitorsPerYear = function(){
    let perDayVisitors = this.calculateAverageVisitorsPerDay();
    let perYearVisitors = perDayVisitors * 365;
    return perYearVisitors;
}

Park.prototype.calculateAverageYearlyRevenue = function(){
    let perYearVisitors = this.calculateAverageVisitorsPerYear();
    let yearlyIncome = perYearVisitors * this.ticketPrice;
    return yearlyIncome;
}

module.exports = Park; 