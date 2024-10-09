(() => {

	function postAjax(url, data, callback) {

		var params = typeof data == 'string' ? data : Object.keys(data).map(
            function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
        ).join('&');


	    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	    xhr.open('POST', url, true);
	    xhr.onreadystatechange = function() {
	        callback(xhr.responseText);
	    };
	    xhr.setRequestHeader('Accept',
          'application/xml, text/xml, */*; q=0.01');
      	xhr.setRequestHeader('Content-type',
          'application/x-www-form-urlencoded; charset=UTF-8');
	    xhr.send(params);
	    return xhr;
	}


	const form = document.querySelector("#form-contact");

	form.addEventListener("validationfailed", ()=> {
		const paneContact = document.querySelector("#pane-contact");
		let popup = document.createElement("div");
		popup.classList.add("notification");
		popup.classList.add("notification-popup");
		popup.innerText = "Please fill out all form fields.";
		paneContact.appendChild(popup);
		setTimeout(() => {
			paneContact.removeChild(popup);
		},3000);
	})


	form.addEventListener("submit",(e)=> {
		e.preventDefault();
		e.stopPropagation();
		const fields = form.querySelectorAll("input,select,textarea");
		let data = {};
		let valid = true;
		for (let field of fields) {
			if (field.validity.valid) {
				data[field.name] = field.value;
			} else {
				valid = false;
			}
		}
		const formURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfMn1MJ_tOHUw6pZg9dBqsv9vS9KINcvUA-O9v1mwa8EGSpTg/formResponse";
		if (valid) {
			postAjax(formURL,data, function(res){ });
			form.dispatchEvent(new CustomEvent("ajaxsubmit", {}));
			form.classList.remove("validated");
			for (let field of fields) {
				field.value = "";
			}
		} else {
			form.classList.add("validated");
			form.dispatchEvent(new CustomEvent("validationfailed", {}));
		}

		return false;
	})

	const submit = document.querySelector(".spinner-contactform");
	submit.addEventListener("click",() => {
		form.dispatchEvent(new Event("submit"));
	})
})()