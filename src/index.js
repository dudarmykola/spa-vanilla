import { appModule } from "./app/app.module";
import { bootstrap } from "./framework/core/bootstrap";
import { wfm } from "./framework/tools/utils";

wfm.delay(2000).then(() => {
  bootstrap(appModule);
});
