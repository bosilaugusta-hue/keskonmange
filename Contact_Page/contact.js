// ===== SCROLL FADE-IN =====
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
			}
		});
	},
	{ threshold: 0.15 },
);

document
	.querySelectorAll(".carte-temoignage, .contact, .banniere, .avisclients h2")
	.forEach((el) => observer.observe(el));

// ===== COMPTEUR DE CARACTÈRES =====
const textarea = document.querySelector(".secondcontact textarea");
const counter = document.createElement("span");
counter.classList.add("char-counter");
counter.textContent = "0 / 500";
textarea.insertAdjacentElement("afterend", counter);

textarea.addEventListener("input", () => {
	const length = textarea.value.length;
	counter.textContent = `${length} / 500`;
	counter.style.color = length > 450 ? "#d96c06" : "#4a6a96";
	if (length > 500) {
		textarea.value = textarea.value.substring(0, 500);
	}
});

// ===== VALIDATION DU FORMULAIRE =====
const form = document.querySelector(".secondcontact form");

const rules = {
	'input[type="text"]': {
		test: (val) => val.trim().length >= 2,
		message: "Le nom doit contenir au moins 2 caractères",
	},
	'input[type="email"]': {
		test: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
		message: "L'email n'est pas valide",
	},
	'input[type="tel"]': {
		test: (val) => /^[\d\s+\-().]{10,}$/.test(val),
		message: "Le téléphone n'est pas valide",
	},
	textarea: {
		test: (val) => val.trim().length >= 10,
		message: "Le message doit contenir au moins 10 caractères",
	},
};

function showError(input, message) {
	clearError(input);
	input.style.borderColor = "#e53e3e";
	const error = document.createElement("span");
	error.classList.add("error-message");
	error.textContent = message;
	input.insertAdjacentElement("afterend", error);
}

function showSuccess(input) {
	clearError(input);
	input.style.borderColor = "#38a169";
}

function clearError(input) {
	input.style.borderColor = "";
	const next = input.nextElementSibling;
	if (next && next.classList.contains("error-message")) next.remove();
}

// Validation en temps réel
Object.entries(rules).forEach(([selector, rule]) => {
	const input = form.querySelector(selector);
	if (!input) return;
	input.addEventListener("blur", () => {
		rule.test(input.value)
			? showSuccess(input)
			: showError(input, rule.message);
	});
	input.addEventListener("input", () => {
		if (input.style.borderColor === "rgb(229, 62, 62)") {
			rule.test(input.value) ? showSuccess(input) : null;
		}
	});
});

// ===== NOTIFICATION D'ENVOI =====
const notification = document.createElement("div");
notification.classList.add("notification");
notification.textContent = "✅ Message envoyé avec succès !";
document.body.appendChild(notification);

form.addEventListener("submit", (e) => {
	e.preventDefault();

	// Vérifie tous les champs avant d'envoyer
	let isValid = true;
	Object.entries(rules).forEach(([selector, rule]) => {
		const input = form.querySelector(selector);
		if (!input) return;
		if (!rule.test(input.value)) {
			showError(input, rule.message);
			isValid = false;
		}
	});

	if (!isValid) return;

	// Affiche la notification
	notification.classList.add("show");
	setTimeout(() => notification.classList.remove("show"), 3500);
	form.reset();
	document
		.querySelectorAll(".secondcontact input, .secondcontact textarea")
		.forEach((el) => (el.style.borderColor = ""));
	counter.textContent = "0 / 500";
});
