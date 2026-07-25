import { BunpouDictionaryEntry } from "@/types";

export const bunpouDictionaryData: BunpouDictionaryEntry[] = [
  // ==========================================
  // PARTIKEL (N5 & N4)
  // ==========================================
  {
    id: "bp_de_place",
    pattern: "～で (Tempat Aksi)",
    romajiPattern: "~de (action location)",
    meaning: "Di (Menyatakan tempat terjadinya suatu kegiatan/aksi)",
    formula: "Kata Benda (Tempat) + で + Kata Kerja Aksi",
    level: "N5",
    category: "Partikel",
    explanation: "Partikel で (de) digunakan untuk menandai tempat di mana suatu kegiatan atau aksi aktif dilakukan. Berbeda dengan に (ni) yang menyatakan keberadaan diam.",
    exampleSentences: [
      {
        japanese: "図書館で本を読みます。",
        hiragana: "としょかん で ほん を よみます。",
        translation: "Saya membaca buku di perpustakaan."
      },
      {
        japanese: "レストランで昼ご飯を食べました。",
        hiragana: "レストラン で ひるごはん を たべました。",
        translation: "Saya makan siang di restoran."
      }
    ],
    notes: "Perbedaan: で untuk aksi aktif (misal: makan di toko), sedangkan に untuk keberadaan (misal: ada di toko) atau tujuan perpindahan.",
    tags: ["N5", "Partikel", "Tempat"]
  },
  {
    id: "bp_de_means",
    pattern: "～で (Alat / Sarana / Bahasa)",
    romajiPattern: "~de (means / instrument)",
    meaning: "Dengan / Menggunakan / Dalam (Alat, sarana transportasi, atau bahasa)",
    formula: "Kata Benda (Alat/Bahasa/Kendaraan) + で",
    level: "N5",
    category: "Partikel",
    explanation: "Partikel で menandai alat, sarana transportasi, atau bahasa yang digunakan untuk melakukan suatu aksi.",
    exampleSentences: [
      {
        japanese: "電車で会社へ行きます。",
        hiragana: "でんしゃ で かいしゃ へ いきます。",
        translation: "Saya pergi ke kantor dengan kereta."
      },
      {
        japanese: "日本語で話してください。",
        hiragana: "にほんご で はなして ください。",
        translation: "Tolong bicara dalam bahasa Jepang."
      }
    ],
    notes: "Jika berjalan kaki, gunakan 歩いて (aruite) tanpa partikel で.",
    tags: ["N5", "Partikel", "Sarana"]
  },
  {
    id: "bp_ni_destination",
    pattern: "～に (Tujuan / Keberadaan / Waktu)",
    romajiPattern: "~ni (destination / location)",
    meaning: "Ke / Di / Pada (Menyatakan tujuan arah, waktu spesifik, atau titik keberadaan)",
    formula: "Kata Benda (Tempat / Waktu) + に + Kata Kerja",
    level: "N5",
    category: "Partikel",
    explanation: "Partikel に (ni) memiliki 3 fungsi utama: (1) Menandai tujuan pergerakan (ke stasiun), (2) Menandai waktu spesifik berangka (jam 7), dan (3) Menandai tempat keberadaan benda/orang (ada di kamar).",
    exampleSentences: [
      {
        japanese: "朝8時に学校へ行きます。",
        hiragana: "あさ はちじ に がっこう へ いきます。",
        translation: "Jam 8 pagi saya pergi ke sekolah."
      },
      {
        japanese: "部屋に猫がいます。",
        hiragana: "へや に ねこ が います。",
        translation: "Di kamar ada kucing."
      }
    ],
    notes: "Jika waktu berupa kata relatif (seperti 'besok', 'hari ini', 'minggu depan'), jangan gunakan partikel に.",
    tags: ["N5", "Partikel", "Waktu", "Tujuan"]
  },
  {
    id: "bp_he_direction",
    pattern: "～へ (Arah Tujuan)",
    romajiPattern: "~e (direction)",
    meaning: "Ke / Menuju (Arah pergerakan)",
    formula: "Kata Benda (Tempat) + へ + 行きます/来ます/帰ります",
    level: "N5",
    category: "Partikel",
    explanation: "Partikel へ (ditulis hiragana he tetapi dibaca 'e') menekankan arah pergerakan menuju suatu tempat.",
    exampleSentences: [
      {
        japanese: "日本へ行きます。",
        hiragana: "にほん へ いきます。",
        translation: "Pergi ke (menuju) Jepang."
      }
    ],
    notes: "Mirip dengan partikel に untuk tujuan pergerakan.",
    tags: ["N5", "Partikel", "Arah"]
  },
  {
    id: "bp_wo_object",
    pattern: "～を (Objek Langsung)",
    romajiPattern: "~wo (direct object)",
    meaning: "Menandai objek langsung dari kata kerja transitif",
    formula: "Kata Benda (Objek) + を + Kata Kerja Transitif",
    level: "N5",
    category: "Partikel",
    explanation: "Partikel を (wo / dibaca 'o') digunakan untuk menghubungkan objek yang dikenai pekerjaan langsung oleh kata kerja transitif.",
    exampleSentences: [
      {
        japanese: "お茶を飲みます。",
        hiragana: "おちゃ を のみます。",
        translation: "Saya minum teh."
      },
      {
        japanese: "日本語を勉強します。",
        hiragana: "にほんご を べんきょう します。",
        translation: "Saya belajar bahasa Jepang."
      }
    ],
    notes: "Ditulis dengan huruf hiragana を (wo) tetapi selalu dilafalkan 'o'.",
    tags: ["N5", "Partikel", "Objek"]
  },
  {
    id: "bp_ga_subject",
    pattern: "～が (Subjek / Kemampuan)",
    romajiPattern: "~ga (subject / ability)",
    meaning: "Partikel Penanda Subjek / Kemampuan / Keberadaan",
    formula: "Subjek + が + Sifat / Kemampuan / Keberadaan",
    level: "N5",
    category: "Partikel",
    explanation: "Partikel が (ga) digunakan untuk menonjolkan subjek utama kalimat, serta digunakan mendampingi kata sifat/keinginan/kemampuan seperti 好き (suki), 上手 (jouzu), できます (dekimasu), dan あります/います.",
    exampleSentences: [
      {
        japanese: "私は日本語が話せます。",
        hiragana: "わたし は にほんご が はなせます。",
        translation: "Saya bisa berbicara bahasa Jepang."
      },
      {
        japanese: "雨が降っています。",
        hiragana: "あめ が ふっています。",
        translation: "Hujan sedang turun."
      }
    ],
    notes: "Gunakan が (bukan を) sebelum できます (bisa), 好き (suka), ほしい (ingin), あります/います (ada).",
    tags: ["N5", "Partikel", "Subjek"]
  },
  {
    id: "bp_mo_also",
    pattern: "～も (Juga / Pun)",
    romajiPattern: "~mo (also / too)",
    meaning: "Juga / Pun (Menyatakan kesamaan)",
    formula: "Kata Benda + も",
    level: "N5",
    category: "Partikel",
    explanation: "Partikel も (mo) menggantikan は (wa), が (ga), atau を (wo) untuk menyatakan bahwa subjek/objek memiliki kondisi yang sama.",
    exampleSentences: [
      {
        japanese: "私も学生です。",
        hiragana: "わたし も がくせい です。",
        translation: "Saya juga seorang siswa."
      },
      {
        japanese: "どこへも行きません。",
        hiragana: "どこ へ も いきません。",
        translation: "Saya tidak pergi ke mana pun."
      }
    ],
    notes: "Dapat digabungkan dengan kata tanya + も + negatif untuk arti 'tidak sama sekali' (misal: 何も tidak ada apa-apa).",
    tags: ["N5", "Partikel", "Persamaan"]
  },
  {
    id: "bp_to_and_with",
    pattern: "～と (Dan / Bersama)",
    romajiPattern: "~to (and / with)",
    meaning: "Dan (Penggabungan terbatas) / Bersama (Teman aksi)",
    formula: "Kata Benda A + と + Kata Benda B / Kata Benda (Orang) + と + Aksi",
    level: "N5",
    category: "Partikel",
    explanation: "Partikel と memiliki dua fungsi: (1) Menyebutkan daftar kata benda secara pasti (dan), (2) Menyatakan melakukan sesuatu bersama orang lain.",
    exampleSentences: [
      {
        japanese: "友達と映画館へ行きました。",
        hiragana: "ともだち と えいがかん へ いきました。",
        translation: "Saya pergi ke bioskop bersama teman."
      },
      {
        japanese: "パンと牛乳を買いました。",
        hiragana: "パン と ぎゅうにゅう を かいました。",
        translation: "Saya membeli roti dan susu."
      }
    ],
    notes: "Untuk 'bersama sendirian', gunakan 1人で (hitoride).",
    tags: ["N5", "Partikel", "Penggabungan"]
  },
  {
    id: "bp_ya_nado",
    pattern: "～や ～など (Dan Lain-lain)",
    romajiPattern: "~ya ~nado (and so on)",
    meaning: "Dan... dan lain-lain (Contoh tidak terbatas)",
    formula: "Kata Benda A + や + Kata Benda B (+ など)",
    level: "N5",
    category: "Partikel",
    explanation: "Digunakan untuk memberikan beberapa contoh kata benda secara tidak lengkap (masih ada benda lain yang tidak disebutkan).",
    exampleSentences: [
      {
        japanese: "箱の中に本やペンなどがあります。",
        hiragana: "はこ の なか に ほん や ペン など が あります。",
        translation: "Di dalam kotak ada buku, pena, dan lain-lain."
      }
    ],
    notes: "Berbeda dengan と yang menyebutkan secara pasti/terbatas.",
    tags: ["N5", "Partikel", "Contoh"]
  },
  {
    id: "bp_shika_nai",
    pattern: "～しか ～ない (Hanya / Cuma)",
    romajiPattern: "~shika ~nai (only / nothing but)",
    meaning: "Hanya... (Disertai nuansa tidak cukup / sedikit)",
    formula: "Kata Benda + しか + Kata Kerja Negatif",
    level: "N4",
    category: "Partikel",
    explanation: "Menyatakan bahwa hanya ada sedikit atau terbatas pada hal tersebut, dan selalu diikuti oleh bentuka negatif di akhir kalimat.",
    exampleSentences: [
      {
        japanese: "財布の中に100円しかありません。",
        hiragana: "さいふ の なか に ひゃくえん しか ありません。",
        translation: "Di dalam dompet hanya ada 100 yen (terasa sedikit)."
      }
    ],
    notes: "Selalu berpasangan dengan bentuk negatif (しか ... ない).",
    tags: ["N4", "Partikel", "Batasan"]
  },
  {
    id: "bp_dake",
    pattern: "～だけ (Hanya / Saja)",
    romajiPattern: "~dake (only / just)",
    meaning: "Hanya / Saja (Tanpa nuansa negatif)",
    formula: "Kata Benda + だけ",
    level: "N5",
    category: "Partikel",
    explanation: "Menyatakan batasan hanya hal itu saja, namun berbeda dengan しか karena だけ diikuti oleh kalimat positif.",
    exampleSentences: [
      {
        japanese: "5分だけ休みたいです。",
        hiragana: "ごふん だけ やすみたい です。",
        translation: "Saya ingin istirahat 5 menit saja."
      }
    ],
    notes: "Dapat diikuti oleh bentuk positif.",
    tags: ["N5", "Partikel", "Batasan"]
  },
  {
    id: "bp_kara_made",
    pattern: "～から ～まで (Dari ... Sampai ...)",
    romajiPattern: "~kara ~made (from ... to ...)",
    meaning: "Dari (titik awal) sampai (titik akhir / tujuan)",
    formula: "Titik Awal (Waktu/Tempat) + から + Titik Akhir + まで",
    level: "N5",
    category: "Partikel",
    explanation: "Digunakan untuk menyatakan rentang waktu (misal: jam 9 sampai jam 5) atau jangkauan tempat (dari rumah sampai stasiun).",
    exampleSentences: [
      {
        japanese: "9時から5時まで働きます。",
        hiragana: "くじ から ごじ まで はたらきます。",
        translation: "Saya bekerja dari jam 9 sampai jam 5."
      },
      {
        japanese: "家から駅まで歩いて10分です。",
        hiragana: "いえ から えき まで あるいて じゅっぷん です。",
        translation: "Dari rumah sampai stasiun berjalan kaki 10 menit."
      }
    ],
    notes: "Dapat digunakan secara terpisah (hanya から saja atau hanya まで saja).",
    tags: ["N5", "Partikel", "Rentang"]
  },

  // ==========================================
  // BENTUK KATA KERJA (N5 & N4)
  // ==========================================
  {
    id: "bp_te_kudasai",
    pattern: "～てください",
    romajiPattern: "~te kudasai",
    meaning: "Tolong lakukan... (Permintaan / Perintah Sopan)",
    formula: "Kata Kerja [Bentuk て] + ください",
    level: "N5",
    category: "Bentuk Kata Kerja",
    explanation: "Pola dasar untuk meminta atau memohon seseorang melakukan sesuatu secara sopan dan santun.",
    exampleSentences: [
      {
        japanese: "ここに名前を書いてください。",
        hiragana: "ここに なまえ を かいて ください。",
        translation: "Tolong tulis nama di sini."
      },
      {
        japanese: "ゆっくり話してください。",
        hiragana: "ゆっくり はなして ください。",
        translation: "Tolong bicara lebih pelan."
      }
    ],
    notes: "Bentuk halus/lebih sopan: ～ていただけませんか (Maukah Anda melakukan...?).",
    tags: ["N5", "Bentuk て", "Permintaan"]
  },
  {
    id: "bp_naide_kudasai",
    pattern: "～ないでください",
    romajiPattern: "~naide kudasai",
    meaning: "Tolong jangan lakukan... (Larangan Sopan)",
    formula: "Kata Kerja [Bentuk ない] + でください",
    level: "N5",
    category: "Bentuk Kata Kerja",
    explanation: "Digunakan untuk meminta seseorang agar tidak melakukan suatu tindakan tertentu demi keselamatan atau kesopanan.",
    exampleSentences: [
      {
        japanese: "ここに写真を撮らないでください。",
        hiragana: "ここに しゃしん を とらないで ください。",
        translation: "Tolong jangan mengambil foto di sini."
      },
      {
        japanese: "心配しないでください。",
        hiragana: "しんぱい しないで ください。",
        translation: "Tolong jangan khawatir."
      }
    ],
    notes: "Diubah dari kata kerja Bentuk-Nai (bentuk negatif informal) + でください.",
    tags: ["N5", "Bentuk ない", "Larangan"]
  },
  {
    id: "bp_te_mo_ii",
    pattern: "～てもいいです",
    romajiPattern: "~te mo ii desu",
    meaning: "Boleh melakukan... (Izin / Permohonan Izin)",
    formula: "Kata Kerja [Bentuk て] + もいいです",
    level: "N5",
    category: "Bentuk Kata Kerja",
    explanation: "Digunakan untuk memberikan izin atau meminta izin melakukan sesuatu (misal: 'Bolehkah saya duduk di sini?').",
    exampleSentences: [
      {
        japanese: "ここに座ってもいいですか。",
        hiragana: "ここに すわっても いいですか。",
        translation: "Bolehkah saya duduk di sini?"
      },
      {
        japanese: "写真を撮ってもいいです。",
        hiragana: "しゃしん を とっても いいです。",
        translation: "Boleh mengambil foto."
      }
    ],
    notes: "Bentuk pertanyaan ditambahkan か di akhir: ～てもいいですか.",
    tags: ["N5", "Bentuk て", "Izin"]
  },
  {
    id: "bp_te_wa_ikedai",
    pattern: "～てはいけません",
    romajiPattern: "~te wa ikemasen",
    meaning: "Tidak boleh... / Dilarang... (Larangan Keras)",
    formula: "Kata Kerja [Bentuk て] + はいけません",
    level: "N5",
    category: "Bentuk Kata Kerja",
    explanation: "Digunakan untuk menyatakan larangan resmi, hukum, atau aturan yang wajib ditaati.",
    exampleSentences: [
      {
        japanese: "ここでタバコを吸ってはいけません。",
        hiragana: "ここで タバコ を すって はいけません。",
        translation: "Dilarang merokok di sini."
      },
      {
        japanese: "テスト中に話してはいけません。",
        hiragana: "テスト ちゅう に はなして はいけません。",
        translation: "Dilarang berbicara saat ujian."
      }
    ],
    notes: "Dibaca 'te wa ikemasen' (huruf は dilafalkan 'wa').",
    tags: ["N5", "Bentuk て", "Larangan"]
  },
  {
    id: "bp_te_iru",
    pattern: "～ています (Sedang / Kebiasaan)",
    romajiPattern: "~te imasu",
    meaning: "Sedang melakukan... / Berada dalam kondisi / Kebiasaan rutin",
    formula: "Kata Kerja [Bentuk て] + います",
    level: "N5",
    category: "Bentuk Kata Kerja",
    explanation: "Memiliki 3 arti utama: (1) Aksi yang sedang berlangsung sekarang, (2) Status/kondisi hasil aksi (misal: sudah menikah, tinggal di Jakarta), (3) Kebiasaan harian.",
    exampleSentences: [
      {
        japanese: "今、テレビを見ています。",
        hiragana: "いま、テレビ を みています。",
        translation: "Sekarang saya sedang menonton TV."
      },
      {
        japanese: "私はジャカルタに住んでいます。",
        hiragana: "わたし は ジャカルタ に すんでいます。",
        translation: "Saya tinggal di Jakarta."
      }
    ],
    notes: "Untuk status keberadaan menikah (結婚しています) atau memiliki (持っています), selalu gunakan bentuk ～ています.",
    tags: ["N5", "Bentuk て", "Sedang"]
  },
  {
    id: "bp_te_aru",
    pattern: "～てあります (Kondisi Sengaja)",
    romajiPattern: "~te arimasu",
    meaning: "Sudah di-... (Suatu benda berada dalam kondisi akibat sengaja disiapkan seseorang)",
    formula: "Kata Kerja Transitif [Bentuk て] + あります",
    level: "N4",
    category: "Bentuk Kata Kerja",
    explanation: "Menyatakan bahwa suatu tindakan sengaja dilakukan seseorang dan hasilnya masih bertahan sampai sekarang (misal: kalender sudah ditempel di dinding).",
    exampleSentences: [
      {
        japanese: "壁にカレンダーが貼ってあります。",
        hiragana: "かべ に カレンダー が はって あります。",
        translation: "Kalender (sudah sengaja) tertempel di dinding."
      },
      {
        japanese: "パスポートはかばんに入れてあります。",
        hiragana: "パスポート は かばん に いれて あります。",
        translation: "Paspor sudah dimasukkan ke dalam tas (untuk persiapan)."
      }
    ],
    notes: "Perbedaan dengan ～ています: ～てあります menekankan adanya maksud sengaja/persiapan dari seseorang.",
    tags: ["N4", "Bentuk て", "Kondisi"]
  },
  {
    id: "bp_te_oku",
    pattern: "～ておきます / ～ておく",
    romajiPattern: "~te okimasu",
    meaning: "Melakukan sesuatu terlebih dahulu (Persiapan / Dibiarkan)",
    formula: "Kata Kerja [Bentuk て] + おきます",
    level: "N4",
    category: "Bentuk Kata Kerja",
    explanation: "Menyatakan melakukan tindakan sebagai persiapan sebelum kegiatan lain, atau membiarkan kondisi seperti itu.",
    exampleSentences: [
      {
        japanese: "旅行の前にホテルを予約しておきます。",
        hiragana: "りょこう の まえ に ホテル を よやく しておきます。",
        translation: "Sebelum liburan saya memesan hotel terlebih dahulu."
      }
    ],
    notes: "Bahasa lisan informal sering disingkat: ～とく (toku).",
    tags: ["N4", "Bentuk て", "Persiapan"]
  },
  {
    id: "bp_te_shimau",
    pattern: "～てしまいました / ～てしまう",
    romajiPattern: "~te shimaimashita",
    meaning: "Terlanjur / Tidak sengaja / Selesai tuntas",
    formula: "Kata Kerja [Bentuk て] + しまいました",
    level: "N4",
    category: "Bentuk Kata Kerja",
    explanation: "Menyatakan rasa penyesalan/ketidaksengajaan atas hal yang terlanjur terjadi, atau menyelesaikan sesuatu secara tuntas dan penuh.",
    exampleSentences: [
      {
        japanese: "宿題を忘れてしまいました。",
        hiragana: "しゅくだい を わすれて しまいました。",
        translation: "Saya terlanjur lupa membawa PR (penyesalan)."
      },
      {
        japanese: "この本を全部読んでしまいました。",
        hiragana: "この ほん を ぜんぶ よんで しまいました。",
        translation: "Saya sudah selesai membaca tuntas buku ini."
      }
    ],
    notes: "Bahasa lisan informal sering disingkat: ～ちゃう (chau) atau ～じゃう (jau).",
    tags: ["N4", "Bentuk て", "Terlanjur"]
  },
  {
    id: "bp_te_miru",
    pattern: "～てみます / ～てみる",
    romajiPattern: "~te mimasu",
    meaning: "Mencoba melakukan...",
    formula: "Kata Kerja [Bentuk て] + みます",
    level: "N4",
    category: "Bentuk Kata Kerja",
    explanation: "Digunakan ketika ingin mencoba melakukan sesuatu untuk pertama kali atau melihat seperti apa hasilnya.",
    exampleSentences: [
      {
        japanese: "日本の納豆を食べてみたいです。",
        hiragana: "にほん の なっとう を たべて みたい です。",
        translation: "Saya ingin mencoba makan Natto Jepang."
      },
      {
        japanese: "この靴を履いてみてもいいですか。",
        hiragana: "この くつ を はいて みても いいですか。",
        translation: "Bolehkah saya mencoba memakai sepatu ini?"
      }
    ],
    notes: "Menggunakan kata kerja 見ます (melihat) yang digabung setelah Bentuk-Te.",
    tags: ["N4", "Bentuk て", "Mencoba"]
  },
  {
    id: "bp_koto_ga_dekiru",
    pattern: "～ことができる / ～できます",
    romajiPattern: "~koto ga dekiru",
    meaning: "Bisa / Mampu melakukan... (Potensial)",
    formula: "Kata Kerja [Bentuk Kamus] + ことができる / Kata Benda + ができる",
    level: "N5",
    category: "Bentuk Kata Kerja",
    explanation: "Menyatakan potensi atau kemampuan seseorang dalam melakukan suatu tindakan.",
    exampleSentences: [
      {
        japanese: "私はピアノを弾くことができます。",
        hiragana: "わたし は ピアノ を ひく こと が できます。",
        translation: "Saya bisa bermain piano."
      }
    ],
    notes: "Dapat dipendekkan menggunakan Kata Kerja Bentuk Potensial (misal: 読める, 書ける).",
    tags: ["N5", "Kemampuan"]
  },
  {
    id: "bp_koto_ga_aru",
    pattern: "～たことがあります",
    romajiPattern: "~ta koto ga arimasu",
    meaning: "Pernah... (Pengalaman Masa Lalu)",
    formula: "Kata Kerja [Bentuk た] + ことがあります",
    level: "N5",
    category: "Bentuk Kata Kerja",
    explanation: "Menyatakan pengalaman hidup bahwa seseorang pernah melakukan suatu hal di masa lalu.",
    exampleSentences: [
      {
        japanese: "すしを食べたことがありますか。",
        hiragana: "すし を たべた こと が ありますか。",
        translation: "Apakah kamu pernah makan sushi?"
      }
    ],
    notes: "Selalu gunakan kata kerja Bentuk-TA (lampau).",
    tags: ["N5", "Pengalaman"]
  },
  {
    id: "bp_mae_ni",
    pattern: "～まえに (Sebelum)",
    romajiPattern: "~mae ni",
    meaning: "Sebelum melakukan...",
    formula: "Kata Kerja [Bentuk Kamus] + まえに / Kata Benda + の + まえに",
    level: "N5",
    category: "Bentuk Kata Kerja",
    explanation: "Menyatakan urutan tindakan di mana aksi A dilakukan sebelum aksi B.",
    exampleSentences: [
      {
        japanese: "ご飯を食べる前に、手を洗います。",
        hiragana: "ごはん を たべる まえ に、て を あらいます。",
        translation: "Sebelum makan nasi, saya mencuci tangan."
      }
    ],
    notes: "Kata kerja sebelum まえに selalu dalam Bentuk Kamus (bukan bentuk lampau).",
    tags: ["N5", "Urutan"]
  },
  {
    id: "bp_ato_de",
    pattern: "～あとで (Setelah)",
    romajiPattern: "~ato de",
    meaning: "Setelah melakukan...",
    formula: "Kata Kerja [Bentuk た] + あとで / Kata Benda + の + あとで",
    level: "N5",
    category: "Bentuk Kata Kerja",
    explanation: "Menyatakan bahwa suatu tindakan dilakukan setelah tindakan lain selesai tuntas.",
    exampleSentences: [
      {
        japanese: "テストが終わったあとで、遊びに行きます。",
        hiragana: "テスト が おわった あと で、あそび に いきます。",
        translation: "Setelah ujian selesai, saya akan pergi bermain."
      }
    ],
    notes: "Kata kerja sebelum あとで selalu dalam Bentuk-TA (lampau).",
    tags: ["N5", "Urutan"]
  },

  // ==========================================
  // UNGKAPAN & KEINGINAN (N5 & N4)
  // ==========================================
  {
    id: "bp_tai_desu",
    pattern: "～たいです",
    romajiPattern: "~tai desu",
    meaning: "Ingin melakukan... (Keinginan Diri Sendiri)",
    formula: "Kata Kerja [Masu-Stem] + たいです",
    level: "N5",
    category: "Ungkapan & Keinginan",
    explanation: "Digunakan untuk menyampaikan keinginan atau hasrat diri sendiri untuk melakukan suatu tindakan.",
    exampleSentences: [
      {
        japanese: "日本へ行きたいです。",
        hiragana: "にほん へ いきたい です。",
        translation: "Saya ingin pergi ke Jepang."
      },
      {
        japanese: "冷たい水を飲みたいです。",
        hiragana: "つめたい みず を のみたい です。",
        translation: "Saya ingin minum air dingin."
      }
    ],
    notes: "Hanya untuk menyatakan keinginan diri sendiri (orang pertama). Jangan gunakan untuk menanyakan/menyatakan keinginan orang lain secara langsung.",
    tags: ["N5", "Keinginan", "Hasrat"]
  },
  {
    id: "bp_hou_ga_ii",
    pattern: "～ほうがいいです",
    romajiPattern: "~hou ga ii desu",
    meaning: "Sebaiknya... / Lebih baik... (Saran / Nasihat)",
    formula: "Kata Kerja [Bentuk た] + ほうがいい (Positif) / [Bentuk ない] + ほうがいい (Negatif)",
    level: "N5",
    category: "Ungkapan & Keinginan",
    explanation: "Digunakan untuk memberikan saran atau rekomendasi yang baik kepada lawan bicara.",
    exampleSentences: [
      {
        japanese: "風邪をひいたときは、薬を飲んだほうがいいですよ。",
        hiragana: "かぜ を ひいた とき は、くすり を のんだ ほう が いいですよ。",
        translation: "Saat terkena flu, sebaiknya minum obat."
      },
      {
        japanese: "夜遅くお酒を飲まないほうがいいです。",
        hiragana: "よる おそく おさけ を のまない ほう が いいです。",
        translation: "Sebaiknya tidak minum alkohol larut malam."
      }
    ],
    notes: "Untuk saran positif, gunakan kata kerja Bentuk-TA (lampau). Untuk saran negatif, gunakan Bentuk-NAI.",
    tags: ["N5", "Saran", "Nasihat"]
  },
  {
    id: "bp_tsumori",
    pattern: "～つもりです",
    romajiPattern: "~tsumori desu",
    meaning: "Bercita-cita / Berencana untuk... (Niat Kuat)",
    formula: "Kata Kerja [Bentuk Kamus / ない] + つもりです",
    level: "N5",
    category: "Ungkapan & Keinginan",
    explanation: "Menyatakan niat atau rencana pribadi yang sudah dipikirkan dan diputuskan sebelumnya.",
    exampleSentences: [
      {
        japanese: "来年、日本へ行くつもりです。",
        hiragana: "らいねん、にほん へ いく つもり です。",
        translation: "Tahun depan, saya berencana pergi ke Jepang."
      },
      {
        japanese: "明日はどこへも出かけないつもりです。",
        hiragana: "あした は どこ へ も でかけない つもり です。",
        translation: "Besok saya berencana tidak pergi ke mana pun."
      }
    ],
    notes: "Merupakan rencana yang lebih kuat dibanding 予定 (yotei = jadwal resmi).",
    tags: ["N5", "Rencana", "Niat"]
  },
  {
    id: "bp_sugi_ru",
    pattern: "～すぎる / ～すぎます",
    romajiPattern: "~sugiru",
    meaning: "Terlalu... / Berlebihan",
    formula: "Kata Kerja Stem / Kata Sifat (buang い/な) + すぎる",
    level: "N4",
    category: "Ungkapan & Keinginan",
    explanation: "Menyatakan kondisi atau tindakan yang sudah melebihi batas wajar dan berkonotasi negatif/keluhan.",
    exampleSentences: [
      {
        japanese: "この料理は辛すぎます。",
        hiragana: "この りょうり は からすぎます。",
        translation: "Masakan ini terlalu pedas."
      },
      {
        japanese: "昨晩、お酒を飲みすぎました。",
        hiragana: "さくばん、おさけ を のみすぎました。",
        translation: "Semalam saya terlalu banyak minum alkohol."
      }
    ],
    notes: "Kata sifat-i dihilangkan い-nya (辛い -> 辛すぎます). Kata sifat-na dihilangkan な-nya.",
    tags: ["N4", "Berlebihan"]
  },
  {
    id: "bp_yasui_nikui",
    pattern: "～やすい / ～にくい",
    romajiPattern: "~yasui / ~nikui",
    meaning: "Mudah di-... / Sulit di-...",
    formula: "Kata Kerja [Masu-Stem] + やすい / にくい",
    level: "N4",
    category: "Ungkapan & Keinginan",
    explanation: "Menyatakan sifat atau karakteristik suatu benda/tindakan yang mudah atau sulit untuk dilakukan.",
    exampleSentences: [
      {
        japanese: "このペンはとても書きやすいです。",
        hiragana: "この ペン は とても かきやすい です。",
        translation: "Pena ini sangat mudah digunakan untuk menulis."
      },
      {
        japanese: "この字は小さくて読みにくいです。",
        hiragana: "この じ は ちいさくて よみにくい です。",
        translation: "Huruf ini kecil sehingga sulit dibaca."
      }
    ],
    notes: "Bentuk gabungan ini berubah sifat menjadi Kata Sifat-i.",
    tags: ["N4", "Kemudahan"]
  },
  {
    id: "bp_nagara",
    pattern: "～ながら",
    romajiPattern: "~nagara",
    meaning: "Sambil melakukan... (Dua aksi bersamaan)",
    formula: "Kata Kerja A [Masu-Stem] + ながら、Kata Kerja B",
    level: "N5",
    category: "Ungkapan & Keinginan",
    explanation: "Digunakan ketika satu orang melakukan dua kegiatan secara bersamaan dalam satu waktu.",
    exampleSentences: [
      {
        japanese: "音楽を聞きながら勉強をします。",
        hiragana: "おんがく を ききながら べんきょう を します。",
        translation: "Saya belajar sambil mendengarkan musik."
      },
      {
        japanese: "テレビを見ながらご飯を食べます。",
        hiragana: "テレビ を みながら ごはん を たべます。",
        translation: "Saya makan sambil menonton TV."
      }
    ],
    notes: "Fokus aksi utama berada pada kata kerja kedua (Kata Kerja B).",
    tags: ["N5", "Bersamaan"]
  },
  {
    id: "bp_tame_ni",
    pattern: "～ために",
    romajiPattern: "~tame ni",
    meaning: "Demi... / Untuk...",
    formula: "Kata Kerja [Bentuk Kamus] / Kata Benda + の + ために",
    level: "N4",
    category: "Ungkapan & Keinginan",
    explanation: "Menyatakan tujuan utama atau alasan pengorbanan demi mencapai suatu target.",
    exampleSentences: [
      {
        japanese: "車を買うために、お金を貯めています。",
        hiragana: "くるま を かう ため に、おかね を ためています。",
        translation: "Saya mengumpulkan uang untuk membeli mobil."
      },
      {
        japanese: "家族のために頑張って働きます。",
        hiragana: "かぞく の ため に がんばって はたらきます。",
        translation: "Saya berjuang bekerja demi keluarga."
      }
    ],
    notes: "Jika disambungkan dengan Kata Benda, wajib tambahkan partikel の (misal: 家族のために).",
    tags: ["N4", "Tujuan"]
  },
  {
    id: "bp_kamo_shirenai",
    pattern: "～かもしれない / ～かもしれません",
    romajiPattern: "~kamo shirenai",
    meaning: "Mungkin... / Kemungkinan...",
    formula: "Bentuk Kasual (Biasa) + かもしれません",
    level: "N5",
    category: "Ungkapan & Keinginan",
    explanation: "Digunakan untuk menyatakan dugaan atau kemungkinan dengan tingkat kepastian sekitar 50%.",
    exampleSentences: [
      {
        japanese: "明日、雨が降るかもしれません。",
        hiragana: "あした、あめ が ふる かもしれません。",
        translation: "Besok mungkin akan turun hujan."
      },
      {
        japanese: "田中さんは病気かもしれません。",
        hiragana: "たなかさん は びょうき かもしれません。",
        translation: "Tanaka-san mungkin sedang sakit."
      }
    ],
    notes: "Dalam bahasa percakapan santai sehari-hari sering disingkat menjadi かも (kamo).",
    tags: ["N5", "Dugaan", "Kemungkinan"]
  },
  {
    id: "bp_to_omou",
    pattern: "～と思います",
    romajiPattern: "~to omoimasu",
    meaning: "Saya kira... / Saya pikir...",
    formula: "Bentuk Kasual (Biasa) + と思います",
    level: "N5",
    category: "Ungkapan & Keinginan",
    explanation: "Digunakan untuk menyampaikan pendapat, opini, atau perkiraan pribadi pembicara.",
    exampleSentences: [
      {
        japanese: "明日は雨が降ると思います。",
        hiragana: "あした は あめ が ふる と おもいます。",
        translation: "Saya kira besok akan turun hujan."
      },
      {
        japanese: "この映画はとても面白いと思います。",
        hiragana: "この えいが は とても おもしろい と おもいます。",
        translation: "Saya pikir film ini sangat menarik."
      }
    ],
    notes: "Sebelum と思います selalu gunakan bentuk kasual/biasa.",
    tags: ["N5", "Pendapat"]
  },

  // ==========================================
  // SYARAT & PERBANDINGAN (N5 & N4)
  // ==========================================
  {
    id: "bp_tara",
    pattern: "～たら",
    romajiPattern: "~tara",
    meaning: "Kalau... / Jika... / Setelah...",
    formula: "Kata Kerja / Sifat [Bentuk Lampau た] + ら",
    level: "N5",
    category: "Syarat & Perbandingan",
    explanation: "Pengandaian yang paling fleksibel dan umum digunakan dalam bahasa Jepang untuk kondisi 'jika A terjadi, maka B'.",
    exampleSentences: [
      {
        japanese: "日本へ行ったら、富士山に登りたいです。",
        hiragana: "にほん へ いったら、ふじさん に のぼりたい です。",
        translation: "Jika pergi ke Jepang, saya ingin mendaki Gunung Fuji."
      },
      {
        japanese: "安かったら、買います。",
        hiragana: "やすかったら、かいます。",
        translation: "Kalau murah, saya akan beli."
      }
    ],
    notes: "Dapat juga berarti 'setelah' (misal: setelah sampai stasiun, telepon ya).",
    tags: ["N5", "Pengandaian", "Syarat"]
  },
  {
    id: "bp_ba_form",
    pattern: "～ば (Pengandaian Syarat)",
    romajiPattern: "~ba",
    meaning: "Jika... / Seandainya...",
    formula: "Kata Kerja [Bentuk-Ba] / Sifat-i (buang い + ければ)",
    level: "N4",
    category: "Syarat & Perbandingan",
    explanation: "Menyatakan syarat logis yang diperlukan agar suatu hasil dapat tercapai.",
    exampleSentences: [
      {
        japanese: "安ければ買います。",
        hiragana: "やすければ かいます。",
        translation: "Jika murah, saya beli."
      }
    ],
    notes: "Merupakan syarat pengandaian formal dan logis.",
    tags: ["N4", "Syarat"]
  },
  {
    id: "bp_yori",
    pattern: "～より",
    romajiPattern: "~yori",
    meaning: "Daripada... (Perbandingan)",
    formula: "Kata Benda A + は + Kata Benda B + より + Kata Sifat",
    level: "N5",
    category: "Syarat & Perbandingan",
    explanation: "Digunakan untuk membandingkan dua hal di mana A lebih memiliki sifat tertentu dibanding B.",
    exampleSentences: [
      {
        japanese: "東京は大阪より人が多いです。",
        hiragana: "とうきょう は おおさか より ひと が おおい です。",
        translation: "Tokyo penduduknya lebih banyak daripada Osaka."
      },
      {
        japanese: "飛行機は電車より速いです。",
        hiragana: "ひこうき は でんしゃ より はやい です。",
        translation: "Pesawat terbang lebih cepat daripada kereta."
      }
    ],
    notes: "Pola komplit: A は B より ~ です (A lebih ~ daripada B).",
    tags: ["N5", "Perbandingan"]
  },
  {
    id: "bp_tari_tari",
    pattern: "～たり ～たりします",
    romajiPattern: "~tari ~tari shimasu",
    meaning: "Melakukan A, B, dan lain-lain (Contoh Kegiatan)",
    formula: "Kata Kerja A [Bentuk た] + り、Kata Kerja B [Bentuk た] + りします",
    level: "N5",
    category: "Syarat & Perbandingan",
    explanation: "Digunakan untuk menyebutkan beberapa contoh kegiatan tidak berurutan yang dilakukan secara acak.",
    exampleSentences: [
      {
        japanese: "休みの日は本を読んだり、音楽を聞いたりします。",
        hiragana: "やすみ の ひ は ほん を よんだり、おんがく を きいたり します。",
        translation: "Pada hari libur saya membaca buku, mendengarkan musik, dan kegiatan lainnya."
      }
    ],
    notes: "Selalu diakhiri dengan kata kerja します di bagian akhir.",
    tags: ["N5", "Contoh Aksi"]
  },
  {
    id: "bp_kara_reason",
    pattern: "～から (Sebab / Alasan)",
    romajiPattern: "~kara (because)",
    meaning: "Karena... / Oleh karena itu...",
    formula: "Kalimat Alasan + から、Kalimat Hasil",
    level: "N5",
    category: "Syarat & Perbandingan",
    explanation: "Menyatakan alasan subjektif dari pembicara mengapa suatu hal terjadi.",
    exampleSentences: [
      {
        japanese: "時間がなかったから、朝ご飯を食べませんでした。",
        hiragana: "じかん が なかった から、あさごはん を たべませんでした。",
        translation: "Karena tidak ada waktu, saya tidak makan sarapan."
      }
    ],
    notes: "Bersifat lebih kasual dan subjektif dibanding ので (node).",
    tags: ["N5", "Alasan"]
  },
  {
    id: "bp_node_reason",
    pattern: "～ので (Alasan Sopan)",
    romajiPattern: "~node (because / since)",
    meaning: "Karena... / Oleh sebab...",
    formula: "Bentuk Kasual + ので (Kata Sifat-na/Benda + なので)",
    level: "N4",
    category: "Syarat & Perbandingan",
    explanation: "Menyatakan alasan yang sopan, objektif, dan halus. Sangat disarankan digunakan pada situasi bisnis dan formal.",
    exampleSentences: [
      {
        japanese: "風邪をひいたので、会社を休んでいます。",
        hiragana: "かぜ を ひいた ので、かいしゃ を やすんでいます。",
        translation: "Karena terkena flu, saya tidak masuk kerja."
      }
    ],
    notes: "Lebih halus dan sopan dibanding から (kara).",
    tags: ["N4", "Alasan Sopan"]
  },

  // ==========================================
  // SOPAN & KEHORMATAN (N5 & N4)
  // ==========================================
  {
    id: "bp_te_ageru",
    pattern: "～てあげます / ～てあげる",
    romajiPattern: "~te agemasu",
    meaning: "Melakukan sesuatu untuk orang lain (Bantuan/Kebaikan)",
    formula: "Kata Kerja [Bentuk て] + あげます",
    level: "N5",
    category: "Sopan & Kehormatan",
    explanation: "Digunakan saat pembicara melakukan suatu kebaikan atau bantuan untuk orang lain.",
    exampleSentences: [
      {
        japanese: "私は妹に宿題を教えてあげました。",
        hiragana: "わたし は いもうと に しゅくだい を おしえて あげました。",
        translation: "Saya mengajari adik perempuan saya mengerjakan PR."
      }
    ],
    notes: "Jangan gunakan kepada atasan/senior karena bisa terdengar menyombongkan kebaikan.",
    tags: ["N5", "Sopan", "Bantuan"]
  },
  {
    id: "bp_te_kureru",
    pattern: "～てくれます / ～てくれる",
    romajiPattern: "~te kuremasu",
    meaning: "Orang lain melakukan sesuatu untuk saya",
    formula: "Orang Lain + が + Kata Kerja [Bentuk て] + くれます",
    level: "N5",
    category: "Sopan & Kehormatan",
    explanation: "Digunakan ketika orang lain dengan sukarela melakukan tindakan kebaikan yang menguntungkan pembicara.",
    exampleSentences: [
      {
        japanese: "鈴木さんが自転車を直してくれました。",
        hiragana: "すずきさん が じてんしゃ を なおして くれました。",
        translation: "Suzuki-san memperbaiki sepeda untuk saya."
      }
    ],
    notes: "Subjek utama adalah orang yang memberikan kebaikan.",
    tags: ["N5", "Sopan", "Kebaikan"]
  },
  {
    id: "bp_te_morau",
    pattern: "～てもらいます / ～てもら",
    romajiPattern: "~te moraimasu",
    meaning: "Menerima bantuan/tindakan dari orang lain",
    formula: "Pembicara + は + Orang Lain + に + Kata Kerja [Bentuk て] + もらいます",
    level: "N5",
    category: "Sopan & Kehormatan",
    explanation: "Menyatakan bahwa pembicara menerima kebaikan atas permohonan atau bantuan orang lain.",
    exampleSentences: [
      {
        japanese: "私は木村さんに英語を教えてもらいました。",
        hiragana: "わたし は きむらさん に えいご を おしえて もらいました。",
        translation: "Saya diajari bahasa Inggris oleh Kimura-san."
      }
    ],
    notes: "Subjek utama adalah pembicara yang menerima kebaikan.",
    tags: ["N5", "Sopan", "Menerima"]
  },
  {
    id: "bp_keigo_respect",
    pattern: "お / ご ～ ください (Permintaan Sangat Sopan)",
    romajiPattern: "o / go ~ kudasai",
    meaning: "Silakan... (Bentuk Keigo Perintah Sangat Halus)",
    formula: "お + Kata Kerja [Stem] + ください / ご + Kata Benda Kango + ください",
    level: "N4",
    category: "Sopan & Kehormatan",
    explanation: "Digunakan dalam situasi bisnis, toko, stasiun, atau layanan publik untuk meminta tamu/pelanggan melakukan sesuatu dengan sangat sopan.",
    exampleSentences: [
      {
        japanese: "少々お待ちください。",
        hiragana: "しょうしょう おまち ください。",
        translation: "Silakan tunggu sebentar (sangat sopan)."
      },
      {
        japanese: "ご注意ください。",
        hiragana: "ごちゅうい ください。",
        translation: "Harap berhati-hati (sangat sopan)."
      }
    ],
    notes: "Gunakan お untuk kata asli Jepang (Wago) dan ご untuk kata serapan Cina (Kango).",
    tags: ["N4", "Keigo", "Sangat Sopan"]
  }
];
