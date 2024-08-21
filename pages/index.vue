<template>
	<div class="top">
		<div id="geo">
        <canvas id="glcanvas" tabindex="1"></canvas>
        <libs/>
        <corelibs/>
    </div>
	</div>
</template>

<script setup lang="ts">
useHead({
    title: 'asaco\'s Portfolio',
		script: [
      {
        type: "text/javascript",
        innerHTML: `document.getElementById('glcanvas').addEventListener('touchmove', (e)=>{ e.preventDefault(); }, false);
				function patchInitialized(patch) {
						// You can now access the patch object (patch), register variable watchers and so on
				}

				function patchFinishedLoading(patch) {
						// The patch is ready now, all assets have been loaded
				}

				document.addEventListener('CABLES.jsLoaded', function (event) {
						CABLES.patch = new CABLES.Patch({
								patch: CABLES.exportedPatch,
								"prefixAssetPath": "",
								"glCanvasId": "glcanvas",
								"glCanvasResizeToWindow": true,
								"onPatchLoaded": patchInitialized,
								"onFinishedLoading": patchFinishedLoading,
								// "canvas":{"alpha":true,"premultipliedAlpha":true} // make canvas transparent
						});
				});`,
				tagPosition: 'bodyClose'
      },
			{
				type: "text/javascript",
				src: "/script/cables/patch.js",
				tagPosition: 'head'
			}
		]
});

</script>

<style lang="scss" scope>
.top {
	height: 100%;
	#geo {
		height: 100%;
	}
}
</style>