(function() {
	const trigger = document.querySelector(".clip-trigger");
	const bg = document.querySelector(".bg-globe");
	const container = document.querySelector("#page-holiday");
	let zoomed = false;
	let state, videoObj;
	const globeWidthRatio = .2745;
	const orientation = window.innerWidth > window.innerHeight ? "landscape" : "portrait";
	const videoEl = document.querySelector(".video-bg-" + orientation + " .video-bg-embed");

	updateState = (next) => {
		const prev = state;
		state = next;
		switch(next) {
			case "start":
				videoObj = {
					player:new Vimeo.Player(videoEl.id,{
						url:"//vimeo.com/"+videoEl.dataset.videourl+"?background=1&muted=0",
						loop:false,
						background:true,
						muted:false,
						autoplay:false,
						autopause:false
					}),
					video:videoEl
				}

				videoObj.player.on("bufferend",function() {
					this.pause();
					this.off("bufferend");
					updateState("ready");
				})

			  videoObj.player.on('ended', (data) => {
			  	updateState("done");
				})
			case "ready":
			break;
			case "playing":
				if (prev === "ready") {
					const globeHeightRatio = (globeWidthRatio * window.innerWidth)/window.innerHeight;
					if (window.innerHeight > window.innerWidth) {
						bg.style.backgroundSize = 100/globeHeightRatio*1.5 + "vh";
					} else {
						bg.style.backgroundSize = 100/globeWidthRatio*1.5 + "vw";
					}
				}
				videoObj.player.play();
				videoObj.player.setVolume(1);
			break;
			case "done":
			break;
		}
		if (prev) container.classList.remove(prev);
		container.classList.add(next);
	}

	if (container) {

		updateState("start");

		trigger.addEventListener("click",() => {
			if (state !== "start") updateState("playing");
		})

	}

})()