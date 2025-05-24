function calculateDaysTogether() {
    const startDate = new Date("2023-03-31");
    const today = new Date();
    const timeDiff = today - startDate;
    const daysTogether = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    document.getElementById("day-counter").innerText = `আমরা একসাথে আছি ${daysTogether} দিন ধরে ❤️`;
}
window.onload = calculateDaysTogether;
