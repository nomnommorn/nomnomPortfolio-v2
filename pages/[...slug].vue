<template>
  <article class="works-detail">
    <ContentDoc v-slot="{ doc: page }">
      <h1>{{ page.title }}</h1>
      <div class="works_txt">
        <div class="works_imgs">
          <NuxtImg class="works_imgs-el" v-for="img in page.imgs" :key="img" :src="img" />
        </div>
        <ContentRenderer :key="page._id" :value="page"></ContentRenderer>
        <p class="datatxt works_date">{{ page.date }}</p>
        <p class="datatxt works_tag" v-for="tag in page.tags" :key="tag">{{ tag }}</p>
      </div>
    </ContentDoc>
  </article>
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
      background-color: #EFEECE;
      border-radius: 50px;
      float: left;
    }
  }
  iframe {
    display: block;
    margin: 30px auto;
    width: 70%;
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
          color:#85DEEE;
          text-decoration: underline;
          &:hover{
            color: #EFEECE;
          }
      }
      p{
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }
    &_imgs {
      width: fit-content;
      max-width: 800px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      column-gap: 10px;
      &-el {
        display: inline-block;
        @media (max-width: $spwidth) {
          width: 100%;
        }
      }
    }
    &_date{
      padding-right: 50px;
    }
    &_tag {
      &::before {
        content:"#";
        float: left;
      }
      &:not(:last-child) {
        &::after {
          content:",";
          display: inline-block;
          margin-right: 5px;
        }
      }
    }
  }
  .datatxt{
    margin: 2rem auto;
    font-weight: 800;
    font-family: Space Grotesk,sans-serif;
    display: inline-block;
  }
}
</style>
