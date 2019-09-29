import { WFMComponent } from "../../framework";

class HomePage extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

export const homePageComponent = new HomePage({
  selector: "app-home-page",
  template: "<h1>Home page</h1>"
});
