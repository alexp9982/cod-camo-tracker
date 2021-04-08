<template>
<transition name="fade">
  <div class="container" v-if="show">
    <h1>Call of Duty Camo Tracker</h1>
    <h2>For all of your camo tracking needs</h2>

    <div class="buttons">
      <button @click="$router.push('/bocw')" class="bocw"><span>Black Ops Cold War</span></button>
      <button @click="$router.push('/mw2019')" class="mw2019"><span>Modern Warfare 2019</span></button>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },

  mounted () {
    this.show = true;
  },
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}

h1 {
  font-size: 28px;
  font-weight: 600;
  margin-top: 75px;

  span {
    color: rgba($text-color, .5);
  }
}

h2 {
  font-size: 20px;
  line-height: 1.5;
  margin: 30px auto 0;
  max-width: 450px;
}

.buttons {
  margin-top: 40px;

  button {
    align-items: center;
    display: inline-flex;
    color: $text-color;
    justify-content: center;
    padding: 12px 24px;

    @media (max-width: $mobile) {
      display: flex;
    }

    + button {
      margin-left: 20px;

      @media (max-width: $mobile) {
        margin-top: 20px;
        margin-left: 0;
      }
    }
    &:hover {
      transform: translateY(-5%);

      i {
        transform: translateX(7.5%);
      }
    }

    &.bocw {
      background: #2d1115
    }

    &.mw2019 {
      background: #403a3c
    }

    span {
      white-space: nowrap;
    }

    i {
      margin-left: 8px;
      position: relative;
      top: 2px;
      transition: $transition;
    }
  }
}
</style>