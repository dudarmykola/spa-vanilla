import { WFMComponent } from "../framework";

class AppComponent extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

export const appComponent = new AppComponent({
  selector: "app-root",
  template: `
  <div>
    <app-header></app-header>
    <h1>App component works</h1>
  </div>
  `
});
