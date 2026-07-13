/* =============================================================================
   BANK SOAL — "TIMKER"
   -----------------------------------------------------------------------------
   CUKUP EDIT FILE INI SAJA. File HTML tidak perlu disentuh.
   Pastikan file ini tetap bernama "soaltimker.js" dan SATU FOLDER dengan HTML-nya.

   3 PJ (Penanggung Jawab):
     - Pembelajaran
     - Penilaian
     - Digitalisasi  (masih dikosongkan, tinggal diisi)

   Tiap peserta dapat 5 soal acak. Komposisi diatur di timker.html
   (KOMPOSISI_SOAL). Saat ada PJ yang masih kosong, slotnya otomatis di-topup
   dari PJ lain supaya total tetap 5 — semua PJ yang punya soal pasti kebagian.

   -----------------------------------------------------------------------------
   FORMAT SOAL (3 tipe):

   1) Pilihan ganda tunggal (A–E)  -> tipe: "mcsa"  (atau boleh tidak ditulis)
      {
        tipe:"mcsa",
        teks:"pertanyaan (boleh tag HTML, mis. <em>miring</em> / <br>)",
        pilihan:["A","B","C","D","E"],   // boleh kurang dari 5
        kunci:"A"                         // huruf jawaban benar
      }

   2) Benar–Salah                  -> tipe: "truefalse"
      {
        tipe:"truefalse",
        teks:"pernyataan yang dinilai benar/salah",
        kunci:"Salah"                     // "Benar" / "Salah" (boleh "True"/"False")
        // pilihan TIDAK perlu ditulis; default = ["Benar","Salah"]
      }

   3) Isian singkat (ketik jawaban) -> tipe: "isian"
      {
        tipe:"isian",
        teks:"pertanyaan / teka-teki",
        kunci:"PILAR",                    // jawaban benar (huruf besar/kecil bebas)
        // kunci boleh array kalau ada beberapa jawaban diterima: ["PILAR","Pilar"]
        panjang:5,                        // OPSIONAL: jumlah huruf utk placeholder & batas ketik
        info:"PILAR = Pojok Inovasi..."   // OPSIONAL: keterangan tambahan di pembahasan
      }
      // Penilaian isian: huruf besar/kecil & spasi berlebih diabaikan.

   OPSIONAL untuk semua tipe:
     bacaan : teks bacaan panjang di KOLOM KIRI.
              - Ada bacaan   -> kiri = bacaan, kanan = soal + jawaban
              - Tanpa bacaan -> kiri = soal,   kanan = pilihan jawaban
============================================================================= */

