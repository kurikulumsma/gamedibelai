/* =============================================================================
   BANK SOAL — "Berani Coba TKA"
   -----------------------------------------------------------------------------
   CUKUP EDIT FILE INI SAJA. File HTML tidak perlu disentuh.
   Pastikan file ini tetap bernama "soaltka.js" dan SATU FOLDER dengan HTML-nya.

   PENGATURAN.jumlahSoalTampil : berapa soal yang muncul per sesi.
   Catatan: Bahasa Indonesia = 10 soal, Bahasa Inggris = 6 soal,
   Matematika = 4 soal. Soal diambil ACAK setiap mulai/ulangi.
   Jika jumlahSoalTampil lebih besar dari jumlah soal sebuah mapel
   (mis. Matematika hanya 4), maka yang tampil maksimal sebanyak soal
   yang tersedia. Ubah angkanya kalau mau lebih/kurang.

   FORMAT TIAP SOAL:
     teks    : pertanyaan (boleh pakai tag HTML, mis. <em>miring</em>)
     pilihan : 5 jawaban urut A, B, C, D, E
     kunci   : huruf jawaban benar -> "A" / "B" / "C" / "D" / "E"
     bacaan  : (OPSIONAL) teks bacaan di KOLOM KIRI.
               - Ada bacaan   -> kiri = bacaan, kanan = soal + jawaban
               - Tanpa bacaan -> kiri = soal,   kanan = pilihan jawaban
============================================================================= */

const PENGATURAN = {
  jumlahSoalTampil: 5
};

