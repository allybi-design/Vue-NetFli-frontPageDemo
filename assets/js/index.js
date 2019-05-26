var app = new Vue({
  el: "#app",
  data: {
    tabs: [true, false, false],
    currentTab: 0
  },
  methods: {
    setTab(tab) {
      this.tabs[this.currentTab] = false;
      this.currentTab = tab;
      this.tabs[this.currentTab] = true;
      this.$forceUpdate();
    }
  }
});
