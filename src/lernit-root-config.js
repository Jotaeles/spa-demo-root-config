import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@lernit/spa-demo-header",
  app: () => System.import("@lernit/spa-demo-header"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@lernit/spa-demo-home",
  app: () => System.import("@lernit/spa-demo-home"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@lernit/spa-demo-about",
  app: () => System.import("@lernit/spa-demo-about"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
