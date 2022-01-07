export default {
	methods: {
		toggleBodyClass(addRemoveClass, className) {
			const el = document.body;
			addRemoveClass
				? el.classList.add(className)
				: el.classList.remove(className);
		}
	}
};
