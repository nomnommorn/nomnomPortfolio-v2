<template>
  <Header />
    <div class="contentswrap">
      <div class="inside"> 
        <NuxtPage />
      </div>
      <div id="corner_TR"></div>
      <div id="corner_BR"></div>
    </div>
  <Footer />
</template>

<style>
.contentswrap {
  display: block;
  top: 0;
  right: 0;
  position: absolute;
  margin: 0 auto;
  width: 100%;
  height: calc(100% - 30px);
  padding: 185px 50px 0;
  @media (max-width: 600px) {
    padding: 140px 50px 0;
  }
  .inside {
    position: relative;
    background-color: #fff;
    height: 100%;
    padding: 30px 20px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none; 
    &::-webkit-scrollbar {
      display:none;
    }
  }
}
</style>

<script setup lang="ts">
useHead({
  title: 'asaco\'s Portfolio',
  meta: [
    { name: 'description',
      content: 'asaco\'s portfolio page introducing the works and skills.' },
    { charset: 'UTF-8' },
    { name: 'viewport',
      content: 'width=device-width, initial-scale=1.0' },
    { property: "og:type", content: "website" },
    {
      property: 'og:title',
      content: 'asaco\'s Portfolio',
    },
    { property: 'og:url', content: 'https://nomnommorn.xyz/' },
    { property: 'og:locale', content: 'ja_JP' },
    { property: 'og:site_name', content: 'asaco\'s Portfolio' },
    {
      property: 'og:description',
      content:
        'This is asaco\'s portfolio page. asacoのポートフォリオページです。',
    },
    {
      property: 'og:image',
      content: 'https://nomnommorn.xyz/images/asaco-pf.png',
    },
  ]
})
</script>