<template>
	<component
		:is="getMediaType"
		:src="src"
		:srcset="src2x && `${src2x} 2x, ${src} 1x`"
		:src-placeholder="lqip"
		:poster="poster"
		:video="video"
		:alt="alt"
		class="w-100"
	/>
</template>

<script>
import imageComponent from '@/components/partials/media-templates/Image';
import videoComponent from '@/components/partials/media-templates/Video';

export default {
	components: { imageComponent, videoComponent },
	props: {
		src: String,
		src2x: String,
		lqip: String,
		poster: String,
		video: String,
		alt: String,
		image: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		getMediaType() {
			return this.video ? 'video-component' : 'image-component';
		}
	}
};
</script>
