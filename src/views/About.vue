<template>
<transition name="fade">
  <div class="about container" v-show="show">
    <h3>The Ultimate Camo Tracker</h3>
    <p>Track camos in almost any Call of Duty game. There's nothing else like it.</p>

    <div class="features">
      <div class="feature" v-for="feature in features" :key="feature.title">
        <eva-icon :name="feature.icon" fill="black" width="75" height="75"></eva-icon>
        <h5>{{ feature.title }}</h5>
        <p>{{ feature.description }}</p>
      </div>
    </div>

    <h4>Open Source</h4>
    <p>Built using <a href="https://vuejs.org/">Vue.js</a>, and hosted on <a href="https://vercel.com/">Vercel</a>. The icon was found from the <a href="https://thenounproject.com/">Noun Project</a>. The GitHub repo at the bottom of the page. If there's any problems, feel free to file an issue.</p>

    <h4>First Website</h4>
    <p>I borrowed quite a bit of code for this, being my first website. I've learned a lot of new things in relation to JavaScript, something I haven't messed with before. Please don't criticize too hard.</p>

    <h4>Support Me By Sharing</h4>
    <p>At this time, I do not plan to take donations for the site. I made it so me, as well as others can enjoy the camo grinds throughout all these Call of Duty games. Support me by sharing with your friends <b>:)</b></p>
  </div>
</transition>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      show: false,
      features: [
        {
          title: 'Auto-Saved',
          description: 'Progress is automatically saved and stored locally on your computer.',
          icon: 'save-outline'
        },
        {
          title: 'Responsive & Fast',
          description: 'Use it on your computer or smartphone with ease.',
          icon: 'smartphone-outline'
        },
        {
          title: 'Export/Import',
          description: 'Export your progress to another device or browser.',
          icon: 'external-link-outline'
        }
      ]
    }
  },
  mounted() {
    this.show = true;
  }
}
</script>

<style lang="scss" scoped>
p {
  font-size: 18px;

  @media (max-width: $tablet) {
    font-size: 16px;
  }
}

a {
  @media (max-width: $tablet) {
    font-size: 16px;
  }
}

.features {
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(3, 1fr);
  margin: 30px 0;

  @media (max-width: $tablet) {
    grid-template-columns: 1fr;
  }

  .feature {
    background: $elevation-2-color;
    border-radius: $border-radius;
    cursor: default;
    overflow: hidden;
    padding: 20px;
    position: relative;
    transition: $transition;

    &:hover {
      background: $elevation-3-color;
    }

    i {
      bottom: 0;
      opacity: .35;
      position: absolute;
      right: 0;
      transform: translate(0%, 40%);
      z-index: 1;
    }

    h5 {
      font-weight: 600;
      margin-bottom: 10px;
      position: relative;
      z-index: 2;
    }

    p {
      font-size: 16px;
      line-height: 1.4;
      position: relative;
      z-index: 2;
    }
  }
}
</style>