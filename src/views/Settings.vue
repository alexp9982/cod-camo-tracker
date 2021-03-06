<template>
  <transition name="fade">
    <div class="container" v-show="show">
      <div class="settings">
        <div class="setting" v-for="setting in settings" :key="setting.name">
          <div>
            <h3>{{ setting.name }}</h3>
            <p v-html="setting.description"></p>
            <span class="warning" v-if="setting.warning">
              <eva-icon name="alert-triangle-outline" fill="#ee5253" width="20" height="20"></eva-icon>
              {{ setting.warning }}
            </span>
          </div>

          <button v-if="setting.action !== 'importProgress'"
                  :class="{ warning: setting.warning }"
                  @click="handleAction(setting)"
          >{{ setting.button ? setting.button : setting.name }}</button>

<!--          <label v-else for="import" class="button" :class="{ disabled: uploading, uploading }">
            <span>{{ setting.name }}</span>
            <Loader :size="18" :thickness="2" :color="'black'" v-if="uploading" />
          </label>-->
        </div>
      </div>

<!--      <input type="file" id="import" @change="importProgress($event)">-->
    </div>
  </transition>
</template>

<script>
/*import Loader from '@/components/Loader.vue'*/

export default {
  name: "Settings",

  /*components: {
    Loader
  },*/

  data() {
    return {
      show: false,
      uploading: false,
      settings: [
        {
          name: 'Reset Black Ops Cold War progress',
          description: 'Reset all your Black Ops Cold War progress.',
          warning: 'This cannot be undone.',
          action: 'resetProgress',
          param: 'bocw',
          button: 'Reset BOCW Progress'
        },
        {
          name: 'Reset Modern Warfare 2019 progress',
          description: 'Reset all your Modern Warfare 2019 progress.',
          warning: 'This cannot be undone.',
          action: 'resetProgress',
          param: 'mw2019',
          button: 'Reset MW 2019 Progress'
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

<style lang="scss" scoped>
.settings {
  $border-color: $elevation-4-color;
  background-color: $elevation-2-color;
  border: 1px solid $border-color;
  border-radius: $border-radius;

  .setting {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 25px;
    transition: $transition;

    @media (max-width: $mobile) {
      align-items: flex-start;
      flex-direction: column;
    }

    &:hover {
      background-color: $elevation-3-color;
    }

    + .setting {
      border-top: 1px solid $border-color;
    }

    h3 {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    span.warning {
      align-items: center;
      color: $red;
      display: flex;
      font-size: 14px;
      font-weight: 600;
      margin-top: 15px;

      i {
        margin-right: 10px;
        position: relative;
        top: 1px;
      }
    }

    button, .button {
      @media (max-width: $mobile) {
        margin-top: 15px;
      }
    }
  }
}

.button {
  align-items: center;
  display: flex;
  justify-content: center;
  transition: $transition;

  .loader {
    margin-left: 10px;
  }
}

#import {
  display: none;
}
</style>