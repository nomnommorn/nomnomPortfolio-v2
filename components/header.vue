<template>
    <header>
      <div id="menuwrap">
        <h1 id="sitetitle">
          <a href="/">nomnommorn</a>
        </h1>
        <div id="menuarea">
          <ul v-show="open" id="menu">
              <li>
                <a href="/">
                  Top 
                </a>
              </li>        
            <li>
              <a href="/profile">
                Profile 
              </a>
            </li>
            <li>
              <a href="/works">
                Works
              </a>
            </li>
            <li>
              <a href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <button :class="{open}" class="btn_wrap" @click="toggle">
            <svg class="btn_arw" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve">
              <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 "/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  </template>
  
<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);

const toggle = () => {
  open.value = !open.value
}
</script>

<style lang="scss" scope>
    header {
      position: fixed;
      display: inline-block;
      background-color: #85DEEE;
      width: 100vw;
      height: 185px;
      z-index: 11;
      top: 0;
      left: 0;
      @media (max-width: $spwidth) {
        height: 140px;
      }
    #menuwrap {
      display: inline-block;
      width: 100%;
      height: 100%;
      #sitetitle {
        display: block;
        font-family: Sarina, cursive;
        font-size: 5.3rem;
        color: #EFEECE;
        margin: 20px auto 0;
        width: fit-content;
        height: 75px;
        @media (max-width: $spwidth) {
          font-size: 2rem;
          height: 50px;
          margin: 30px auto 0;
        }
      }
      #menuarea {
        display: block;
        margin: 25px auto;
        padding: 0;
        color: #EFEECE;
        font-weight: 800;
        font-family: 'Space Grotesk', 'Noto Sans JP', sans-serif;
        font-size: 24px;
        height: auto;
        max-height: 70px;
        width: 100%;
        text-align: center;
        z-index: 100;
        cursor: pointer;
        @media (max-width: $spwidth) {
          font-size: 1rem;
          margin: 0 auto;
        }
        .btn_wrap {
          display: block;
          margin: 0 auto;
          width: 30px;
          height: 30px;
          background: transparent;
          border: none;
          transition: all .3s;
          .btn_arw {
            height: 100%;
            fill: #fff;
            cursor: pointer;
          }
        }
        .open {
          animation: arrowchange .3s;
          animation-fill-mode: both;
        }
        @keyframes arrowchange {
          0% {
              transform: rotate(0deg);
          }
          100% {
              transform: rotate(180deg) translateX(-10px);
          }
        }
        #menu {
          width: fit-content;
          margin: 0 auto;
          padding: 0;
          @media (max-width: $spwidth) {
            margin: 0 auto 5px;
          }
          li {
            list-style: none;
            display: inline-block;
            margin-left: 75px;
            @media (max-width: $spwidth) {
              margin-left: 20px;
            }
          }
          li:first-child {
            margin-left: 0;
          }
        }
      }
    }
  }
</style>