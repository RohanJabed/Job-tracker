const interviewButtons = document.querySelectorAll(".interview-btn");
for (const button of interviewButtons) {
    button.addEventListener("click", function (event) {
        if (button.disabled) return;

        const clickedCard = event.target.closest(".card");

        // Change status in original card
        const originalStatus = clickedCard.querySelector("span");
        originalStatus.innerText = "Interview";

        const interview = document.getElementById("interview-card");
        interview.innerText = Number(interview.innerText) + 1;

        const interviewSection = document.getElementById("interview");

        // Clone the card and add to interview section
        const clonedCard = clickedCard.cloneNode(true);
        interviewSection.appendChild(clonedCard);

        // Disable both buttons so they can't be clicked again
        button.disabled = true;
        const rejectedBtn = clickedCard.querySelector(".rejected-btn");
        rejectedBtn.disabled = true;
        const inter = document.getElementById("interview-part");
        inter.classList.add("hidden");
    });
}

const rejectedButtons = document.querySelectorAll(".rejected-btn");
for (const button of rejectedButtons) {
    button.addEventListener("click", function (event) {
        const clickedCard = event.target.closest(".card");

        // Change status in original card
        const originalStatusSpan = clickedCard.querySelector("span");
        originalStatusSpan.innerText = "Rejected";

        const rejected = document.getElementById("rejected-card");
        rejected.innerText = Number(rejected.innerText) + 1;

        const rejectedSection = document.getElementById("Rejected");

        // Clone the card and add to rejected section
        const clonedCard = clickedCard.cloneNode(true);
        rejectedSection.appendChild(clonedCard);

        // Disable both buttons
        button.disabled = true;
        const interviewBtn = clickedCard.querySelector(".interview-btn");
        interviewBtn.disabled = true;
        const inter = document.getElementById("rejection-part");
        inter.classList.add("hidden");
    });
}


const interviewSection = document.getElementById("interview");
interviewSection.addEventListener("click", function (event) {
    if (event.target.classList.contains("rejected-btn")) {
        const button = event.target.closest(".rejected-btn");
        const clickedCard = button.closest(".card");

        // Decrease interview count
        const interview = document.getElementById("interview-card");
        interview.innerText = Number(interview.innerText) - 1;

        // Increase rejected count
        const rejected = document.getElementById("rejected-card");
        rejected.innerText = Number(rejected.innerText) + 1;

        // Move card to rejected section
        const rejectedSection = document.getElementById("Rejected");
        const clonedCard = clickedCard.cloneNode(true);
        const statusSpan = clonedCard.querySelector("span");
        statusSpan.innerText = "Rejected";
        rejectedSection.appendChild(clonedCard);

        // Remove card from interview section
        clickedCard.remove();
        if (interview.innerText == 0) {
            const inter = document.getElementById("interview-part");
            inter.classList.remove("hidden");
            const inter2 = document.getElementById("rejection-part");
            inter2.classList.add("hidden");
        }


    }
});

const deletecard = document.querySelectorAll(".delete");
document.addEventListener("click", function (event) {

    if (event.target.closest(".delete")) {

        const deleteBtn = event.target.closest(".delete");
        const clickedCard = deleteBtn.closest(".card");

        // check section before removing
        if (clickedCard.closest("#interview")) {
            const interviewCount = document.getElementById("interview-card");
            interviewCount.innerText = parseInt(interviewCount.innerText) - 1;
        }

        if (clickedCard.closest("#Rejected")) {
            const rejectedCount = document.getElementById("rejected-card");
            rejectedCount.innerText = parseInt(rejectedCount.innerText) - 1;
        }
        if(clickedCard.closest("#all-part")){
            const jobs = document.getElementById("jobs");
            const currentCount = parseInt(jobs.innerText.split(" ")[1]);
            jobs.innerText = `Jobs ${currentCount - 1}`;
        }

        // update total
        const totalElement = document.getElementById("total");
        totalElement.innerText = parseInt(totalElement.innerText) - 1;

        // remove from UI
        clickedCard.remove();
    }

});