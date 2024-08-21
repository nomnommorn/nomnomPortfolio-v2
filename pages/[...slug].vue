<template>
  <main class="works-detail">
    <ContentDoc v-slot="{ doc: page }">
      <h1>{{ page.title }}</h1>

      <NuxtImg class="works_mainimg" :src="page.mainimg" />
      
      <ul class="works_imgs">
        <li class="works_imgs-el" v-for="img in page.imgs" :key="img">
          <NuxtImg :src="img" />
        </li>
      </ul>

    <div class="works_txt">
      <ContentRenderer :key="page._id" :value="page"></ContentRenderer>
      <div class="works_data">
        <p class="datatxt works_date"><NuxtTime :datetime="page.date" year="numeric" month="short" day="numeric" /></p>
        <p class="datatxt works_tag" v-for="tag in page.tags" :key="tag">{{ tag }}</p>
      </div>
    </div>
    </ContentDoc>
  </main>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scope>
.works-detail {
  h1 {
    font-size: 1.6em;
    margin: 0 0 20px;
    &::before{
      content: "";
      padding: 0.8rem;
      margin-right: 0.8rem;
      background-color: $yellow01;
      border-radius: 50px;
      float: left;
    }
  }
  iframe {
    display: block;
    margin: 30px auto;
    width: 100%;
    height: 60vh;
    @media (max-width: $spwidth) {
      height: auto;
      width: 100%;
      margin: 20px auto;
    }
  }
  .works {
    &_txt {
      display: block;
      margin: 30px auto;
      width: 70%;
      @media (max-width: $spwidth) {
        width: 95%;
      }
      a {
          color:$mizuiro01;
          text-decoration: underline;
          &:hover{
            color: $yellow01;
          }
      }
      p{
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }

    &_mainimg {
      display: block;
      width: 70%;
      margin: 20px auto 80px;
      @media (max-width: $spwidth) {
        width: 100%;
      }
    }

    &_imgs {
      width: 70%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      @media (max-width: $spwidth) {
        width: 100%;
        display: block;
      }
      &-el {
        flex: 1;
        width: 100%;
        @media (max-width: $spwidth) {
          width: 100%;
          display: block;
        }
      }
    }
    &_data {
      margin: 50px auto 0;
    }
    &_date{
      padding-right: 50px;
      @media (max-width: $spwidth) {
        width: 100%;
        display: block;
      }
    }
    &_tag {
      background-color: $mizuiro01;
      border-radius: 150px;
      padding: 7px;
      margin-right: 7px;
      &::before {
        content:"#";
        float: left;
      }
    }
  }
  .datatxt{
    font-weight: 800;
    font-family: Space Grotesk, sans-serif;
    display: inline-block;
  }
}
</style>
