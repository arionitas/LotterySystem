// User class to represent users

class User {

    constructor(name, email) {

        this.name = name;

        this.email = email;

    }

}



// Lottery class to manage lotteries

class Lottery {

    constructor(availableTickets, entryDeadline) {

        this.availableTickets = availableTickets;

        this.entryDeadline = entryDeadline;

        this.entries = [];

    }



    enter(user) {

        this.entries.push(user);

    }



    drawWinners() {

        return this.entries.slice(0, this.availableTickets);

    }

}



// LotterySystem class to manage multiple lotteries

class LotterySystem {

    constructor() {

        this.lotteries = [];

    }



    createLottery(availableTickets, entryDeadline) {

        const lottery = new Lottery(availableTickets, entryDeadline);

        this.lotteries.push(lottery);

        return lottery;

    }

}



// Initialize the lottery system

const lotterySystem = new LotterySystem();



// Example user

const user = new User("John Doe", "john@example.com");



// Create a lottery

const showLottery = lotterySystem.createLottery(10, "2023-12-01T18:00:00");



// Display lottery info

document.getElementById("lottery-info").innerHTML = `Enter the lottery for a chance to win tickets! Deadline: ${showLottery.entryDeadline}`;



// Handle user entering the lottery

function enterLottery() {

    showLottery.enter(user);

    alert("Lottery entered successfully!");

}