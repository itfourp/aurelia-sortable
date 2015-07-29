System.register([], function (_export) {
  _export("configure", configure);

  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging().plugin("aurelia-animator-css").plugin("oribella-aurelia-sortable");

    aurelia.start().then(function (a) {
      return a.setRoot();
    });
  }

  return {
    setters: [],
    execute: function () {
      "use strict";
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijt1QkFBZ0IsU0FBUzs7QUFBbEIsV0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFO0FBQ2pDLFdBQU8sQ0FBQyxHQUFHLENBQ1IscUJBQXFCLEVBQUUsQ0FDdkIsa0JBQWtCLEVBQUUsQ0FDcEIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQzlCLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDOztBQUV2QyxXQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQzthQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7S0FBQSxDQUFDLENBQUM7R0FDeEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5kZXZlbG9wbWVudExvZ2dpbmcoKVxuICAgIC5wbHVnaW4oJ2F1cmVsaWEtYW5pbWF0b3ItY3NzJylcbiAgICAucGx1Z2luKFwib3JpYmVsbGEtYXVyZWxpYS1zb3J0YWJsZVwiKTtcblxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbihhID0+IGEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==