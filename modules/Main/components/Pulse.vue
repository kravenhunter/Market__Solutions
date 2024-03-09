<script setup lang="ts">
interface IProps {
  title: string;
  image: string;
}

defineProps<IProps>();
</script>

<template>
  <div class="index">
    <div class="lines">
      <div class="one_line"></div>
      <div class="two_line"></div>
      <div class="three_line"></div>
      <div class="for_line"></div>
      <div class="five_line"></div>
      <div class="pulse">
        <!--   <img src="favicon.ico" /> -->
        <NuxtImg :src="image" :alt="title" />
      </div>
    </div>
  </div>
</template>

<style scope lang="scss">
.index {
  display: grid;

  justify-items: center;
  align-items: start;
  position: relative;
  & .lines {
    width: min(100%, 450px);
    position: relative;
    display: grid;
    align-items: center;
    justify-items: center;
    & .one_line,
    & .two_line,
    & .three_line,
    & .for_line,
    & .five_line {
      position: absolute;
      border: 2px solid #dbdbdb;
      z-index: -10;
      left: -10px;
      opacity: 0;
      right: -10px;
      top: -10px;
      bottom: -10px;
      border-radius: 50%;
      animation: pulse 3s linear infinite;
    }
    & .two_line {
      animation-delay: 2.5s;
    }
    & .two_line {
      animation-delay: 1s;
    }
    & .three_line {
      animation-delay: 1.5s;
    }
    & .for_line {
      animation-delay: 1s;
    }
    & .five_line {
      animation-delay: 0.5s;
    }
  }

  & .pulse {
    display: flex;
    padding: 20px; /* Отступ можете подобрать свой. */
    /*  border-radius: 50%; */ /* Делаем икноку круглой */

    & img {
      width: min(100%, 450px);

      border-radius: 50%;
    }
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}
</style>
