<template>
	<div
		:id="id"
		v-click-outside="close"
		class="custom-select p-0"
		:class="{ 'cursor-pointer': !disabled }"
	>
		<div
			class="selected pl-16 d-flex"
			@click="showOptions()"
			@blur="open = false"
		>
			{{ selected.text }}
		</div>
		<div v-if="open" class="items position-absolute" @blur="open = false">
			<div
				v-for="option of options"
				:key="option.value"
				class="item cursor-pointer z-index-1"
				@click="selectOption(option)"
				@blur="open = false"
			>
				{{ option.text }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		id: { type: String },
		disabled: Boolean,
		options: {
			type: Array,
			required: true
		},
		default: {
			type: String,
			required: false
		}
	},
	data() {
		return {
			selected: this.default ? this.default : this.options[0],
			open: false
		};
	},
	methods: {
		close() {
			this.open = false;
		},
		showOptions() {
			if (!this.disabled) {
				this.open = !this.open;
			}
		},
		selectOption(option) {
			this.selected = option;
			this.open = false;
			this.$emit('input', option.value);
		}
	}
};
</script>
