<template>
<main class="profile">
	<h1>Profile</h1>

	<h2>asaco/sacco</h2>

	<div class="profile_img">
		<NuxtImg format="webp" src="/images/ME_p_858x1280.jpg" />
		<p class="potographer">photo by Kaoru Iketani</p>
	</div>

	<div class="profile_txt">
		<p>
			Kyoto, Japan<br>
			A VJ, movie creator and a web/installation engineer specializing in AR (Augmented Reality).<br>
			Performing VJ with TouchDesigner and also experimenting on visual expression with node-based visual programming such as SparkAR, Unity, and cables.
		</p>

		<p>
			VJ、動画クリエイター、 web/インスタレーションエンジニア。得意分野はAR(拡張現実)。<br>
			TouchDesignerを使ったVJ活動とともに、SparkARやUnity、cablesといったノードベースのプログラミングなどを使いARをはじめさまざまな視覚表現を実験中。
		</p>
	</div>

	<div class="profile_links">
		<ul>
			<li>
				<a href="https://www.instagram.com/nomnommorn/" target="_blank">
					<img class="icon" src="/images/icon/IG_icon.svg" alt="Instagram" />
				</a>
			</li>
			<li>
				<a href="https://x.com/nomnommorn" target="_blank">
					<img class="icon" src="/images/icon/x_icon.svg" alt="X" />
				</a>
			</li>
			<li>
				<a href="https://www.youtube.com/@nomnommorn" target="_blank">
					<img class="icon" src="/images/icon/youtube_icon.svg" alt="YouTube" />
				</a>
			</li>
		</ul>
	</div>
</main>
</template>

<script setup lang="ts">
useHead({
    title: 'Profile | asaco\'s Portfolio',
});
</script>

<style lang="scss" scope>
.profile {
	display: inline-block;
	h1 {
		margin: 0 0 20px;
	}
	h2 {
		margin: 0 0 15px;
		&::before{
      content: "";
      padding: 0.8rem;
      margin-right: 0.8rem;
      background-color: $yellow01;
      border-radius: 50px;
      float: left;
    }
	}

	&_img {
		float: left;
		width: 430px;
		@media (max-width: $spwidth) {
			float: unset;
			width: 100%;
			height: auto;
		}
		.potographer {
			margin-top: 5px;
			font-size: 12px;
			color: #929292;
		}
	}
    
	&_txt {
		float: left;
		padding-left: 10px;
		width: calc(100% - 10px - 430px);
		line-height: 1.5;
		@media (max-width: $spwidth) {
			display: block;
			padding-left: 0;
			padding-top: 20px;
			width: 100%;
			float: unset;
		}
		p {
			margin: 0 0 20px;
		}
	}

	&_links {
		float: left;
		height: 30px;
		margin: 20px 0 0;
		padding-left: 10px;
		@media (max-width: $spwidth) {
			float: unset;
			display: block;
			padding-left: 0;
			margin: 20px 0 30px;
		}
			ul{
				margin: 0 auto;
				width: 260px;
				height: 100%;
				display: block;
				@media (max-width: $spwidth) {
					width: fit-content;
				}
				li {
					float: left;
					width: calc((100% / 3) - (15px * 2));
					height: 100%;
					margin: 0 10px 0 0;
					@media (max-width: $spwidth) {
						width: 30px;
						margin: 0 20px 0 0;
					}
					&:last-child {
						margin: 0;
					}
					.icon {
						height: 100%;
						width: auto;
					}
				}
		}
	}
}
</style>