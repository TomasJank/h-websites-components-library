export default {
	computed: {
		getIconColor() {
			const color = this.primary
				? '#673DE6'
				: this.danger
				? '#FC5185'
				: this.disabled
				? '#DADCE0'
				: this.warning
				? '#FFCD35'
				: this.success
				? '#00B090'
				: this.white
				? '#ffffff'
				: this.dark
				? '#1D1E20'
				: 'currentColor';
			return color;
		}
	}
};
