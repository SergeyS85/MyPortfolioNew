var accordeonContent = document.querySelector(".accordeon_section");
var accordeonContentSSS = document.querySelectorAll(".accordeon_section");

accordeonContent.classList.add("is-open");

for (var i = 0; i < accordeonContentSSS.length; i++) {
	accordeonContentSSS[i].onclick = function (event) {
		removeAndaddClass(addClass);

		function removeAndaddClass(callback) {
			if (event.target.className == "anim_icon" ||
				event.target.className == "accordeon_spanIcon") {
				for (var i = 0; i < accordeonContentSSS.length; i++) {
					accordeonContentSSS[i].classList.remove("is-open")
				}
			} else {
				return;
			}
			callback();
		}

		function addClass() {
			event.target.closest(".accordeon_section")
				.classList.add("is-open");
		}
	};
};