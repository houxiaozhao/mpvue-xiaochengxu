<template>
    <div>
        <image :src="userinfo.avatarUrl" /></image>
        <div>{{userinfo.nickName}}</div>
        <div>参数{{id}}</div>
    </div>
</template>
<script>
export default {
  name: 'index',
  data() {
    return {
      userinfo: {},
      id: ''
    };
  },
  mounted() {
    console.log(this.$root.$mp.query);
    console.log(this.globalData.userinfo);
    this.id = this.$root.$mp.query.id;
    this.userinfo = this.globalData.userinfo;
  },
  methods: {}
};
</script>
