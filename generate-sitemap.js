import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// `__dirname` ve `__filename` için tanımlama
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sitenizin ana URL'sini tanımlayın
const siteUrl = "https://www.netaauto.az";

// Tüm yolları listeleyin
const routes = [
  { path: "/", changefreq: "daily", priority: 1.0 },
  { path: "/brand-story.html", changefreq: "monthly", priority: 0.8 },
  { path: "/join-us.html", changefreq: "monthly", priority: 0.8 },
  { path: "/investment-cooperation.html", changefreq: "monthly", priority: 0.7 },
  { path: "/contact-us.html", changefreq: "monthly", priority: 0.7 },
  { path: "/neta-gt", changefreq: "monthly", priority: 0.7 },
  { path: "/neta-s", changefreq: "monthly", priority: 0.7 },
  { path: "/neta-u", changefreq: "monthly", priority: 0.7 },
  { path: "/neta-v", changefreq: "monthly", priority: 0.7 },
  { path: "/neta-moment.html", changefreq: "weekly", priority: 0.8 },
  // Dinamik yollar için örnek değerler
  ...Array.from({ length: 5 }, (_, i) => ({
    path: `/neta-moment/${i + 1}`,
    changefreq: "weekly",
    priority: 0.6,
  })),
  { path: "/neta-family.html", changefreq: "monthly", priority: 0.7 },
  { path: "/neta-service.html", changefreq: "monthly", priority: 0.7 },
  { path: "/neta-space.html", changefreq: "monthly", priority: 0.7 },
  { path: "/privacy.html", changefreq: "yearly", priority: 0.5 },
  { path: "/user-manual.html", changefreq: "yearly", priority: 0.5 },
  { path: "/legal-Imprint.html", changefreq: "yearly", priority: 0.5 },
  { path: "/calculator.html", changefreq: "monthly", priority: 0.6 },
  { path: "/test-drive.html", changefreq: "monthly", priority: 0.6 },
  // Dinamik yollar için örnek değerler
  ...Array.from({ length: 3 }, (_, i) => ({
    path: `/page/${i + 1}`,
    changefreq: "weekly",
    priority: 0.6,
  })),
];

// Sitemap'i oluşturun
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${siteUrl}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

// Sitemap'i `public` klasörüne kaydedin
const outputPath = path.join(__dirname, "public", "sitemap.xml");

// `public` klasörünün var olup olmadığını kontrol edin, yoksa oluşturun
if (!fs.existsSync(path.join(__dirname, "public"))) {
  fs.mkdirSync(path.join(__dirname, "public"));
}

// Dosyayı yazın
fs.writeFileSync(outputPath, sitemap);

console.log("Sitemap başarıyla oluşturuldu:", outputPath);
