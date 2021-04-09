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
import Loader from '@/components/Loader.vue'

export default {
  name: "Settings",

  components: {
    Loader
  },

  data() {
    return {
      show: false,
      uploading: false,
      settings: [
        {
          name: 'Export progress',
          description: 'Export your current progress as a file.',
          action: 'exportProgress',
        },
        {
          name: 'Import progress',
          description: 'Import progress from an exported file. (Use the option above to export)',
          action: 'importProgress'
        },
        {
          name: 'Reset Black Ops Cold War progress',
          description: 'Reset your current DM Ultra camouflage progress.',
          warning: 'This cannot be undone.',
          action: 'resetProgress',
          param: 'ultra',
          button: 'Reset Cold War Progress'
        },
        {
          name: 'Reset Modern Warfare 2019 progress',
          description: 'Reset your current Dark Aether camouflage progress.',
          warning: 'This cannot be undone.',
          action: 'resetProgress',
          param: 'aether',
          button: 'Reset progress'
        },
        {
          name: 'Reset all progress',
          description: 'Reset essentially everything, including all camos',
          warning: 'This cannot be undone.',
          action: 'resetAll',
          button: 'Clear All Progress'
        }
      ]
    }
  },

  methods: {
    async handleAction(setting) {
      if (setting.param) {
        await this.$store.dispatch(setting.action, setting.param);
      } else {
        await this.$store.dispatch(setting.action);
      }
    },

    async importProgress(event) {
      this.$notify({ clean: true });
      this.uploading = true;
      const file = event.target.files[0];
      const regex = /.json$/i;

      if (regex.test(file.name)) {
        if (typeof (FileReader) !== 'undefined') {
          const reader = new FileReader();
          reader.onload = (e) => {
            setTimeout(async () => {
              await this.$store.dispatch('importProgress', JSON.parse(e.target.result))
              .then(() => {
                this.uploading = false;
                event.target.value = null;
                this.$notify({
                  type: 'success',
                  title: `Successfully imported progress from file`,
                });
              });
            }, 500);
          };
          reader.readAsText(file);
        } else {
          this.handleImportError(`Your browser has either declined the upload or does not support the required APIs to correctly handle uploads. If this has happened in error, please file an issue.`, event);
        }
      } else {
        this.handleImportError(`The file you have selected is not a valid file for import. Ensure you have selected the correct file.`, event);
      }
    },

    handleImportError (errorMessage, event) {
      this.uploading = false;
      event.target.value = null;

      this.$notify({
        type: 'error',
        title: errorMessage,
        duration: 20000
      });
    }
  },

  mounted() {
    this.show = true;
  }
}
</script>

<style scoped>

</style>