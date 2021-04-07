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
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><g><g><path d="M88.2,18C64.8,18.3,50,6.1,50,6.1S35.2,18.3,11.8,18c0,0-9.6,63,38.2,76C97.8,80.9,88.2,18,88.2,18z M50,79    c-31.6-8.6-25.2-50.2-25.2-50.2C40.2,29.1,50,21,50,21s9.8,8.1,25.2,7.8C75.2,28.8,81.6,70.5,50,79z"/><polygon points="50,36.5 45.6,45.4 35.8,46.8 42.9,53.7 41.2,63.5 50,58.9 58.8,63.5 57.1,53.7 64.2,46.8 54.4,45.4   "/></g></g></svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><g><g><path d="M88.2,18C64.8,18.3,50,6.1,50,6.1S35.2,18.3,11.8,18c0,0-9.6,63,38.2,76C97.8,80.9,88.2,18,88.2,18z M50,79    c-31.6-8.6-25.2-50.2-25.2-50.2C40.2,29.1,50,21,50,21s9.8,8.1,25.2,7.8C75.2,28.8,81.6,70.5,50,79z"/><polygon points="50,36.5 45.6,45.4 35.8,46.8 42.9,53.7 41.2,63.5 50,58.9 58.8,63.5 57.1,53.7 64.2,46.8 54.4,45.4   "/></g></g></svg>
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