// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";
import { VCalendar } from "vuetify/labs/components";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components: {
      VCalendar,
    },
  });
  app.vueApp.use(vuetify);
});
