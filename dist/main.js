System.register(["bootstrap"], function (_export) {
  _export("configure", configure);

  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging().plugin("oribella/aurelia-sortable");

    aurelia.start().then(function (a) {
      return a.setRoot();
    });
  }

  return {
    setters: [function (_bootstrap) {}],
    execute: function () {
      "use strict";
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijt1QkFFZ0IsU0FBUzs7QUFBbEIsV0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFO0FBQ2pDLFdBQU8sQ0FBQyxHQUFHLENBQ1IscUJBQXFCLEVBQUUsQ0FDdkIsa0JBQWtCLEVBQUUsQ0FDcEIsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUM7O0FBUXZDLFdBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO2FBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRTtLQUFBLENBQUMsQ0FBQztHQUN4QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdib290c3RyYXAnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWEpIHtcbiAgYXVyZWxpYS51c2VcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAuZGV2ZWxvcG1lbnRMb2dnaW5nKClcbiAgICAucGx1Z2luKFwib3JpYmVsbGEvYXVyZWxpYS1zb3J0YWJsZVwiKTtcblxuICAvL1VuY29tbWVudCB0aGUgbGluZSBiZWxvdyB0byBlbmFibGUgYW5pbWF0aW9uLlxuICAvL2F1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS1hbmltYXRvci1jc3MnKTtcblxuICAvL0FueW9uZSB3YW50aW5nIHRvIHVzZSBIVE1MSW1wb3J0cyB0byBsb2FkIHZpZXdzLCB3aWxsIG5lZWQgdG8gaW5zdGFsbCB0aGUgZm9sbG93aW5nIHBsdWdpbi5cbiAgLy9hdXJlbGlhLnVzZS5wbHVnaW4oJ2F1cmVsaWEtaHRtbC1pbXBvcnQtdGVtcGxhdGUtbG9hZGVyJylcblxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbihhID0+IGEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==