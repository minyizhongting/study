<template>
  <div class="bh-con bh-survey">
    <div class="pagebox">
      <p>测试vuex</p>
      <com-button type="main" @click="beginSurvey">go</com-button>
    </div>
  </div>
</template>

<script>
  import ComButton from '@/components/ComButton'
  import { mapMutations, mapActions } from 'vuex';

  export default {
    name: 'survey',
    components: { ComButton },
    data() {
      return {}
    },
    mounted() {
      // this.resetData();  // actions
      this.$store.dispatch('survey/resetData');
    },
    methods: {
      ...mapMutations('survey', {
        beginTimeHandle: 'beginTimeHandle'
      }),
      ...mapActions('survey', {
        resetData: 'resetData'
      }),
      beginSurvey() {
        this.beginTimeHandle();
        this.$router.push({path: '/survey/answer'});
      }
    }
  }
</script>

<style lang="scss">
  @import '../../libs/scss/common.scss';

  .bh-survey {
    display: flex;
    justify-content: center;
    padding-top: 100px;
  }

  .pagebox {
    width: 300px;
    height: 500px;
    background-color: #f5f5f5;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    p {
      text-align: center;
      padding: 10px;
    }
    button {
      width: 100px;
      margin: 0 auto;
    }
  }

</style>
