const Cards = document.getElementsByClassName('card');
const InterViewSection = document.getElementById('interview');
const RejectedSection = document.getElementById('Rejected');
const bannerContainer = document.getElementById('all-part');

// Interview Button
document.getElementById('interview-btn-top').addEventListener('click', function () {
    bannerContainer.classList.add('hidden');
    RejectedSection.classList.add('hidden');
    InterViewSection.classList.remove('hidden');
});

// Rejected Button
document.getElementById('rejected-btn-top').addEventListener('click', function () {
    bannerContainer.classList.add('hidden');
    InterViewSection.classList.add('hidden');
    RejectedSection.classList.remove('hidden');
});

// All Button
document.getElementById('all-btn').addEventListener('click', function () {
    InterViewSection.classList.add('hidden');
    RejectedSection.classList.add('hidden');
    bannerContainer.classList.remove('hidden');

    for (let card of Cards) {
        card.classList.remove('hidden');
    }
});