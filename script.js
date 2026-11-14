/**
 * AFIQA SALON - Official Appointment Booking Script
 * WhatsApp: 0812 1418 4546
 * Lokasi: Jl. Limo raya meruyung No.K15 Depok
 * Jam: 10.00 - 20.00 WIB
 */

// Data Layanan Lengkap AFIQA SALON
const SALON_SERVICES = [
  // --- HAIR CUT & STYLING ---
  {
    id: "hair-01",
    category: "hair",
    categoryName: "Hair Cut & Styling",
    name: "Children Bangs Trim",



    desc: "Rapikan poni anak agar rapi dan nyaman beraktivitas."
  },
  {
    id: "hair-02",
    category: "hair",
    categoryName: "Hair Cut & Styling",
    name: "Curtain Bangs",


    popular: true,
    desc: "Poni tirai kekinian membingkai wajah lebih tirus dan manis."
  },
  {
    id: "hair-03",
    category: "hair",
    categoryName: "Hair Cut & Styling",
    name: "Kid's Haircut (Rata)",


    desc: "Gunting rambut anak model rata rapi & presisi."
  },
  {
    id: "hair-04",
    category: "hair",
    categoryName: "Hair Cut & Styling",
    name: "Kid's Haircut Oval / Bob / Layer",


    desc: "Gunting model anak perempuan oval, bob imut, atau layer."
  },
  {
    id: "hair-05",
    category: "hair",
    categoryName: "Hair Cut & Styling",
    name: "Women's Haircut (Rata / Oval)",


    popular: true,
    desc: "Potongan rambut wanita model rata klasik atau oval cantik."
  },
  {
    id: "hair-06",
    category: "hair",
    categoryName: "Hair Cut & Styling",
    name: "Hair Trimming",



    desc: "Rapikan ujung rambut bercabang agar sehat dan bertumbuh lebat."
  },
  {
    id: "hair-07",
    category: "hair",
    categoryName: "Hair Cut & Styling",
    name: "Haircut Butterfly / French Layer",


    popular: true,
    badge: "Trending 🔥",
    desc: "Potongan ber-layer bervolume ala selebgram yang anggun dan flowy."
  },
  {
    id: "hair-08",
    category: "hair",
    categoryName: "Hair Cut & Styling",
    name: "Hairwash",



    desc: "Keramas bersih tuntas dengan pijatan ringan menyegarkan kepala."
  },
  {
    id: "hair-09",
    category: "hair",
    categoryName: "Hair Cut & Styling",
    name: "Catok (Short, Medium)",



    desc: "Styling catok lurus halus berkilau untuk rambut pendek hingga sedang."
  },
  {
    id: "hair-10",
    category: "hair",
    categoryName: "Hair Cut & Styling",
    name: "Catok Long",



    desc: "Styling catok rapi & tahan seharian untuk rambut panjang."
  },
  {
    id: "hair-11",
    category: "hair",
    categoryName: "Hair Cut & Styling",
    name: "Curly Styling",



    desc: "Keriting gantung atau gelombang anggun untuk acara & photoshoot."
  },
  {
    id: "hair-12",
    category: "hair",
    categoryName: "Hair Cut & Styling",
    name: "Blow In",



    desc: "Blow masuk ke dalam membuat tampilan rambut fresh dan rapi."
  },
  {
    id: "hair-13",
    category: "hair",
    categoryName: "Hair Cut & Styling",
    name: "Blow Out / Variasi",


    desc: "Blow mengembang bervolume maksimal untuk rambut tampak tebal memukau."
  },

  // --- HAIR TREATMENT ---
  {
    id: "treat-01",
    category: "treatment",
    categoryName: "Hair Treatment",
    name: "Creambath Tradisional (Alpukat/Ginseng/Lidah Buaya)",



    popular: true,
    desc: "Pijatan leher & kepala rileks dengan ekstrak alami penyubur rambut."
  },
  {
    id: "treat-02",
    category: "treatment",
    categoryName: "Hair Treatment",
    name: "Creambath Milk",


    desc: "Nutrisi protein susu melembutkan helai rambut kering dan kusam."
  },
  {
    id: "treat-03",
    category: "treatment",
    categoryName: "Hair Treatment",
    name: "Creambath MAKARIZO (Coklat / Berry / Vanilla / Mint)",


    popular: true,
    badge: "Favorit 🌸",
    desc: "Sensasi wangi aromaterapi mewah & nutrisi intensif dari Makarizo."
  },
  {
    id: "treat-04",
    category: "treatment",
    categoryName: "Hair Treatment",
    name: "Hairspa Anti Dandruff",


    desc: "Formula cooling basmi ketombe, redakan gatal, dan segarkan kulit kepala."
  },
  {
    id: "treat-05",
    category: "treatment",
    categoryName: "Hair Treatment",
    name: "Hairmask Deep Repair",


    desc: "Masker pemulih serat rambut yang rapuh akibat paparan panas."
  },
  {
    id: "treat-06",
    category: "treatment",
    categoryName: "Hair Treatment",
    name: "Hairmask Color Lock",


    desc: "Kunci kilau warna rambut agar tahan lama dan tidak mudah pudar."
  },
  {
    id: "treat-07",
    category: "treatment",
    categoryName: "Hair Treatment",
    name: "Hairspa L'ORÉAL Professional",


    popular: true,
    desc: "Perawatan salon kelas dunia dengan formula hidrasi mendalam L'Oréal."
  },
  {
    id: "treat-08",
    category: "treatment",
    categoryName: "Hair Treatment",
    name: "Hairmask Keratin Booster",


    badge: "Best Seller ✨",
    desc: "Injeksi keratin mikro mengembalikan kelenturan rambut elastis & lembut."
  },
  {
    id: "treat-09",
    category: "treatment",
    categoryName: "Hair Treatment",
    name: "Hair Serum Application",



    desc: "Serum vitamin konsentrat tinggi pelindung kutikula rambut."
  },
  {
    id: "treat-10",
    category: "treatment",
    categoryName: "Hair Treatment",
    name: "Hair Tonic Herbal",



    desc: "Tonik penyegar akar merangsang pertumbuhan rambut baru."
  },
  {
    id: "treat-11",
    category: "treatment",
    categoryName: "Hair Treatment",
    name: "Hair Scrub Detox Kulit Kepala",


    desc: "Eksfoliasi lembut angkat sisa minyak, debu, & residu hair styling."
  },

  // --- HAIR STRAIGHTENING & KERATIN ---
  {
    id: "str-01",
    category: "straightening",
    categoryName: "Straightening & Keratin",
    name: "Smoothing Matrix",



    popular: true,
    desc: "Lurus natural dan rapi jatuh dengan teknologi Matrix Opti.Smooth."
  },
  {
    id: "str-02",
    category: "straightening",
    categoryName: "Straightening & Keratin",
    name: "Smoothing Diamond",



    desc: "Formula ekstra kilau bagai berlian, lembut saat disentuh."
  },
  {
    id: "str-03",
    category: "straightening",
    categoryName: "Straightening & Keratin",
    name: "Smoothing Collagen",



    badge: "Favorit 🌟",
    desc: "Smoothing diperkaya kolagen agar rambut tetap kenyal dan tidak kaku."
  },
  {
    id: "str-04",
    category: "straightening",
    categoryName: "Straightening & Keratin",
    name: "Keratin Smoothing (Glass Hair Effect)",



    popular: true,
    badge: "Signature ⭐",
    desc: "Efek rambut kaca super lurus berkilau tanpa merusak kutikula asli."
  },
  {
    id: "str-05",
    category: "straightening",
    categoryName: "Straightening & Keratin",
    name: "Keratin Filler",



    desc: "Mengisi celah rambut rapuh/berpori agar kembali tebal dan teratur."
  },
  {
    id: "str-06",
    category: "straightening",
    categoryName: "Straightening & Keratin",
    name: "Keratin Filler Therapy",



    desc: "Terapi intensif pemulihan rambut bercabang, kering, dan ngembang."
  },
  {
    id: "str-07",
    category: "straightening",
    categoryName: "Straightening & Keratin",
    name: "Keratin Treatment Deep Moisture",



    desc: "Perawatan keratin lengkap untuk kelembutan maksimal hingga berbulan-bulan."
  },

  // --- HAIR COLORING ---
  {
    id: "col-01",
    category: "coloring",
    categoryName: "Hair Coloring",
    name: "Hair Toning",



    desc: "Netralkan warna kuning/kusam dan segarkan kembali rona warna rambutmu."
  },
  {
    id: "col-02",
    category: "coloring",
    categoryName: "Hair Coloring",
    name: "Peek A Boo / Hidden Color",



    popular: true,
    badge: "Trendy 💜",
    desc: "Warna tersembunyi di lapisan dalam rambut yang estetik saat dikuncir."
  },
  {
    id: "col-03",
    category: "coloring",
    categoryName: "Hair Coloring",
    name: "Highlight Rambut",



    desc: "Aksen garis helai terang memberi dimensi rambut bertekstur modis."
  },
  {
    id: "col-04",
    category: "coloring",
    categoryName: "Hair Coloring",
    name: "Bleaching Aman",



    desc: "Teknik bleaching terkontrol dengan formula pelindung kutikula."
  },
  {
    id: "col-05",
    category: "coloring",
    categoryName: "Hair Coloring",
    name: "Balayage / Highlight Mix",



    popular: true,
    desc: "Gradasi warna halus menyatu alami seperti sapuan kuas para ahli."
  },
  {
    id: "col-06",
    category: "coloring",
    categoryName: "Hair Coloring",
    name: "Full Head Fashion Color",



    desc: "Pilihan warna kekinian (Ash Grey, Lavender, Milk Tea, Rose Gold)."
  },
  {
    id: "col-07",
    category: "coloring",
    categoryName: "Hair Coloring",
    name: "Basic Color (Hitam / Coklat Natural)",



    desc: "Pewarnaan merata seluruh kepala untuk tutup uban atau warna natural."
  },
  {
    id: "col-08",
    category: "coloring",
    categoryName: "Hair Coloring",
    name: "Extra Olaplex Protection",


    badge: "Anti Rusak 🛡️",
    desc: "Tambahan Olaplex asli untuk cegah rambut patah saat proses kimia."
  },
  {
    id: "col-09",
    category: "coloring",
    categoryName: "Hair Coloring",
    name: "Extra Smartplex Bond Multiplier",


    desc: "Lindungi ikatan rambut agar tetap kuat dan lembut setelah diwarnai."
  },

  // --- WAVE PERMANENT & PERM ---
  {
    id: "wave-01",
    category: "wave",
    categoryName: "Wave Permanent & Perm",
    name: "Wave Permanent (Korean Wave)",



    popular: true,
    desc: "Ikal permanen anggun natural ala artis Korea, mudah diatur sehari-hari."
  },
  {
    id: "wave-02",
    category: "wave",
    categoryName: "Wave Permanent & Perm",
    name: "Down Perm",


    desc: "Luruskan rambut bagian samping/belakang yang sering jegrik/mekar."
  },

  // --- HAIR EXTENSION ---
  {
    id: "ext-01",
    category: "extension",
    categoryName: "Hair Extension",
    name: "Hair Extension (Per Helai)",



    desc: "Sambung rambut helai premium asli lembut dan menyatu sempurna."
  },
  {
    id: "ext-02",
    category: "extension",
    categoryName: "Hair Extension",
    name: "Pasang Extension Ring",


    desc: "Jasa pasang sambung rambut teknik ring rapi & nyaman."
  },
  {
    id: "ext-03",
    category: "extension",
    categoryName: "Hair Extension",
    name: "Pasang Extension Kepang",


    desc: "Pemasangan sambung teknik kepang kuat dan tahan lama."
  },
  {
    id: "ext-04",
    category: "extension",
    categoryName: "Hair Extension",
    name: "Remove Hair Extension (Per Helai)",



    desc: "Pelepasan sambung rambut hati-hati tanpa merusak rambut asli."
  },

  // --- NAIL CARE ---
  {
    id: "nail-01",
    category: "nail",
    categoryName: "Nail Care",
    name: "Manicure Express",


    desc: "Potong, bentuk kuku rapi, dan bersihkan kutikula secara cepat."
  },
  {
    id: "nail-02",
    category: "nail",
    categoryName: "Nail Care",
    name: "Manicure Regular",


    desc: "Perawatan tangan & kuku menyeluruh dengan rendaman hangat dan vitamin."
  },
  {
    id: "nail-03",
    category: "nail",
    categoryName: "Nail Care",
    name: "Manicure Spa (Scrub + Garam Spa)",


    popular: true,
    desc: "Sensasi spa garam aromaterapi & scrub halus untuk tangan lembut halus."
  },
  {
    id: "nail-04",
    category: "nail",
    categoryName: "Nail Care",
    name: "Pedicure Regular",


    desc: "Bersihkan kuku kaki, hilangkan kulit mati telapak, bersih bersinar."
  },
  {
    id: "nail-05",
    category: "nail",
    categoryName: "Nail Care",
    name: "Pedicure Spa (Scrub + Garam Spa)",


    popular: true,
    desc: "Relaksasi rendaman garam spa dan scrub kaki lembut bebas bau & pegal."
  },
  {
    id: "nail-06",
    category: "nail",
    categoryName: "Nail Care",
    name: "Gel Polish Kuku",


    desc: "Cat kuku gel awet hingga berminggu-minggu, mengkilap tahan gores."
  },
  {
    id: "nail-07",
    category: "nail",
    categoryName: "Nail Care",
    name: "Nail Art Cantik (Per Jari)",



    desc: "Kreasi gambar, glitter, gradasi, atau hiasan cantik di kuku."
  },
  {
    id: "nail-08",
    category: "nail",
    categoryName: "Nail Care",
    name: "Nail Polish Remove",



    desc: "Hapus kutek biasa atau kutek gel dengan larutan ramah kuku."
  },

  // --- FACE & EYE SPA ---
  {
    id: "face-01",
    category: "face",
    categoryName: "Face & Eye Care",
    name: "Therapy Relaksasi Mata",


    desc: "Redakan mata lelah, mata panda, dan tegang akibat layar handphone."
  },
  {
    id: "face-02",
    category: "face",
    categoryName: "Face & Eye Care",
    name: "Face Cleansing, Scrub & Face Mask",


    popular: true,
    desc: "Pembersihan pori-pori wajah, angkat komedo, dan masker segar."
  },
  {
    id: "face-03",
    category: "face",
    categoryName: "Face & Eye Care",
    name: "Extra Masker Vitamin C",


    desc: "Mencerahkan kulit kusam seketika dan kaya antioksidan."
  },
  {
    id: "face-04",
    category: "face",
    categoryName: "Face & Eye Care",
    name: "Extra Masker Anti Aging",


    desc: "Kencangkan elastisitas kulit dan samarkan garis halus."
  },
  {
    id: "face-05",
    category: "face",
    categoryName: "Face & Eye Care",
    name: "Extra Eye Mask Soothing",


    desc: "Sensasi dingin sejuk mengempiskan kantung mata bengkak."
  },
  {
    id: "face-06",
    category: "face",
    categoryName: "Face & Eye Care",
    name: "Brow Shaping (Bentuk Alis)",



    desc: "Rapikan alis presisi sesuai bentuk proporsi wajahmu."
  },

  // --- BODY SPA & REFLEXY ---
  {
    id: "body-01",
    category: "spa",
    categoryName: "Body Spa & Reflexy",
    name: "Back Massage (Pijat Punggung)",


    popular: true,
    desc: "Redakan pegal di punggung, bahu, dan pinggang setelah seharian bekerja."
  },
  {
    id: "body-02",
    category: "spa",
    categoryName: "Body Spa & Reflexy",
    name: "Kerik Tradisional Hangat",


    desc: "Terapi masuk angin tradisional yang ampuh dengan minyak hangat aroma terapi."
  },
  {
    id: "body-03",
    category: "spa",
    categoryName: "Body Spa & Reflexy",
    name: "Foot Spa Relaksasi",


    desc: "Rendam kaki air hangat, scrub rempah, dan pijatan ringan telapak kaki."
  },
  {
    id: "body-04",
    category: "spa",
    categoryName: "Body Spa & Reflexy",
    name: "Foot Spa Complete Treatment",


    popular: true,
    badge: "Paling Nyaman 💆‍♀️",
    desc: "Paket lengkap foot spa, scrub garam, masker kaki & pijat refleksi mendalam."
  },
  {
    id: "body-05",
    category: "spa",
    categoryName: "Body Spa & Reflexy",
    name: "Reflexy Kaki & Titik Syaraf",


    desc: "Pijatan tepat pada titik syaraf kaki untuk lancarkan peredaran darah."
  },
  {
    id: "body-06",
    category: "spa",
    categoryName: "Body Spa & Reflexy",
    name: "Reflexy Full Body Massage",


    popular: true,
    badge: "Super Rileks 🌸",
    desc: "Pijat relaksasi seluruh tubuh dari ujung kepala hingga kaki, bebas pegal."
  },
  {
    id: "body-07",
    category: "spa",
    categoryName: "Body Spa & Reflexy",
    name: "Body Scrub Alami",



    desc: "Lulur scrub angkat daki kulit mati, kulit jadi cerah dan wangi semerbak."
  },
  {
    id: "body-08",
    category: "spa",
    categoryName: "Body Spa & Reflexy",
    name: "Body Mask Nutrisi",



    desc: "Baluran masker tubuh mengencangkan dan melembapkan kulit secara mendalam."
  },

  // --- MAKE UP & HAIRDO ---
  {
    id: "mu-01",
    category: "makeup",
    categoryName: "Make Up & Styling",
    name: "Make Up (Natural / Party / Wisuda)",



    popular: true,
    desc: "Riasan flawless tahan lama, glowing, dan menyesuaikan tema acara."
  },
  {
    id: "mu-02",
    category: "makeup",
    categoryName: "Make Up & Styling",
    name: "Hairdo Elegan",



    desc: "Sanggul modern, kepang artistic, atau updo anggun untuk pesta."
  },
  {
    id: "mu-03",
    category: "makeup",
    categoryName: "Make Up & Styling",
    name: "Event Hair Styling",



    desc: "Penataan gaya rambut cepat dan stay sepanjang acara pentingmu."
  }
];

