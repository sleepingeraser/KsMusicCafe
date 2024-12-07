document.addEventListener("DOMContentLoaded", function () {
  const timeSelect = document.getElementById("table-time");

  function generateTimeSlots(startHour, endHour) {
    const slots = [];
    const startTime = new Date();
    startTime.setHours(startHour, 0, 0, 0);

    const endTime = new Date();
    endTime.setHours(endHour, 0, 0, 0);
    if (endHour < startHour) {
      endTime.setDate(endTime.getDate() + 1);
    }

    while (startTime <= endTime) {
      const hours = startTime.getHours().toString().padStart(2, "0");
      const minutes = startTime.getMinutes().toString().padStart(2, "0");
      slots.push(`${hours}:${minutes}`);
      startTime.setMinutes(startTime.getMinutes() + 30);
    }
    return slots;
  }

  const timeSlots = generateTimeSlots(10, 5);
  timeSlots.forEach((slot) => {
    const option = document.createElement("option");
    option.value = slot;
    option.textContent = slot;
    timeSelect.appendChild(option);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  generateTimeSlots(10, 5, 30);
});

document
  .getElementById("booking-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("success-popup").style.display = "flex";

    document.getElementById("booking-form").reset();
  });

document.getElementById("close-popup").addEventListener("click", function () {
  document.getElementById("success-popup").style.display = "none";
});
