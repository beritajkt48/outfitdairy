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
    id: 32,
    member: "Erine",
    category: "Atasan",
    name: "Pomelo Denim Peter Pan Collar Ruffle Trim Dress",
    image: "img/erine-denim-peter-van.png",
    shopeeUrl: "https://s.shopee.co.id/4VdoHi8Bxg"
  },
   {
    id: 31,
    member: "Kimmy",
    category: "Atasan",
    name: "Loose Top with Lace",
    image: "img/kimmy-kaos-lace.png",
    shopeeUrl: "https://s.shopee.co.id/3VlH5kSQhF"
  },
   {
    id: 30,
    member: "Oniel",
    category: "Atasan",
    name: "Knitted Vest in Mint",
    image: "img/oniel-vest-rajut-milkan.png",
    shopeeUrl: "https://s.shopee.co.id/3LRqtHpFiF"
  },
   {
    id: 29,
    member: "Marsha",
    category: "Parfum",
    name: "Marc Jacobs Daisy x Murakami Green EDP",
    image: "img/marsha-marc-jacobs-daisy-murakami-green.png",
    shopeeUrl: "https://s.shopee.co.id/6VOseykHLS"
  },
   {
    id: 28,
    member: "Freya",
    category: "Atasan",
    name: "VRTCL Stripe Boxy Crop - Kemeja",
    image: "img/freya-vrtcl-stripe-boxy-crop.png",
    shopeeUrl: "https://s.shopee.co.id/5q9BrYV2wp"
  },
   {
    id: 27,
    member: "Aralie",
    category: "Parfum",
    name: "HMNS - EoN Infusé de Terra EDP",
    image: "img/aralie-eon-hmns.png",
    shopeeUrl: "https://s.shopee.co.id/6q1j373aFS"
  },
   {
    id: 26,
    member: "Raisha",
    category: "Parfum",
    name: "Bath & Body Works - Into The Night Fragrance Mist",
    image: "img/raisha-bath-body-works-into-the-night.png",
    shopeeUrl: "https://s.shopee.co.id/9V2UDqxTHt"
  },
   {
    id: 25,
    member: "Gita",
    category: "Parfum",
    name: "Versace - Bright Crystal EDT",
    image: "img/gita-versace-bright-edt.png",
    shopeeUrl: "https://s.shopee.co.id/70L9F76QlQ"
  },
   {
    id: 24,
    member: "Marsha",
    category: "Parfum",
    name: "Tamburins - White Darjeeling",
    image: "img/marsha-tamburins-parfume.png",
    shopeeUrl: "https://s.shopee.co.id/7KxzdZ4axv"
  },
   {
    id: 23,
    member: "Christy",
    category: "Atasan",
    name: "COLORBOX x Liunic - Contrast Collar Stripes Shirt",
    image: "img/christy-colorbox-liunic-contrast.png",
    shopeeUrl: "https://s.shopee.co.id/9V2UCpaalt"
  },
   {
    id: 22,
    member: "Freya",
    category: "Aksesoris",
    name: "New Era - 9TWENTY Oakland Athletics Cap - Topi",
    image: "img/freya-newera-9twenty.png",
    shopeeUrl: "https://s.shopee.co.id/LoFHo0Wia"
  },
   {
    id: 21,
    member: "Lana",
    category: "Atasan",
    name: "MAMAMARA - Kardigan Rajut Bordir Tulip",
    image: "img/lana-mamamara-cardingan.png",
    shopeeUrl: "https://s.shopee.co.id/qkVsZBbFo"
  },
   {
    id: 20,
    member: "Lily",
    category: "Aksesoris",
    name: "Longchamp - 3D Handbag XS Leather - Tas",
    image: "img/lily-longchamp-3d-handbag.png",
    shopeeUrl: "https://s.shopee.co.id/4fxERJmg8W"
  },
   {
    id: 19,
    member: "Ribka",
    category: "Atasan",
    name: "sophistix - Seren Assymetrical Blouse",
    image: "img/ribka-sophistix-seren-assymetrical-blouse.png",
    shopeeUrl: "https://s.shopee.co.id/20wTGCFXzs"
  },
   {
    id: 18,
    member: "Cynthia",
    category: "Aksesoris",
    name: "Seiko - Classic SUR523P1 - Jam",
    image: "img/cynthia-seiko-classic-jam.png",
    shopeeUrl: "https://s.shopee.co.id/9fLuOA77fV"
  },
   {
    id: 17,
    member: "Fiony",
    category: "Aksesoris",
    name: "Samo Ondoh - Pocket Utility Bag Veg Pink - Tas",
    image: "img/fiony-samo-ondoh-pocket-utility.png",
    shopeeUrl: "https://s.shopee.co.id/BUp4WeNNM"
  },
   {
    id: 16,
    member: "Erine",
    category: "Atasan",
    name: "Femme - Sweater Bulu V-Neck White",
    image: "img/erine-v-neck-sweeter.png",
    shopeeUrl: "https://s.shopee.co.id/6L5SPbmO2i"
  },
   {
    id: 15,
    member: "Greesel",
    category: "Atasan",
    name: "Studio Rue - Lacy Tee Top Offshoulder Teal - Top Tshirt",
    image: "img/greesel-studio-rue-lacy-tee-top.png",
    shopeeUrl: "https://s.shopee.co.id/2VsjqPnMOV"
  },
   {
    id: 14,
    member: "Intan",
    category: "Sepatu",
    name: "COLORBOX - Sepatu Ballet Lace Cokelat",
    image: "img/intan-colorbox-sepatu-ballet.png",
    shopeeUrl: "https://s.shopee.co.id/9APdmO4F8v"
  },
   {
    id: 13,
    member: "Intan",
    category: "Aksesoris",
    name: "AOZHLI - Tas Selempang",
    image: "img/intan-aozhli-tas-selempang.png",
    shopeeUrl: "https://s.shopee.co.id/2BFtRMDpIG"
  },
   {
    id: 12,
    member: "Indah",
    category: "Atasan",
    name: "Sejauh Mata Memandang - Baju Santai Ayam Hias",
    image: "img/indah-sejauh-mata-memandang-baju-santai.png",
    shopeeUrl: "https://s.shopee.co.id/2BFtQlastE"
  },
   {
    id: 11,
    member: "Kimmy",
    category: "Atasan",
    name: "NUDETHELABEL - Cupid Top Hot Pink",
    image: "img/kimmy-nudethelabel-cupid-top-hot.png",
    shopeeUrl: "https://s.shopee.co.id/AUv1Lua8hk"
  },
   {
    id: 10,
    member: "Anindya",
    category: "Atasan",
    name: "Wearing BENA - Xena - Outer Poncho Rajut Bali",
    image: "img/anindya-wearing-bena-xena-outer.png",
    shopeeUrl: "https://s.shopee.co.id/6VOsaKz4uD"
  },
   {
    id: 9,
    member: "Kathrina",
    category: "Atasan",
    name: "NEULLA - Lunet Suede - Jaket",
    image: "img/kathrina-neulla-lunet-suede.png",
    shopeeUrl: "https://s.shopee.co.id/qkVpiPtz9"
  },
   {
    id: 8,
    member: "Marsha",
    category: "Atasan",
    name: "ADIDAS - SST TRACK TOP Cloud White - Jaket",
    image: "img/marsha-adidas-sst-track-top-cloud-white.png",
    shopeeUrl: "https://s.shopee.co.id/qkVhiSGy2"
  },
   {
    id: 7,
    member: "Freya",
    category: "Aksesoris",
    name: "MARJOUR - EMBROIDERED CAP - Topi",
    image: "img/freya-marjour-embroidered-cap.png",
    shopeeUrl: "https://s.shopee.co.id/1LgmIN7KNd"
  },
   {
    id: 6,
    member: "Cynthia",
    category: "Sepatu",
    name: "ADIDAS Adizero Pacer - Sepatu",
    image: "img/cynthia-adidas-adizero-pacer.png",
    shopeeUrl: "https://s.shopee.co.id/3g4h43CtwO"
  },
   {
    id: 5,
    member: "Jessi",
    category: "Parfum",
    name: "Evangeline Baby Powder",
    image: "img/jessi-parfum-evangeline-baby-powder.png",
    shopeeUrl: "https://s.shopee.co.id/4qGePhF73Q"
  },
  {
    id: 4,
    member: "Jessi",
    category: "Parfum",
    name: "Chloe Narcissus Poeticus",
    image: "img/jessi-parfum-chloe.png",
    shopeeUrl: "https://zh.zalora.com.hk/p/chloe-chloe-atelier-des-fleurs-cedrus-intense-eau-de-parfum-50ml-7498638?productQuery=chloe-chloe-atelier-des-fleurs-cedrus-intense-eau-de-parfum-50ml-7498638"
  },
  {
    id: 3,
    member: "Marsha",
    category: "Parfum",
    name: "Alchemist Fragrance",
    image: "img/marsha-pink-laundry.png",
    shopeeUrl: "https://s.shopee.co.id/6L5SDfhacn"
  },
  {
    id: 2,
    member: "Lia",
    category: "Parfum",
    name: "Crusita",
    image: "img/lia-crusita-es-teh-manis.png",
    shopeeUrl: "https://s.shopee.co.id/6L5SE2z6rR"
  },
  {
    id: 1,
    member: "Raisha",
    category: "Parfum",
    name: "SAFF & Co. XOCOLATL",
    image: "img/raisha-saff-co-xocolatl.png",
    shopeeUrl: "https://s.shopee.co.id/2Vsjf6O8PN"
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
