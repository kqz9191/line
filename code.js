function updateDayCounter() {
    let today = new Date();
    let startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()); // Start of current day

    let diffInMs = today.getTime() - startDate.getTime();
    let diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24)) + 1;

    document.getElementById('dayCounter').textContent = `Люблю Лину: День ${diffInDays}`;
}