// STATE MANAGEMENT
let selectedServices = new Map(); // id -> service object
let activeCategory = "all";
let searchQuery = "";


// FORMAT TANGGAL INDONESIA
function formatTanggalIndo(dateStr) {
  if (!dateStr) return "-";
  const [year, month, day] = dateStr.split("-");
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const d = new Date(year, month - 1, day);
  return `${days[d.getDay()]}, ${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;
}

// STATUS JAM BUKA SALON (WIB: UTC+7)
function updateSalonStatus() {
  const statusEl = document.getElementById("salon-status-badge");
  if (!statusEl) return;

  const now = new Date();
  // Hitung jam WIB
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const wibDate = new Date(utc + (3600000 * 7));
  const currentHour = wibDate.getHours();
  const currentMin = wibDate.getMinutes();
  const currentTime = currentHour + currentMin / 60;

  // Buka 10.00 s/d 20.00
  if (currentTime >= 10 && currentTime < 20) {
    statusEl.innerHTML = `<span class="status-dot online"></span> <strong>Buka Sekarang</strong> • Tutup jam 20.00 WIB`;
    statusEl.className = "status-badge open";
  } else {
    statusEl.innerHTML = `<span class="status-dot offline"></span> <strong>Sedang Istirahat/Tutup</strong> • Buka besok 10.00 WIB (Booking Tetap Bisa!)`;
    statusEl.className = "status-badge closed";
  }
}

// RENDER SERVICE LIST & BOOKING SELECTION
function renderServices() {
  const container = document.getElementById("pricelist-items-container");
  if (!container) return;

  const filtered = SALON_SERVICES.filter(service => {
    const matchCat = activeCategory === "all" || service.category === activeCategory;
    const matchSearch = searchQuery === "" || 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-search-state">
        <div class="empty-icon">🔍</div>
        <h3>Layanan Tidak Ditemukan</h3>
        <p>Coba gunakan kata kunci lain seperti <em>creambath</em>, <em>smoothing</em>, <em>cut</em>, atau <em>nail</em>.</p>
        <button class="btn-secondary-sm" onclick="resetSearch()">Lihat Semua Layanan</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(service => {
    const isSelected = selectedServices.has(service.id);
    const badgeHtml = service.badge ? `<span class="service-chip-badge">${service.badge}</span>` : "";
    return `
      <div class="service-card ${isSelected ? 'selected' : ''}" data-id="${service.id}" onclick="toggleServiceSelection('${service.id}')">
        <div class="service-card-header">
          <div class="service-meta">
            <span class="service-cat-tag">${service.categoryName}</span>
            ${badgeHtml}
          </div>
          <div class="custom-checkbox ${isSelected ? 'checked' : ''}" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="3" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
        </div>
        <h4 class="service-title">${service.name}</h4>
        <p class="service-desc">${service.desc}</p>
        <div class="service-card-footer">
          
          <button type="button" class="btn-select-service ${isSelected ? 'btn-remove' : ''}" onclick="event.stopPropagation(); toggleServiceSelection('${service.id}')">
            ${isSelected ? '✓ Terpilih' : '+ Pilih Layanan'}
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// TOGGLE SELEKSI LAYANAN
function toggleServiceSelection(serviceId) {
  const service = SALON_SERVICES.find(s => s.id === serviceId);
  if (!service) return;

  if (selectedServices.has(serviceId)) {
    selectedServices.delete(serviceId);
    showToast(`Dihapus: ${service.name}`);
  } else {
    selectedServices.set(serviceId, service);
    showToast(`✓ Ditambahkan: ${service.name}`);
  }

  updateBookingUI();
  renderServices();
}

// HAPUS DARI KERANJANG
function removeSelectedService(serviceId) {
  const service = selectedServices.get(serviceId);
  if (service) {
    selectedServices.delete(serviceId);
    showToast(`Dihapus: ${service.name}`);
    updateBookingUI();
    renderServices();
  }
}

// UPDATE BOOKING SUMMARY & ESTIMASI TOTAL
function updateBookingUI() {
  const listContainer = document.getElementById("selected-services-list");
  const totalDisplay = document.getElementById("total-estimate-display");
  const floatingCount = document.getElementById("floating-count");
  const floatingTotal = document.getElementById("floating-total");
  const floatingBar = document.getElementById("floating-booking-bar");
  const stepOneIndicator = document.getElementById("step-1-status");

  const count = selectedServices.size;

  if (count === 0) {
    if (listContainer) {
      listContainer.innerHTML = `
        <div class="no-service-selected">
          <p>👉 Kamu belum memilih layanan. Klik <strong>+ Pilih Layanan</strong> di atas untuk menambahkan treatment yang diminati.</p>
        </div>
      `;
    }
    if (totalDisplay) {
      totalDisplay.innerHTML = `<span style="font-size: 0.95rem; color: #9CA3AF;">Pilih layanan</span>`;
    }
    if (floatingBar) floatingBar.classList.remove("visible");
    if (stepOneIndicator) stepOneIndicator.textContent = "Pilih minimal 1 layanan";
    return;
  }


  const itemsHtml = [];
  selectedServices.forEach(service => {

    itemsHtml.push(`
      <div class="selected-chip">
        <span class="chip-name">${service.name}</span>

        <button type="button" class="chip-remove-btn" title="Hapus layanan" onclick="removeSelectedService('${service.id}')">✕</button>
      </div>
    `);
  });

  if (listContainer) {
    listContainer.innerHTML = `
      <div class="selected-chips-grid">
        ${itemsHtml.join("")}
      </div>
    `;
  }

 



  if (totalDisplay) {
    totalDisplay.innerHTML = `
      <span style="font-size: 0.95rem; color: #065F46; font-weight: 700;">Harga diestimasi stylist/admin sesuai panjang dan ketebalan rambut, konsultasi via WhatsApp 0812 1418 4546.</span>

    `;
  }
  if (floatingCount) floatingCount.textContent = `${count} Layanan Diminati`;
  if (floatingTotal) floatingTotal.textContent = `Konsultasi & Jadwal via WA 💬`;
  if (floatingBar) floatingBar.classList.add("visible");
  if (stepOneIndicator) stepOneIndicator.textContent = `✓ ${count} Layanan Diminati`;
}

// RESET SEARCH
function resetSearch() {
  searchQuery = "";
  const searchInput = document.getElementById("search-service-input");
  if (searchInput) searchInput.value = "";
  renderServices();
}

// INISIALISASI TANGGAL & JAM PICKER
function initDateTimePickers() {
  const dateInput = document.getElementById("booking-date");
  if (!dateInput) return;

  // Tanggal minimal hari ini
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const minDate = `${yyyy}-${mm}-${dd}`;
  dateInput.min = minDate;
  if (!dateInput.value) {
    dateInput.value = minDate;
  }

  // Generate Slot Jam jika belum
  const slotContainer = document.getElementById("time-slots-container");
  if (slotContainer) {
    const slots = [
      "10:00", "11:00", "12:00", "13:00", 
      "14:00", "15:00", "16:00", "17:00", 
      "18:00", "19:00"
    ];

    slotContainer.innerHTML = slots.map((time, idx) => `
      <label class="time-slot-btn ${idx === 2 ? 'active' : ''}">
        <input type="radio" name="booking-time" value="${time}" ${idx === 2 ? 'checked' : ''} onchange="onTimeSlotChange(this)">
        <span>${time} WIB</span>
      </label>
    `).join("");
  }
}

function onTimeSlotChange(radio) {
  document.querySelectorAll(".time-slot-btn").forEach(btn => btn.classList.remove("active"));
  if (radio.parentElement) {
    radio.parentElement.classList.add("active");
  }
}

// GENERATE FORMAT PESAN WHATSAPP OTOMATIS
function generateBookingMessage() {
  const nameInput = document.getElementById("customer-name");
  const phoneInput = document.getElementById("customer-phone");
  const dateInput = document.getElementById("booking-date");
  const timeInput = document.querySelector('input[name="booking-time"]:checked');
  const notesInput = document.getElementById("customer-notes");

  const name = nameInput ? nameInput.value.trim() : "";
  const phone = phoneInput ? phoneInput.value.trim() : "";
  const dateVal = dateInput ? dateInput.value : "";
  const timeVal = timeInput ? timeInput.value : "13:00";
  const notes = notesInput ? notesInput.value.trim() : "";

  if (selectedServices.size === 0) {
    showToast("⚠️ Mohon pilih minimal 1 layanan yang ingin dikonsultasikan!", "error");
    scrollToElement("section-booking");
    return null;
  }

  if (!name) {
    showToast("⚠️ Silakan isi Nama Pelanggan!", "error");
    if (nameInput) nameInput.focus();
    return null;
  }

  // Susun Layanan
  let servicesListText = "";
  let idx = 1;

  selectedServices.forEach(service => {
    servicesListText += `${idx}. ${service.name}\n`;
    idx++;
  });

 



  const tanggalFormatted = formatTanggalIndo(dateVal);

  const message = `Halo Admin AFIQA SALON, saya ingin reservasi jadwal dan konsultasi treatment rambut:\n\n` +
    `👤 *Nama:* ${name}\n` +
    (phone ? `📱 *No. WhatsApp:* ${phone}\n` : "") +
    `📅 *Rencana Kedatangan:* ${tanggalFormatted}\n` +
    `⏰ *Rencana Jam:* ${timeVal} WIB\n\n` +
    `💇‍♀️ *Layanan yang Diminati:*\n${servicesListText}\n` +
    `💰 Harga diestimasi setelah konsultasi via WhatsApp.\n` +
    `ℹ️ _(Saya memahami harga pasti akan dicek dan disesuaikan langsung dengan panjang & ketebalan rambut di salon/via WA)_\n\n` +
    (notes ? `📝 *Kondisi Rambut & Catatan:* ${notes}\n\n` : "") +
    `Mohon info ketersediaan slot jadwal dan konfirmasi estimasi harganya ya Kak. (Saya juga bisa kirim foto rambut jika diperlukan). Terima kasih! ✨`;

  return message;
}

// QUICK HAIR TAGS FOR MOBILE
function addHairTag(tag) {
  const notesInput = document.getElementById("customer-notes");
  if (!notesInput) return;
  const currentText = notesInput.value.trim();
  if (!currentText) {
    notesInput.value = tag;
  } else if (!currentText.toLowerCase().includes(tag.toLowerCase())) {
    notesInput.value = `${currentText}, ${tag}`;
  }
  notesInput.dispatchEvent(new Event("input"));
  notesInput.focus();
}

// KIRIM KE WHATSAPP
function sendBookingWhatsApp() {
  const message = generateBookingMessage();
  if (!message) return;

  const salonWA = "6281214184546";
  const encodedText = encodeURIComponent(message);
  const waUrl = `https://wa.me/${salonWA}?text=${encodedText}`;

  // Buka tab WhatsApp
  window.open(waUrl, "_blank");
  showToast("Membuka WhatsApp AFIQA SALON... 💬", "success");
}

// SALIN FORMAT PESAN
function copyBookingFormat() {
  const message = generateBookingMessage();
  if (!message) return;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(message).then(() => {
      showToast("✓ Format pesan booking berhasil disalin!", "success");
    }).catch(() => {
      fallbackCopyText(message);
    });
  } else {
    fallbackCopyText(message);
  }
}

