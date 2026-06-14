/* =============================================================================
   BANK SOAL — "Berani Coba TKA"
   -----------------------------------------------------------------------------
   CUKUP EDIT FILE INI SAJA. File HTML tidak perlu disentuh.
   Pastikan file ini tetap bernama "soaltka.js" dan SATU FOLDER dengan HTML-nya.

   PENGATURAN.jumlahSoalTampil : berapa soal yang muncul per sesi.
   Tiap mapel berisi 10 soal, tapi yang tampil hanya 5 (diambil ACAK & urutan
   diacak setiap kali mulai / ulangi). Ubah angkanya kalau mau lebih/kurang.

   FORMAT TIAP SOAL:
     teks    : pertanyaan (boleh pakai tag HTML, mis. <em>miring</em>)
     pilihan : 5 jawaban urut A, B, C, D, E
     kunci   : huruf jawaban benar -> "A" / "B" / "C" / "D" / "E"
     bacaan  : (OPSIONAL) teks bacaan di KOLOM KIRI.
               - Ada bacaan   -> kiri = bacaan, kanan = soal + jawaban
               - Tanpa bacaan -> kiri = soal,   kanan = pilihan jawaban
               (tampilan tetap dua kolom apa pun kasusnya)
============================================================================= */

const PENGATURAN = {
  jumlahSoalTampil: 5
};

const SOAL_TKA = {

  "Bahasa Indonesia": {
    soal: [
      { bacaan:"<p>Ini contoh teks bacaan untuk Bahasa Indonesia. Ganti dengan teks asli dari tim.</p>", teks:"Contoh Soal 1", pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { bacaan:"<p>Ini contoh teks bacaan untuk Bahasa Indonesia. Ganti dengan teks asli dari tim.</p>", teks:"Contoh Soal 2", pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { bacaan:"<p>Ini contoh teks bacaan untuk Bahasa Indonesia. Ganti dengan teks asli dari tim.</p>", teks:"Contoh Soal 3", pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { bacaan:"<p>Ini contoh teks bacaan untuk Bahasa Indonesia. Ganti dengan teks asli dari tim.</p>", teks:"Contoh Soal 4", pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { bacaan:"<p>Ini contoh teks bacaan untuk Bahasa Indonesia. Ganti dengan teks asli dari tim.</p>", teks:"Contoh Soal 5", pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { bacaan:"<p>Ini contoh teks bacaan untuk Bahasa Indonesia. Ganti dengan teks asli dari tim.</p>", teks:"Contoh Soal 6", pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { bacaan:"<p>Ini contoh teks bacaan untuk Bahasa Indonesia. Ganti dengan teks asli dari tim.</p>", teks:"Contoh Soal 7", pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { bacaan:"<p>Ini contoh teks bacaan untuk Bahasa Indonesia. Ganti dengan teks asli dari tim.</p>", teks:"Contoh Soal 8", pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { bacaan:"<p>Ini contoh teks bacaan untuk Bahasa Indonesia. Ganti dengan teks asli dari tim.</p>", teks:"Contoh Soal 9", pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { bacaan:"<p>Ini contoh teks bacaan untuk Bahasa Indonesia. Ganti dengan teks asli dari tim.</p>", teks:"Contoh Soal 10", pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" }
    ]
  },

  "Matematika": {
    soal: [
      { teks:"Contoh Soal 1",  pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { teks:"Contoh Soal 2",  pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { teks:"Contoh Soal 3",  pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { teks:"Contoh Soal 4",  pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { teks:"Contoh Soal 5",  pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { teks:"Contoh Soal 6",  pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { teks:"Contoh Soal 7",  pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { teks:"Contoh Soal 8",  pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { teks:"Contoh Soal 9",  pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { teks:"Contoh Soal 10", pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" }
    ]
  },

  "Bahasa Inggris": {
    soal: [
      { bacaan:"<p>This is a sample reading text for English. Replace it with the real text from your team.</p>", teks:"Contoh Soal 1",  pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { bacaan:"<p>This is a sample reading text for English. Replace it with the real text from your team.</p>", teks:"Contoh Soal 2",  pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { bacaan:"<p>This is a sample reading text for English. Replace it with the real text from your team.</p>", teks:"Contoh Soal 3",  pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { bacaan:"<p>This is a sample reading text for English. Replace it with the real text from your team.</p>", teks:"Contoh Soal 4",  pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { bacaan:"<p>This is a sample reading text for English. Replace it with the real text from your team.</p>", teks:"Contoh Soal 5",  pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { bacaan:"<p>This is a sample reading text for English. Replace it with the real text from your team.</p>", teks:"Contoh Soal 6",  pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { bacaan:"<p>This is a sample reading text for English. Replace it with the real text from your team.</p>", teks:"Contoh Soal 7",  pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { bacaan:"<p>This is a sample reading text for English. Replace it with the real text from your team.</p>", teks:"Contoh Soal 8",  pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { bacaan:"<p>This is a sample reading text for English. Replace it with the real text from your team.</p>", teks:"Contoh Soal 9",  pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" },
      { bacaan:"<p>This is a sample reading text for English. Replace it with the real text from your team.</p>", teks:"Contoh Soal 10", pilihan:["Jawaban A","Jawaban B","Jawaban C","Jawaban D","Jawaban E"], kunci:"A" }
    ]
  }

};
