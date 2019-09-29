import { WFMComponent } from "../../framework";

class TopRatedPage extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

export const topRatedPageComponent = new TopRatedPage({
  selector: "app-top-rated-page",
  template: "<h1>Top rated page</h1>"
});
