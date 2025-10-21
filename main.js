const timeEl = document.getElementById("userTime");

const updateTime = () => {
	timeEl.textContent = Date.now();
}

updateTime();

setInterval(updateTime, 1000);

