import { WFMComponent } from "../../framework";

class AppHeader extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

export const appHeader = new AppHeader({
  selector: "app-header",
  template: `
<nav>
  <div class="nav-wrapper">
    <a href="#" class="brand-logo">Movies Data Base</a>
    <ul class="right">
      <li><a href="#">Home</a></li>
      <li><a href="#top-rated">Top Rated Films</a></li>
    </ul>
  </div>
</nav>`
});
