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
      },
      {
        japanese: "公園で友達とサッカーをします。",
        hiragana: "こうえん で ともだち と サッカー を します。",
        translation: "Saya bermain sepak bola dengan teman di taman."
      },
      {
        japanese: "昨日、デパートで新しい服を買いました。",
        hiragana: "きのう、デパート で あたらしい ふく を かいました。",
        translation: "Kemarin saya membeli baju baru di toserba."
      },
      {
        japanese: "静かな部屋で試験の勉強をします。",
        hiragana: "しずかな へや で しけん の べんきょう を します。",
        translation: "Saya belajar untuk ujian di kamar yang tenang."
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
      },
      {
        japanese: "はしで美味しいラーメンを食べます。",
        hiragana: "はし で おいしい ラーメン を たべます。",
        translation: "Saya makan ramen lezat menggunakan sumpit."
      },
      {
        japanese: "はさみで紙を切ってください。",
        hiragana: "はさみ で かみ を きって ください。",
        translation: "Tolong potong kertas dengan gunting."
      },
      {
        japanese: "飛行機で東京から大阪まで行きました。",
        hiragana: "ひこうき で とうきょう から おおさか まで いきました。",
        translation: "Saya pergi dari Tokyo ke Osaka dengan pesawat terbang."
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
      },
      {
        japanese: "机の上に辞書があります。",
        hiragana: "つくえ の うえ に じしょ が あります。",
        translation: "Di atas meja ada kamus."
      },
      {
        japanese: "日曜日に友達の家に行きます。",
        hiragana: "にちようび に ともだち の いえ に いきます。",
        translation: "Pada hari Minggu saya pergi ke rumah teman."
      },
      {
        japanese: "来月、京都に旅行します。",
        hiragana: "らいげつ、きょうと に りょこう します。",
        translation: "Bulan depan saya akan berwisata ke Kyoto."
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
      },
      {
        japanese: "毎日何時に家へ帰りますか。",
        hiragana: "まいにち なんじ に いえ へ かえります か。",
        translation: "Setiap hari jam berapa kamu pulang ke rumah?"
      },
      {
        japanese: "来週、北海道へ遊びに行きます。",
        hiragana: "らいしゅう、ほっかいどう へ あそび に いきます。",
        translation: "Minggu depan saya pergi main ke Hokkaido."
      },
      {
        japanese: "風邪をひいたので病院へ行きます。",
        hiragana: "かぜ を ひいた ので びょういん へ いきます。",
        translation: "Karena kena flu, saya pergi ke rumah sakit."
      },
      {
        japanese: "友達と一緒に映画館へ行きました。",
        hiragana: "ともだち と いっしょ に えいがかん へ いきました。",
        translation: "Saya pergi ke bioskop bersama teman."
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
      },
      {
        japanese: "毎朝、新聞を読みます。",
        hiragana: "まいあさ、しんぶん を よみます。",
        translation: "Setiap pagi saya membaca koran."
      },
      {
        japanese: "夜、テレビを見ます。",
        hiragana: "よる、テレビ を みます。",
        translation: "Malam hari saya menonton TV."
      },
      {
        japanese: "友達に手紙を書きました。",
        hiragana: "ともだち に てがみ を かきました。",
        translation: "Saya menulis surat untuk teman."
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
      },
      {
        japanese: "私は辛い料理が好きです。",
        hiragana: "わたし は からい りょうり が すき です。",
        translation: "Saya suka masakan pedas."
      },
      {
        japanese: "あそこに綺麗な花があります。",
        hiragana: "あそこ に きれいな はな が あります。",
        translation: "Di sana ada bunga yang indah."
      },
      {
        japanese: "お腹が痛いです。",
        hiragana: "おなか が いたい です。",
        translation: "Perut saya sakit."
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
      },
      {
        japanese: "父は会社員です。母も会社員です。",
        hiragana: "ちち は かいしゃいん です。はは も かいしゃいん です。",
        translation: "Ayah pegawai kantor. Ibu juga pegawai kantor."
      },
      {
        japanese: "教室に誰もいません。",
        hiragana: "きょうしつ に だれ も いません。",
        translation: "Di ruang kelas tidak ada siapa pun."
      },
      {
        japanese: "今朝、何も食べませんでした。",
        hiragana: "けさ、なに も たべませんでした。",
        translation: "Tadi pagi saya tidak makan apa pun."
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
      },
      {
        japanese: "家族と一緒に旅行します。",
        hiragana: "かぞく と いっしょ に りょこう します。",
        translation: "Saya berlibur bersama dengan keluarga."
      },
      {
        japanese: "ノートとペンを準備してください。",
        hiragana: "ノート と ペン を じゅんび してください。",
        translation: "Tolong siapkan buku catatan dan pena."
      },
      {
        japanese: "先生と日本語で話しました。",
        hiragana: "せんせい と にほんご で はなしました。",
        translation: "Saya berbicara dalam bahasa Jepang bersama guru."
      }
    ],
    notes: "Untuk 'bersama sendirian', gunakan 1人で (hitoride).",
    tags: ["N5", "Partikel", "Penggabungan"]
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
      },
      {
        japanese: "ドアを開けてください。",
        hiragana: "ドア を あけて ください。",
        translation: "Tolong buka pintunya."
      },
      {
        japanese: "辞書を貸してください。",
        hiragana: "じしょ を かして ください。",
        translation: "Tolong pinjamkan saya kamus."
      },
      {
        japanese: "もう一度言ってください。",
        hiragana: "もう いちど いって ください。",
        translation: "Tolong katakan sekali lagi."
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
      },
      {
        japanese: "ここに車を止めないでください。",
        hiragana: "ここに くるま を とめないで ください。",
        translation: "Tolong jangan parkir mobil di sini."
      },
      {
        japanese: "図書館で大きな声で話さないでください。",
        hiragana: "としょかん で おおきな こえ で はなさないで ください。",
        translation: "Tolong jangan berbicara dengan suara keras di perpustakaan."
      },
      {
        japanese: "パスポートを忘れないでください。",
        hiragana: "パスポート を わすれないで ください。",
        translation: "Tolong jangan lupa paspor Anda."
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
      },
      {
        japanese: "テレビをつけてもいいですか。",
        hiragana: "テレビ を つけても いいですか。",
        translation: "Bolehkah saya menyalakan TV?"
      },
      {
        japanese: "用事があれば、早く帰ってもいいですよ。",
        hiragana: "ようじ が あれば、はやく かえっても いいですよ。",
        translation: "Kalau ada urusan, kamu boleh pulang lebih cepat."
      },
      {
        japanese: "このペンを使ってもいいですか。",
        hiragana: "この ペン を つかっても いいですか。",
        translation: "Bolehkah saya menggunakan pena ini?"
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
      },
      {
        japanese: "美術館で絵に触ってはいけません。",
        hiragana: "びじゅつかん で え に さわって はいけません。",
        translation: "Dilarang menyentuh lukisan di museum seni."
      },
      {
        japanese: "お酒を飲んで運転してはいけません。",
        hiragana: "おさけ を のんで うんてん して はいけません。",
        translation: "Dilarang mengemudi setelah minum alkohol."
      },
      {
        japanese: "芝生に入ってはいけません。",
        hiragana: "しばふ に はいって はいけません。",
        translation: "Dilarang masuk ke rumput (taman)."
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
      },
      {
        japanese: "姉は結婚しています。",
        hiragana: "あね は けっこん しています。",
        translation: "Kakak perempuan saya sudah menikah."
      },
      {
        japanese: "田中さんは新しいメガネをかけています。",
        hiragana: "たなかさん は あたらしい メガネ を かけています。",
        translation: "Tanaka-san sedang memakai kacamata baru."
      },
      {
        japanese: "毎日日本語を勉強しています。",
        hiragana: "まいにち にほんご を べんきょう しています。",
        translation: "Saya (rutin) belajar bahasa Jepang setiap hari."
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
      },
      {
        japanese: "テーブルの上に料理が準備してあります。",
        hiragana: "テーブル の うえ に りょうり が じゅんび して あります。",
        translation: "Makanan sudah disiapkan di atas meja."
      },
      {
        japanese: "部屋の窓が開けてあります。",
        hiragana: "へや の まど が あけて あります。",
        translation: "Jendela kamar sengaja dibiarkan terbuka."
      },
      {
        japanese: "メモ帳に名前が書いてあります。",
        hiragana: "メモちょう に なまえ が かいて あります。",
        translation: "Nama sudah tertulis di buku catatan."
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
      },
      {
        japanese: "使ったあとは、道具を片付けておいてください。",
        hiragana: "つかった あと は、どうぐ を かたづけて おいて ください。",
        translation: "Setelah dipakai, tolong rapikan peralatan terlebih dahulu."
      },
      {
        japanese: "パーティーのために飲み物を買って置きます。",
        hiragana: "パーティー の ため に のみもの を かっておきます。",
        translation: "Saya membeli minuman terlebih dahulu untuk pesta."
      },
      {
        japanese: "明日試験があるので、復習しておきます。",
        hiragana: "あした しけん が ある ので、ふくしゅう しておきます。",
        translation: "Karena besok ada ujian, saya belajar mengulang dulu."
      },
      {
        japanese: "窓を開けておいてください。",
        hiragana: "まど を あけて おいて ください。",
        translation: "Tolong biarkan jendelanya tetap terbuka."
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
      },
      {
        japanese: "大切な鍵をなくしてしまいました。",
        hiragana: "たいせつな かぎ を なくして しまいました。",
        translation: "Saya terlanjur menghilangkan kunci penting."
      },
      {
        japanese: "電車の中で財布を落としてしまいました。",
        hiragana: "でんしゃ の なか で さいふ を おとして しまいました。",
        translation: "Saya tidak sengaja menjatuhkan dompet di dalam kereta."
      },
      {
        japanese: "今晩中にこの仕事を終わらせてしまいたいです。",
        hiragana: "こんばんちゅう に この しごと を おわらせて しまいたいです。",
        translation: "Saya ingin merampungkan tuntas pekerjaan ini malam ini."
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
      },
      {
        japanese: "新しいアプリを作ってみました。",
        hiragana: "あたらしい アプリ を つくってみました。",
        translation: "Saya mencoba membuat aplikasi baru."
      },
      {
        japanese: "自分で着ものを着てみます。",
        hiragana: "じぶん で きもの を きてみます。",
        translation: "Saya mencoba memakai kimono sendiri."
      },
      {
        japanese: "難しそうですが、やってみます。",
        hiragana: "むずかしそう です が、やってみます。",
        translation: "Kelihatannya sulit, tapi saya akan coba lakukan."
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
      },
      {
        japanese: "漢字を100個書くことができます。",
        hiragana: "かんじ を ひゃっこ かく こと が できます。",
        translation: "Saya bisa menulis 100 buah kanji."
      },
      {
        japanese: "このプールで泳ぐことができます。",
        hiragana: "この プール で およぐ こと が できます。",
        translation: "Bisa berenang di kolam renang ini."
      },
      {
        japanese: "カードで払うことができますか。",
        hiragana: "カード で はらう こと が できます か。",
        translation: "Apakah bisa membayar menggunakan kartu?"
      },
      {
        japanese: "日本語で日常会話をすることができます。",
        hiragana: "にほんご で にちじょうかいわ を する こと が できます。",
        translation: "Saya bisa melakukan percakapan sehari-hari dalam bahasa Jepang."
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
      },
      {
        japanese: "富士山に登ったことがあります。",
        hiragana: "ふじさん に のぼった こと が あります。",
        translation: "Saya pernah mendaki Gunung Fuji."
      },
      {
        japanese: "歌舞伎を見たことがあります。",
        hiragana: "かぶき を みた こと が あります。",
        translation: "Saya pernah menonton pertunjukan Kabuki."
      },
      {
        japanese: "新幹線に乗ったことがありません。",
        hiragana: "しんかんせん に のった こと が ありません。",
        translation: "Saya belum pernah naik Shinkansen."
      },
      {
        japanese: "日本人に手紙を書いたことがあります。",
        hiragana: "にほんじん に てがみ を かいた こと が あります。",
        translation: "Saya pernah menulis surat untuk orang Jepang."
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
      },
      {
        japanese: "寝る前に、本を読みます。",
        hiragana: "ねる まえ に、ほん を よみます。",
        translation: "Sebelum tidur, saya membaca buku."
      },
      {
        japanese: "日本へ来る前に、日本語を勉強しました。",
        hiragana: "にほん へ くる まえ に、にほんご を べんきょう しました。",
        translation: "Sebelum datang ke Jepang, saya belajar bahasa Jepang."
      },
      {
        japanese: "食事の前に、クスリを飲みます。",
        hiragana: "しょくじ の まえ に、クスリ を のみます。",
        translation: "Sebelum makan, saya minum obat."
      },
      {
        japanese: "泳ぐ前に、準備運動をします。",
        hiragana: "およぐ まえ に、じゅんびうんどう を します。",
        translation: "Sebelum berenang, saya melakukan pemanasan."
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
    formula: "Kata Kerja [Bentuk た] + あとで / Kata Benda + の + あ特で",
    level: "N5",
    category: "Bentuk Kata Kerja",
    explanation: "Menyatakan bahwa suatu tindakan dilakukan setelah tindakan lain selesai tuntas.",
    exampleSentences: [
      {
        japanese: "テストが終わったあとで、遊びに行きます。",
        hiragana: "テスト が おわった あと で、あそび に いきます。",
        translation: "Setelah ujian selesai, saya akan pergi bermain."
      },
      {
        japanese: "仕事が終わったあとで、飲みに行きませんか。",
        hiragana: "しごと が おわった あと で、のみ に いきませんか。",
        translation: "Setelah kerja selesai, mau pergi minum?"
      },
      {
        japanese: "ご飯を食べたあとで、歯を磨きます。",
        hiragana: "ごはん を たべた あと で、は を みがきます。",
        translation: "Setelah makan nasi, saya menggosok gigi."
      },
      {
        japanese: "授業のあとで、先生に質問します。",
        hiragana: "じゅぎょう の あと で、せんせい に しつもん します。",
        translation: "Setelah pelajaran selesai, saya akan bertanya kepada guru."
      },
      {
        japanese: "映画を見たあとで、喫茶店でおしゃべりしました。",
        hiragana: "えいが を みた あと で、きっさてん で おしゃべり しました。",
        translation: "Setelah menonton film, kami ngobrol di kafe."
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
      },
      {
        japanese: "新しい車を買いたいです。",
        hiragana: "あたらしい くるま を かいたい です。",
        translation: "Saya ingin membeli mobil baru."
      },
      {
        japanese: "将来、医者になりいたいです。",
        hiragana: "しょうらい、いしゃ に なりたい です。",
        translation: "Saya ingin menjadi dokter di masa depan."
      },
      {
        japanese: "今日は疲れたので早く帰りたいです。",
        hiragana: "きょう は つかれた ので はやく かえりたい です。",
        translation: "Karena hari ini lelah, saya ingin cepat pulang."
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
      },
      {
        japanese: "明日はテストですから、早く寝たほうがいいですよ。",
        hiragana: "あした は テスト ですから、はやく ねた ほう が いいですよ。",
        translation: "Besok ada ujian, jadi sebaiknya tidur cepat."
      },
      {
        japanese: "もっと野菜を食べたほうがいいです。",
        hiragana: "もっと やさい を たべた ほう が いいです。",
        translation: "Sebaiknya kamu lebih banyak makan sayuran."
      },
      {
        japanese: "無理をしないほうがいいですよ。",
        hiragana: "むり を しない ほう が いいですよ。",
        translation: "Sebaiknya kamu jangan memaksakan diri."
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
      },
      {
        japanese: "大学を卒業したら、会社で働くつもりです。",
        hiragana: "だいがく を そつぎょう したら、かいしゃ で はたらく つもり です。",
        translation: "Setelah lulus universitas, saya berencana bekerja di perusahaan."
      },
      {
        japanese: "タバコをやめるつもりです。",
        hiragana: "タバコ を やめる つもり です。",
        translation: "Saya berniat untuk berhenti merokok."
      },
      {
        japanese: "今週末は家でゆっくり休むつもりです。",
        hiragana: "こんしゅうまつ は いえ で ゆっくり やすむ つもり です。",
        translation: "Akhir pekan ini saya berencana istirahat di rumah."
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
      },
      {
        japanese: "この服はちょっと大きすぎます。",
        hiragana: "この ふく は ちょっと おおきすぎます。",
        translation: "Baju ini agak terlalu besar."
      },
      {
        japanese: "テレビを見すぎると、目が悪くなります。",
        hiragana: "テレビ を みすぎる と、め が わるく なります。",
        translation: "Kalau terlalu banyak nonton TV, mata jadi rusak."
      },
      {
        japanese: "部屋が静かすぎて、怖いです。",
        hiragana: "へや が しずかすげて、こわい です。",
        translation: "Kamarnya terlalu hening, jadi seram."
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
      },
      {
        japanese: "東京の道は複雑で迷いやすいです。",
        hiragana: "とうきょう の みち は ふくざつ で まよいやすい です。",
        translation: "Jalanan Tokyo rumit sehingga mudah tersesat."
      },
      {
        japanese: "この肉は柔らかくて食べやすいです。",
        hiragana: "この にく は やわらかくて たべやすい です。",
        translation: "Daging ini empuk sehingga mudah dimakan."
      },
      {
        japanese: "雨の日は事故が起きやすいです。",
        hiragana: "あめのひ は じこ が おきやすい です。",
        translation: "Pada hari hujan, kecelakaan mudah terjadi."
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
      },
      {
        japanese: "友達とおしゃべりしながら歩きました。",
        hiragana: "ともだち と おしゃべり しながら あるきました。",
        translation: "Kami berjalan sambil ngobrol bersama teman."
      },
      {
        japanese: "コーヒーを飲みながら本を読みます。",
        hiragana: "コーヒー を のみながら ほん を よみます。",
        translation: "Saya membaca buku sambil minum kopi."
      },
      {
        japanese: "歌を歌いながら料理を作ります。",
        hiragana: "うた を うたいながら りょうり を つくります。",
        translation: "Saya memasak makanan sambil bernyanyi."
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
      },
      {
        japanese: "日本語の試験に合格するために、毎日勉強します。",
        hiragana: "にほんご の しけん に ごうかく する ため に、まいにち べんきょう します。",
        translation: "Demi lulus ujian bahasa Jepang, saya belajar setiap hari."
      },
      {
        japanese: "健康のために毎朝ジョギングをしています。",
        hiragana: "けんこう の ため に まいあさ ジョギング を しています。",
        translation: "Demi kesehatan, saya jogging setiap pagi."
      },
      {
        japanese: "家を建て増すために、ローンを組みました。",
        hiragana: "いえ を たてます ため に、ローン を くみました。",
        translation: "Saya mengambil kredit demi membangun rumah."
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
      },
      {
        japanese: "電車が遅れるかもしれません。",
        hiragana: "でんしゃ が おくれる かもしれません。",
        translation: "Kereta mungkin akan terlambat."
      },
      {
        japanese: "あの話は本当かもしれない。",
        hiragana: "あの はなし は ほんとう かもしれない。",
        translation: "Cerita itu mungkin benar."
      },
      {
        japanese: "会議に間に合わないかもしれません。",
        hiragana: "かいぎ に まにあわない かもしれません。",
        translation: "Mungkin tidak sempat terkejar rapat."
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
      },
      {
        japanese: "タバコは体に良くないと思います。",
        hiragana: "タバコ は からだ に よくない と おもいます。",
        translation: "Saya pikir rokok tidak baik untuk tubuh."
      },
      {
        japanese: "田中さんはもう帰ったと思います。",
        hiragana: "たなかさん は もう かえった と おもいます。",
        translation: "Saya kira Tanaka-san sudah pulang."
      },
      {
        japanese: "日本語の勉強は楽しいと思います。",
        hiragana: "にほんご の べんきょう は たのしい と おもいます。",
        translation: "Saya kira belajar bahasa Jepang itu menyenangkan."
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
      },
      {
        japanese: "駅に着いたら、電話をしてください。",
        hiragana: "えき に ついたら、でんわ を してください。",
        translation: "Jika/setelah sampai di stasiun, tolong telepon saya."
      },
      {
        japanese: "時間がなかったら、無理をしないでください。",
        hiragana: "じかん が なかったら、むり を しないで ください。",
        translation: "Kalau tidak ada waktu, jangan memaksakan diri."
      },
      {
        japanese: "雨が降ったら、家にいます。",
        hiragana: "あめ が ふったら、いえ に います。",
        translation: "Kalau hujan turun, saya akan berada di rumah."
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
      },
      {
        japanese: "時間があれば、一緒に行きましょう。",
        hiragana: "じかん が あれば、いっしょ に いきましょう。",
        translation: "Jika ada waktu, mari pergi bersama."
      },
      {
        japanese: "早く起きれば、電車に間に合います。",
        hiragana: "はやく おきれば、でんしゃ に まにあいます。",
        translation: "Jika bangun cepat, akan keburu kereta."
      },
      {
        japanese: "安ければ、たくさん買いたいです。",
        hiragana: "やすければ、たくさん かいたい です。",
        translation: "Jika murah, saya ingin beli banyak."
      },
      {
        japanese: "練習すれば、上手になりますよ。",
        hiragana: "れんしゅう すれば、じょうず に なります よ。",
        translation: "Jika berlatih, pasti akan menjadi pandai."
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
      },
      {
        japanese: "今日は昨日より寒いです。",
        hiragana: "きょう は きのう より さむい です。",
        translation: "Hari ini lebih dingin daripada kemarin."
      },
      {
        japanese: "漢字はひらがなより難しです。",
        hiragana: "かんじ は ひらがな より むずかしい です。",
        translation: "Kanji lebih sulit daripada hiragana."
      },
      {
        japanese: "りんごはみかんより大きいです。",
        hiragana: "りんご は みかん より おおきい です。",
        translation: "Apel lebih besar daripada jeruk."
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
      },
      {
        japanese: "週末は買い物をしたり、映画を見たりしました。",
        hiragana: "しゅうまつ は かいもの を したり、えいが を みたり しました。",
        translation: "Akhir pekan saya berbelanja, menonton film, dan lain-lain."
      },
      {
        japanese: "旅行で写真を撮ったり、美味しいものを食べたりしたいです。",
        hiragana: "りょこう で しゃしん を とったり、おいしい もの を たべたり したい です。",
        translation: "Saat liburan saya ingin berfoto, makan makanan lezat, dll."
      },
      {
        japanese: "部屋を掃除したり、洗濯したりします。",
        hiragana: "へや を そうじ したり、せんたく したり します。",
        translation: "Saya membersihkan kamar, mencuci baju, dan kegiatan lainnya."
      },
      {
        japanese: "公園で散歩したり、ベンチで休んだりしました。",
        hiragana: "こうえん で さんぽ したり、ベンチ で やすんだり しました。",
        translation: "Saya jalan-jalan di taman, istirahat di bangku, dll."
      }
    ],
    notes: "Selalu diakhiri dengan kata kerja します di bagian akhir.",
    tags: ["N5", "Contoh Aksi"]
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
      },
      {
        japanese: "友達に傘を貸してあげました。",
        hiragana: "ともだち に かさ を かして あげました。",
        translation: "Saya meminjamkan payung kepada teman."
      },
      {
        japanese: "弟におもちゃを買ってあげました。",
        hiragana: "おとうと に おもちゃ を かって あげました。",
        translation: "Saya membelikan mainan untuk adik laki-laki."
      },
      {
        japanese: "道に迷ったお年寄りに案内してあげました。",
        hiragana: "みち に まよった おとしより に あんない して あげました。",
        translation: "Saya menunjukkan jalan untuk orang tua yang tersesat."
      },
      {
        japanese: "荷物を持ってあげましょうか。",
        hiragana: "にもつ を もって あげましょう か。",
        translation: "Boleh saya bantu dibawakan barangnya?"
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
      },
      {
        japanese: "母が美味しいお弁当を作ってくれました。",
        hiragana: "はは が おいしい おべんとう を つくって くれました。",
        translation: "Ibu membuatkan bekal lezat untuk saya."
      },
      {
        japanese: "友達が駅まで車で送ってくれました。",
        hiragana: "ともだち が えき まで くるま で おくって くれました。",
        translation: "Teman mengantarkan saya sampai stasiun dengan mobil."
      },
      {
        japanese: "先生が親切に日本語を教えてくれました。",
        hiragana: "せんせい が しんせつ に にほんご を おしえて くれました。",
        translation: "Guru dengan baik hati mengajari saya bahasa Jepang."
      },
      {
        japanese: "誕生日に友達がプレゼントをくれました。",
        hiragana: "たんじょうび に ともだち が プレゼント を くれました。",
        translation: "Teman memberikan hadiah untuk saya di hari ulang tahun."
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
      },
      {
        japanese: "駅で知らない人に写真を撮ってもらいました。",
        hiragana: "えき で しらない ひと に しゃしん を とってもらいました。",
        translation: "Saya dipotretkan oleh orang tak dikenal di stasiun."
      },
      {
        japanese: "医者に薬を出してもらいました。",
        hiragana: "いしゃ に くすり を だしてもらいました。",
        translation: "Saya diberi resep obat oleh dokter."
      },
      {
        japanese: "田中さんに荷物を運んでもらいました。",
        hiragana: "たなかさん に にもつ を はこんでもらいました。",
        translation: "Saya dibantu dibawakan barang oleh Tanaka-san."
      },
      {
        japanese: "友達に辞書を貸してもらいました。",
        hiragana: "ともだち に じしょ を かしてもらいました。",
        translation: "Saya dipinjami kamus oleh teman."
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
      },
      {
        japanese: "どうぞお入りください。",
        hiragana: "どうぞ おはいり ください。",
        translation: "Silakan masuk (sangat sopan)."
      },
      {
        japanese: "自由にお取りください。",
        hiragana: "じゆう に おとり ください。",
        translation: "Silakan ambil dengan bebas (sangat sopan)."
      },
      {
        japanese: "こちらにご記入ください。",
        hiragana: "こちら に ごきにゅう ください。",
        translation: "Silakan isi formulir di sebelah sini (sangat sopan)."
      }
    ],
    notes: "Gunakan お untuk kata asli Jepang (Wago) dan ご untuk kata serapan Cina (Kango).",
    tags: ["N4", "Keigo", "Sangat Sopan"]
  }
];
