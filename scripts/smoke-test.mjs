/**
 * Pre-deployment smoke tests for Virat Ramnivas.
 * Run after `npm run build` with `npm run start` (or pass BASE_URL).
 *
 * Usage: node scripts/smoke-test.mjs [baseUrl]
 * Default: http://localhost:3000
 */

import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const BASE_URL = process.argv[2] ?? process.env.BASE_URL ?? "http://localhost:3000";

const ROUTES = [
  "/",
  "/floor-plans",
  "/amenities",
  "/location",
  "/gallery",
  "/about",
  "/contact",
  "/robots.txt",
  "/sitemap.xml",
];

const PUBLIC_IMAGES = [
  "public/images/floorplans/1543-north.jpeg",
  "public/images/floorplans/1641-west.jpeg",
  "public/images/floorplans/1694-east.jpeg",
  "public/images/floorplans/1726-east.jpeg",
  "public/images/elevation/elevation-1.jpeg",
  "public/images/elevation/elevation-2.jpeg",
  "public/images/elevation/elevation-3.jpeg",
  "public/images/gallery/brochure-1.jpeg",
  "public/images/gallery/brochure-2.jpeg",
  "public/images/gallery/brochure-3.jpeg",
];

let passed = 0;
let failed = 0;

function pass(msg) {
  passed++;
  console.log(`  ✓ ${msg}`);
}

function fail(msg, detail = "") {
  failed++;
  console.error(`  ✗ ${msg}${detail ? ` — ${detail}` : ""}`);
}

async function fetchText(url) {
  const res = await fetch(url, { redirect: "follow" });
  const text = await res.text();
  return { res, text };
}

async function testRoutes() {
  console.log("\n📄 Page routes");
  for (const route of ROUTES) {
    try {
      const { res, text } = await fetchText(`${BASE_URL}${route}`);
      if (res.status !== 200) {
        fail(`${route}`, `HTTP ${res.status}`);
        continue;
      }
      if (route.endsWith(".xml") || route.endsWith(".txt")) {
        pass(`${route} → ${res.status}`);
        continue;
      }
      if (!text.includes("Virat Ramnivas")) {
        fail(`${route}`, "missing project name in HTML");
        continue;
      }
      if (!text.includes("_next/static/css") && !text.includes('rel="stylesheet"')) {
        fail(`${route}`, "no CSS stylesheet linked");
        continue;
      }
      pass(`${route} → ${res.status}, styled HTML`);
    } catch (err) {
      fail(`${route}`, err.message);
    }
  }
}

async function testEnquiryApi() {
  console.log("\n📨 Enquiry API");

  try {
    const bad = await fetch(`${BASE_URL}/api/enquiry`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "A", phone: "123" }),
    });
    if (bad.status === 400) {
      pass("POST invalid payload → 400");
    } else {
      fail("POST invalid payload", `expected 400, got ${bad.status}`);
    }
  } catch (err) {
    fail("POST invalid payload", err.message);
  }

  try {
    const good = await fetch(`${BASE_URL}/api/enquiry`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Smoke Test User",
        phone: "8886555200",
        email: "",
        flatSize: "1543",
        message: "Automated deployment smoke test — safe to delete",
      }),
    });
    const body = await good.json();
    if (good.status === 200 && body.success && body.id) {
      pass(`POST valid payload → 200, lead id: ${body.id}`);
    } else {
      fail("POST valid payload", `status ${good.status}, body: ${JSON.stringify(body)}`);
    }
  } catch (err) {
    fail("POST valid payload", err.message);
  }
}

function testStaticAssets() {
  console.log("\n🖼  Public images");
  for (const rel of PUBLIC_IMAGES) {
    const full = join(ROOT, rel);
    if (existsSync(full)) {
      pass(rel);
    } else {
      fail(rel, "file missing");
    }
  }
}

function testDataIntegrity() {
  console.log("\n📋 Data integrity");
  const dataPath = join(ROOT, "lib", "data.ts");
  const content = readFileSync(dataPath, "utf-8");

  const flatSizes = ["1543", "1641", "1694", "1726"];
  for (const size of flatSizes) {
    if (content.includes(`size: ${size}`)) {
      pass(`Flat ${size} sq.ft in data.ts`);
    } else {
      fail(`Flat ${size} sq.ft`, "missing from data.ts");
    }
  }

  if (content.includes("8886555200") && content.includes("7799442293")) {
    pass("Contact phone numbers present");
  } else {
    fail("Contact phone numbers", "missing or incorrect");
  }

  if (content.includes("vdesign4interiors")) {
    pass("Instagram handle present");
  } else {
    fail("Instagram handle", "missing or incorrect");
  }
}

function testEnvExample() {
  console.log("\n🔧 Deployment config");
  const envExample = join(ROOT, ".env.local.example");
  if (existsSync(envExample)) {
    const content = readFileSync(envExample, "utf-8");
    if (content.includes("NEXT_PUBLIC_WHATSAPP_NUMBER")) {
      pass(".env.local.example has WhatsApp variable");
    } else {
      fail(".env.local.example", "missing NEXT_PUBLIC_WHATSAPP_NUMBER");
    }
  } else {
    fail(".env.local.example", "file missing");
  }

  if (existsSync(join(ROOT, ".gitignore"))) {
    const gitignore = readFileSync(join(ROOT, ".gitignore"), "utf-8");
    if (gitignore.includes("leads.json") || gitignore.includes("/data/")) {
      pass(".gitignore excludes lead storage");
    } else {
      fail(".gitignore", "should exclude leads.json");
    }
  }
}

async function main() {
  console.log(`\n🧪 Virat Ramnivas — Smoke Tests`);
  console.log(`   Base URL: ${BASE_URL}\n`);

  testStaticAssets();
  testDataIntegrity();
  testEnvExample();
  await testRoutes();
  await testEnquiryApi();

  console.log(`\n${"─".repeat(40)}`);
  console.log(`Results: ${passed} passed, ${failed} failed\n`);

  if (failed > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Smoke test crashed:", err);
  process.exit(1);
});
