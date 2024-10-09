(() => {

	const initializeApp = () => {
		const isMobile = window.innerWidth <= 768 || window.innerHeight < 600;

		view = {
			panes:document.querySelectorAll(".pane"),
			videos:[],
			body:document.querySelector("body"),
			loading:document.querySelector("#overlay-loading"),
			initialized:false,
			oInitialized:false,
			waypointNav: {
				el: document.querySelector("#site-nav-waypoint"),
				setWaypoint: (pane,p) => {
					p++;
					if (p < 10) p = "0"+p;
					view.waypointNav.el.innerHTML = pane.dataset.waypoint+" &mdash; <strong>"+p+"</strong>";
					if (isMobile) {
						view.waypointNav.el.style.opacity = (pane.id == "pane-contact" || pane.id == "pane-hero") ? 0 : 1;
					}
				}
			},
			setPane: (pane,p) => {
				view.waypointNav.setWaypoint(pane,p);
				view.setContrast(pane);
				view.setTermsVisibility(pane);
				view.setBrandingVisibility(pane);
				view.setReadMoreVisibility(pane);
				view.setContactBugVisibility(pane);
			},
			setInitialized: () => {
				view.initialized = true;
				view.loading.classList.remove("active");
				window.addEventListener("resize",() => {
					fullpage_api.reBuild()
				});
				window.addEventListener("orientationchange",() => {
					fullpage_api.reBuild()
				});
			},
			setContrast: (pane) => {
				const bg = pane.dataset.bg;
				switch (bg) {
					case "red":
					case "redwhite":
					case "redblue":
						view.body.classList.add("contrast");
						view.body.classList.remove("contrast-dark");
						view.body.classList.remove("contrast-light");
						if (bg == "redwhite") {
							view.body.classList.add("contrast-light-bottom");
						} else {
							view.body.classList.remove("contrast-light-bottom");
						}
						if (bg == "redblue") {
							view.body.classList.add("contrast-dark-bottom");
						} else {
							view.body.classList.remove("contrast-dark-bottom");
						}
					break;
					case "blue":
						view.body.classList.remove("contrast");
						view.body.classList.add("contrast-dark");
						view.body.classList.remove("contrast-light");
						view.body.classList.remove("contrast-light-bottom");
					break;
					case "white":
						view.body.classList.remove("contrast");
						view.body.classList.remove("contrast-dark");
						view.body.classList.add("contrast-light");
						view.body.classList.remove("contrast-light-bottom");
					break;
					default:
						view.body.classList.remove("contrast");
						view.body.classList.remove("contrast-dark");
						view.body.classList.remove("contrast-light");
						view.body.classList.remove("contrast-light-bottom");
					break;
					break;
				}
			},
			setBrandingVisibility: (pane) => {
				const id = pane.id;
				switch (id) {
					case "pane-hero":
						view.body.classList.add("branding-hide");
					break;
					default:
						view.body.classList.remove("branding-hide");
					break;
				}
			},
			setTermsVisibility: (pane) => {
				const id = pane.id;
				switch (id) {
					case "pane-contact":
						view.body.classList.remove("terms-hide");
					break;
					default:
						view.body.classList.add("terms-hide");
					break;
				}
			},
			setReadMoreVisibility: (pane) => {
				const id = pane.id;
				switch (id) {
					case "pane-hero":
						view.body.classList.remove("read-more-hide");
						const scribble = view.body.querySelector('#intro-read-more').querySelector('.scribble');
						if (scribble && scribble.src.indexOf('blank') !== -1) scribble.src = scribble.dataset.src;
					break;
					default:
						view.body.classList.add("read-more-hide");
					break;
				}
			},
			setContactBugVisibility: (pane) => {
				const id = pane.id;
				switch (id) {
					case "pane-contact":
					case "pane-contactform":
						view.body.classList.add("contact-hide");
					break;
					default:
						view.body.classList.remove("contact-hide");
					break;
				}
			},
			setScribbleVisibility: (pane) => {
				const scribble = pane.querySelector('.scribble');
				if (scribble && scribble.src.indexOf('blank') !== -1) scribble.src = scribble.dataset.src;
			},
			initVideos: () => {
				view.panes.forEach((pane,p) => {
					const videos = pane.querySelectorAll(".video-bg-embed");
					videos.forEach(video => {
						if (window.getComputedStyle(video.parentElement).display !== "none") {
							const videoObj = {
								player:new Vimeo.Player(video.id,{
									url:"//vimeo.com/"+video.dataset.videourl+"?background=1&autoplay=0",
									loop:true,
									background:true,
									autoplay:false,
									autopause:false
								}),
								video:video,
								pane:pane
							}
							videoObj.player.on("loaded",function() {
								if (fullpage_api.getActiveSection().index !== p) this.pause();
								this.off("loaded");
							})
							view.videos[p] = videoObj;
						}
					})
				})
			}
		}

		function wipeTransition(container,child,silent) {
			container.removeChild(child);
			const activeChild = container.querySelector(".active");
			container.appendChild(child);
			setTimeout(() => {
				if (activeChild) activeChild.classList.remove("active");
				child.classList.add("active");
				if (silent) {
					// child.addEventListener("transitionend",() => {
					// 	fullpage_api.reBuild();
					// })
				} else {
					setTimeout(() => {
						setWipeContainerHeight(container,child);
					},500);
				}
			},100);
			
		}

		function initClientPanels() {
			// if (isMobile) {
			// 	view.panes.forEach(p => {
			// 		if (p.classList.contains('pane-clients')) p.classList.add("fp-auto-height");
			// 	})
			// }
		}

		function initWipeContainers() {
			document.querySelectorAll(".wipe-container").forEach(container => {
				container.children[1].classList.add("active");
				setWipeContainerHeight(container,container.children[1]);
			})
		}

		function initScribbles() {
			document.querySelectorAll(".scribble").forEach(scribble => {
				scribble.dataset.src = scribble.src;
				scribble.src = "/media/blank.png";
			});
		}

		let fp_instance;
		let fpIsResponsive = false;

		function setWipeContainerHeight(container,child) {
			container.style.height = child.querySelector(".row").scrollHeight+"px";
			container.addEventListener("transitionend",() => {
				if (fullpage_api) {
					//fullpage_api.reBuild();
				}
			})
		}

		function setTypeSize() {
			for (let pane of document.querySelectorAll(".pane")) {
				if (!isMobile || pane.id == "pane-hero" || pane.id == "pane-clientscover") {
					for (let container of pane.querySelectorAll(".container > .row")) {
						let fontSize = 1;
						if (pane.classList.contains("pane-clients")) {
							if (container.scrollHeight > window.innerHeight) pane.classList.add("reduced");
							while (fontSize > .25 && container.scrollHeight > window.innerHeight) {
								fontSize -= .05;
								pane.style.fontSize = fontSize+"em";
							}
						} else if (pane.id !== "pane-clientscover") {
							const style = window.getComputedStyle(container, null);
							const padding = parseInt(style.getPropertyValue('padding-top')) + parseInt(style.getPropertyValue('padding-bottom'));
							let outerHeight = container.children[0].offsetHeight + padding;
							if (outerHeight > window.innerHeight) pane.classList.add("reduced");
							while (fontSize > .25 && outerHeight > window.innerHeight) {
								fontSize -= .05;
								container.parentElement.style.fontSize = fontSize+"em";
								outerHeight = container.children[0].offsetHeight + padding;
							}
						}
					}
				}
			}
		}

		const handleEnterBigContainer = () => {
			fullpage_api.setFitToSection(false);
			fullpage_api.setAutoScrolling(false);
		}

		const handleLeaveBigContainer = () => {
			setTimeout(() => {
				fullpage_api.setFitToSection(true);
				setTimeout(() => {
					fullpage_api.setAutoScrolling(true);
				},1000);
			},101);
		}
			
		setTypeSize();

		initClientPanels();
		initWipeContainers();
		initScribbles();

		fp_instance = new fullpage('#page-content', {
			fixedElements: "#page-utility, .overlay",
			//bigSectionsDestination: 'top',
			//v2compatible: true,
			licenseKey:"L4G7H-M1OUH-75JKK-40HL8-TLVPO",
			sectionSelector: '.pane',
			easingcss3:'cubic-bezier(.86,.01,.45,.99)',
			//easing:'cubic-bezier(.86,.01,.45,.99)',
			autoScrolling:true,
			scrollOverflow:true,
			anchorScroll:false,
			scrollBar:true,
			fitToSection:true,
			fitToSectionDelay:100,
			css3: true,
	    scrollingSpeed: 1000,
	    responsiveHeight: 599,
	    responsiveWidth: 767,
			afterLoad: (origin, destination, direction) => {
				const pane = destination.item;
				if (!view.initialized) {
					setTimeout(() => {
						view.setPane(pane,destination.index);
						setTypeSize();
						initWipeContainers();
						view.initVideos();
						view.setInitialized();
						//One more for insurance since sometimes grid elements are returning the incorrect height
						setTypeSize();
					},250);
				}
				if (pane.id == "pane-clientscover") {
					if (pane.querySelector(".container-clientscover.active")) {
						setTimeout(() => {
							wipeTransition(pane.querySelector(".wipe-container"),pane.querySelector(".container-clients"));
						},250);
					}
				} else if (pane.id == "pane-about") {
					setTimeout(() => {
						pane.classList.add("show-spinner");
					},250);
				} else if (pane.id == "pane-contact" && !view.oInitialized) {
						view.oInitialized = true;

				    const ctrl = new oController();
				    const numOs = 20;

				    setInterval(() => {
				      ctrl.addO();
				    },2000);
				}
				setTimeout(() => {
					view.setScribbleVisibility(pane);
				},250);
				const video = view.videos[destination.index];
				if (video) video.player.play();
			},
			onLeave: (origin, destination, direction) => {
				const pane = destination.item;
				const prevPane = origin.item;
				if (prevPane.id == "pane-contact") {
					wipeTransition(wipeContainer,containerContactMain,true);
					toggleContactForm(false);
				} 
				if (fpIsResponsive) {
					const opts = fullpage_api.getFullpageData();
					if (pane.classList.contains("pane-clients") || pane.id == "pane-hero") {
						if (opts.options.fitToSection == false) handleLeaveBigContainer();
					} else {
						if (opts.options.fitToSection == true) handleEnterBigContainer();
					}
				} else {
					if (prevPane.id == "pane-clientscover") {
						handleLeaveBigContainer();
					}
					if (pane.id == "pane-clientscover") {
						handleEnterBigContainer();
					}
				}
				view.setPane(pane,destination.index);
				const video = view.videos[origin.index];
				if (video) video.player.pause();
			},
			afterResponsive: function(isResponsive){
				fpIsResponsive = isResponsive;
		    if (isResponsive) { 
		      fullpage_api.setAutoScrolling(false);
		      fullpage_api.setFitToSection(false);
		    }
		  }
		})

		const paneContact = document.querySelector("#pane-contact"); 
		const wipeContainer = paneContact.querySelector(".wipe-container"); 
		const containerContactMain = paneContact.querySelectorAll(".container")[1]; 
		const containerContactForm = paneContact.querySelectorAll(".container")[0]; 

		function toggleContactForm(show) {
			if (show) {
				wipeTransition(wipeContainer,containerContactForm);
				view.setContrast({
					dataset: {
						bg:"redwhite"
					}
				})
				document.body.classList.add("contactform-close-show");
			} else {
				wipeTransition(wipeContainer,containerContactMain);
				view.setContrast({
					dataset: {
						bg:"blue"
					}
				})
				document.body.classList.remove("contactform-close-show");
			}
		}

		containerContactMain.querySelector(".spinner").addEventListener("click",() => {
			toggleContactForm(true);
		})

		containerContactForm.querySelector("#form-contact").addEventListener("ajaxsubmit",() => {
			let popup = document.createElement("div");
			popup.classList.add("notification");
			popup.classList.add("notification-popup");
			popup.innerText = "Thanks! Someone will get in touch soon.";
			paneContact.appendChild(popup);
			setTimeout(() => {
				paneContact.removeChild(popup);
				toggleContactForm(false);
			},3000);
		})

		document.querySelector("#contactform-close").addEventListener("click",() => {
			toggleContactForm(false);
		})

		//Textarea resize

		function OnInput() {
		  this.style.height = 'auto';
		  this.style.height = (this.scrollHeight) + 'px';
		}

		var tx = document.getElementsByTagName('textarea');
		for (var i = 0; i < tx.length; i++) {
		  tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
		  tx[i].addEventListener("input", OnInput, false);
		}

		if ("serviceWorker" in navigator) {
		    if (!navigator.serviceWorker.controller) {
		      // Register the service worker
		      navigator.serviceWorker
		        .register("./serviceworker.js", {
		          scope: "./"
		        })
		    }
		}

	}

	initializeApp();

})()