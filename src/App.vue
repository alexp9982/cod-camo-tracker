<template>
  <div id="app" :style="{ overflowY: mobileNav ? 'hidden' : null }">
    <transition name="slidedown">
      <div class="notice" v-if="showNotice">
        <p>Welcome to the Call of Duty Camo Tracker. Enjoy!</p>
      <eva-icon name="close" fill="white" width="16" height="16" @click="showNotice = false"></eva-icon>
      </div>
    </transition>


    <nav clasS="container">
      <router-link to="/" class="logo">
        <div class="icon-container">

          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;" viewBox="0 0 53.3333 66.666625" x="0px" y="0px" fill-rule="evenodd" clip-rule="evenodd">
            <g><path style="fill:black" d="M22.4038 25.1142c0.359161,0 0.650272,0.29111 0.650272,0.650272 0,0.359161 -0.29111,0.650291 -0.650272,0.650291 -0.359161,0 -0.650291,-0.29113 -0.650291,-0.650291 0,-0.359161 0.29113,-0.650272 0.650291,-0.650272zm14.4475 -4.0888l-5.25613 0 0 -0.411441 5.25613 0 0 0.411441zm-21.2667 4.39698l-2.89553 8.9137 -0.0215236 0.0509016c-0.467732,0.829854 0.118008,1.9582 1.08587,1.9582l7.56537 0c0.500815,0.0248425 0.659665,-0.679063 0.73752,-1.04979l2.55708 -10.0989c0.00765354,-0.0443661 0.151394,-0.820783 0.95535,-1.28661 0.661425,-0.383236 1.16451,-0.326846 1.87597,-0.32715l3.61398 -0.00159843 8.65715 0c0.161358,-0.0216063 1.49855,-0.253122 1.52279,-2.01127l-0.000933071 0 0 -3.58243 -25.0277 0c-0.216409,0 -0.464087,-0.00623622 -0.692587,-0.0119882 -1.17846,-0.0296811 -1.76386,-0.0444213 -2.76202,1.20129 -2.70344,3.37387 3.82713,1.91232 2.85046,6.1644 -0.00655906,0.0286929 -0.012248,0.0533937 -0.0212795,0.0812362z"/><path style="fill:black;fill-rule:nonzero;" d="M29.6178 23.287l0 1.66598c0,1.00418 -0.410602,1.9169 -1.07208,2.57838 -0.661453,0.661476 -1.5742,1.07208 -2.57838,1.07208l-2.75222 0 0 -0.66848 2.75222 0c0.819654,0 1.56514,-0.335602 2.10574,-0.876228 0.54063,-0.54063 0.876228,-1.28609 0.876228,-2.10575l0 -1.66598 0.668484 0z"/><path style="fill:black;" d="M24.4459 23.8366c0,0 0.43487,2.93562 3.12043,2.77253 0,0 -1.50043,-0.282673 -1.82661,-2.8595l-1.29383 0.0869646z"/><path style="fill:black;" d="M37.7671 16.9866l0 0c0.619398,0 1.12616,0.50676 1.12616,1.12616l0 0 -1.12616 0 0 -1.12616z"/><rect style="fill:black;" x="40.3251" y="19.2007" width="1.25148" height="2.23295" rx="0.34287" ry="0.34287"/><g><rect style="fill:none;" y="3.92548e-005" width="53.3333" height="53.3333"/><path style="fill:black;fill-rule:nonzero;" d="M27.0781 0.241075l11.135 6.4288 -0.000811024 0.00139764 11.1326 6.42739 0.414661 0.239413 0 0.470972 0 12.8576 0 12.8576 0 0.470972 -0.414661 0.239413 -11.1326 6.42739 0.000811024 0.00139764 -11.135 6.4288 -0.411445 0.237531 -0.411445 -0.237531 -11.135 -6.4288 0.000811024 -0.00139764 -11.1326 -6.42739 -0.414661 -0.239413 0 -0.470972 0 -12.8576 0 -12.8576 0 -0.470972 0.414661 -0.239413 11.1326 -6.42739 -0.000811024 -0.00139764 11.135 -6.4288 0.411445 -0.237531 0.411445 0.237531zm-0.411465 2.61301l-8.17041 4.71718 0.000811024 0.00141732 -12.4547 7.19066 0 23.8066 12.4547 7.19066 -0.000811024 0.00139764 8.17045 4.7172 8.17041 -4.71718 -0.000811024 -0.00141732 12.4547 -7.19066 0 -23.8066 -12.4547 -7.19066 0.000811024 -0.00139764 -8.17045 -4.7172z"/></g></g></svg>
        </div>
        <p><span>Call of Duty Camo Tracker</span></p>
      </router-link>
      <div>
        <router-link to="">Black Ops Cold War</router-link>
        <router-link to="">Modern Warfare 2019</router-link>
        <router-link to="" class="icon settings" content="Settings" v-tippy="{ placement: 'bottom' }">
          <eva-icon name="settings-2-outline" fill="white"></eva-icon>
        </router-link>
      </div>
      <eva-icon class="mobile-nav-toggle" name="menu" fill="white" @click="mobileNav = !mobileNav"></eva-icon>
    </nav>


    <transition name="fade">
      <nav class="mobile" v-if="mobileNav">
        <div class="header">
          <router-link to="/" class="logo">
            <div class="icon-container">

              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;" viewBox="0 0 53.3333 66.666625" x="0px" y="0px" fill-rule="evenodd" clip-rule="evenodd">
                <g><path style="fill:black;" d="M22.4038 25.1142c0.359161,0 0.650272,0.29111 0.650272,0.650272 0,0.359161 -0.29111,0.650291 -0.650272,0.650291 -0.359161,0 -0.650291,-0.29113 -0.650291,-0.650291 0,-0.359161 0.29113,-0.650272 0.650291,-0.650272zm14.4475 -4.0888l-5.25613 0 0 -0.411441 5.25613 0 0 0.411441zm-21.2667 4.39698l-2.89553 8.9137 -0.0215236 0.0509016c-0.467732,0.829854 0.118008,1.9582 1.08587,1.9582l7.56537 0c0.500815,0.0248425 0.659665,-0.679063 0.73752,-1.04979l2.55708 -10.0989c0.00765354,-0.0443661 0.151394,-0.820783 0.95535,-1.28661 0.661425,-0.383236 1.16451,-0.326846 1.87597,-0.32715l3.61398 -0.00159843 8.65715 0c0.161358,-0.0216063 1.49855,-0.253122 1.52279,-2.01127l-0.000933071 0 0 -3.58243 -25.0277 0c-0.216409,0 -0.464087,-0.00623622 -0.692587,-0.0119882 -1.17846,-0.0296811 -1.76386,-0.0444213 -2.76202,1.20129 -2.70344,3.37387 3.82713,1.91232 2.85046,6.1644 -0.00655906,0.0286929 -0.012248,0.0533937 -0.0212795,0.0812362z"/><path style="fill:black;fill-rule:nonzero;" d="M29.6178 23.287l0 1.66598c0,1.00418 -0.410602,1.9169 -1.07208,2.57838 -0.661453,0.661476 -1.5742,1.07208 -2.57838,1.07208l-2.75222 0 0 -0.66848 2.75222 0c0.819654,0 1.56514,-0.335602 2.10574,-0.876228 0.54063,-0.54063 0.876228,-1.28609 0.876228,-2.10575l0 -1.66598 0.668484 0z"/><path style="fill:black;" d="M24.4459 23.8366c0,0 0.43487,2.93562 3.12043,2.77253 0,0 -1.50043,-0.282673 -1.82661,-2.8595l-1.29383 0.0869646z"/><path style="fill:black;" d="M37.7671 16.9866l0 0c0.619398,0 1.12616,0.50676 1.12616,1.12616l0 0 -1.12616 0 0 -1.12616z"/><rect style="fill:black;" x="40.3251" y="19.2007" width="1.25148" height="2.23295" rx="0.34287" ry="0.34287"/><g><rect style="fill:none;" y="3.92548e-005" width="53.3333" height="53.3333"/><path style="fill:black;fill-rule:nonzero;" d="M27.0781 0.241075l11.135 6.4288 -0.000811024 0.00139764 11.1326 6.42739 0.414661 0.239413 0 0.470972 0 12.8576 0 12.8576 0 0.470972 -0.414661 0.239413 -11.1326 6.42739 0.000811024 0.00139764 -11.135 6.4288 -0.411445 0.237531 -0.411445 -0.237531 -11.135 -6.4288 0.000811024 -0.00139764 -11.1326 -6.42739 -0.414661 -0.239413 0 -0.470972 0 -12.8576 0 -12.8576 0 -0.470972 0.414661 -0.239413 11.1326 -6.42739 -0.000811024 -0.00139764 11.135 -6.4288 0.411445 -0.237531 0.411445 0.237531zm-0.411465 2.61301l-8.17041 4.71718 0.000811024 0.00141732 -12.4547 7.19066 0 23.8066 12.4547 7.19066 -0.000811024 0.00139764 8.17045 4.7172 8.17041 -4.71718 -0.000811024 -0.00141732 12.4547 -7.19066 0 -23.8066 -12.4547 -7.19066 0.000811024 -0.00139764 -8.17045 -4.7172z"/></g></g></svg>
            </div>
            <p><span>Call of Duty Camo Tracker</span></p>
          </router-link>
          <eva-icon name="close" fill="white" @click="mobileNav = !mobileNav"></eva-icon>
        </div>
        <div>
          <router-link to="">Black Ops Cold War</router-link>
          <router-link to="">Modern Warfare 2019</router-link>
        </div>
        <div class="footer">
          <router-link to="">Settings</router-link>
          <router-link to="">About</router-link>
          <a href="https://github.com/alexp9982/cod-camo-tracker">GitHub</a>

          <a href="https://cod-camo-tracker-alexp9982.vercel.app/" class="button">Hope you enjoy!</a>
        </div>
      </nav>
    </transition>

    <main>
      <router-view/>
    </main>

    <footer class="container">
      <div>Made by alexp9982</div>

      <div>
        <router-link to="">About</router-link>
        <a href="https://github.com/alexp9982/cod-camo-tracker">Github</a>
      </div>
    </footer>

    <notifications position="top center">
      <template slot="body" slot-scope="props">
        <div class="notification" :class="props.item.type" @click="props.close">
          <p class="title">{{ props.item.title }}</p>
          <eva-icon class="remove" name="close" fill="white" width="18" height="18"></eva-icon>
        </div>
      </template>
    </notifications>

    <Debug v-if="!production" />
  </div>
</template>

<script>
import Debug from '@/components/Debug.vue'

export default {
  components: {
    Debug
  },

  data() {
    return {
      production: process.env.NODE_ENV === 'production',
      mobileNav: false,
      showNotice: false
    }
  },

  watch: {
    $route() {
      this.mobileNav = false;
    }
  },

  async beforeCreate() {
    await this.$store.dispatch('getStoredData');
  },

  mounted() {
    setTimeout(() => {
      this.showNotice = true;
    }, 15000);
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
/*@import '@/scss/main';*/

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>