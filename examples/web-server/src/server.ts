import * as path from "path";
import Application from "./theutia";

const app = new Application(path.resolve(__dirname, "../"));

app.start();
