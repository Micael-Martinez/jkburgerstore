const time_picker_element = document.querySelector(".time-picker");

const hr_element = document.querySelector(".hr");
const min_element = document.querySelector(".min");

const hr_up = document.querySelector(".hr-up");
const hr_down = document.querySelector(".hr-down");

const min_up = document.querySelector(".min-up");
const min_down = document.querySelector(".min-down");

let day = new Date();

let hour = day.getHours();
let minute = day.getMinutes();
setTime();

//EVENT LISTENERS
hr_up.addEventListener("click", hour_up);
hr_down.addEventListener("click", hour_down);

min_up.addEventListener("click", minute_up);
min_down.addEventListener("click", minute_down);

hr_element.addEventListener("change", hour_change);
min_element.addEventListener("change", minute_change);

function hour_change(e) {
	if (e.target.value > 23) {
		e.target.value = 23;
	} else if (e.target.value < 0) {
		e.target.value = "00";
	}

	if (e.target.value == "") e.target.value = formatTime(hour);

	hour = e.target.value;
}

function minute_change(e) {
	// if (e.target.value > 59) {
	// 	e.target.value = 59;
	// } else if (e.target.value < 0) {
	// 	e.target.value = "00";
	// }

	if (e.target.value == "") e.target.value = formatTime(minute);

	minute = e.target.value;
}

function hour_up() {
	hour++;
	if (hour > 23) {
		hour = 20;
	}
	setTime();
}
function hour_down() {
	hour--;
	if (hour < 20) {
		hour = 23;
	}
	setTime();
}

function minute_up() {
	if (minute >= 30) {
		minute = 0;
		hour++;
		if (hour > 23) {
			hour = 23;
			minute = 0;
		}
	} else if (0 <= minute < 30) {
		minute = 30;
	}
	if ((hour === 23) & (minute === 30)) {
		hour = 23;
		minute = 0;
	}
	setTime();
}
function minute_down() {
	if (minute === 0) {
		minute = 30;
		hour--;
		if (hour < 20) {
			hour = 20;
			minute = 0;
		}
	} else if (minute > 30) {
		minute = 30;
	} else if (0 < minute <= 30) {
		minute = 0;
		console.log(minute);
	}

	// if (minute > 30) {
	// 	minute = 30;
	// } else if (0 < minute <= 30) {
	// 	minute = 0;
	// }
	setTime();
}

function setTime() {
	hr_element.value = formatTime(hour);
	min_element.value = formatTime(minute);
	time_picker_element.dataset.time = formatTime(hour) + ":" + formatTime(minute);
}

function formatTime(time) {
	if (time < 10) {
		time = "0" + time;
	}
	return time;
}