function fallbackCopyText(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand("copy");
    showToast("✓ Format pesan booking berhasil disalin!", "success");
  } catch (err) {
    showToast("Gagal menyalin teks otomatis.", "error");
  }
  document.body.removeChild(textArea);
}

// SCROLL HALUS KE ELEMENT
function scrollToElement(id) {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -70; // offset fixed header
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

// TOAST NOTIFIKASI
function showToast(msg, type = "info") {
  let toastContainer = document.getElementById("toast-notification");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-notification";
    document.body.appendChild(toastContainer);
  }

  toastContainer.textContent = msg;
  toastContainer.className = `toast-active ${type}`;

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toastContainer.className = "";
  }, 2800);
}


// EVENT LISTENERS INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  // Update Jam Buka Salon
  updateSalonStatus();
  setInterval(updateSalonStatus, 60000);

  // Render Daftar Layanan Awal
  renderServices();

  // Inisialisasi Date & Time Pickers
  initDateTimePickers();

  // Search Filter Input
  const searchInput = document.getElementById("search-service-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderServices();
    });
  }

  // Kategori Tab Buttons
  const tabButtons = document.querySelectorAll(".cat-tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-cat") || "all";
      renderServices();
    });
  });

  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".mobile-toggle-btn");
  const navMenu = document.querySelector(".nav-links");
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", navMenu.classList.contains("active"));
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-question");
  faqItems.forEach(item => {
    item.addEventListener("click", () => {
      const parent = item.parentElement;
      const isActive = parent.classList.contains("active");
      document.querySelectorAll(".faq-item").forEach(f => f.classList.remove("active"));
      if (!isActive) {
        parent.classList.add("active");
      }
    });
  });


});
