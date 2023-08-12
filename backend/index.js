import Koa from "koa";
import Router from "@koa/router";
import { bodyParser } from "@koa/bodyparser";
const app = new Koa();

app.use(bodyParser());
const router = new Router();
router.post("/call", async (ctx) => {
	const { headers, payload, url, method } = ctx.request.body;
	const callResponse = await fetch(url, {
		method,
		headers,
		body: JSON.stringify(payload),
	});
	ctx.response.body = callResponse.arrayBuffer;
});

app.use(bodyParser);
app.listen(3127);
