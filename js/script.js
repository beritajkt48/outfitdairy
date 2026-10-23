/* =====================================================
   DATA PRODUK — EDIT BAGIAN INI SAJA
   -----------------------------------------------------
   Cara menambah produk: salin satu blok { ... }, tempel
   di bawahnya (jangan lupa koma), lalu ubah isinya.
   Cara mengubah: edit nilai di dalam blok.
   Cara menghapus: hapus satu blok { ... } beserta komanya.

   id        : angka unik, tidak boleh sama dengan produk lain
   member    : nama member JKT48
   category  : harus salah satu dari: Atasan, Bawahan,
               Aksesoris, Sepatu, Parfum
   name      : nama produk
   image     : URL gambar PNG rasio 1:1 (disarankan 1080x1080),
               atau file lokal di folder img, contoh: "img/indah-parfum.png"
   shopeeUrl : link produk Shopee yang asli
   ===================================================== */
const products = [
  {
    id: 1,
    member: "Indah",
    category: "Parfum",
    name: "Gucci Flora Gorgeous Gardenia",
    image: "https://placehold.co/1080x1080/png?text=Parfum",
    shopeeUrl: "https://shopee.co.id/GANTI-DENGAN-LINK-PRODUK-1"
  },
  {
    id: 2,
    member: "Marsha",
    category: "Sepatu",
    name: "Nama Produk Sepatu",
    image: "https://placehold.co/1080x1080/png?text=Sepatu",
    shopeeUrl: "https://shopee.co.id/GANTI-DENGAN-LINK-PRODUK-2"
  },
  {
    id: 3,
    member: "Freya",
    category: "Atasan",
    name: "Nama Produk Atasan",
    image: "https://placehold.co/1080x1080/png?text=Atasan",
    shopeeUrl: "https://shopee.co.id/GANTI-DENGAN-LINK-PRODUK-3"
  },
  {
    id: 4,
    member: "Gracia",
    category: "Bawahan",
    name: "Nama Produk Bawahan",
    image: "https://placehold.co/1080x1080/png?text=Bawahan",
    shopeeUrl: "https://shopee.co.id/GANTI-DENGAN-LINK-PRODUK-4"
  },
  {
    id: 5,
    member: "Zee",
    category: "Aksesoris",
    name: "Nama Produk Aksesoris",
    image: "https://placehold.co/1080x1080/png?text=Aksesoris",
    shopeeUrl: "https://shopee.co.id/GANTI-DENGAN-LINK-PRODUK-5"
  }
];
/* ===================== AKHIR DATA PRODUK ===================== */


/* ---------- Kode di bawah ini tidak perlu diubah ---------- */
const CATEGORIES = ["Atasan", "Bawahan", "Aksesoris", "Sepatu", "Parfum"];
const FALLBACK_IMG = "data:image/svg+xml;utf8," + encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'><rect width='400' height='400' fill='#eceef2'/>" +
  "<text x='200' y='210' font-family='sans-serif' font-size='22' fill='#9ca3af' text-anchor='middle'>Gambar tidak tersedia</text></svg>"
);

const state = { category: "Semua Produk", query: "" };
const grid = document.getElementById("grid");
const filtersEl = document.getElementById("filters");
const searchEl = document.getElementById("search");
const emptyEl = document.getElementById("empty");
const countEl = document.getElementById("count");

function createCard(p, index) {
  const a = document.createElement("a");
  a.className = "card";
  a.href = p.shopeeUrl;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.setAttribute("aria-label", p.member + " - " + p.name + " (buka di Shopee)");

  const thumb = document.createElement("div");
  thumb.className = "thumb";

  const img = document.createElement("img");
  img.src = p.image;
  img.alt = p.name + " rekomendasi " + p.member + " JKT48, kategori " + p.category;
  img.width = 1080;
  img.height = 1080;
  img.loading = index < 5 ? "eager" : "lazy"; // gambar di luar layar awal dimuat belakangan
  img.decoding = "async";
  img.onerror = function () { img.onerror = null; img.src = FALLBACK_IMG; };

  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = p.category;
  thumb.append(img, badge);

  const info = document.createElement("div");
  info.className = "info";
  const member = document.createElement("span");
  member.className = "member";
  member.textContent = p.member;
  const name = document.createElement("span");
  name.className = "name";
  name.textContent = p.name;
  const cta = document.createElement("span");
  cta.className = "cta";
  cta.textContent = "Lihat Produk di Shopee \u2192";
  info.append(member, name, cta);

  a.append(thumb, info);
  return a;
}

function render() {
  const q = state.query.trim().toLowerCase();
  const list = products.filter(function (p) {
    const okCat = state.category === "Semua Produk" || p.category === state.category;
    const okQuery = !q || p.member.toLowerCase().includes(q) || p.name.toLowerCase().includes(q);
    return okCat && okQuery;
  });

  grid.replaceChildren(...list.map(createCard));
  emptyEl.hidden = list.length > 0;
  countEl.textContent = list.length + " produk ditampilkan";

  filtersEl.querySelectorAll(".chip").forEach(function (btn) {
    const active = btn.dataset.category === state.category;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", active);
  });
}

function buildFilters() {
  ["Semua Produk", ...CATEGORIES].forEach(function (cat) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip";
    btn.dataset.category = cat;
    btn.textContent = cat;
    btn.addEventListener("click", function () { state.category = cat; render(); });
    filtersEl.appendChild(btn);
  });
}

searchEl.addEventListener("input", function () { state.query = searchEl.value; render(); });
document.getElementById("reset").addEventListener("click", function () {
  state.category = "Semua Produk";
  state.query = "";
  searchEl.value = "";
  render();
});

document.getElementById("year").textContent = new Date().getFullYear();
buildFilters();
render();