const SOAL_TIMKER = {

  /* ===========================  PJ 1 — PEMBELAJARAN  ======================= */
  "Pembelajaran": {
    soal: [
      {
        tipe:"mcsa",
        teks:`Semangkuk bakso pakai 1 tahu harganya Rp11.000. Harga semangkuk bakso Rp10.000 lebih mahal dari 1 tahu. Berapa harga 1 tahu?`,
        pilihan:[
          `Rp500`,
          `Rp1.000`,
          `Rp1.500`,
          `Rp2.000`,
          `Gratis`
        ],
        kunci:"A"
      },
      {
        tipe:"mcsa",
        teks:`Andi ingin membeli sebuah tas yang semula berharga Rp400.000. Di toko A terdapat diskon 50%, sedangkan di toko B terdapat diskon 30% ditambah potongan Rp50.000. Sebelum memutuskan membeli, Andi menghitung harga akhir di kedua toko dan membandingkannya.<br><br>Kemampuan yang paling dominan digunakan Andi adalah....`,
        pilihan:[
          `Kreativitas dalam berbelanja`,
          `Literasi dan numerasi untuk mengambil keputusan berdasarkan data`,
          `Kemampuan menghafal harga barang`,
          `Kemampuan bernegosiasi dengan penjual`,
          `Kemampuan menggunakan media sosial`
        ],
        kunci:"B"
      },
      {
        tipe:"mcsa",
        teks:`<strong>Kegiatan 1:</strong> Siswa mempelajari cara kerja sensor kelembapan tanah dari internet dan mencatat hasilnya.<br><strong>Kegiatan 2:</strong> Siswa menggunakan pengetahuan tersebut untuk merancang alat penyiram tanaman otomatis yang dapat menyelesaikan masalah kekurangan air di taman sekolah.<br><br>Kegiatan yang paling mencerminkan STEM dengan Pendekatan PjBL adalah....`,
        pilihan:[
          `Kegiatan 1, karena siswa memperoleh informasi baru`,
          `Kegiatan 2, karena siswa menerapkan pengetahuan untuk menyelesaikan masalah nyata`,
          `Kegiatan 1 dan 2 sama kuatnya`,
          `Tidak ada yang termasuk STEM`,
          `Kegiatan 1 karena lebih mudah dilakukan`
        ],
        kunci:"B"
      },
      {
        tipe:"truefalse",
        teks:`STEM merupakan pendekatan pembelajaran yang hanya berfokus pada mata pelajaran Matematika.`,
        kunci:"Salah"
      }
    ]
  },

  /* ===========================  PJ 2 — PENILAIAN  ========================= */
  "Penilaian": {
    soal: [
      {
        tipe:"mcsa",
        teks:`Pak Muh dan Fadil membuat bakso bersama-sama. Setiap Pak Muh membuat 10 butir bakso, Fadil baru selesai membuat 6 butir bakso. Jika totalnya mereka sudah membuat 40 butir bakso bersama-sama, ada berapa butir yang merupakan buatan Fadil?`,
        pilihan:[
          `10`,
          `15`,
          `20`,
          `25`,
          `30`
        ],
        kunci:"B"
      },
      {
        tipe:"mcsa",
        teks:`Di kelas Ramuan, Harry dan Ron ditugaskan membuat Ramuan Penyembuh bersama-sama. Setiap Harry berhasil meracik 10 botol ramuan, Ron baru bisa menyelesaikan 6 botol ramuan. Di tengah jalan, Harry dipanggil oleh Profesor McGonagall dan harus meninggalkan kelas, sehingga Ron terpaksa melanjutkan meracik sendirian hingga menambah 8 botol ramuan lagi. Jika di meja laboratorium sekarang totalnya sudah terkumpul 40 botol ramuan, berapa botol ramuan yang totalnya merupakan buatan Ron dari awal sampai selesai?`,
        pilihan:[
          `12 botol`,
          `18 botol`,
          `20 botol`,
          `24 botol`,
          `32 botol`
        ],
        kunci:"C"
      },
      {
        tipe:"mcsa",
        teks:`SMA Maju Bersama mengalami kendala dalam pengelolaan nilai karena guru masih melakukan input data di beberapa aplikasi berbeda. Akibatnya, proses pelaporan hasil belajar menjadi lambat dan sering terjadi ketidaksesuaian data dengan sistem sekolah. Kepala sekolah kemudian mempertimbangkan penggunaan sistem yang dapat mengelola penilaian sekaligus mendukung sinkronisasi data.<br><br>Maka dari kasus tersebut, pemanfaatan e-Rapor yang tepat adalah….`,
        pilihan:[
          `Menggunakan e-Rapor untuk pengelolaan penilaian`,
          `Memanfaatkan integrasi dengan Dapodik`,
          `Menginput nilai secara manual di beberapa aplikasi berbeda`,
          `Menunda pelaporan sampai akhir tahun ajaran`,
          `Menggunakan spreadsheet terpisah untuk setiap mata pelajaran`
        ],
        kunci:"A"
      }
    ]
  },

  /* ===========================  PJ 3 — DIGITALISASI  ======================= */
  "Digitalisasi": {
    soal: [
      {
        tipe:"mcsa",
        teks:`Dalam pembelajaran digital, murid diminta mencari informasi melalui internet. Kompetensi literasi digital yang paling penting untuk dikembangkan pada kegiatan tersebut adalah...`,
        pilihan:[
          `Kemampuan menemukan informasi sebanyak mungkin dari internet`,
          `Kemampuan menggunakan mesin pencari dengan cepat`,
          `Kemampuan mengevaluasi kredibilitas sumber, membandingkan informasi, serta menggunakan informasi tersebut secara etis dan bertanggung jawab`,
          `Kemampuan mengunduh dokumen dalam berbagai format`,
          `Kemampuan menggunakan lebih banyak aplikasi pencarian informasi`
        ],
        kunci:"C"
      },
      {
        tipe:"mcsa",
        teks:`Pernyataan berikut yang paling tepat menggambarkan karakteristik bahan ajar Gim Edukasi adalah....`,
        pilihan:[
          `Materi memiliki alur eksplorasi yang linier tanpa aturan main tertentu dan hanya mengandalkan teks sebagai elemen utama dalam penyampaian pesan`,
          `Materi memungkinkan murid melakukan eksperimen atau simulasi virtual dengan mengatur variabel secara mandiri untuk melihat perubahan hasil secara realistis`,
          `Materi memiliki alur penyelesaian misi (pathway) yang jelas, memuat mekanisme permainan yang dinamis, serta menampilkan skor atau hasil akhir sebagai bentuk apresiasi`,
          `Materi berupa rekaman gambar bergerak yang menggabungkan elemen visual dan audio untuk menjelaskan sebuah konsep keilmuan tertentu`,
          `Materi berisi visualisasi data atau informasi seperti infografis atau poster, dengan gambar sebagai elemen utama dan teks sebagai pelengkap`
        ],
        kunci:"C"
      },
      {
        tipe:"isian",
        teks:`Saya adalah sudut khusus yang menjadi wadah kolaborasi bagi guru dan murid. Saya mendorong terciptanya berbagai kreasi dan inovasi berbasis teknologi. Saya juga menjadi pusat pengembangan literasi digital sekaligus tempat berbagi praktik baik pembelajaran. 💬<br><br><strong>Saya adalah…</strong>`,
        kunci:"PILAR",
        panjang:5,
        info:`PILAR = Pojok Inovasi dan Literasi Digital untuk Pembelajaran.`
      }
    ]
  }

};
