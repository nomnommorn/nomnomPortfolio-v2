<template>
<div class="profile">
    <h1>Profile</h1>

    <h2>asaco/sacco</h2>

    <NuxtImg class="profile_img" format="webp" src="../public/images/ME_p_858x1280.jpg" />

    <div class="profile_txt">
        <p>
            Kyoto, Japan<br>
            A technical director and a web/installation engineer specializing in AR (Augmented Reality).<br>
            Performing VJ with TouchDesigner and also experimenting on visual expression with node-based visual programming such as SparkAR, Unity, and cables.
        </p>

        <p>
            テクニカルディレクター, web/インスタレーションエンジニア。得意分野はAR(拡張現実)。<br>
            TouchDesignerを使ったVJ活動とともに、SparkARやUnity、cablesといったノードベースのプログラミングなどを使いARをはじめさまざまな視覚表現を実験中。
        </p>
    </div>
</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scope>
.profile {
    &_img {
        float: left;
        @media (max-width: $spwidth) {
            float: unset;
            width: 100%;
            height: auto;
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
        }
    }
}
</style>