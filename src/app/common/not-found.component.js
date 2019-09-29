import { WFMComponent } from "../../framework";

class NotFound extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

export const notFound = new NotFound({
  selector: "app-not-found",
  template: `
<div>
  <p>Not found 404</p>
  <a href="#">go home</a>
</div>`
});
