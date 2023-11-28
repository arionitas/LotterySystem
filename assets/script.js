class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

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

class LotterySystem {
    constructor() {
        this.lotteries = [];
    }

    createLottery(availableTickets, entryDeadline) {
        const lottery = new
        Lottery(availableTickets, entryDeadline);
        this.lotteries.push(lottery);
        return lottery;
    }
}

const lotterySystem = new LotterySystem();
const user = new User("Arion Mehmeti", "mgmt@arxivn.com");

// Creating a lottery below
const showLottery = lotterySystem.createLottery(10, "2023-11-28T21:00:00");

// Showing the lottery information
document.getElementById("lottery-information").innerHTML = `Enter the TodayTix Lottery for a chance to win tickets! Deadline: $ {showLottery.entryDeadline}`;

// User will enter the lottery at this stage
function enterLottery() {
    showLottery.enter(user);
    alert("Lottery Entery Successful!");
}