const SOAL_TKA = {

  "Bahasa Indonesia": {
    soal: [
      {
        bacaan:`<p><strong>Tradisi Buwuhan: Antara Gotong Royong dan Utang Piutang</strong></p>
<p>Tradisi buwuhan merupakan bagian dari budaya masyarakat Jawa, khususnya di kota-kota besar seperti Surabaya. Tradisi ini dilakukan ketika ada acara penting seperti pernikahan atau khitanan yang diadakan di daerah tersebut. Buwuhan merujuk pada kegiatan memberi bantuan, baik berupa barang, uang, maupun tenaga kepada seseorang yang sedang mengadakan hajatan, atau bisa juga disebut sebagai kegiatan menyumbang. Tradisi ini mencerminkan nilai gotong royong dan solidaritas sosial karena keluarga dan tetangga saling bahu-membahu dalam membantu sesama.</p>
<p>Namun, praktik buwuhan tidak lepas dari unsur pertukaran atau dipandang sebagai utang. Masyarakat meyakini bahwa segala bentuk bantuan yang diberikan akan kembali dalam bentuk yang setara ketika si pemberi mengadakan hajatan serupa. Hal ini menyebabkan buwuhan tidak lagi dipandang murni sebagai hibah atau sedekah, tetapi sebagai bentuk "utang tidak tertulis" yang menimbulkan kewajiban moral untuk membalas.</p>
<p>Dalam praktiknya, buwuhan memang meringankan beban tuan rumah, tetapi dapat menimbulkan tekanan psikologis bagi penerima bantuan. Rasa malu dan kekhawatiran kehilangan harga diri mendorong sebagian orang untuk berutang demi mengembalikan buwuhan. Hal ini menyebabkan terbaginya cara pandang terhadap buwuhan. Ada yang melihatnya sebagai bentuk tolong-menolong, tetapi ada juga yang justru menganggapnya menjadi sistem utang piutang berbasis sosial. Sebagian pihak berpendapat bahwa buwuhan adalah hibah karena tujuannya adalah untuk membantu. Namun, apabila ada keharusan pengembalian, maka secara hukum dan etika, buwuhan telah bergeser dari semangat gotong royong menjadi sebuah kewajiban ekonomi yang membebani. Oleh karena itu, pemahaman masyarakat terhadap tradisi buwuhan perlu diluruskan agar nilai luhur tolong-menolong tetap terjaga tanpa menimbulkan beban yang tidak perlu.</p>`,
        teks:`Apa makna kata <em>hajatan</em> pada teks tersebut?`,
        pilihan:[
          `Kegiatan kerja bakti membersihkan lingkungan sekitar.`,
          `Pertemuan rutin warga untuk membahas masalah lingkungan.`,
          `Diskusi keluarga besar untuk menentukan pembagian warisan.`,
          `Permohonan bantuan yang dilakukan tuan rumah kepada tetangga.`,
          `Acara atau pesta yang diadakan untuk memperingati hal penting.`
        ],
        kunci:"E"
      },
      {
        bacaan:`<p><strong>Layur, Teruslah Berlayar</strong></p>
<p>"Bapak, pulanglah," lirih Layur berharap. Ini hari keenam. Tiga hari adalah waktu terlama nelayan berada di laut. Dengan susah payah, Layur berpindah duduk ke dalam sebuah perahu tua. Penyangga kedua kaki Layur yang tak utuh ia letakkan di sampingnya.</p>
<p>"Jangan-jangan..."</p>
<p>"Tidak... Aku tidak boleh berpikiran buruk. Bapak pasti pulang dengan selamat. Aku akan tetap menunggunya di sini sambil berdoa,"</p>
<p>Layur masih ingat masa-masa dulu, ketika Bapak berlayar pada malam hari dan keesokan harinya sudah merapat kembali di pantai dengan membawa ikan berlimpah.</p>
<p>"Ayo! Siapa mau udang?" panggil Bapak. Layur berlari kencang bersama teman-temannya. Namun, itu adalah kenangan sepuluh tahun silam. Kini, udang dan ikan kecil adalah anugerah besar. Itu pun harus dijaring di tengah laut. Layur ingat betul, Bapak adalah pembuat bondet paling disegani, juga berpengaruh di dusun. Setiap hari, nelayan silih berganti datang ke rumah memesan bondet. Hasil panen ikan berlimpah. Tinggal melemparkan bondet ke dalam laut dan ... bum! Berkuintal-kuintal ikan terapung tinggal diserok menggunakan jaring.</p>
<p>Sampai suatu ketika... DUAAAR!</p>
<p>Separuh rumah Layur luluh lantak karena simpanan bondet di gudang meledak. Ledakan bondet di gudang tak hanya merusak rumah tetapi juga mencelakai anak semata wayang. Ia berteriak minta tolong, menepuk-nepuk dadanya, dan menangis. Itulah titik balik yang amat disesali Bapak. Sejak itu, Bapak meninggalkan usaha pembuatan bondet. Demikian pula dengan warga Dusun Prau tempat mereka berdiam berangsur-angsur meninggalkan cara menangkap ikan dengan bondet.</p>
<p>Lamat-lamat terlihat kibaran layar bercorak biru. Layur beringsut menuruni perahu tempatnya duduk. Lambaian tangan bapaknya semakin jelas dan semakin dekat.</p>
<p>"Bapak dari mana? Bapak sudah tiga hari telat pulang!" Seru Layur kesal. Matanya berkaca-kaca, menahan rindu, dan cemas.</p>
<p><em>Karya Anang YB.</em><br><em>Bondet: istilah lokal yang merujuk pada bahan peledak rakitan, sering disebut juga bom ikan.</em></p>`,
        teks:`Berdasarkan teks tersebut, bagaimana sifat yang dimiliki oleh Layur?`,
        pilihan:[
          `Nekat dan optimis`,
          `Mudah cemas dan tabah`,
          `Penuh harap dan kasih sayang`,
          `Suka menyendiri dan tegas`,
          `Cepat panik dan menyalahkan keadaan`
        ],
        kunci:"C"
      },
      {
        bacaan:`<p>Di sebuah daerah wisata yang terkenal dengan pantainya yang indah, pemerintah setempat gencar mengampanyekan "Pantai Bersih Tanpa Sampah." Spanduk dan papan peringatan terpampang di berbagai sudut. Namun, kenyataannya seringkali berbeda.</p>
<p>Suatu sore, Pak Wayan, seorang nelayan tua yang sudah puluhan tahun melaut, sedang membersihkan jaringnya di tepi pantai. Di sampingnya, sekelompok turis muda asyik berpose untuk berfoto. Mereka mengenakan topi pantai yang modis, kacamata hitam, dan membawa botol minum berwarna-warni.</p>
<p>"Wah, pantainya bersih banget ya, guys!" seru salah satu turis sambil memegang ponselnya. "Pas banget buat konten 'liburan ramah lingkungan'!"</p>
<p>Temannya menimpali, "Iya! Nanti caption-nya 'Menikmati keindahan alam tanpa jejak, menjaga bumi kita tercinta!'"</p>
<p>Setelah puas berfoto dari berbagai sudut dengan beragam filter, mereka beranjak pergi. Namun mereka meninggalkan botol minuman plastik kosong, bungkus keripik, dan beberapa puntung rokok yang disembunyikan di balik semak-semak. Mereka bahkan tidak berusaha mencari tempat sampah yang hanya berjarak beberapa meter.</p>
<p>Pak Wayan hanya bisa menggelengkan kepala. Ia berjalan mendekat dan memungut sampah-sampah itu satu per satu. Ia sudah terbiasa dengan pemandangan ini. Para turis datang untuk menikmati keindahan, berfoto, membuat konten, lalu pergi meninggalkan "kenangan" dalam bentuk sampah.</p>
<p>Tak lama kemudian, seorang petugas kebersihan berseragam oranye datang dengan sapu dan karung. "Pak Wayan, sudah banyak lagi ya sampahnya?" tanyanya sambil menghela napas.</p>
<p>"Sudah biasa, Nak," jawab Pak Wayan. "Ini namanya 'sampah estetik'. Cuma bagus di foto, tapi busuk di mata dan bau di hidung."</p>
<p>Petugas itu tersenyum masam. "Iya, Pak. Kata mereka peduli lingkungan, tapi pedulinya cuma di caption media sosial."</p>
<p>Malam harinya, di akun media sosial Pak Wayan—yang diajari cucunya—ia melihat foto-foto pantai yang diunggah para turis tadi. Pantai tampak bersih sempurna, dihiasi filter matahari terbenam yang memukau. Ia membaca caption-nya: "Surgaku, jangan kau kotori!"</p>
<p>Pak Wayan hanya bisa tersenyum getir. Sepertinya, slogan "Pantai Bersih Tanpa Sampah" itu hanya berlaku untuk kamera dan media sosial. Sementara di balik layar, jejak yang ditinggalkan justru lebih nyata dan memprihatinkan daripada gambar yang dipamerkan.</p>`,
        teks:`Manakah urutan peristiwa berikut yang paling sesuai dengan isi teks?`,
        pilihan:[
          `Pak Wayan melihat foto turis di media sosial ➡️ petugas kebersihan datang ➡️ turis membuat konten`,
          `Turis berfoto dan membuat konten ➡️ Pak Wayan memungut sampah ➡️ petugas kebersihan datang`,
          `Pemerintah mengampanyekan kebersihan ➡️ Pak Wayan melihat foto turis ➡️ petugas kebersihan datang`,
          `Petugas kebersihan datang ➡️ turis membuat konten di media sosial ➡️ Pak Wayan memungut sampah`,
          `Pak Wayan memungut sampah ➡️ turis membuat konten ➡️ pemerintah mengampanyekan kebersihan`
        ],
        kunci:"B"
      },
      {
        bacaan:`<p><strong>Prospek Ekonomi Global di Tengah Ketidakpastian</strong></p>
<p>Jakarta, Senin, 16 Juni 2025 — Perekonomian global terus menghadapi tantangan signifikan di tengah ketidakpastian geopolitik dan tekanan inflasi yang persisten. Analisis terbaru yang dirilis oleh Dana Moneter Internasional (IMF) menunjukkan adanya divergensi dalam laju pemulihan ekonomi antarwilayah, di mana beberapa negara seperti Amerika Serikat dan India menunjukkan ketahanan yang lebih baik, sementara negara-negara di Eropa dan Tiongkok masih berjuang mengatasi dampak guncangan eksternal.</p>
<p>Kenaikan harga energi dan pangan tetap menjadi pendorong utama inflasi di banyak negara, dipicu oleh gangguan rantai pasok global dan konflik di Ukraina, memaksa bank sentral untuk mempertahankan kebijakan moneter yang ketat. Upaya ini, meskipun esensial untuk mengendalikan kenaikan harga, berpotensi mengerem pertumbuhan ekonomi. Para pengambil kebijakan dihadapkan pada dilema sulit: menyeimbangkan kebutuhan untuk meredam inflasi tanpa memicu resesi yang dalam.</p>
<p>"Kami melihat adanya perlambatan pertumbuhan global yang signifikan di tahun ini, dan risiko resesi menjadi lebih nyata jika bank sentral terlalu agresif dalam menaikkan suku bunga," ujar seorang ekonom senior dari Bank Dunia dalam sebuah webinar.</p>
<p>Di sisi lain, sektor manufaktur global menunjukkan tanda-tanda perlambatan, tercermin dari menurunnya indeks manajer pembelian (PMI) di beberapa ekonomi besar seperti Jerman dan Jepang. Penurunan permintaan ekspor dan gangguan rantai pasok masih menjadi perhatian utama bagi produsen. Namun, sektor jasa justru menunjukkan resiliensi yang lebih kuat, didukung oleh kembali normalnya aktivitas setelah pandemi.</p>
<p>Pasar tenaga kerja di beberapa negara maju masih relatif ketat, dengan tingkat pengangguran yang rendah. Kondisi ini memberikan dukungan terhadap daya beli konsumen, meskipun tekanan biaya hidup yang tinggi dapat mengikis dampaknya. Sementara itu, investasi langsung asing (FDI) cenderung melambat, mencerminkan kehati-hatian investor di tengah prospek ekonomi yang tidak menentu.</p>
<p>Ke depan, koordinasi kebijakan ekonomi antarnegara akan menjadi kunci untuk menstabilkan kondisi global. Reformasi struktural yang bertujuan meningkatkan produktivitas dan daya saing juga dianggap krusial untuk memastikan pertumbuhan yang berkelanjutan dalam jangka panjang. Bagi Indonesia, kondisi ini menuntut kewaspadaan dan diversifikasi ekonomi agar tidak terlalu rentan terhadap gejolak global.</p>`,
        teks:`Peristiwa yang menggambarkan tantangan perekonomian global adalah...`,
        pilihan:[
          `Bank sentral di seluruh dunia mengesampingkan kebijakan moneter demi pertumbuhan ekonomi global`,
          `Geopolitik berperan penting dalam menjaga kestabilan dan kekuatan perekonomian pada skala global`,
          `Pertumbuhan ekonomi melambat sehingga memicu terjadinya resesi yang dialami masyarakat secara global`,
          `Harga energi, pangan, dan komoditas lainnya yang tidak menentu terus menekan daya beli masyarakat`,
          `Geopolitik memperlancar jalur perdagangan dan produksi sehingga menciptakan inflasi besar-besaran`
        ],
        kunci:"D"
      },
      {
        bacaan:`<p><strong>Roh Meratus</strong></p>
<p>Kami kembali berjalan pulang. Kondisiku sudah sepenuhnya normal. Tetua melangkah di depanku. Tak kusangka, dalam keadaan kritis ternyata kami telah sangat jauh memasuki belantara. Aku memperhatikan pohon-pohon besar yang kami lewati. Sinar matahari bahkan hampir tak bisa menembus ke bawah.</p>
<p>Aku merasa asing di tempat ini. Pohon-pohon yang berlumut itu, sulur-sulur yang bergantungan, semak-semak yang rimbun itu. Oh... ternyata belantara ini adalah tempat menakjubkan. Bayangkan, di lumut batang pohon itu udang-udang kecil berloncatan lincah. Belum pernah aku melihat udang hidup di batang pohon!</p>
<p>"Kau tahu anak muda, tempat ini merasa terancam dengan keberadaan..." tetua menghentikan langkahnya dan mengambil sesuatu dalam butah. "Roh Meratus meniupkan wisa ke tubuh kalian, sayang kawan-kawanmu yang lain terlambat," sambungnya kemudian melemparkan gulungan kertas yang diambil dari butah. Sigap kutangkap gulungan itu.</p>
<p>"Itu peta yang kuambil dari ranselmu. Ternyata kalian memasang patok-patok dan memberi tanda pohon-pohon besar untuk ditebang. Dan perlu kau ketahui anak muda, tempat ini juga termasuk wilayah yang akan kalian pasangi patok-patok itu," katanya dingin.</p>
<p>Perlahan kubuka gulungan peta di tanganku. Dari peta terlihat jelas, pekerjaan kami tinggal sedikit lagi. Jika saja semuanya lancar, maka kami akan sampai di tempat ini dan selesailah kontrak kerja kami. Dalam waktu singkat, mungkin alat-alat berat akan didatangkan! Pohon-pohon ini, sulur-sulur ini, lumut-lumut ini, udang-udang ini... akan bagaimana?</p>
<p>"Tetua, izinkan aku tinggal di sini dan bersama kaummu menjaga tempat ini..." Akhirnya setelah lama hanya diam, aku menatap mata tetua mantap.</p>
<p><em>Cerpen karya Zaidinoor.</em><br><em>Butah: wadah atau tempat yang digunakan untuk membawa sesuatu, biasanya terbuat dari anyaman rotan atau bambu. Wisa: bisa atau racun.</em></p>`,
        teks:`Apa yang menyebabkan konflik dalam kutipan cerpen tersebut?`,
        pilihan:[
          `Tokoh utama dan kawan-kawan tersesat di tengah hutan belantara`,
          `Kawan-kawan tokoh utama mengalami hal buruk karena wisa yang ditiupkan`,
          `Tetua menemukan peta dari ransel tokoh utama`,
          `Ketua adat tidak menyukai kehadiran orang luar di wilayahnya`,
          `Kelompok tokoh utama dianggap mengancam kelestarian hutan`
        ],
        kunci:"E"
      },
      {
        bacaan:`<p><strong>Tari Hudoq: Warisan Budaya yang Harus Dilestarikan</strong></p>
<p>Tari Hudoq dari suku Dayak Modang di Kalimantan Timur bukan sekadar tontonan seni biasa. Lebih dari itu, tarian ini adalah warisan budaya yang sarat akan makna spiritual dan simbolis. Oleh karena itu, melestarikan Tari Hudoq menjadi sebuah keharusan, tidak hanya untuk menjaga keragaman budaya Indonesia, tetapi juga untuk mengingatkan kita akan pentingnya hubungan harmonis antara manusia dan alam.</p>
<p>Pertama, Tari Hudoq adalah cerminan dari kearifan lokal yang mengajarkan nilai-nilai fundamental. Tarian ini merupakan bagian integral dari ritual keagamaan untuk menjalin hubungan harmonis dengan roh penjaga pertanian, Halaeng Heboung, dan roh pelindung umat manusia, Selo Sen. Dalam era modern yang sering kali mengabaikan hubungan manusia dengan alam, tarian ini berfungsi sebagai pengingat kuat akan ketergantungan kita pada alam dan pentingnya menghormati kekuatan yang lebih besar dari diri kita.</p>
<p>Kedua, setiap elemen dalam Tari Hudoq mengandung simbolisme yang mendalam dan relevan. Penggunaan topeng kayu yang besar dan dedaunan yang menutupi tubuh penari bukan sekadar properti, melainkan representasi kekuatan dan perlindungan dari roh-roh tersebut. Gerakan tari yang menggambarkan keteguhan petani serta nyanyian tradisional yang mengiringinya adalah permohonan tulus kepada alam semesta untuk memberikan keseimbangan dan kesuksesan panen. Menghilangkan tarian ini berarti menghilangkan simbolisme penting yang telah diwariskan turun-temurun, yang merupakan esensi dari budaya Dayak Modang itu sendiri.</p>
<p>Ketiga, Tari Hudoq memiliki nilai edukatif yang tinggi bagi masyarakat luas, termasuk wisatawan. Pertunjukan ini tidak hanya memukau secara visual, tetapi juga memberikan pemahaman tentang pentingnya keseimbangan alam dan hubungan spiritual yang mendalam. Dengan melestarikan dan memperkenalkan tarian ini kepada publik yang lebih luas, kita tidak hanya menjaga keberadaan tarian itu sendiri, tetapi juga menyebarkan pesan tentang pentingnya menjaga lingkungan dan menghargai nilai-nilai tradisional. Dengan demikian, jelaslah bahwa Tari Hudoq bukan sekadar pertunjukan, melainkan sebuah jembatan spiritual yang menghubungkan manusia dengan alam dan leluhur. Pelestarian Tari Hudoq adalah investasi untuk masa depan, memastikan bahwa nilai-nilai berharga ini tetap hidup dan relevan bagi generasi mendatang.</p>`,
        teks:`Bagaimana keterkaitan antara paragraf ketiga dengan paragraf keempat pada teks tersebut?`,
        pilihan:[
          `Paragraf ketiga dan keempat saling melengkapi argumen tentang pentingnya pelestarian Tari Hudoq`,
          `Paragraf ketiga dan keempat sama-sama menjelaskan tentang ritual pertanian dengan penekanan pada sejarah`,
          `Paragraf ketiga menguraikan makna filosofis Tari Hudoq yang sudah disinggung pada paragraf keempat`,
          `Paragraf ketiga adalah opini penulis tentang Tari Hudoq yang didukung oleh data penjelas pada paragraf keempat`,
          `Paragraf ketiga menjabarkan tantangan budaya tentang Tari Hudoq dan paragraf keempat berisi penyelesaiannya`
        ],
        kunci:"A"
      },
      {
        bacaan:`<p><strong>Interaksi Sosial di Era Digital</strong></p>
<p>Penggunaan telepon genggam menjadi kebutuhan pokok di era digital. Mayoritas masyarakat saat ini sudah menggunakan telepon genggam. Kemudahan akses informasi dan komunikasi yang diperoleh dari penggunaan telepon genggam memberikan manfaat sekaligus dampak yang masif terhadap interaksi sosial di tengah masyarakat.</p>
<p>Berdasarkan data Badan Pusat Statistik (BPS), proporsi individu yang memiliki telepon genggam menurut kelompok umur didominasi oleh orang-orang dengan rentang usia 15–24 tahun. Artinya, masyarakat kelahiran tahun 2000 termasuk individu yang mendominasi pemilik dan pengguna telepon genggam. Individu pada rentang usia tersebut tergolong dalam generasi Z (gen-Z) yang lahir dan tumbuh pada era internet dan telepon genggam.</p>
<p>Perubahan cara komunikasi dari tatap muka ke virtual seiring dengan berkembangnya telepon genggam menjadi ponsel pintar mengubah pola interaksi sosial. Dibanding ruang fisik, gen-Z lebih menyukai interaksi pada ruang virtual. Hal itu mengurangi kualitas interaksi sosial secara langsung. Dalam satu ruang yang sama, mereka bisa lebih fokus pada interaksi virtual melalui ponsel pintar daripada berkomunikasi langsung dengan orang-orang di sekitarnya. Perubahan pola interaksi sosial tersebut merupakan tantangan di era perkembangan teknologi.</p>
<p>Berdasarkan hasil observasi yang dilakukan tahun 2020, sebagian besar informan menyatakan bahwa terdapat faktor eksternal dan internal yang menjadi pemicu terjadinya pergeseran pola interaksi dalam masyarakat. Pertama, faktor eksternal dari alat-alat canggih seperti ponsel pintar yang mampu menghubungkan komunikasi tanpa melalui tatap muka. Kedua, faktor internal berupa ketergantungan ponsel pintar dan perilaku phubbing.</p>
<p>Pergeseran pola interaksi sosial membuat nilai-nilai budaya seperti tenggang rasa, sopan santun, empati, dan kepedulian sosial menurun. Ungkapan "mendekatkan yang jauh dan menjauhkan yang dekat" pada era digital merupakan suatu realitas yang dapat menjadi bahan refleksi untuk semua orang.</p>
<p>Adanya pergeseran pola interaksi sosial secara khusus menuntut orang tua memberikan pemahaman yang lebih pada anaknya agar tetap mempertahankan nilai budaya. Oleh karena itu, perlu kesadaran bersama untuk memanfaatkan ponsel pintar secara bijak tanpa mengabaikan interaksi sosial dalam ruang fisik.</p>`,
        teks:`Hubungan makna antara paragraf tiga dan paragraf empat adalah...`,
        pilihan:[
          `Paragraf tiga merupakan akibat dari faktor-faktor pada paragraf empat`,
          `Paragraf tiga merupakan sebab dari faktor-faktor pada paragraf empat`,
          `Paragraf empat memperkuat persoalan yang dipaparkan pada paragraf tiga`,
          `Paragraf empat merupakan rincian dari persoalan pada paragraf tiga`,
          `Paragraf empat memperjelas gagasan yang ditunjukkan pada paragraf tiga`
        ],
        kunci:"D"
      },
      {
        bacaan:`<p><strong>Pulihkan Ekosistem, Menjaga Planet Kita dari Generasi ke Generasi</strong></p>
<p>Berdasarkan hasil riset LIPI (Lembaga Ilmu Pengetahuan Indonesia) terjadi peningkatan sampah plastik selama pandemi. Hal ini disebabkan oleh penggunaan layanan delivery makanan lewat jasa transportasi online; 96% paket dibungkus dengan plastik yang tebal dan ditambah dengan bubble wrap. Selain itu, selotip, bungkus plastik, dan bubble wrap merupakan pembungkus berbahan plastik yang paling sering ditemukan. Sampah medis juga melonjak. Kementerian Lingkungan Hidup dan Kehutanan (KLHK) menyatakan bahwa selama pandemi, terjadi peningkatan timbunan sampah medis sebesar 30% hingga 50%. Dari data tersebut, Indonesia merupakan negara ke-2 penyumbang polusi sampah di lautan (3,22 metrik ton per tahun).</p>
<p>Salah satu faktor penyebab dari permasalahan tersebut adalah dengan pertambahan jumlah penduduk akan terjadi peningkatan aktivitas manusia dan daya konsumsi yang melonjak. Hal itu menyebabkan meningkatnya jumlah dan jenis limbah sehingga menyebabkan lingkungan menjadi tercemar. Selain sampah, penebangan pohon secara liar sampai pada kebakaran hutan menjadi penyumbang terbesar dalam kerusakan ekosistem. Banyak aktivitas manusia yang mengancam pelestarian lingkungan sehingga menyebabkan ketidakseimbangan ekosistem. Manusia punya peran besar dalam menjaga keseimbangan ekosistem, bukan cuma untuk sekarang, tapi juga untuk generasi mendatang. Tanggung jawab dalam menjaga lingkungan, tentunya bukan hanya dibebankan oleh pemerintah saja, tetapi seluruh elemen masyarakat harus bahu-membahu dalam menjaga dan melestarikan lingkungan.</p>
<p>Bertepatan dengan peringatan Hari Lingkungan Hidup Sedunia, yang tidak hanya sebagai seremonial belaka, tentunya menjadi sebuah harapan dalam meningkatkan kesadaran menjaga dan melestarikan lingkungan. Selain itu, memberikan semangat baru bagi kita semua untuk komitmen menjaga lingkungan. Dengan memulai dari diri sendiri dan hal paling kecil, yaitu tidak membuang sampah sembarangan, terutama sampah plastik karena merusak ekosistem laut, serta tidak menebang pohon dengan liar hingga membuat gundul hutan. Mari bersama merobohkan jurang ekologi, memulihkan ekosistem bumi dengan pendekatan pengelolaan sumber daya alam yang adil dan berkelanjutan.</p>`,
        teks:`Mengapa penulis memilih istilah <em>'bahu-membahu'</em> untuk menggambarkan peran semua pihak dalam upaya pelestarian lingkungan?`,
        pilihan:[
          `Memperkuat makna pentingnya kolaborasi berbagai pihak untuk mencapai tujuan`,
          `Memberikan sedikit kesan informal yang mungkin kurang pas untuk teks opini`,
          `Mengindikasikan bahwa idiom lebih cocok digunakan untuk konteks fisik`,
          `Menyiratkan adanya paksaan atau tekanan dari satu pihak kepada pihak lain`,
          `Menunjukkan bahwa konteks ini terlalu ambigu dan tidak ada definisi yang jelas`
        ],
        kunci:"A"
      },
      {
        bacaan:`<p><strong>Tradisi Belis: Simbol Budaya yang Menyimpan Beban Finansial di Era Modern</strong></p>
<p>Belis adalah tradisi di wilayah Indonesia bagian timur seperti Nusa Tenggara Timur, yang secara umum di Indonesia dikenal dengan mas kawin atau mahar. Tradisi ini melambangkan penghormatan kepada wanita dan penyatuan keluarga. Namun, di balik nilainya, belis sering menjadi beban finansial berat bagi pihak laki-laki, yang kadang memicu tekanan psikologis dan mengganggu hubungan kekeluargaan. Beberapa pihak, terutama para sesepuh desa atau orang-orang tua, kadang terlalu kukuh untuk mempertahankan tradisi dan membuat tekanan dengan nilai yang semakin naik.</p>
<p>Belis memiliki makna yang mendalam dan dianggap sebagai bentuk pengakuan atas peran penting seorang perempuan di dalam keluarga. Belis merupakan representasi keseriusan dan komitmen seorang pria untuk membangun keluarga. Proses penyerahan belis tidak hanya dimaknai sebagai pertukaran materi, tetapi juga sebagai simbol penyatuan dua komunitas besar, yakni keluarga kedua belah pihak. Pada masyarakat Lamaholot misalnya, belis diwujudkan dalam bentuk gading gajah atau bala, yang besarnya disesuaikan dengan status sosial seorang perempuan. Selain itu, disertakan juga pelengkap belis seperti sarung tenun sutra dan ternak. Uniknya, meskipun belis dari pihak laki-laki, pihak keluarga perempuan memberikan balasan simbolis kepada pihak laki-laki dalam bentuk barang berharga lainnya. Tradisi ini mengajarkan keseimbangan dan saling menghargai di antara kedua belah pihak.</p>
<p>Meskipun belis mengandung nilai-nilai yang positif, tantangannya saat ini adalah menjaga agar tradisi tersebut tidak menjadi beban finansial yang berat. Tuntutan belis yang tinggi sering kali menjadi sumber tekanan, terutama bagi keluarga laki-laki. Dalam beberapa kasus, perkara belis dapat berimbas pada kesehatan mental hingga memicu tindakan tragis, seperti yang pernah terjadi di Kupang. Selain menjadi tantangan finansial, besarnya tuntutan materi untuk belis juga sering kali menimbulkan ketegangan dan konflik di antara pasangan dan keluarganya. Ketika keluarga perempuan menetapkan nominal belis yang tinggi, tidak jarang hal ini membangkitkan sentimen negatif dari pihak laki-laki yang merasa tertekan dan kehilangan martabat jika tidak mampu memenuhinya. Alhasil, penundaan pernikahan diambil guna memenuhi permintaan belis. Konflik semacam ini bisa merusak hubungan dua keluarga yang harusnya harmonis.</p>
<p><em>"Dengan demikian, perlu untuk memikirkan ulang makna belis dan menetapkan cara ataupun perhitungan besaran belis yang lebih fleksibel."</em></p>`,
        teks:`Kalimat tersebut dapat menjadi kesimpulan yang sesuai teks argumentasi tersebut karena...`,
        pilihan:[
          `menekankan pentingnya menjaga tradisi belis agar tidak hilang ditelan zaman`,
          `mengusulkan agar tradisi belis dihapuskan sepenuhnya demi kesejahteraan keluarga`,
          `menegaskan bahwa belis adalah pertukaran materi semata dan tidak memiliki makna lain`,
          `merangkum masalah utama yang ditimbulkan oleh belis yang kaku, yaitu konflik dan tekanan`,
          `menyimpulkan solusi konkret untuk masalah yang dibahas, yaitu beban finansial akibat belis`
        ],
        kunci:"E"
      },
      {
        bacaan:`<p><strong>Tradisi Buwuhan: Antara Gotong Royong dan Utang Piutang</strong></p>
<p>Tradisi buwuhan merupakan bagian dari budaya masyarakat Jawa, khususnya di kota-kota besar seperti Surabaya. Tradisi ini dilakukan ketika ada acara penting seperti pernikahan atau khitanan yang diadakan di daerah tersebut. Buwuhan merujuk pada kegiatan memberi bantuan, baik berupa barang, uang, maupun tenaga kepada seseorang yang sedang mengadakan hajatan, atau bisa juga disebut sebagai kegiatan menyumbang. Tradisi ini mencerminkan nilai gotong royong dan solidaritas sosial karena keluarga dan tetangga saling bahu-membahu dalam membantu sesama.</p>
<p>Namun, praktik buwuhan tidak lepas dari unsur pertukaran atau dipandang sebagai utang. Masyarakat meyakini bahwa segala bentuk bantuan yang diberikan akan kembali dalam bentuk yang setara ketika si pemberi mengadakan hajatan serupa. Hal ini menyebabkan buwuhan tidak lagi dipandang murni sebagai hibah atau sedekah, tetapi sebagai bentuk "utang tidak tertulis" yang menimbulkan kewajiban moral untuk membalas.</p>
<p>Dalam praktiknya, buwuhan memang meringankan beban tuan rumah, tetapi dapat menimbulkan tekanan psikologis bagi penerima bantuan. Rasa malu dan kekhawatiran kehilangan harga diri mendorong sebagian orang untuk berutang demi mengembalikan buwuhan. Hal ini menyebabkan terbaginya cara pandang terhadap buwuhan. Ada yang melihatnya sebagai bentuk tolong-menolong, tetapi ada juga yang justru menganggapnya menjadi sistem utang piutang berbasis sosial. Sebagian pihak berpendapat bahwa buwuhan adalah hibah karena tujuannya adalah untuk membantu. Namun, apabila ada keharusan pengembalian, maka secara hukum dan etika, buwuhan telah bergeser dari semangat gotong royong menjadi sebuah kewajiban ekonomi yang membebani. Oleh karena itu, pemahaman masyarakat terhadap tradisi buwuhan perlu diluruskan agar nilai luhur tolong-menolong tetap terjaga tanpa menimbulkan beban yang tidak perlu.</p>
<p><em>"Oleh karena itu, pemahaman masyarakat terhadap tradisi buwuhan perlu diluruskan agar nilai luhur tolong-menolong tetap terjaga tanpa menimbulkan beban yang tidak perlu."</em></p>`,
        teks:`Kalimat tersebut dapat menjadi kesimpulan yang sesuai teks argumentasi tersebut karena...`,
        pilihan:[
          `merangkum sebab-akibat dari adanya tradisi buwuhan di wilayah Surabaya`,
          `menyimpulkan ketidaksetujuan masyarakat terhadap penghapusan tradisi buwuhan`,
          `menyangkal pandangan negatif yang ada di masyarakat untuk pelestarian buwuhan`,
          `menyimpulkan berbagai pandangan masyarakat terhadap konsep buwuhan`,
          `menggarisbawahi solusi untuk melestarikan tradisi buwuhan di seluruh wilayah Jawa`
        ],
        kunci:"D"
      }
    ]
  },

  "Bahasa Inggris": {
    soal: [
      {
        bacaan:`<p><strong>The Lion and the Mouse</strong></p>
<p>Once upon a time, in a thick jungle in Africa, there lived a strong and fierce lion. Every afternoon, the lion would rest under the cool shade of a big tree after walking through the forest.</p>
<p>One day, while he was sleeping, a playful little mouse passed by. The mouse saw the lion's thick mane and was curious. He climbed up and began to jump around on the lion's head, playing in his mane.</p>
<p>The lion woke up suddenly and was not happy at all. He quickly caught the mouse in his big paw and roared, "Who dares to wake me up?" He was very angry and almost killed the mouse.</p>
<p>Scared and shaking, the mouse begged the lion, "Please don't kill me! I didn't mean to bother you. If you let me go, I promise I'll help you one day."</p>
<p>The lion laughed loudly. "You? Help me? That's funny." But the lion was feeling kind, so he let the mouse go free.</p>
<p>A few days later, the lion was walking through the jungle again when he fell into a trap. A net set by hunters caught him, and he couldn't escape. He tried to bite and tear the ropes, but they were too strong. The lion roared loudly, hoping someone would come.</p>
<p>The mouse heard the roar and ran to help. He saw the lion trapped and quickly started to chew the ropes with his sharp teeth. After some time, the net broke, and the lion was free.</p>
<p>The lion looked at the mouse with surprise and said, "Thank you! You really saved my life."</p>
<p>The mouse smiled and said, "I told you I would help you one day."</p>
<p>From that moment on, the lion and the mouse became close friends. The lion learned that even small creatures can do great things, and we all need help sometimes.</p>`,
        teks:`Which option best summarizes the story?`,
        pilihan:[
          `Beginning: A lion was walking through the jungle. Problem: The mouse got lost and couldn't find food. Solution: The lion gave food to the mouse. Lesson: Always be generous to those in need.`,
          `Beginning: A mouse accidentally disturbed a sleeping lion. Problem: The lion was caught in a hunter's net. Solution: The mouse chewed through the net and set the lion free. Lesson: Even the smallest creature can be a great help.`,
          `Beginning: The lion and mouse were best friends. Problem: The lion got hurt in a fight. Solution: The mouse helped him find water. Lesson: Friendship is built on adventure.`,
          `Beginning: A mouse was building a home near a tree. Problem: A storm destroyed the tree and trapped the lion. Solution: The mouse called for help from the jungle. Lesson: Teamwork solves big problems.`,
          `Beginning: A lion was hungry and searching for food. Problem: He couldn't catch any prey. Solution: The mouse helped him find food. Lesson: Hunger teaches humility.`
        ],
        kunci:"B"
      },
      {
        bacaan:`<p><strong>The False Lion King</strong></p>
<p>Once upon a time, in Africa, there lived two lion kings. One was named Hera and the other was Shero. Hera was very strong and handsome. All the animals loved and respected him. He was a great leader. Shero was not like Hera. He had a small mane and a funny, squeaky voice. Shero liked to pretend he was as powerful as Hera. He often copied Hera's roar, but it made the other animals laugh.</p>
<p>One day, the animals heard that some hyenas were causing trouble near the river. Hera quickly gathered his followers to stop the hyenas. Shero also wanted to come. He wanted to show everyone that he was strong too.</p>
<p>When they reached the river, Hera roared loudly. His roar was so powerful that the hyenas got scared. Shero also tried to roar, but his voice was high and silly. The hyenas laughed at him. Their leader, Hank the Hyena, made jokes about Shero.</p>
<p>Hera stayed calm and smiled. Shero did not give up. He said, "I am just as strong as Hera!" The hyenas laughed even louder. Shero tried to show his power by jumping on a small dirt hill. But he tripped and fell into the ground. The hyenas laughed so much they cried. Even Hera laughed a little.</p>
<p>At the end of the day, the hyenas left, still laughing about Shero. Hera told Shero, "You are not like me, but you make everyone happy with your jokes." Shero smiled and understood that he had his own special gift.</p>
<p>From that day, Shero became the kingdom's jester. He and Hera ruled together — one with strength, and one with laughter. The animals learned that both power and fun are important in life.</p>`,
        teks:`The hyenas laugh so much when Shero tries to roar like Hera because...`,
        pilihan:[
          `Shero tries to roar in a serious way and surprises the hyenas`,
          `Shero's roar is funny, which makes the hyenas think he is joking`,
          `Hera tells a joke about Shero to make the hyenas laugh`,
          `Shero is acting like Hera, and it's absolutely brilliant`,
          `Shero trips and falls when trying to show his strength`
        ],
        kunci:"B"
      },
      {
        bacaan:`<p><strong>The Lion and the Mouse</strong></p>
<p>Once upon a time, in a thick jungle in Africa, there lived a strong and fierce lion. Every afternoon, the lion would rest under the cool shade of a big tree after walking through the forest.</p>
<p>One day, while he was sleeping, a playful little mouse passed by. The mouse saw the lion's thick mane and was curious. He climbed up and began to jump around on the lion's head, playing in his mane.</p>
<p>The lion woke up suddenly and was not happy at all. He quickly caught the mouse in his big paw and roared, "Who dares to wake me up?" He was very angry and almost killed the mouse.</p>
<p>Scared and shaking, the mouse begged the lion, "Please don't kill me! I didn't mean to bother you. If you let me go, I promise I'll help you one day."</p>
<p>The lion laughed loudly. "You? Help me? That's funny." But the lion was feeling kind, so he let the mouse go free.</p>
<p>A few days later, the lion was walking through the jungle again when he fell into a trap. A net set by hunters caught him, and he couldn't escape. The lion roared loudly, hoping someone would come. The mouse heard the roar and ran to help, chewing the ropes with his sharp teeth until the net broke and the lion was free.</p>
<p>From that moment on, the lion and the mouse became close friends. The lion learned that even small creatures can do great things, and we all need help sometimes.</p>`,
        teks:`Why did the lion trust the mouse and decide to let him go instead of eating him?`,
        pilihan:[
          `The lion was too tired to eat the mouse`,
          `The mouse told the lion he might help him one day`,
          `The lion was feeling happy to see the mouse`,
          `The lion heard someone coming and got scared`,
          `The mouse promised to bring food for the lion`
        ],
        kunci:"B"
      },
      {
        bacaan:`<p><strong>The Great Barrier Reef</strong></p>
<p>The Great Barrier Reef is one of the most beautiful places in the world. It is located in the Pacific Ocean, near the northeast coast of Australia. The reef is very big. It stretches over 2,000 kilometers and can even be seen from space. There are many small coral islands and clear, warm waters around the reef.</p>
<p>This reef is full of life. There are many kinds of colorful fish, sea turtles, dolphins, and even sharks. Coral of different shapes and colors grows under the water. Sea birds fly over the reef and nest on small islands. People can see this beauty by swimming, diving, or joining a boat tour.</p>
<p>The colors under the water are amazing. Coral comes in red, yellow, green, and blue. Some coral looks like trees, and some looks like big round stones. Small fish swim in and out of the coral like they are playing a game. In some places, soft coral moves with the water like grass in the wind. When the sun shines, the reef looks bright and full of light. It feels like a different world under the sea.</p>
<p>The reef is not only beautiful, but also very important. It helps protect the coast from big waves and storms. It is a home for sea animals and a place where plants can grow. Many people also get food and jobs from the sea near the reef. Without the reef, the ocean would not be the same.</p>`,
        teks:`The author mentioned "It feels like a different world under the sea". What does the phrase "a different world under the sea" most likely mean?`,
        pilihan:[
          `A safe place that has bright reef`,
          `A peaceful place where people can live under water`,
          `A colorful place that looks the same as the land`,
          `A shining reef that is quiet`,
          `A calm place that looks beautiful and unique`
        ],
        kunci:"E"
      },
      {
        bacaan:`<p><strong>The Great Barrier Reef</strong></p>
<p>The Great Barrier Reef is one of the most beautiful places in the world. It is located in the Pacific Ocean, near the northeast coast of Australia. The reef is very big. It stretches over 2,000 kilometers and can even be seen from space. There are many small coral islands and clear, warm waters around the reef.</p>
<p>This reef is full of life. There are many kinds of colorful fish, sea turtles, dolphins, and even sharks. Coral of different shapes and colors grows under the water. Sea birds fly over the reef and nest on small islands. People can see this beauty by swimming, diving, or joining a boat tour.</p>
<p>The colors under the water are amazing. Coral comes in red, yellow, green, and blue. Some coral looks like trees, and some looks like big round stones. Small fish swim in and out of the coral like they are playing a game. In some places, soft coral moves with the water like grass in the wind. When the sun shines, the reef looks bright and full of light. It feels like a different world under the sea.</p>
<p>The reef is not only beautiful, but also very important. It helps protect the coast from big waves and storms. It is a home for sea animals and a place where plants can grow. Many people also get food and jobs from the sea near the reef. Without the reef, the ocean would not be the same.</p>`,
        teks:`Which of the following best represents the main idea implied by the text?`,
        pilihan:[
          `The reef is useful for fishing and shipping`,
          `The reef is large, but not important to people`,
          `The reef is a natural treasure that must be cared for`,
          `The reef is only for scientists and researchers to explore`,
          `The reef is a protected area that should be closed to visitors`
        ],
        kunci:"C"
      },
      {
        bacaan:`<p><strong>The Great Barrier Reef</strong></p>
<p>The Great Barrier Reef is one of the most beautiful places in the world. It is located in the Pacific Ocean, near the northeast coast of Australia. The reef is very big. It stretches over 2,000 kilometers and can even be seen from space. There are many small coral islands and clear, warm waters around the reef.</p>
<p>This reef is full of life. There are many kinds of colorful fish, sea turtles, dolphins, and even sharks. Coral of different shapes and colors grows under the water. Sea birds fly over the reef and nest on small islands. People can see this beauty by swimming, diving, or joining a boat tour.</p>
<p>The colors under the water are amazing. Coral comes in red, yellow, green, and blue. Some coral looks like trees, and some looks like big round stones. Small fish swim in and out of the coral like they are playing a game. In some places, soft coral moves with the water like grass in the wind. When the sun shines, the reef looks bright and full of light. It feels like a different world under the sea.</p>
<p>The reef is not only beautiful, but also very important. It helps protect the coast from big waves and storms. It is a home for sea animals and a place where plants can grow. Many people also get food and jobs from the sea near the reef. Without the reef, the ocean would not be the same.</p>`,
        teks:`Which detail would best encourage people to visit the Great Barrier Reef?`,
        pilihan:[
          `Visitors can see an Australian national park`,
          `Visitors can stay in hotels around the reef`,
          `Visitors can get there by boat or short flights`,
          `Visitors can protect the coral and the animals`,
          `Visitors can see the coral by diving or swimming`
        ],
        kunci:"E"
      }
    ]
  },

  "Matematika": {
    soal: [
      {
        teks:`Pada saat pertandingan sepak bola Indonesia melawan Jepang, kelompok pendukung tim Indonesia akan duduk membentuk koreo dengan beberapa orang memegang kertas berwarna yang dibentangkan. Total kertas berwarna yang dipegang oleh pendukung di barisan kursi paling bawah adalah sebanyak 400 lembar, kemudian di baris kedua sebanyak 550 lembar, dan semakin bertambah pada barisan kursi berikutnya dengan pola penambahan yang sama. Jika pola penambahan tersebut berlaku sampai pada baris kursi ketujuh, maka berapa banyak penonton yang memegang kertas koreo di baris ke-5?`,
        pilihan:[
          `700 orang`,
          `850 orang`,
          `1.000 orang`,
          `1.150 orang`,
          `1.300 orang`
        ],
        kunci:"C"
      },
      {
        teks:`Bu Silma adalah seorang perangkai bunga yang disusun dalam buket bunga. Di tokonya, ia memiliki bunga mawar, lili, dan anyelir. Harga buket ditentukan dari total harga bunga yang digunakan dalam buket tersebut. Adapun tiga jenis buket yang biasa ia siapkan dengan komposisi ketiga bunga beserta harga per buketnya sebagai berikut:<br><br>A. Buket berisi 2 bunga mawar, 3 bunga lili, 1 bunga anyelir — harga Rp85.000,00<br>B. Buket berisi 1 bunga mawar, 2 bunga lili, 2 bunga anyelir — harga Rp70.000,00<br>C. Buket berisi 3 bunga mawar, 1 bunga lili, 1 bunga anyelir — harga Rp75.000,00<br><br>Bila seorang pembeli ingin membeli buket bunga tipe C namun ingin menambah 2 tangkai lili dan 1 tangkai anyelir dengan harga satuan, maka total harga yang harus dibayar pembeli tersebut adalah...`,
        pilihan:[
          `Rp75.000,00`,
          `Rp102.000,00`,
          `Rp110.000,00`,
          `Rp115.000,00`,
          `Rp116.000,00`
        ],
        kunci:"D"
      },
      {
        teks:`Bu Sita, seorang desainer interior, sedang mengerjakan proyek pribadi untuk mempercantik kamar tidurnya. Ia berencana membuat beberapa hiasan lampu tidur dari bahan akrilik. Setiap hiasan akan berbentuk tabung berongga (tanpa alas dan tutup) dengan diameter 14 cm dan tinggi 25 cm. Bagian luar hiasan tabung ini akan dilapisi dengan stiker vinil motif bunga. Stiker vinil dijual dalam lembaran, dan harga satu lembarnya adalah Rp9.000,00. Setiap lembar stiker vinil mampu menutupi area seluas 300 cm². Jika Bu Sita berencana membuat 8 buah hiasan lampu tidur, berapakah biaya minimal yang harus dikeluarkan Bu Sita untuk membeli stiker vinil tersebut?`,
        pilihan:[
          `Rp72.000,00`,
          `Rp108.000,00`,
          `Rp252.000,00`,
          `Rp270.000,00`,
          `Rp288.000,00`
        ],
        kunci:"D"
      },
      {
        teks:`Di sebuah acara bazar yang diadakan oleh suatu sekolah, terdapat 5 stan yang masing-masing dikelola oleh pedagang yang berbeda. Dalam bazar tersebut, stan pedagang C ingin berada di antara pedagang A dan pedagang D. Banyak kemungkinan susunan atau penataan stan sesuai keinginan pedagang C tersebut adalah...`,
        pilihan:[
          `6 susunan`,
          `12 susunan`,
          `120 susunan`,
          `240 susunan`,
          `720 susunan`
        ],
        kunci:"B"
      }
    ]
  }

};
