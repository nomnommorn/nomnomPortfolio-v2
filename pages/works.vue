<template>
  <main class="works">
    <h1>Works</h1>
    <ul id="works_list">
      <ContentList path="/works" :query="query" v-slot="{ list }">
        <li v-for="article in list" :key="article._path">
          <NuxtLink :to="article._path">
            <NuxtImg class="works_img" format="webp" :src="article.mainimg" />
            <h2>{{ article.title }}</h2>
            <p class="works_date"><NuxtTime :datetime="article.date" year="numeric" month="short" day="numeric" /></p>
            <p class="works_tag" v-for="tag in article.tags" :key="tag">{{ tag }}</p>
          </NuxtLink>
        </li>
      </ContentList>
    </ul>
  </main>
</template>

<script setup lang="ts">
useHead({
    title: 'Works | asaco\'s Portfolio',
});

const route = useRoute();
const query = {
    path: route.params.category,
    sort:[{date:-1}],
}

</script>

<style lang="scss" scope>
.works {
  padding: 30px 20px;
  h1 {
    margin: 0 0 20px;
  }
  #works_list {
    margin: 0 auto;
    width: 95%;
    list-style: none;
    padding: 0;
    li {
      float: left;
      width: 30%;
      margin-right: 4%;
      margin-bottom: 7%;
      @media (max-width: $spwidth) {
        float: unset;
        width: 100%;
        margin-right: 5%;
        margin-bottom: 5%;
        height: 250px;
      }
      a {
        width: 100%;
        height: 100%;
        display: block;
        .works_img {
          background: $mizuiro01;
          width: 100%;
          height: 217px;
          text-align: center;
          object-fit: contain;
          @media (max-width: $spwidth) {
            height: 120px;
          }
        }
        h2 {
          font-size: 20px;
          font-weight: 700;
          margin: 10px 0;
          @media (max-width: $spwidth) {
            font-size: 1rem;
            overflow-wrap: break-word;
            line-height: 1.1rem;
          }
        }
        p {
          font-family: Space Grotesk,sans-serif;
          width: fit-content;
          padding: 5px 0;
          font-size: 0.8rem;
        }
        .works_date{
          display: inline-block;
          padding-right: 20px;
          font-weight: 600;
        }
        .works_tag {
          display: inline-block;
          font-weight: 600;
          background-color: $mizuiro01;
          border-radius: 150px;
          padding: 5px;
          margin-right: 7px;
          &::before {
            content:"#";
            float: left;
          }
        }
      }
      &:nth-child(3n){
        margin-right: 0;
        @media (max-width: $spwidth) {
          margin-right: 5%;
        }
      }
      &:nth-child(2n){
        @media (max-width: $spwidth) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>