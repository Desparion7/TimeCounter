const settingsBtn = document.querySelector('.settings-btn');
const settings = document.querySelector('.settings');
const imageSection = document.querySelector('.image-section');

const inputName = document.querySelector('#event-name');
const inputDay = document.querySelector('#event-day');
const inputMonth = document.querySelector('#event-month');
const inputYear = document.querySelector('#event-year');
const inputImage = document.querySelector('#event-image');

const daysCount = document.querySelector('.days-count');
const hoursCount = document.querySelector('.hours-count');
const minutesCount = document.querySelector('.minutes-count');
const secondsCount = document.querySelector('.seconds-count');

const saveBtn = document.querySelector('.save');
const eventSpan = document.querySelector('.event');

let usersTime;

const setTime = () => {
	const currentTime = new Date();
	const resault = usersTime - currentTime;
	const days = Math.floor(resault / 1000 / 60 / 60 / 24);
	const hours = Math.floor(resault / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(resault / 1000 / 60) % 60;
	const seconds = Math.floor(resault / 1000) % 60;

	daysCount.textContent = days;
	hoursCount.textContent = hours;
	minutesCount.textContent = minutes;
	secondsCount.textContent = seconds;
};

showSettings = () => {
	settings.classList.toggle('active');
};

const appUpdate = () => {
	eventSpan.textContent = inputName.value;
	imageSection.style.backgroundImage = `url('${inputImage.value}')`;

	usersTime = new Date(
		`${inputMonth.value} ${inputDay.value} ${inputYear.value}`
	);
	setTime();
};

settingsBtn.addEventListener('click', showSettings);
saveBtn.addEventListener('click', appUpdate);

appUpdate();
setInterval(setTime, 1000);
