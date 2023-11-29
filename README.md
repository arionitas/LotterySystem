# TodayTix LotterySystem

When a user decides to enter the lottery for a particular show on TodayTix, they would navigate to the lottery section in the app. Upon selecting a specific show, the user would see details about the lottery, including the number of available tickets and the entry deadline.



1. Entering the Lottery:

   1. The user clicks on the "Enter Lottery" button, expressing their interest along with how many tickets they would like.

   2. The app will then send a request to the backend, recording the user's entry for that show's lottery.

   3. The backend stores this entry, associating it with the user's account and the chosen show.



2. Lottery Drawing:

   1. Once the entry deadline is reached, the backend system initiates the lottery drawing process.

   2. A random selection algorithm determines the winners based on the number of available tickets.

   3. The system then stores the list of winners.



3. Notification to Winners:

   1. Winners receive a push notification or an email notifying them of their success in the lottery.

   2. The notification includes details about the show, the number of tickets they can purchase, and a link to the app.



4. Purchasing Tickets:

   1. Winners open the app and navigate to their notifications or lottery section.

   2. The app fetches the list of available shows and the user's winning status from the backend.

   3. Winners can then proceed to the ticket purchase screen, where they see the number of tickets they won.

   4. Upon confirming the purchase, the app sends a request to the backend to reserve the tickets for the user.



// User information below

class User {
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
        const lottery = new Lottery(availableTickets, entryDeadline);
        this.lotteries.push(lottery);
        return lottery;
    }

}

const lotterySystem = new LotterySystem();
const user = new User("Arion Mehmeti", "mgmt@arxivn.com");

// Creating a lottery

const showLottery = lotterySystem.createLottery(10, "2023-12-01T18:00:00");

// Displaying lottery info

document.getElementById("lottery-info").innerHTML = `Enter the lottery for a chance to win tickets! Deadline: ${showLottery.entryDeadline}`;

// User enters the lottery

function enterLottery() {
    showLottery.enter(user);
    alert("Lottery entered successfully!");
}
