const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegree = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegree}deg)`;


	const minutes = now.getMinutes();
	const minsDegree = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
	minsHand.style.transform = `rotate(${minsDegree}deg)`;
	console.log(minutes);

	const hour = now.getMinutes();
	const hourDegree = ((minutes / 12) * 360) + ((minutes/60)*30) + 90;
	hourHand.style.transform = `rotate(${hourDegree}deg)`;

}

setInterval(setDate, 1000);

setDate();

