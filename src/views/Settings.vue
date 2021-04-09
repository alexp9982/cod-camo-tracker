<template>
  <transition name="fade">
    <div class="container" v-show="show">
      <div class="settings">
        <div class="setting" v-for="setting in settings" :key="setting.name">
          <div>
            <h3>{{ setting.name }}</h3>
            <p v-html="setting.description"></p>
            <span class="warning" v-if="setting.warning">
              <eva-icon name="alert-triangle-outline" fill="ee5253" width="20" height="20"></eva-icon>
            </span>
          </div>

          <button v-if="setting.action !== 'importProgress'"
                  :class="{ warning: setting.warning }"
                  @click="handleAction(setting)"
                  >{{ setting.button ? setting.button : setting.name }}</button>

          <label v-else for="import" class="button" :class="{ disabled: uploading, uploading }">
            <span>{{ setting.name }}</span>
            <Loader :size="18" :thickness="2" :color="'black'" v-if="uploading" />
          </label>
        </div>
      </div>

      <input type="file" id="import" @change="importProgress($event)">
    </div>
  </transition>
</template>

<script>
export default {
  name: "Settings"
};
</script>

<style scoped>

</style>