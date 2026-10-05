import { BunpouDictionaryEntry } from "@/types";

export const bunpouDictionaryData: BunpouDictionaryEntry[] = [
  // ==========================================
  // PARTIKEL & DASAR KALIMAT (N5 & N4)
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
  {
    id: "bp_kara_node",
    pattern: "～から / ～ので (Alasan / Sebab)",
    romajiPattern: "~kara / ~node (because / since)",
    meaning: "Karena... / Oleh sebab...",
    formula: "Kalimat A + から / ので + Kalimat B (Alasan)",
    level: "N5",
    category: "Partikel",
    explanation: "Digunakan untuk menjelaskan alasan terjadinya suatu tindakan. から lebih subyektif/personal, sedangkan ので lebih sopan dan objektif.",
    exampleSentences: [
      {
        japanese: "雨が降っているから、傘を持っていきます。",
        hiragana: "あめ が ふっている から、かさ を もっていきます。",
        translation: "Karena hujan sedang turun, saya membawa payung."
      },
      {
        japanese: "時間がありませんので、急ぎましょう。",
        hiragana: "じかん が ありません ので、いそぎましょう。",
        translation: "Karena tidak ada waktu, mari kita bergegas."
      },
      {
        japanese: "頭が痛いので、今日は早く寝ます。",
        hiragana: "あたま が いたい ので、きょう は はやく ねます。",
        translation: "Karena kepala saya sakit, hari ini saya tidur cepat."
      },
      {
        japanese: "美味しいから、たくさん食べました。",
        hiragana: "おいしい から、たくさん たべました。",
        translation: "Karena enak, saya makan banyak."
      },
      {
        japanese: "バスが遅れたので、遅刻しました。",
        hiragana: "バス が おくれた ので、ちこく しました。",
        translation: "Karena bus terlambat, saya jadi terlambat."
      }
    ],
    notes: "Sebelum ので, kata sifat-na dan kata benda harus ditambahi な (misal: 好きなので).",
    tags: ["N5", "Partikel", "Alasan"]
  },

  // ==========================================
  // KEWAJIBAN, LARANGAN & KEBUTUHAN (N5 & N4)
  // ==========================================
  {
    id: "bp_nakereba_naragai",
    pattern: "～しなければなりません / ～ないと (Harus)",
    romajiPattern: "~nakereba narimasen / ~naito (must / have to)",
    meaning: "Harus melakukan...",
    formula: "Kata Kerja [Bentuk ない -> なければなりません / ないと]",
    level: "N5",
    category: "Ungkapan & Keinginan",
    explanation: "Menyatakan kewajiban atau keharusan mutlak yang wajib dilaksanakan.",
    exampleSentences: [
      {
        japanese: "毎日薬を飲まなければなりません。",
        hiragana: "まいにち くすり を のまなければ なりません。",
        translation: "Setiap hari saya harus minum obat."
      },
      {
        japanese: "明日、早く起きないと。",
        hiragana: "あした、はやく おきないと。",
        translation: "Besok saya harus bangun cepat."
      },
      {
        japanese: "パスポートを見せなければなりません。",
        hiragana: "パスポート を みせなければ なりません。",
        translation: "Anda harus memperlihatkan paspor."
      },
      {
        japanese: "レポートを今日中に提出しなければなりません。",
        hiragana: "レポート を きょうじゅう に ていしゅつ しなければ なりません。",
        translation: "Laporan harus dikumpulkan hari ini juga."
      },
      {
        japanese: "もう帰らないと。",
        hiragana: "もう かえらないと。",
        translation: "Saya sudah harus pulang sekarang."
      }
    ],
    notes: "Dalam percakapan kasual sehari-hari, cukup gunakan singkatan ～ないと (naito) atau ～なくちゃ (nakucha).",
    tags: ["N5", "Kewajiban", "Harus"]
  },
  {
    id: "bp_nakutemo_ii",
    pattern: "～なくてもいいです (Tidak Perlu)",
    romajiPattern: "~nakutemo ii desu",
    meaning: "Tidak perlu / Boleh tidak melakukan...",
    formula: "Kata Kerja [Bentuk ない -> なくてもいいです]",
    level: "N5",
    category: "Ungkapan & Keinginan",
    explanation: "Menyatakan bahwa tidak ada kewajiban atau keharusan untuk melakukan sesuatu.",
    exampleSentences: [
      {
        japanese: "明日は休みですから、早く起きなくてもいいです。",
        hiragana: "あした は やすみ ですから、はやく おきなくても いいです。",
        translation: "Karena besok libur, kamu tidak perlu bangun cepat."
      },
      {
        japanese: "名前を書かなくてもいいです。",
        hiragana: "なまえ を かかなくても いいです。",
        translation: "Tidak perlu menuliskan nama."
      },
      {
        japanese: "全部食べなくてもいいですよ。",
        hiragana: "ぜんぶ たべなくても いいですよ。",
        translation: "Kamu tidak perlu menghabiskan semuanya kok."
      },
      {
        japanese: "心配しなくてもいいです。",
        hiragana: "しんぱい しなくても いいです。",
        translation: "Kamu tidak perlu khawatir."
      },
      {
        japanese: "靴を脱がなくてもいいです。",
        hiragana: "くつ を ぬがなくても いいです。",
        translation: "Tidak perlu melepas sepatu."
      }
    ],
    notes: "Kebalikan dari ～なければなりません (harus).",
    tags: ["N5", "Izin", "Bebas"]
  },

  // ==========================================
  // BENTUK KATA KERJA (N5 & N4)
  // ==========================================
  {
    id: "bp_potential_verb",
    pattern: "～可能形 (Bentuk Potensial - Bisa)",
    romajiPattern: "Potential Form (~eru / ~rareru)",
    meaning: "Bisa / Mampu melakukan...",
    formula: "G1: う-line -> え-line + る (書ける) / G2: + られる (食べられる) / G3: できる, 来られる",
    level: "N4",
    category: "Bentuk Kata Kerja",
    explanation: "Pola bentuk konjugasi kata kerja yang menyatakan kemampuan atau kesempatan melakukan sesuatu.",
    exampleSentences: [
      {
        japanese: "漢字が読めます。",
        hiragana: "かんじ が よめます。",
        translation: "Saya bisa membaca kanji."
      },
      {
        japanese: "一人で日本へ行けますか。",
        hiragana: "ひとり で にほん へ いけます か。",
        translation: "Apakah kamu bisa pergi ke Jepang sendirian?"
      },
      {
        japanese: "納豆が食べられますか。",
        hiragana: "なっとう が たべられます か。",
        translation: "Apakah kamu bisa makan natto?"
      },
      {
        japanese: "車が運転できます。",
        hiragana: "くるま が うんてん できます。",
        translation: "Saya bisa menyetir mobil."
      },
      {
        japanese: "明日は早く来られます。",
        hiragana: "あした は はやく こられます。",
        translation: "Besok saya bisa datang lebih cepat."
      }
    ],
    notes: "Partikel yang mendampingi objek berubah dari を menjadi が (misal: 漢字が読めます).",
    tags: ["N4", "Kemampuan", "Potensial"]
  },
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
    id: "bp_volitional",
    pattern: "～意向形 (Bentuk Ajak Informal ～おう / ～よう)",
    romajiPattern: "Volitional Form (~ou / ~you)",
    meaning: "Ayo... / Mari kita... / Saya mau...",
    formula: "G1: う-line -> お-line + う (行こう) / G2: + よう (食べよう) / G3: しよう, 来よう",
    level: "N4",
    category: "Bentuk Kata Kerja",
    explanation: "Bentuk kasual dari ～ましょう yang digunakan untuk mengajak teman se sebaya atau menyatakan niat spontan.",
    exampleSentences: [
      {
        japanese: "一緒にご飯を食べよう！",
        hiragana: "いっしょ に ごはん を たべよう！",
        translation: "Ayo kita makan nasi bersama!"
      },
      {
        japanese: "明日、映画を見に行こう。",
        hiragana: "あした、えいが を み に いこう。",
        translation: "Besok, mari pergi nonton film."
      },
      {
        japanese: "ちょっと休もうか。",
        hiragana: "ちょっと やすもう か。",
        translation: "Mari kita istirahat sebentar?"
      },
      {
        japanese: "来年、日本へ行こうと思っています。",
        hiragana: "らいねん、にほん へ いこう と おもっています。",
        translation: "Saya berniat mau pergi ke Jepang tahun depan."
      },
      {
        japanese: "頑張って勉強しよう！",
        hiragana: "がんばって べんきょう しよう！",
        translation: "Mari semangat belajar!"
      }
    ],
    notes: "Pola ～おうと思っています menyatakan niat yang sudah dipikirkan sejak beberapa waktu lalu.",
    tags: ["N4", "Ajakan", "Niat"]
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
    id: "bp_tokoro",
    pattern: "～ところです (Fase Waktu)",
    romajiPattern: "~tokoro desu",
    meaning: "Baru saja... / Sedang... / Baru hendak...",
    formula: "Kata Kerja [Bentuk Kamus / ている / た] + ところです",
    level: "N4",
    category: "Bentuk Kata Kerja",
    explanation: "Menandai fase spesifik aksi: (1) Bentuk Kamus = baru mau mulai, (2) ている = tepat sedang berlangsung, (3) Bentuk た = baru saja tuntas terjadi.",
    exampleSentences: [
      {
        japanese: "今からご飯を食べるところです。",
        hiragana: "いま から ごはん を たべる ところ です。",
        translation: "Saya baru mau mulai makan nasi sekarang."
      },
      {
        japanese: "今、宿題をしているところです。",
        hiragana: "いま、しゅくだい を している ところ です。",
        translation: "Sekarang saya tepat sedang mengerjakan PR."
      },
      {
        japanese: "たった今家に着いたところです。",
        hiragana: "たった いま いえ に ついた ところ です。",
        translation: "Saya baru saja tepat sampai di rumah."
      },
      {
        japanese: "これから出かけるところです。",
        hiragana: "これから でかける ところ です。",
        translation: "Saya baru mau berangkat keluar sekarang."
      },
      {
        japanese: "ちょうど会議が終わったところです。",
        hiragana: "ちょうど かいぎ が おわった ところ です。",
        translation: "Pas baru saja rapat selesai."
      }
    ],
    notes: "Sangat berguna untuk menjelaskan momen tepat terjadinya aksi.",
    tags: ["N4", "Fase Waktu"]
  },
  {
    id: "bp_hajimeru_owaru",
    pattern: "～始めます / ～終わります (Mulai / Selesai)",
    romajiPattern: "~hajimeru / ~owaru",
    meaning: "Mulai melakukan... / Selesai melakukan...",
    formula: "Kata Kerja [Masu-Stem] + 始めます / 終わります / 続けます",
    level: "N4",
    category: "Bentuk Kata Kerja",
    explanation: "Mengindikasikan titik awal mulainya aksi atau titik akhir selesainya aksi yang berlangsung.",
    exampleSentences: [
      {
        japanese: "雨が降り始めました。",
        hiragana: "あめ が ふりはじめました。",
        translation: "Hujan mulai turun."
      },
      {
        japanese: "この本を読み終わりました。",
        hiragana: "この ほん を よみおわりました。",
        translation: "Saya selesai membaca buku ini."
      },
      {
        japanese: "来月から日本語を習い始めます。",
        hiragana: "らいげつ から にほんご を ならいはじめます。",
        translation: "Mulai bulan depan saya mulai belajar bahasa Jepang."
      },
      {
        japanese: "ご飯を食べ終わったら、皿を洗ってください。",
        hiragana: "ごはん を たべおわったら、さら を あらってください。",
        translation: "Setelah selesai makan, tolong cuci piringnya."
      },
      {
        japanese: "諦めないで諦めずに走り続けました。",
        hiragana: "あきらめないで はしりつづけました。",
        translation: "Tanpa menyerah saya terus melanjutkan berlari."
      }
    ],
    notes: "Digabungkan dengan kata kerja utama dihilangkan ます-nya.",
    tags: ["N4", "Titik Aksi"]
  },
  {
    id: "bp_passive_ukemi",
    pattern: "～れる / ～られる (Pasif / Ukemi)",
    romajiPattern: "~reru / ~rareru (passive)",
    meaning: "Di-... / Dikenai aksi oleh orang lain",
    formula: "Kata Kerja G1: あ-line + れる / G2: + られる / G3: される, 来られる",
    level: "N4",
    category: "Bentuk Kata Kerja",
    explanation: "Menyatakan bahwa subjek dikenai tindakan atau disusahkan oleh perbuatan orang lain.",
    exampleSentences: [
      {
        japanese: "知らない人に足をふまれました。",
        hiragana: "しらない ひと に あし を ふまれました。",
        translation: "Kaki saya terinjak oleh orang yang tidak dikenal."
      },
      {
        japanese: "弟にケーキを食べられました。",
        hiragana: "おとうと に ケーキ を たべられました。",
        translation: "Kue saya dimakan oleh adik laki-laki."
      },
      {
        japanese: "雨に降られてぬれてしまいました。",
        hiragana: "あめ に ふられて ぬれてしまいました。",
        translation: "Saya kehujanan hingga basah kuyup."
      },
      {
        japanese: "先生にほめられました。",
        hiragana: "せんせい に ほめられました。",
        translation: "Saya dipuji oleh guru."
      },
      {
        japanese: "泥棒にお金をぬすまれました。",
        hiragana: "どろぼう に おかね を ぬすまれました。",
        translation: "Uang saya dicuri oleh pencuri."
      }
    ],
    notes: "Subjek utama adalah korban/orang yang mengalami dampak aksi.",
    tags: ["N4", "Pasif"]
  },
  {
    id: "bp_causative_shieki",
    pattern: "～させる (Menyuruh / Membiarkan)",
    romajiPattern: "~saseru (causative)",
    meaning: "Menyuruh / Membiarkan seseorang melakukan...",
    formula: "Kata Kerja G1: あ-line + せる / G2: + させる / G3: させる, 来させる",
    level: "N4",
    category: "Bentuk Kata Kerja",
    explanation: "Menyatakan bahwa seseorang memerintahkan, menyuruh, atau memberikan izin kepada orang lain untuk beraksi.",
    exampleSentences: [
      {
        japanese: "母は子どもに野菜を食べさせます。",
        hiragana: "はは は こども に やさい を たべさせます。",
        translation: "Ibu menyuruh anaknya makan sayur."
      },
      {
        japanese: "先生は学生に作文を書かせました。",
        hiragana: "せんせい は がくせい に さくぶん を かかせました。",
        translation: "Guru menyuruh siswa menulis karangan."
      },
      {
        japanese: "好きなように遊ばせてあげてください。",
        hiragana: "すきな よう に あそばせて あげて ください。",
        translation: "Tolong biarkan dia bermain sesuka hatinya."
      },
      {
        japanese: "父は私に運転させました。",
        hiragana: "ちち は わたし に うんてん させました。",
        translation: "Ayah menyuruh saya menyetir mobil."
      },
      {
        japanese: "部長は部下を残業させました。",
        hiragana: "ぶちょう は ぶか を ざんぎょう させました。",
        translation: "Manajer menyuruh bawahannya lembur."
      }
    ],
    notes: "Bentuk kombinasi pasif-kausatif: ～させられる (Dipaksa melakukan...).",
    tags: ["N4", "Perintah"]
  },
  {
    id: "bp_shieki_ukemi",
    pattern: "～させられる (Pasif-Kausatif / Dipaksa)",
    romajiPattern: "~saserareru (causative-passive)",
    meaning: "Dipaksa melakukan... (Melakukan dengan terpaksa)",
    formula: "Kata Kerja Kausatif + られる",
    level: "N4",
    category: "Bentuk Kata Kerja",
    explanation: "Menyatakan bahwa pembicara dipaksa atau terpaksa melakukan suatu aksi di luar kehendaknya sendiri.",
    exampleSentences: [
      {
        japanese: "昨日、母に嫌いな野菜を食べさせられました。",
        hiragana: "きのう、はは に きらいな やさい を たべさせられました。",
        translation: "Kemarin saya dipaksa makan sayur yang tidak disukai oleh ibu."
      },
      {
        japanese: "嫌な仕事をさせられました。",
        hiragana: "いやな しごと を させられました。",
        translation: "Saya dipaksa melakukan pekerjaan yang tidak menyenangkan."
      },
      {
        japanese: "3時間も待たせられました。",
        hiragana: "さんじかん も またせられました。",
        translation: "Saya dipaksa menunggu hingga 3 jam."
      },
      {
        japanese: "先生に歌を歌わせられました。",
        hiragana: "せんせい に うた を うたわせられました。",
        translation: "Saya dipaksa bernyanyi oleh guru."
      },
      {
        japanese: "無理に酒を飲ませられました。",
        hiragana: "むり に さけ を のませられました。",
        translation: "Saya dipaksa minum alkohol."
      }
    ],
    notes: "Kombinasi dari Bentuk Menyuruh (Shieki) + Bentuk Pasif (Ukemi).",
    tags: ["N4", "Paksaan"]
  },

  // ==========================================
  // UNGKAPAN, KEINGINAN, & DUGAAN (N5 & N4)
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
    id: "bp_tara_ii",
    pattern: "～たらいいですか / ～ばいいですか",
    romajiPattern: "~tara ii desu ka",
    meaning: "Sebaiknya saya... / Haruskah saya...?",
    formula: "Kata Kerja [Bentuk Lampau た] + らいいですか / [Bentuk-Ba] + いいですか",
    level: "N4",
    category: "Ungkapan & Keinginan",
    explanation: "Digunakan untuk meminta petunjuk, rekomendasi, atau saran cara melakukan sesuatu dari orang lain.",
    exampleSentences: [
      {
        japanese: "どこでチケットを買ったらいいですか。",
        hiragana: "どこ で チケット を かったら いいですか。",
        translation: "Sebaiknya saya beli tiket di mana?"
      },
      {
        japanese: "漢字の覚え方はどうすればいいですか。",
        hiragana: "かんじ の おぼえかた は どう すれば いいですか。",
        translation: "Bagaimana cara menghafal kanji yang sebaiknya saya lakukan?"
      },
      {
        japanese: "頭が痛いんですが、どうしたらいいですか。",
        hiragana: "あたま が いたい んですが、どう したら いいですか。",
        translation: "Kepala saya sakit, sebaiknya apa yang harus saya lakukan?"
      },
      {
        japanese: "何を着て行けばいいですか。",
        hiragana: "なに を きて いけば いいですか。",
        translation: "Sebaiknya saya memakai baju apa?"
      },
      {
        japanese: "誰に相談したらいいですか。",
        hiragana: "だれ に そうだん したら いいですか。",
        translation: "Sebaiknya saya berkonsultasi kepada siapa?"
      }
    ],
    notes: "Sangat berguna saat bingung meminta bantuan petunjuk.",
    tags: ["N4", "Petunjuk", "Saran"]
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
    id: "bp_sou_desu_look",
    pattern: "～そうです (Kelihatannya / Tampaknya)",
    romajiPattern: "~sou desu (visual appearance)",
    meaning: "Kelihatannya... / Tampaknya akan...",
    formula: "Kata Kerja Stem / Sifat (buang い/な) + そうです",
    level: "N4",
    category: "Ungkapan & Keinginan",
    explanation: "Dugaan berdasarkan pengamatan mata secara langsung (misal: kue kelihatannya lezat, hujan kelihatannya mau turun).",
    exampleSentences: [
      {
        japanese: "このケーキは美味しそうです。",
        hiragana: "この ケーキ は おいしそうです。",
        translation: "Kue ini kelihatannya enak."
      },
      {
        japanese: "今にも雨が降りそうです。",
        hiragana: "いま に も あめ が ふりそうです。",
        translation: "Sekarang pun kelihatan seperti akan turun hujan."
      },
      {
        japanese: "荷物が重そうですね。手伝いましょうか。",
        hiragana: "にもつ が おもそう ですね。てつだいましょう か。",
        translation: "Barangnya kelihatannya berat ya. Boleh saya bantu?"
      },
      {
        japanese: "彼女はとても幸せそうです。",
        hiragana: "かのじょ は とても しあわせそうです。",
        translation: "Dia kelihatannya sangat bahagia."
      },
      {
        japanese: "ボタンが取れそうです。",
        hiragana: "ボタン が とれそうです。",
        translation: "Kancingnya kelihatannya mau copot."
      }
    ],
    notes: "Bentuk negatif: ～なさそうです / ～そうにない.",
    tags: ["N4", "Dugaan Visual"]
  },
  {
    id: "bp_sou_desu_hearsay",
    pattern: "～そうです (Dengarnya / Katanya)",
    romajiPattern: "~sou desu (hearsay)",
    meaning: "Katanya... / Dengarnya bahwa...",
    formula: "Bentuk Kasual Kalimat Lengkap + そうです",
    level: "N4",
    category: "Ungkapan & Keinginan",
    explanation: "Menyampaikan kabar burung atau informasi yang didengar dari sumber lain tanpa mengubah isinya.",
    exampleSentences: [
      {
        japanese: "天気予報によると、明日は雨が降るそうです。",
        hiragana: "てんきよほう に によると、あした は あめ が ふる そうです。",
        translation: "Menurut ramalan cuaca, katanya besok akan hujan."
      },
      {
        japanese: "佐藤さんは来月結婚するそうです。",
        hiragana: "さとうさん は らいげつ けっこん する そうです。",
        translation: "Katanya Sato-san akan menikah bulan depan."
      },
      {
        japanese: "あの店のラーメンはとても美味しいそうです。",
        hiragana: "あの みせ の ラーメン は とても おいしい そうです。",
        translation: "Dengarnya ramen di toko itu sangat enak."
      },
      {
        japanese: "事故があったそうですが、大丈夫ですか。",
        hiragana: "じこ が あった そうです が、だいじょうぶ ですか。",
        translation: "Dengarnya ada kecelakaan, apakah baik-baik saja?"
      },
      {
        japanese: "木村さんは来週日本へ帰るそうです。",
        hiragana: "きむらさん は らいしゅう にほん へ かえる そうです。",
        translation: "Katanya Kimura-san akan pulang ke Jepang minggu depan."
      }
    ],
    notes: "Sering diawali dengan ～によると (menurut...).",
    tags: ["N4", "Kabar Burung"]
  },
  {
    id: "bp_mitai_desu",
    pattern: "～みたいです / ～ようです (Mirip / Seperti)",
    romajiPattern: "~mitai desu / ~you desu",
    meaning: "Sepertinya... / Tampak mirip seperti...",
    formula: "Kata Benda / Kata Kerja Kasual + みたいです",
    level: "N4",
    category: "Ungkapan & Keinginan",
    explanation: "Perbandingan kemiripan fisik/karakteristik (misal: orang itu mirip seperti anak kecil) atau dugaan berdasar panca indera.",
    exampleSentences: [
      {
        japanese: "彼はまるで子供みたいです。",
        hiragana: "かれ は まるで こども みたい です。",
        translation: "Dia tampak seperti anak kecil."
      },
      {
        japanese: "外は雨が降っているみたいです。",
        hiragana: "そと は あめ が ふっている みたい です。",
        translation: "Di luar sepertinya sedang turun hujan."
      },
      {
        japanese: "このお菓子は本物の果物みたいですね。",
        hiragana: "この おかし は ほんもの の くだもの みたい ですね。",
        translation: "Kue ini mirip sekali dengan buah asli ya."
      },
      {
        japanese: "隣の部屋に誰かいるみたいです。",
        hiragana: "となり の へや に だれか いる みたい です。",
        translation: "Di kamar sebelah sepertinya ada orang."
      },
      {
        japanese: "夢を見ているみたいです。",
        hiragana: "ゆめ を みている みたい です。",
        translation: "Serasa seperti sedang bermimpi."
      }
    ],
    notes: "～みたいです lebih umum dalam bahasa lisan kasual, sedangkan ～ようです lebih formal.",
    tags: ["N4", "Mirip", "Dugaan"]
  },
  {
    id: "bp_hazu_desu",
    pattern: "～はずです (Seharusnya / Pasti)",
    romajiPattern: "~hazu desu",
    meaning: "Seharusnya... / Dipastikan bahwa...",
    formula: "Bentuk Kasual + はずです (Kata Sifat-na + な / Benda + の)",
    level: "N4",
    category: "Ungkapan & Keinginan",
    explanation: "Keyakinan kuat pembicara berdasarkan alasan logis atau bukti yang pasti.",
    exampleSentences: [
      {
        japanese: "彼は日本に3年も住んでいたから、日本語が上手なはずです。",
        hiragana: "かれ は にほん に さんねん も すんでいた から、にほんご が じょうずな はずです。",
        translation: "Karena dia sudah tinggal di Jepang selama 3 tahun, bahasa mepangnya pasti / seharusnya pandai."
      },
      {
        japanese: "鍵はかばんの中にあるはずです。",
        hiragana: "かぎ は かばん の なか に ある はずです。",
        translation: "Kuncinya seharusnya ada di dalam tas."
      },
      {
        japanese: "電車は3時に到着するはずです。",
        hiragana: "でんしゃ は さんじ に とうちゃく する はずです。",
        translation: "Kereta seharusnya tiba pada jam 3."
      },
      {
        japanese: "田中さんは真面目ですから、約束を守るはずです。",
        hiragana: "たなかさん は まじめ ですから、やくそく を まもる はずです。",
        translation: "Karena Tanaka-san rajin/jujur, dia pasti menepati janji."
      },
      {
        japanese: "今日は日曜日ですから、銀行は休みのはずです。",
        hiragana: "きょう は にちようび ですから、ぎんこう は やすみ の はずです。",
        translation: "Karena hari ini hari Minggu, bank pasti libur."
      }
    ],
    notes: "Keyakinan hampir 90-100% berdasarkan logika logis.",
    tags: ["N4", "Keyakinan"]
  },
  {
    id: "bp_youni_nararu",
    pattern: "～ようになります (Perubahan Kemampuan)",
    romajiPattern: "~you ni narimasu",
    meaning: "Menjadi bisa... (Kondisi bertahap)",
    formula: "Kata Kerja Potensial / Kamus + ようになります",
    level: "N4",
    category: "Ungkapan & Keinginan",
    explanation: "Menyatakan perubahan kondisi dari tidak bisa menjadi mampu/bisa melakukan sesuatu secara bertahap.",
    exampleSentences: [
      {
        japanese: "毎日練習して、日本語が話せるようになりました。",
        hiragana: "まいにち れんしゅう して、にほんご が はなせる よう に なりました。",
        translation: "Berlatih setiap hari, hingga akhirnya menjadi bisa berbicara bahasa Jepang."
      },
      {
        japanese: "漢字が100個読めるようになりました。",
        hiragana: "かんじ が ひゃっこ よめる よう に なりました。",
        translation: "Saya menjadi bisa membaca 100 buah kanji."
      },
      {
        japanese: "メガネをかけると、遠くが見えるようになります。",
        hiragana: "メガネ を かけると、とおく が みえる よう に なります。",
        translation: "Kalau memakai kacamata, tempat jauh menjadi kelihatan."
      },
      {
        japanese: "自転車に乗れるようになりました。",
        hiragana: "じてんしゃ に のれる よう に なりました。",
        translation: "Saya sudah menjadi bisa naik sepeda."
      },
      {
        japanese: "日本料理が作れるようになりたいです。",
        hiragana: "にほんりょうり が つくれる よう に なりたい です。",
        translation: "Saya ingin menjadi bisa memasak masakan Jepang."
      }
    ],
    notes: "Sering digunakan dengan kata kerja potensial.",
    tags: ["N4", "Perubahan"]
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
    id: "bp_nara",
    pattern: "～なら (Kalau Soal / Topik)",
    romajiPattern: "~nara",
    meaning: "Kalau soal... / Jika membicarakan hal itu...",
    formula: "Kata Benda / Kata Kerja Kasual + なら",
    level: "N4",
    category: "Syarat & Perbandingan",
    explanation: "Memberikan saran atau penilaian khusus berdasarkan kriteria/topik yang diangkat lawan bicara.",
    exampleSentences: [
      {
        japanese: "カメラを買うなら、あの店がいいですよ。",
        hiragana: "カメラ を かう なら、あの みせ が いいですよ。",
        translation: "Kalau mau beli kamera, toko itu bagus lho."
      },
      {
        japanese: "日本料理なら、すしが一番好きです。",
        hiragana: "にほんりょうり なら、すし が いちばん すき です。",
        translation: "Kalau soal masakan Jepang, sushi yang paling saya suka."
      },
      {
        japanese: "明日なら、時間が空いています。",
        hiragana: "あした なら、じかん が あいています。",
        translation: "Kalau besok, saya ada waktu luang."
      },
      {
        japanese: "京都へ行くなら、秋がおすすめです。",
        hiragana: "きょうと へ いく なら、あき が おすすめ です。",
        translation: "Kalau mau pergi ke Kyoto, musim gugur sangat direkomendasikan."
      },
      {
        japanese: "ひらがななら読めます。",
        hiragana: "ひらがな なら よめます。",
        translation: "Kalau hiragana sih saya bisa baca."
      }
    ],
    notes: "Penekanan pada usul/saran topik spesifik.",
    tags: ["N4", "Topik", "Saran"]
  },
  {
    id: "bp_baai",
    pattern: "～場合 (Dalam Kasus / Jika Terjadi)",
    romajiPattern: "~baai (in case of / if)",
    meaning: "Dalam hal... / Sekiranya terjadi...",
    formula: "Bentuk Kasual + 場合 (Kata Benda + の / Sifat-na + な)",
    level: "N4",
    category: "Syarat & Perbandingan",
    explanation: "Digunakan dalam pengumuman, petunjuk keselamatan, atau aturan resmi untuk situasi tertentu.",
    exampleSentences: [
      {
        japanese: "火事の場合は、エレベーターを使わないでください。",
        hiragana: "かじ の ばあい は、エレベーター を つかわないで ください。",
        translation: "Dalam situasi kebakaran, jangan gunakan lift."
      },
      {
        japanese: "雨の場合は、試合を中止します。",
        hiragana: "あめ の ばあい は、しあい を ちゅうし します。",
        translation: "Dalam hal turun hujan, pertandingan akan dibatalkan."
      },
      {
        japanese: "熱がある場合は、病院へ行ってください。",
        hiragana: "ねつ が ある ばあい は、びょういん へ いって ください。",
        translation: "Sekiranya ada demam, tolong pergi ke rumah sakit."
      },
      {
        japanese: "間に合わない場合は、連絡してください。",
        hiragana: "まにあわない ばあい は、れんらく してください。",
        translation: "Jika tidak keburu, tolong hubungi kami."
      },
      {
        japanese: "地震の場合は、机の下に入ってください。",
        hiragana: "じしん の ばあい は、つくえ の した に はいって ください。",
        translation: "Dalam situasi gempa bumi, tolong berlindung di bawah meja."
      }
    ],
    notes: "Pengandaian resmi dan formal.",
    tags: ["N4", "Situasi Resmi"]
  },
  {
    id: "bp_noni",
    pattern: "～のに (Padahal / Meskipun)",
    romajiPattern: "~noni (even though / despite)",
    meaning: "Padahal... / Meskipun... (Nuansa Kecewa)",
    formula: "Bentuk Kasual + のに (Kata Sifat-na / Benda + なのに)",
    level: "N4",
    category: "Syarat & Perbandingan",
    explanation: "Menyatakan kekecewaan, kejutan, atau rasa penyesalan karena hasil yang terjadi bertolak belakang dengan harapan.",
    exampleSentences: [
      {
        japanese: "一生懸命勉強したのに、試験に落ちてしまいました。",
        hiragana: "いっしょうけんめい べんきょう した のに、しけん に おちて しまいました。",
        translation: "Padahal sudah belajar bersungguh-sungguh, tetapi malah tidak lulus ujian."
      },
      {
        japanese: "薬を飲んだのに、熱が下がりません。",
        hiragana: "くすり を のんだ のに、ねつ が さがりません。",
        translation: "Padahal sudah minum obat, tapi demamnya belum turun."
      },
      {
        japanese: "窓を閉めて寝たのに、寒かったです。",
        hiragana: "まど を しめて ねた のに、さむかった です。",
        translation: "Padahal tidur dengan menutup jendela, tetapi tetap dingin."
      },
      {
        japanese: "約束したのに、彼は来ませんでした。",
        hiragana: "やくそく した のに、かれ は きませんでした。",
        translation: "Padahal sudah berjanji, tapi dia tidak datang."
      },
      {
        japanese: "日曜日なのに、仕事をしなければなりません。",
        hiragana: "にちようび なのに、しごと を しなければ なりません。",
        translation: "Padahal hari Minggu, tapi harus tetap bekerja."
      }
    ],
    notes: "Mengandung emosi ketidakpuasan atau penyesalan dari pembicara.",
    tags: ["N4", "Kontras", "Kecewa"]
  },
  {
    id: "bp_temo",
    pattern: "～ても / ～でも (Walaupun / Meskipun)",
    romajiPattern: "~te mo / ~de mo",
    meaning: "Walaupun... / Meskipun...",
    formula: "Kata Kerja [Bentuk て] + も / Kata Sifat-i (buang い + くても) / Benda + でも",
    level: "N4",
    category: "Syarat & Perbandingan",
    explanation: "Pengandaian bertolak belakang di mana aksi B tetap akan terjadi terlepas dari kondisi A.",
    exampleSentences: [
      {
        japanese: "雨が降っても、出かけます。",
        hiragana: "あめ が ふっても、でかけます。",
        translation: "Walaupun hujan turun, saya tetap akan pergi."
      },
      {
        japanese: "安くても、要らないものは買いません。",
        hiragana: "やすくても、いらない もの は かいません。",
        translation: "Meskipun murah, barang yang tidak dibutuhkan tidak akan saya beli."
      },
      {
        japanese: "難しくても、諦めないで頑張ります。",
        hiragana: "むずかしくても、あきらめないで がんばります。",
        translation: "Walaupun sulit, saya tidak akan menyerah dan berjuang."
      },
      {
        japanese: "日曜日でも、図書館は開いています。",
        hiragana: "にちようび でも、としょかん は あいています。",
        translation: "Meskipun hari Minggu, perpustakaan tetap buka."
      },
      {
        japanese: "何度失敗しても、もう一度挑戦します。",
        hiragana: "なんど しっぱい しても、もう いちど ちょうせん します。",
        translation: "Meskipun berapa kali pun gagal, saya akan mencoba sekali lagi."
      }
    ],
    notes: "Dapat digunakan untuk kondisi hipotetis maupun nyata.",
    tags: ["N4", "Meskipun"]
  },
  {
    id: "bp_shi_shi",
    pattern: "～し ～し (Selain itu... dan juga...)",
    romajiPattern: "~shi ~shi",
    meaning: "Selain... juga... (Menyebutkan beberapa alasan)",
    formula: "Bentuk Kasual + し",
    level: "N4",
    category: "Syarat & Perbandingan",
    explanation: "Menyebutkan lebih dari satu alasan yang mendukung suatu kesimpulan atau keputusan.",
    exampleSentences: [
      {
        japanese: "あの店は美味しいし、安いし、いつもいっぱいです。",
        hiragana: "あの みせ は おいしい し、やすい し、いつも いっぱい です。",
        translation: "Toko itu selain enak, harganya juga murah, makanya selalu ramai."
      },
      {
        japanese: "今日は雨だし、寒いし、どこへも行きません。",
        hiragana: "きょう は あめ だし、さむい し、どこ へ も いきません。",
        translation: "Hari ini selain hujan, dingin juga, jadi saya tidak pergi ke mana-mana."
      },
      {
        japanese: "彼女は頭がいいし、親切だし、みんなに人気があります。",
        hiragana: "かのじょ は あたま が いい し、しんせつ だし、みんな に にんき が あります。",
        translation: "Dia selain pintar, juga ramah, makanya populer di antara semua orang."
      },
      {
        japanese: "お腹がすいたし、喉がかわいたし、何か食べたいです。",
        hiragana: "おなか が すいた し、のど が かわいた し、なに か たべたい です。",
        translation: "Selain lapar, juga haus, saya ingin makan sesuatu."
      },
      {
        japanese: "駅に近いし、家賃も安いし、このアパートに決めました。",
        hiragana: "えき に ちかい し、やちん も やすい し、この アパート に きめました。",
        translation: "Selain dekat stasiun, sewa rumahnya juga murah, jadi saya memilih apartemen ini."
      }
    ],
    notes: "Memberikan kesan bahwa masih ada alasan pendukung lainnya.",
    tags: ["N4", "Alasan Alasan"]
  },

  // ==========================================
  // SOPAN & KEHORMATAN (N4)
  // ==========================================
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
  },
  {
    id: "bp_sonkeigo_form",
    pattern: "尊敬語 (Sonkeigo - Penghormatan Atasan)",
    romajiPattern: "Sonkeigo (respectful language)",
    meaning: "Bentuk Penghormatan (Meninggikan derajat posisi atasan/tamu)",
    formula: "Kata Kerja Khusus: いらっしゃる (pergi/datang/ada), おっしゃる (berkata), 召し上がる (makan/minum)",
    level: "N4",
    category: "Sopan & Kehormatan",
    explanation: "Digunakan saat membicarakan atau menanyakan aksi yang dilakukan oleh atasan, guru, atau pelanggan.",
    exampleSentences: [
      {
        japanese: "社長はもうお帰りになりました。",
        hiragana: "しゃちょう は もう おかえり に なりました。",
        translation: "Direktur sudah pulang (bentuk sangat hormat)."
      },
      {
        japanese: "先生は何を召し上がりますか。",
        hiragana: "せんせい は なに を めしあがります か。",
        translation: "Guru mau makan/minum apa? (sangat sopan)."
      },
      {
        japanese: "社長は今会議室にいらっしゃいます。",
        hiragana: "しゃちょう は いま かいぎしつ に いらっしゃいます。",
        translation: "Direktur sekarang ada di ruang rapat."
      },
      {
        japanese: "お客様が何とおっしゃいましたか。",
        hiragana: "おきゃくさま が なん と おっしゃいました か。",
        translation: "Pelanggan mengatakan apa? (sangat sopan)."
      },
      {
        japanese: "こちらの書類をご覧になりましたか。",
        hiragana: "こちら の しょるい を ごらん に なりました か。",
        translation: "Apakah Anda sudah melihat dokumen ini?"
      }
    ],
    notes: "Jangan pernah gunakan Sonkeigo untuk menyebutkan aksi diri sendiri.",
    tags: ["N4", "Sonkeigo", "Hormat"]
  },
  {
    id: "bp_kenjougo_form",
    pattern: "謙譲語 (Kenjougo - Bahasa Merendahkan Diri)",
    romajiPattern: "Kenjougo (humble language)",
    meaning: "Bentuk Merendah Diri (Menghormati lawan bicara dengan merendahkan aksi diri)",
    formula: "Kata Kerja Khusus: 参ります (pergi/datang), 申します (berkata), いただきます (makan/minum)",
    level: "N4",
    category: "Sopan & Kehormatan",
    explanation: "Digunakan ketika pembicara menceritakan aksinya sendiri di hadapan atasan atau pelanggan.",
    exampleSentences: [
      {
        japanese: "明日、社長の宅へ参ります。",
        hiragana: "あした、しゃちょう の たく へ まいります。",
        translation: "Besok saya akan berkunjung (merendah) ke kediaman Direktur."
      },
      {
        japanese: "私はキムと申します。",
        hiragana: "わたし は キム と もうします。",
        translation: "Nama saya (dipanggil) Kim (sangat sopan/merendah)."
      },
      {
        japanese: "喜んでお荷物をお持ちいたします。",
        hiragana: "よろこんで おにもつ を おもち いたします。",
        translation: "Dengan senang hati saya akan bawakan barang Anda."
      },
      {
        japanese: "先生のお宅でお茶をいただきました。",
        hiragana: "せんせい の おたく で おちゃ を いただきました。",
        translation: "Saya minum teh di kediaman guru (merendah)."
      },
      {
        japanese: "明日8時に駅でお目にかかります。",
        hiragana: "あした はちじ に えき で おめに かかります。",
        translation: "Besok jam 8 saya akan bertemu (merendah) Anda di stasiun."
      }
    ],
    notes: "Selalu digunakan untuk aksi diri sendiri/pihak internal kelompok.",
    tags: ["N4", "Kenjougo", "Merendah"]
  },
  // ============================================================
  // JLPT N3 — POLA TATA BAHASA LANJUT (40 Entry Resmi)
  // ============================================================
  {
    id: "n3bp_wo_motte",
    pattern: "～をもって",
    romajiPattern: "~ wo motte",
    meaning: "Dengan / Melalui / Atas dasar (menyatakan sarana formal, batas waktu, atau alasan)",
    formula: "Kata Benda + をもって + Kalimat",
    level: "N3",
    category: "Partikel Formal",
    explanation: "Pola formal yang berarti 'dengan (menggunakan)', 'dengan dasar', atau 'pada (batas waktu)'. Digunakan dalam situasi resmi, tertulis, atau perpisahan.",
    exampleSentences: [
      { japanese: "この工場では、安全をもって最優先です。", hiragana: "この こうじょう では、あんぜん をもって さいゆうせん です。", translation: "Di pabrik ini, keselamatan adalah prioritas utama." },
      { japanese: "本日をもって退社いたします。", hiragana: "ほんじつ をもって たいしゃ いたします。", translation: "Dengan ini (hari ini) saya mundur dari perusahaan." },
      { japanese: "書類をもって結果をお知らせします。", hiragana: "しょるい をもって けっか を おしらせ します。", translation: "Saya akan mengumumkan hasil melalui dokumen." },
      { japanese: "誠意をもって対応いたします。", hiragana: "せいい をもって たいおう いたします。", translation: "Kami akan menangani dengan itikad baik." }
    ],
    notes: "Lebih formal dari で. Digunakan dalam surat resmi, pidato, atau perjanjian.",
    tags: ["N3", "Formal", "Sarana"]
  },
  {
    id: "n3bp_ni_sakidachi",
    pattern: "～に先立ち / に先立って",
    romajiPattern: "~ ni sakidachi / ni sakatatte",
    meaning: "Sebelum / Di awal (menyatakan sesuatu yang dilakukan lebih dahulu dari event utama)",
    formula: "Kata Benda (Acara) / Kata Kerja bentuk kamus + に先立ち / に先立って",
    level: "N3",
    category: "Urutan Waktu",
    explanation: "Menyatakan bahwa suatu aksi persiapan dilakukan sebelum event besar dimulai. Biasanya untuk acara, rapat, proyek, peluncuran.",
    exampleSentences: [
      { japanese: "新しい法律は来年に先立ち実施される予定です。", hiragana: "あたらしい ほうりつ は らいねん にさきだち じっし される よてい です。", translation: "Undang-undang baru rencananya akan diberlakukan mulai tahun depan." },
      { japanese: "試験に先立って説明会が行われます。", hiragana: "しけん にさきだって せつめいかい が おこなわれます。", translation: "Sebelum ujian, akan diadakan sesi penjelasan." },
      { japanese: "出発に先立ち、パスポートの確認をしてください。", hiragana: "しゅっぱつ にさきだち、パスポート の かくにん を してください。", translation: "Sebelum berangkat, tolong periksa paspor Anda." }
    ],
    notes: "Lebih formal dari 前に (mae ni).",
    tags: ["N3", "Waktu", "Sebelum"]
  },
  {
    id: "n3bp_ga_kireru",
    pattern: "～がきれる / が切れる",
    romajiPattern: "~ ga kireru",
    meaning: "Habis / Putus / Mati total (menyatakan pasokan/tenaga yang habis sama sekali)",
    formula: "Kata Benda (pasokan: 電気, ガス, 水, お金, ネット) + が切れる",
    level: "N3",
    category: "Kondisi",
    explanation: "「切れる」berarti 'terpotong / habis total'. Digunakan untuk listrik, gas, air, pulsa, kuota internet, dompet kosong dll yang benar-benar berhenti.",
    exampleSentences: [
      { japanese: "電気がきれて、真っ暗になった。", hiragana: "でんき がきれて、まっくら に なった。", translation: "Listrik mati, jadi gelap gulita." },
      { japanese: "途中でガスが切れて、料理ができなかった。", hiragana: "とちゅう で ガス が きれて、りょうり が できなかった。", translation: "Di tengah jalan gas habis, jadi tidak bisa masak." },
      { japanese: "旅行でお金が切れて、困った。", hiragana: "りょこう で おかね が きれて、こまった。", translation: "Uang habis saat liburan, jadi bingung." },
      { japanese: "この電池はもう切れている。", hiragana: "この でんち は もう きれている。", translation: "Baterai ini sudah habis total." }
    ],
    notes: "Beda dengan なくなる (hilang): きれる menekankan 'aliran/suplai yang terputus'.",
    tags: ["N3", "Kondisi", "Habis"]
  },
  {
    id: "n3bp_ni_mukatte",
    pattern: "～に向かって / ～ぶちまける",
    romajiPattern: "~ ni mukatte / buchimakeru",
    meaning: "Menuju / Ke arah (mengarahkan aksi); ぶちまける = mengeluarkan isi hati/meluapkan",
    formula: "Kata Benda (arah) + に向かって + Kata Kerja; （悩みなどを）ぶちまける",
    level: "N3",
    category: "Arah & Ekspresi",
    explanation: "に向かって: bergerak/berbicara menuju arah tertentu. ぶちまける (kata kerja N3): meluapkan perasaan (keluh kesah, rahasia, dll) sepenuhnya kepada orang.",
    exampleSentences: [
      { japanese: "彼は友達に向かって、いつも悩み事をぶちまけている。", hiragana: "かれ は ともだち にむかって、いつも なやみごと を ぶちまけて いる。", translation: "Dia selalu meluapkan masalahnya kepada temannya." },
      { japanese: "東京駅に向かって走った。", hiragana: "とうきょうえき にむかって はしった。", translation: "Saya berlari menuju Stasiun Tokyo." },
      { japanese: "会議で社長に向かって意見を言った。", hiragana: "かいぎ で しゃちょう にむかって いけん を いった。", translation: "Saya berpendapat kepada presiden direktur dalam rapat." }
    ],
    notes: "ぶちまける nuansanya: 'mengeluarkan semua isi' (seperti tumpah).",
    tags: ["N3", "Arah", "Perasaan"]
  },
  {
    id: "n3bp_mo_sara_ni",
    pattern: "～上に（うえに） / ～もさらに",
    romajiPattern: "~ ue ni / mo sara ni",
    meaning: "Selain itu / Terlebih lagi / Di atas itu (menambah poin buruk atau baik)",
    formula: "Klausa 1 (普通形) + 上に + Klausa 2; Kata Benda + もさらに",
    level: "N3",
    category: "Penambahan",
    explanation: "Digunakan untuk menambahkan fakta kedua (biasanya memperparah atau memperbaiki) ke fakta pertama. Mirip だけでなく tapi penekanannya bertubi-tubi.",
    exampleSentences: [
      { japanese: "この靴はサイズが合わない上に、色もさらに悪い。", hiragana: "この くつ は サイズ が あわない うえに、いろ もさらに わるい。", translation: "Sepatu ini selain ukurannya tidak pas, warnanya juga jelek." },
      { japanese: "彼は頭がいい上に、スポーツもできる。", hiragana: "かれ は あたま が いい うえに、スポーツ も できる。", translation: "Dia selain pintar, juga jago olahraga." },
      { japanese: "風邪をひいた上に、財布もなくした。", hiragana: "かぜ を ひいた うえに、さいふ も なくした。", translation: "Selain sakit flu, dompet saya hilang lagi." }
    ],
    notes: "Pola ini sering dalam 'kesialan bertubi-tubi' — N3 favorite!",
    tags: ["N3", "Penambahan", "Urutan"]
  },
  {
    id: "n3bp_no_atari_ni",
    pattern: "～のあたりに / ～の辺りに",
    romajiPattern: "~ no atari ni",
    meaning: "Sekitar / Di sekitar (area tertentu yang tidak pasti tepatnya)",
    formula: "Kata Benda (tempat/waktu) + のあたりに",
    level: "N3",
    category: "Lokasi & Waktu",
    explanation: "Menyatakan area sekitar yang tidak spesifik persis. Bisa tempat (sekitar stasiun) atau waktu (sekitar jam 3). Mirip ごろ tapi nuansa lebih 'sekitar area'",
    exampleSentences: [
      { japanese: "あの店のあたりに、田中さんを見たことがある。", hiragana: "あの みせ のあたりに、たなか さん を みた こと が ある。", translation: "Saya pernah melihat Tanaka-san sekitar area toko itu." },
      { japanese: "5時のあたりに電話してください。", hiragana: "ごじ のあたりに でんわ してください。", translation: "Tolong telepon saya sekitar jam 5." },
      { japanese: "銀座のあたりに美味しいそば屋があるらしい。", hiragana: "ぎんざ のあたりに おいしい そばや が ある らしい。", translation: "Sepertinya ada warung soba enak di sekitar Ginza." }
    ],
    notes: "あたり juga bisa berarti 'orang-orang sekitar' (misal: 周りのあたり).",
    tags: ["N3", "Tempat", "Waktu"]
  },
  {
    id: "n3bp_toshitewa",
    pattern: "～としては",
    romajiPattern: "~ toshitewa",
    meaning: "Sebagai (X) / Menurut standar X (menilai dari standar suatu kategori)",
    formula: "Kata Benda (Profesi / Status / Tingkat) + としては + Penilaian",
    level: "N3",
    category: "Sudut Pandang",
    explanation: "Menghubungkan 'kategori/identitas' dengan 'evaluasi penilaian'. Nuansa: 'menurut standar seorang X (dia bagus / kurang)'.",
    exampleSentences: [
      { japanese: "学生としては、まず第一に学業が大切だ。", hiragana: "がくせい としては、まず だいいち に がくぎょう が たいせつ だ。", translation: "Bagi seorang pelajar, yang utama adalah pendidikan." },
      { japanese: "このレストランは値段の割には、美味しいとしては人気だ。", hiragana: "この レストラン は ねだん の わりには、おいしい としては にんき だ。", translation: "Restoran ini menurut ukuran harganya, rasanya enak jadi populer." },
      { japanese: "彼は日本人としては英語が上手だ。", hiragana: "かれ は にほんじん としては えいご が じょうず だ。", translation: "Dia sebagai orang Jepang, bahasa Inggrisnya jago." }
    ],
    notes: "Beda dengan にしては (nanti) — にしては = 'padahal seharusnya' (negatif/kejutan), としては = 'menurut standar' (netral).",
    tags: ["N3", "Perbandingan", "SudutPandang"]
  },
  {
    id: "n3bp_wo_kikkake_ni",
    pattern: "～をきっかけに / ～を契機に",
    romajiPattern: "~ wo kikkake ni",
    meaning: "Dipicu oleh / Berawal dari / Akibat peristiwa (menyatakan pemicu perubahan besar)",
    formula: "Kata Benda (Peristiwa) + をきっかけに + Perubahan",
    level: "N3",
    category: "Pemicu",
    explanation: "Menyatakan suatu peristiwa (nikah, kecelakaan, pindah, hamil, bergabung komunitas) menjadi titik balik perubahan besar dalam hidup.",
    exampleSentences: [
      { japanese: "彼は結婚をきっかけに、急にしっかりしてきた。", hiragana: "かれ は けっこん をきっかけに、きゅうに しっかり してきた。", translation: "Setelah menikah, dia tiba-tiba jadi dewasa." },
      { japanese: "フランス旅行をきっかけに、フランス語の勉強を始めた。", hiragana: "フランス りょこう をきっかけに、フランスご の べんきょう を はじめた。", translation: "Berawal dari liburan ke Prancis, saya mulai belajar bahasa Prancis." },
      { japanese: "この歌をきっかけに彼女は有名になった。", hiragana: "この うた をきっかけに かのじょ は ゆうめい に なった。", translation: "Lewat lagu ini dia menjadi terkenal." }
    ],
    notes: "Lebih kuat 'perubahan drastis' daripada ～をはじめに.",
    tags: ["N3", "Waktu", "Perubahan"]
  },
  {
    id: "n3bp_made_kakatte",
    pattern: "～までかかる",
    romajiPattern: "~ made kakaru",
    meaning: "Perlu waktu sampai titik X (menghabiskan waktu/biaya sampai batas tertentu)",
    formula: "Kata Benda (waktu/tujuan) + までかかる / までかかって + Klausa",
    level: "N3",
    category: "Waktu & Usaha",
    explanation: "かかる = butuh (waktu/biaya/tenaga). Digunakan untuk menyatakan 'sampai sejauh itu pun usaha tetap tidak selesai' atau 'perlu sampai titik itu'.",
    exampleSentences: [
      { japanese: "この本は、週末までかかっても読みきれないだろう。", hiragana: "この ほん は、しゅうまつ までかかっても よみきれない だろう。", translation: "Buku ini bahkan sampai akhir pekan mungkin tidak akan selesai dibaca." },
      { japanese: "この仕事を仕上げるのに3日までかかります。", hiragana: "この しごと を しあげる のに みっか までかかります。", translation: "Perlu waktu sampai 3 hari untuk menyelesaikan pekerjaan ini." },
      { japanese: "家を買うのに30年までかかった。", hiragana: "いえ を かう のに さんじゅうねん までかかった。", translation: "Perlu sampai 30 tahun agar bisa beli rumah." }
    ],
    notes: "まで disini artinya 'sampai titik maksimum', bukan 'sebelum'.",
    tags: ["N3", "Waktu", "Usaha"]
  },
  {
    id: "n3bp_uchi_ni",
    pattern: "～うちに",
    romajiPattern: "~ uchi ni",
    meaning: "Selagi / Sebelum sempat / Di saat (melakukan dalam masa kesempatan masih ada)",
    formula: "Kata Kerja (ない形 / ている形) + うちに; い Adj い / な Adj な + うちに",
    level: "N3",
    category: "Kesempatan Waktu",
    explanation: "Sangat penting N3. Digunakan untuk melakukan aksi 'sebelum keadaan berubah dan kesempatan hilang'",
    exampleSentences: [
      { japanese: "雨が降るうちに、早く家に帰ろう。", hiragana: "あめ が ふる うちに、はやく いえ に かえろう。", translation: "Sebelum hujan turun, ayo pulang cepat." },
      { japanese: "温かいうちに食べてください。", hiragana: "あたたかい うちに たべてください。", translation: "Tolong dimakan selagi masih hangat." },
      { japanese: "日本にいるうちに、たくさん思い出を作りたい。", hiragana: "にほん に いる うちに、たくさん おもいで を つくりたい。", translation: "Selagi masih di Jepang, ingin banyak buat kenangan." },
      { japanese: "忘れないうちにメモをしよう。", hiragana: "わすれない うちに メモ を しよう。", translation: "Selagi belum lupa, ayo dicatat." }
    ],
    notes: "Kebalikan: ～あいだに (selama periode tertentu). うちに nuansa 'sebelum terlambat'",
    tags: ["N3", "Waktu", "Kesempatan"]
  },
  {
    id: "n3bp_katakara",
    pattern: "～かたわら",
    romajiPattern: "~ katakara / katawara",
    meaning: "Di samping / Sambil (melakukan kegiatan utama + kegiatan sampingan yang serius)",
    formula: "Kata Kerja (Kamus形) / Kata Benda の + かたわら + Kegiatan kedua",
    level: "N3",
    category: "Kegiatan Bersamaan",
    explanation: "Bedakan dengan ながら! ながら: sambil santai (makan sambil nonton TV). かたわら: kegiatan utama + side job/hobi yang serius & berlangsung lama.",
    exampleSentences: [
      { japanese: "ピアノを弾くかたわら、歌も上手です。", hiragana: "ピアノ を ひく かたわら、うた も じょうず です。", translation: "Selain main piano, dia juga pandai bernyanyi." },
      { japanese: "会社員のかたわら、夜は小説を書いています。", hiragana: "かいしゃいん のかたわら、よる は しょうせつ を かいて います。", translation: "Sambil bekerja jadi karyawan, malamnya menulis novel." },
      { japanese: "勉強するかたわら、アルバイトもしている。", hiragana: "べんきょう する かたわら、アルバイト も して いる。", translation: "Di samping belajar, dia juga kerja part-time." }
    ],
    notes: "かたわら = 2 kegiatan serius yang berjalan lama (bulanan/tahunan).",
    tags: ["N3", "Waktu", "Paralel"]
  },
  {
    id: "n3bp_ue_de",
    pattern: "～うえで / ～上で",
    romajiPattern: "~ ue de",
    meaning: "Setelah melakukan (baru kemudian) / Atas dasar (berdasarkan)",
    formula: "Kata Kerja (た形 / 辞書形) / Kata Benda の + うえで",
    level: "N3",
    category: "Urutan & Dasar",
    explanation: "Dua makna: (1) Urutan: setelah selesai X, lakukan Y (penting Y harus sesudah X). (2) Atas dasar: berdasarkan data/pembahasan sebelumnya.",
    exampleSentences: [
      { japanese: "説明書をよく読んだうえで、組み立ててください。", hiragana: "せつめいしょ を よく よんだ うえで、くみたててください。", translation: "Tolong baca panduan dulu baru rakit setelahnya." },
      { japanese: "みんなと相談したうえで決めます。", hiragana: "みんな と そうだん した うえで きめます。", translation: "Saya akan putuskan setelah berdiskusi dengan semua." },
      { japanese: "この報告のうえで、対策を考えましょう。", hiragana: "この ほうこく のうえで、たいさく を かんがえましょう。", translation: "Atas dasar laporan ini, mari kita pikirkan solusi." }
    ],
    notes: "Makna (1) urutan: mirip ～てから tapi lebih formal & menekankan 'persiapan matang'.",
    tags: ["N3", "Urutan", "Dasar"]
  },
  {
    id: "n3bp_soredemo",
    pattern: "それでも",
    romajiPattern: "soredemo",
    meaning: "Meskipun begitu / Walaupun begitu (tetap berlanjut meskipun ada halangan)",
    formula: "Klausa kesulitan + それでも + Klausa (usaha yang tetap berjalan)",
    level: "N3",
    category: "Konjungsi",
    explanation: "Konjungsi N3 populer. 'Meski ada fakta negatif sebelumnya, tapi tetap lanjut'.",
    exampleSentences: [
      { japanese: "何度練習しても、上手にならない。それでも、やる気はあるんだから、続けよう。", hiragana: "なんど れんしゅう しても、じょうず に ならない。それでも、やるき は ある んだから、つづけよう。", translation: "Walau berkali-kali latihan tidak jago, tapi karena ada kemauan, ayo teruskan." },
      { japanese: "雨はひどかった。それでも、試合は行われた。", hiragana: "あめ は ひどかった。それでも、しあい は おこなわれた。", translation: "Hujan sangat deras. Meski begitu, pertandingan tetap dilaksanakan." },
      { japanese: "彼は体が弱い。それでも、毎日学校に来る。", hiragana: "かれ は からだ が よわい。それでも、まいにち がっこう に くる。", translation: "Badannya lemah. Walaupun begitu, dia datang ke sekolah setiap hari." }
    ],
    notes: "Beda dengan しかし (tapi biasa): それでも menonjolkan 'usaha bertahan'.",
    tags: ["N3", "Konjungsi", "Meskipun"]
  },
  {
    id: "n3bp_ni_shitatte",
    pattern: "～にしたって",
    romajiPattern: "~ ni shitatte",
    meaning: "Bahkan untuk X pun / Seandainya menjadi X pun (menekankan kesulitan)",
    formula: "Kata Benda / Kata Kerja/Kata Sifat (普通形) + にしたって",
    level: "N3",
    category: "Tekanan",
    explanation: "Bentuk kasual dari にしても (even if / even for). Menekankan: 'bahkan X pun sama saja sulitnya'.",
    exampleSentences: [
      { japanese: "この仕事は私にしたって、彼にはとてもできない。", hiragana: "この しごと は わたし にしたって、かれ に は とても できない。", translation: "Pekerjaan ini bahkan untuk saya (lebih ahli), apalagi dia pasti tidak mampu." },
      { japanese: "先生にしたって、難しい問題には答えられないこともある。", hiragana: "せんせい にしたって、むずかしい もんだい に は こたえられない こと も ある。", translation: "Bahkan guru pun kadang tidak bisa jawab soal sulit." },
      { japanese: "安いにしたって、質が悪ければ買わない。", hiragana: "やすい にしたって、しつ が わるければ かわない。", translation: "Bahkan semurah apa pun, kalau kualitas jelek saya tidak beli." }
    ],
    notes: "Versi formal = にしても; versi kasual = にしたって.",
    tags: ["N3", "Tekanan", "Perbandingan"]
  },
  {
    id: "n3bp_ni_demo",
    pattern: "～にでも",
    romajiPattern: "~ ni demo",
    meaning: "Bahkan untuk X / Kepada orang seperti X pun (menurunkan standar / merendahkan)",
    formula: "Kata Benda (tingkat kesulitan rendah: 子供, 初心者, あなた) + にでも",
    level: "N3",
    category: "Batas Minimum",
    explanation: "Menunjukkan 'bahkan untuk target level terendah pun bisa', sehingga standar adalah minimal.",
    exampleSentences: [
      { japanese: "子供のにでも分かるような、易しい本を選んでください。", hiragana: "こども のにでも わかる ような、やさしい ほん を えらんでください。", translation: "Tolong pilih buku mudah yang bahkan anak-anak pun bisa mengerti." },
      { japanese: "この料理は初心者にでも作れます。", hiragana: "この りょうり は しょしんしゃ にでも つくれます。", translation: "Masakan ini bahkan pemula pun bisa memasaknya." },
      { japanese: "このカメラは老人にでも簡単に使えます。", hiragana: "この カメラ は ろうじん にでも かんたん に つかえます。", translation: "Kamera ini bahkan orang tua pun mudah memakainya." }
    ],
    notes: "にでも = menunjukkan target minimal.",
    tags: ["N3", "Level", "Batas"]
  },
  {
    id: "n3bp_doori_ni",
    pattern: "～どおり（に） / ～通り（に）",
    romajiPattern: "~ doori (ni)",
    meaning: "Sesuai dengan / Mengikuti (persis seperti yang dijanjikan/diajarkan/ditulis)",
    formula: "Kata Benda の / Kata Kerja（辞書形・た形） + どおりに",
    level: "N3",
    category: "Kesesuaian",
    explanation: "Melakukan sesuatu persis sama seperti acuan (buku panduan, ucapan, contoh, jadwal). Tanpa penyimpangan.",
    exampleSentences: [
      { japanese: "彼は男らしくどおりに、困難に立ち向かった。", hiragana: "かれ は おとこらしくどおりに、こんなん に たちむかった。", translation: "Seperti selayaknya laki-laki sejati, dia menghadapi kesulitan." },
      { japanese: "説明書のどおりにやれば、できますよ。", hiragana: "せつめいしょ のどおりに やれば、できます よ。", translation: "Kalau dilakukan sesuai panduan, pasti berhasil kok." },
      { japanese: "約束どおりに10時に来ました。", hiragana: "やくそくどおりに じゅうじ に きました。", translation: "Saya datang jam 10 sesuai janji." },
      { japanese: "考えていたどおりの結果になった。", hiragana: "かんがえて いたどおりの けっか に なった。", translation: "Hasilnya persis seperti yang dibayangkan." }
    ],
    notes: "Bacaan どおり / とおり: 予定どおり (yotei doori) = sesuai jadwal.",
    tags: ["N3", "Kesesuaian", "Kepatuhan"]
  },
  {
    id: "n3bp_mono_dakara",
    pattern: "～ものだから / もんだから",
    romajiPattern: "~ mono dakara / mondakara",
    meaning: "Karena (beralasan dengan perasaan pribadi, sering menyalahkan keadaan)",
    formula: "Klausa (普通形) + ものだから + Hasil (umumnya tidak disengaja)",
    level: "N3",
    category: "Alasan",
    explanation: "Alasan dengan nuansa 'memohon dimaklumi' / 'keadaan yang tidak diinginkan'. Lebih emosional dibanding から / ので.",
    exampleSentences: [
      { japanese: "朝走ってきたものだから、息が切れている。", hiragana: "あさ はしってきた ものだから、いき が きれて いる。", translation: "Karena tadi lari pagi, jadi sampai terengah-engah." },
      { japanese: "あまりにも美味しかったもんだから、たくさん食べちゃった。", hiragana: "あまりにも おいしかった もんだから、たくさん たべちゃった。", translation: "Karena terlalu enak, jadi makan kebanyakan deh." },
      { japanese: "初めての経験だったものだから、緊張しました。", hiragana: "はじめて の けいけん だった ものだから、きんちょう しました。", translation: "Karena ini pengalaman pertama, saya tegang." }
    ],
    notes: "もんだから = bentuk kasual ものだから (sering di obrolan perempuan).",
    tags: ["N3", "Alasan", "Ekuse"]
  },
  {
    id: "n3bp_no_mama_de",
    pattern: "～まま（で）",
    romajiPattern: "~ mama (de)",
    meaning: "Dalam keadaan tetap / Tanpa perubahan / Asalkan begitu saja",
    formula: "Kata Kerja（た形 / ない形） / Kata Benda + の / い Adj / な Adj な + まま（で）",
    level: "N3",
    category: "Keadaan Tetap",
    explanation: "Menunjukkan 'keadaan yang tidak diubah' — biasanya suatu hal yang tabiatnya harusnya diubah tapi tidak (misal: sepatu masuk rumah, TV nyala tidur).",
    exampleSentences: [
      { japanese: "この町は昔のままで、静かでいい所です。", hiragana: "この まち は むかし のままで、しずか で いい ところ です。", translation: "Kota ini masih seperti dahulu, jadi tenang dan bagus." },
      { japanese: "電気をつけたまま寝てしまった。", hiragana: "でんき を つけたまま ねて しまった。", translation: "Saya tidur dalam keadaan lampu tetap menyala." },
      { japanese: "立ったままで食べないでください。", hiragana: "たったままで たべないでください。", translation: "Tolong jangan makan sambil berdiri." },
      { japanese: "わからないまま進めるのは危ない。", hiragana: "わからないまま すすめる の は あぶない。", translation: "Melanjutkan dalam keadaan tidak tahu itu berbahaya." }
    ],
    notes: "Jadi 2 makna: (1) tetap / tanpa perubahan (contoh 1), (2) keadaan yang salah/bukan seharusnya (contoh 2 & 3).",
    tags: ["N3", "Keadaan", "Tetap"]
  },
  {
    id: "n3bp_toshita_tokoro_de",
    pattern: "～としたところで",
    romajiPattern: "~ toshita tokoro de",
    meaning: "Meskipun melakukan / Andai pun mencoba (tidak berguna / sia-sia)",
    formula: "Kata Kerja意向形（Volitional） + としたところで + Klausa negatif (tidak bisa / sia-sia)",
    level: "N3",
    category: "Percobaan Sia-sia",
    explanation: "Menekankan 'usaha apa pun tidak membuahkan hasil'. Seperti ～ても tapi lebih kuat nuansa 'sia-sia, tidak ada arti usaha'",
    exampleSentences: [
      { japanese: "いくら説明したとしたところで、彼は分かってくれなかった。", hiragana: "いくら せつめい した としたところで、かれ は わかって くれなかった。", translation: "Betapapun saya jelaskan berkali-kali, dia tidak mau mengerti juga." },
      { japanese: "今さら走ったとしたところで、電車には間に合わない。", hiragana: "いまさら はしった としたところで、でんしゃ に は まにあわない。", translation: "Walau lari sekeras apa pun sekarang, sudah tidak akan sempat kereta." },
      { japanese: "謝ったとしたところで、もう遅い。", hiragana: "あやまった としたところで、もう おそい。", translation: "Walau minta maaf pun, sudah terlambat." }
    ],
    notes: "Ciri khas: selalu diikuti hasil yang NEGATIF / sia-sia.",
    tags: ["N3", "Kontrasepsi", "SiaSia"]
  },
  {
    id: "n3bp_wo_mochimashite",
    pattern: "～をもちまして",
    romajiPattern: "~ wo mochimashite",
    meaning: "Dengan ini / Atas ini (ungkapan resmi untuk penutupan, perpisahan)",
    formula: "Kata Benda (Waktu / Status) + をもちまして + Klausa formal (biasanya penutupan)",
    level: "N3",
    category: "Ungkapan Formal",
    explanation: "Paling sering di pidato, surat, meeting resmi: 'Dengan ini saya akhiri / nyatakan / dll'. Bentuk sopan 丁寧語 dari をもって.",
    exampleSentences: [
      { japanese: "今日は用事があるので、これをもちまして失礼します。", hiragana: "きょう は ようじ が ある ので、これをもちまして しつれい します。", translation: "Karena hari ini ada urusan, dengan ini saya pamit undur diri." },
      { japanese: "本会議は、これをもちまして終了いたします。", hiragana: "ほんかいぎ は、これをもちまして しゅうりょう いたします。", translation: "Dengan ini, rapat resmi kami akhiri." },
      { japanese: "本日をもちまして創業10周年を迎えました。", hiragana: "ほんじつ をもちまして そうぎょう じっしゅうねん を むかえました。", translation: "Hari ini genap 10 tahun sejak pendirian perusahaan." }
    ],
    notes: "Sering di soal JLPT N3 Reading bagian 'Pidato Peresmian'.",
    tags: ["N3", "Sopan", "Penutupan"]
  },
  {
    id: "n3bp_wo_tsuujite",
    pattern: "～を通じて / ～を通して",
    romajiPattern: "~ wo tsuujite / wo tooshite",
    meaning: "Melalui (perantara / periode) / Sepanjang (masa)",
    formula: "Kata Benda (Perantara / Periode Waktu) + を通じて + Klausa",
    level: "N3",
    category: "Perantara & Periode",
    explanation: "2 Makna penting: (1) Melalui perantara (internet, teman, media). (2) Sepanjang masa (sepanjang tahun, sepanjang sejarah).",
    exampleSentences: [
      { japanese: "年を通じて、季節の移ろいが感じられる。", hiragana: "とし をつうじて、きせつ の うつろい が かんじられる。", translation: "Sepanjang tahun, orang bisa merasakan pergantian musim." },
      { japanese: "インターネットを通じて、世界中の人と話せる。", hiragana: "インターネット をつうじて、せかいじゅう の ひと と はなせる。", translation: "Melalui internet, bisa berbicara dengan orang sedunia." },
      { japanese: "この団体を通して、ボランティア活動に参加した。", hiragana: "この だんたい をとおして、ボランティア かつどう に さんか した。", translation: "Melalui organisasi ini, saya ikut kegiatan sukarela." },
      { japanese: "一年を通じて暖かい土地です。", hiragana: "いちねん をつうじて あたたかい とち です。", translation: "Daerah yang hangat sepanjang tahun." }
    ],
    notes: "を通じて lebih umum; を通して nuansa 'lebih aktif / ada kontak nyata'.",
    tags: ["N3", "Perantara", "Waktu"]
  },
  {
    id: "n3bp_amari",
    pattern: "あまり（にも） / ～あまり",
    romajiPattern: "amari (ni mo) / ~ amari",
    meaning: "Terlalu / Sangat sampai (berakibat negatif karena keberlebihan)",
    formula: "Kata Benda の / Kata Sifat / Kata Kerja（普通形） + あまり + Akibat",
    level: "N3",
    category: "Akibat Berlebihan",
    explanation: "Karena sesuatu terlalu berlebihan (emosi biasanya: 驚き, 悲しみ, 嬉しさ, 緊張) sehingga menyebabkan akibat yang aneh / tidak baik.",
    exampleSentences: [
      { japanese: "忙しいあまり、休みをも取っている暇もありません。", hiragana: "いそがしいあまり、やすみ を も とって いる ひま も ありません。", translation: "Saking sibuknya, bahkan tidak ada waktu untuk beristirahat sama sekali." },
      { japanese: "嬉しさのあまり、泣いてしまった。", hiragana: "うれしさ のあまり、ないて しまった。", translation: "Karena terlalu senang, sampai menangis." },
      { japanese: "緊張のあまり、何も話せなかった。", hiragana: "きんちょう のあまり、なにも はなせなかった。", translation: "Karena terlalu tegang, tidak bisa bicara apa-apa." },
      { japanese: "父は働きすぎたあまり、病気になった。", hiragana: "ちち は はたらきすぎたあまり、びょうき に なった。", translation: "Ayah karena terlalu keras bekerja, jadi sakit." }
    ],
    notes: "Ciri N3 あまり: selalu diikuti AKIBAT dari keberlebihan.",
    tags: ["N3", "Alasan", "Berlebih"]
  },
  {
    id: "n3bp_tasukeni_kyouju",
    pattern: "～さんの助けがなかったら / ～がなければ",
    romajiPattern: "~ san no tasuke ga nakattara / ga nakereba",
    meaning: "Andaikata tanpa bantuan X (kalau tidak ada X)",
    formula: "Kata Benda + （の助け / のおかげ / がなかったら） + ～なかっただろう / できなかった",
    level: "N3",
    category: "Percobaan Tidak Nyata",
    explanation: "Pola ungkapan terima kasih / penyesalan: 'Andaikan kalau tidak ada X, maka hasilnya pasti JELEK / tidak berhasil'.",
    exampleSentences: [
      { japanese: "田中さんの助けがなかったら、このプロジェクトは成功しなかっただろう。", hiragana: "たなか さんの たすけ が なかったら、この プロジェクト は せいこう しなかった だろう。", translation: "Andaikan tanpa bantuan Tanaka, proyek ini pasti tidak berhasil." },
      { japanese: "あの時の薬がなかったら、命はなかっただろう。", hiragana: "あの とき の くすり が なかったら、いのち は なかった だろう。", translation: "Kalau waktu itu tidak ada obatnya, mungkin nyawa sudah tidak ada." },
      { japanese: "君がいなければ、どうしていたか分からない。", hiragana: "きみ が いなければ、どうして いた か わからない。", translation: "Kalau kamu tidak ada, saya tidak tahu akan jadi apa." }
    ],
    notes: "Sering juga pola: ～がなければ / ～がなかったら → kalimat kedua bentuk なかっただろう (past counterfactual).",
    tags: ["N3", "Counterfactual", "TerimaKasih"]
  },
  {
    id: "n3bp_nashi_niwa",
    pattern: "～なしに（は） / ～を抜きにして",
    romajiPattern: "~ nashi ni (wa) / wo nuki ni shite",
    meaning: "Tanpa X (tidak mungkin bisa terjadi)",
    formula: "Kata Benda + なしに（は） + Kalimat negatif / mustahil",
    level: "N3",
    category: "Keharusan",
    explanation: "'Tanpa adanya X, Y pasti tidak mungkin'. Kata-kata inspirasi N3. X adalah faktor KRITIS.",
    exampleSentences: [
      { japanese: "努力なしには、成功はない。", hiragana: "どりょく なしには、せいこう は ない。", translation: "Tanpa usaha, tidak ada kesuksesan." },
      { japanese: "資金なしには、この計画は実行できない。", hiragana: "しきん なしには、この けいかく は じっこう できない。", translation: "Tanpa dana, rencana ini tidak bisa dijalankan." },
      { japanese: "ユーモアを抜きにして、人生は語れない。", hiragana: "ユーモア をぬきにして、じんせい は かたれない。", translation: "Tanpa humor, kehidupan tidak bisa dibicarakan." },
      { japanese: "あなたなしには、生きていけない。", hiragana: "あなた なしには、いきて いけない。", translation: "Tanpamu, aku tidak bisa hidup." }
    ],
    notes: "なしに = bentuk klasik ないで. Lebih keren & filosofis.",
    tags: ["N3", "Keharusan", "Inspirasi"]
  },
  {
    id: "n3bp_ni_watatte",
    pattern: "～にわたって / ～にわたり",
    romajiPattern: "~ ni watatte / ni watari",
    meaning: "Selama / Sepanjang / Mencakup (rentang panjang & luas)",
    formula: "Kata Benda (Periode panjang / Area luas) + にわたって + Klausa",
    level: "N3",
    category: "Rentang Waktu & Area",
    explanation: "Untuk rentang yang PANJANG & LUAS: 1 tahun, seluruh kota, seluruh cabang perusahaan, 3 jam rapat, dll. Beda dengan で yang hanya spot.",
    exampleSentences: [
      { japanese: "会議は2時間にわたって行われた。", hiragana: "かいぎ は にじかん にわたって おこなわれた。", translation: "Rapat berlangsung selama 2 jam (penuh)."},
      { japanese: "この台風は日本全国にわたって被害を与えた。", hiragana: "この たいふう は にほんぜんこく にわたって ひがい を あたえた。", translation: "Topan ini menyebabkan kerusakan di seluruh Jepang." },
      { japanese: "10年にわたる研究が、やっと実を結んだ。", hiragana: "じゅうねん にわたる けんきゅう が、やっと み を むすんだ。", translation: "Penelitian selama 10 tahun akhirnya membuahkan hasil." },
      { japanese: "この制度は、全世代にわたり影響する。", hiragana: "この せいど は、ぜんせだい にわたり えいきょう する。", translation: "Sistem ini berdampak ke seluruh generasi." }
    ],
    notes: "Kalau mau bentuk Adjektiva: Kata Benda + にわたる + Kata Benda (例: 3日間にわたる旅行).",
    tags: ["N3", "Waktu", "Rentang"]
  },
  {
    id: "n3bp_made_shite",
    pattern: "～までして",
    romajiPattern: "~ made shite",
    meaning: "Sampai sejauh itu / Bahkan sampai melakukan (sampai melakukan hal yang tidak seharusnya)",
    formula: "Kata Benda / Kata Kerja 辞書形 + までして + Klausa (usaha keras atau perbuatan negatif)",
    level: "N3",
    category: "Titik Ekstrem",
    explanation: "Menunjukkan titik EKSTRIM (sampai sejauh itu). Ada 2 arah: (a) Berkorban demi tujuan baik, atau (b) Sampai melakukan hal buruk demi tujuan.",
    exampleSentences: [
      { japanese: "どうしても必要なら、明日までして手伝いに行こう。", hiragana: "どうしても ひつよう なら、あした までして てつだいに いこう。", translation: "Kalau benar-benar perlu, besok saya akan datang membantu (sampai lewat batas waktu)." },
      { japanese: "夜を徹してまでして、ゲームをするな。", hiragana: "よる を てっして までして、ゲーム を するな。", translation: "Jangan main game sampai begadang semalaman." },
      { japanese: "借金してまで車を買う必要はないでしょ。", hiragana: "しゃっきん して までして くるま を かう ひつよう は ない でしょ。", translation: "Kan tidak perlu beli mobil sampai berutang begitu." },
      { japanese: "彼は命がけまでして、目標を達成した。", hiragana: "かれ は いのちがけ までして、もくひょう を たっせい した。", translation: "Dia sampai mempertaruhkan nyawa demi mencapai target." }
    ],
    notes: "Frasa terkenal: 嘘をついてまで (sampai berbohong), 夜を徹してまで (sampai begadang).",
    tags: ["N3", "Ekstrem", "Pengorbanan"]
  },
  {
    id: "n3bp_ni_tomonatte",
    pattern: "～に伴って / ～に伴い",
    romajiPattern: "~ ni tomonatte / ni tomonoi",
    meaning: "Bersamaan dengan / Seiring dengan (perubahan X menyebabkan perubahan Y)",
    formula: "Kata Benda (Perubahan) / Kata Kerja 辞書形 + に伴って + Klausa perubahan kedua",
    level: "N3",
    category: "Perubahan Bersamaan",
    explanation: "Jika X berubah, Y otomatis berubah juga (kausal). Biasanya untuk: perubahan sosial, ekonomi, teknologi, peningkatan populasi, dll. Lebih formal daripada につれて.",
    exampleSentences: [
      { japanese: "社長が急に変わったに伴って、社内はずいぶん変わった。", hiragana: "しゃちょう が きゅうに かわった にともなって、しゃない は ずいぶん かわった。", translation: "Seiring dengan pergantian direktur mendadak, suasana kantor banyak berubah." },
      { japanese: "人口が増えるに伴い、住宅問題も深刻になってきた。", hiragana: "じんこう が ふえる にともない、じゅうたくもんだい も しんこく に なってきた。", translation: "Seiring bertambahnya penduduk, masalah perumahan juga menjadi parah." },
      { japanese: "都市化に伴って、緑が減ってきた。", hiragana: "としか にともなって、みどり が へって きた。", translation: "Seiring urbanisasi, lahan hijau berkurang." }
    ],
    notes: "にともなって umumnya perubahan SKALA BESAR (sosial/ekonomi). につれて umumnya perubahan personal & natural.",
    tags: ["N3", "Perubahan", "Kausal"]
  },
  {
    id: "n3bp_ni_yotte",
    pattern: "～によって / ～による",
    romajiPattern: "~ ni yotte / ni yoru",
    meaning: "Oleh / Berdasarkan / Karena / Tergantung (4 makna utama N3!)",
    formula: "Kata Benda + によって / による",
    level: "N3",
    category: "Multi-Makna",
    explanation: "Paling multi-fungsi N3! 4 makna wajib tahu: (1) 原因 = karena (kecelakaan dll). (2) 手段 = dengan / melalui. (3) 受身 agent = oleh (si pelaku passive). (4) 基準 = tergantung / berbeda menurut.",
    exampleSentences: [
      { japanese: "今回の事故は不注意によって起きたものだ。", hiragana: "こんかい の じこ は ふちゅうい によって おきた もの だ。", translation: "Kecelakaan ini disebabkan oleh kelalaian." },
      { japanese: "インターネットによって情報が早く伝わる。", hiragana: "インターネット によって じょうほう が はやく つたわる。", translation: "Informasi cepat tersebar melalui internet." },
      { japanese: "この建物は有名な建築家によって設計された。", hiragana: "この たてもの は ゆうめい な けんちくか によって せっけい された。", translation: "Gedung ini dirancang oleh arsitek terkenal." },
      { japanese: "人によって、考え方が違う。", hiragana: "ひと によって、かんがえかた が ちがう。", translation: "Tergantung orangnya, cara berpikir berbeda-beda." }
    ],
    notes: "Ciri soal: harus tebak 4 makna mana yang sedang berjalan dari konteks kalimat! Paling sering keluar di N3.",
    tags: ["N3", "Partikel", "MultiMakna"]
  },
  {
    id: "n3bp_wari_niwa",
    pattern: "～わりに（は） / ～割に",
    romajiPattern: "~ wari ni (wa)",
    meaning: "Meskipun seharusnya / Di luar dugaan (hasil tidak sesuai dengan kenyataan)",
    formula: "普通形（Kata Kerja / Kata Sifat / Kata Benda な） + わりには + Hasil (yang tidak terduga)",
    level: "N3",
    category: "Kontrasepsi",
    explanation: "Menunjukkan 'tidak sebanding / tidak sesuai harapan'. Ada 2 arah: (a) Harusnya jelek tapi bagus; (b) Harusnya bagus tapi jelek.",
    exampleSentences: [
      { japanese: "彼女は先生わりには、とても厳しいです。", hiragana: "かのじょ は せんせい わりには、とても きびしいです。", translation: "Walaupun dia guru, tapi galak banget (padahal guru biasanya ramah)." },
      { japanese: "あのレストランは値段のわりには、美味しくない。", hiragana: "あの レストラン は ねだん のわりには、おいしくない。", translation: "Restoran itu harganya mahal, tapi ternyata tidak enak (tidak sebanding)."},
      { japanese: "このワインは安いわりに、味がいい。", hiragana: "この ワイン は やすいわりに、あじ が いい。", translation: "Wine ini harganya murah, tapi rasanya enak (melebihi dugaan)."},
      { japanese: "祖母は年を取っているわりには、元気だ。", hiragana: "そぼ は とし を とって いるわりには、げんき だ。", translation: "Nenek sudah tua, tapi tetap sehat." }
    ],
    notes: "Mirip にしては tapi わりに = lebih menekankan 'perbandingan kualitas tak sebanding'; にしては = 'standar seharusnya tak tercapai'.",
    tags: ["N3", "Perbandingan", "TidakSesuai"]
  },
  {
    id: "n3bp_sue_ni",
    pattern: "～すえ（に） / ～末（に）",
    romajiPattern: "~ sue (ni)",
    meaning: "Setelah sekian lama (akhirnya) / Pada akhirnya (hasil setelah proses panjang & berliku)",
    formula: "Kata Kerja（た形） / Kata Benda の + すえに + Hasil Akhir",
    level: "N3",
    category: "Akhir Perjalanan",
    explanation: "Setelah berbagai macam pergolakan, percobaan, penderitaan — akhirnya ada hasil. Mirip あげくに, tapi すえに hasilnya BISA BAIK BISA BURUK. あげくに: biasanya buruk.",
    exampleSentences: [
      { japanese: "あの二人は喧嘩していたすえに、結婚した。", hiragana: "あの ふたり は けんか して いたすえに、けっこん した。", translation: "Mereka berdua setelah sering bertengkar hebat, akhirnya menikah." },
      { japanese: "長い裁判の末に、やっと無罪が証明された。", hiragana: "ながい さいばん のすえに、やっと むざい が しょうめい された。", translation: "Setelah persidangan panjang, akhirnya tidak terbukti bersalah." },
      { japanese: "何度も失敗した末に、成功した。", hiragana: "なんども しっぱい したすえに、せいこう した。", translation: "Setelah berkali-kali gagal, akhirnya berhasil." }
    ],
    notes: "Frasa terkenal: 試行錯誤の末に (setelah coba-coba), 長い話し合いの末に (setelah diskusi panjang).",
    tags: ["N3", "Waktu", "Hasil"]
  },
  {
    id: "n3bp_mikomi",
    pattern: "見込み（みこみ） / ～見込みが高い",
    romajiPattern: "mikomi / ~mikomi ga takai",
    meaning: "Perkiraan / Prospek / Kemungkinan besar (suatu hal yang diperkirakan akan terjadi)",
    formula: "Kata Kerja 辞書形 / ない形 + 見込み; ～見込みが（高い / 薄い / ある）",
    level: "N3",
    category: "Prospek",
    explanation: "見込み = kemungkinan terjadinya (berdasarkan data/fakta). Lawan: おそれ = kemungkinan BURUK.",
    exampleSentences: [
      { japanese: "明日は雨が降る見込みが高い。", hiragana: "あした は あめ が ふる みこみ が たかい。", translation: "Kemungkinan besok hujan tinggi." },
      { japanese: "来年の景気は良くなる見込みです。", hiragana: "らいねん の けいき は よくなる みこみ です。", translation: "Prospek ekonomi tahun depan diperkirakan membaik." },
      { japanese: "合格の見込みが薄い。", hiragana: "ごうかく の みこみ が うすい。", translation: "Kemungkinan lulus kecil (tipis)." },
      { japanese: "来年、営業利益は2割増える見込みだ。", hiragana: "らいねん、えいぎょうりえき は にわり ふえる みこみ だ。", translation: "Tahun depan laba operasional diperkirakan naik 20%." }
    ],
    notes: "よく出る lawan kata: 見込みがある × 見込みがない (prospect ada / tidak ada)." ,
    tags: ["N3", "Prediksi", "MasaDepan"]
  },
  {
    id: "n3bp_iu_mademonaku",
    pattern: "言うまでもなく / 言うまでもない",
    romajiPattern: "iu mademo naku / iu made mo nai",
    meaning: "Tentu saja / Sudah pasti (tidak perlu diucapkan lagi / sudah jelas)",
    formula: "Klausa + 言うまでもなく + Fakta umum / Kebenaran",
    level: "N3",
    category: "Kebolehan",
    explanation: "Sesuatu yang sangat jelas, bahkan tidak perlu dijelaskan. Sama dengan もちろん tapi lebih kuat.",
    exampleSentences: [
      { japanese: "彼は勉強も言うまでもなく、スポーツもできる優等生だ。", hiragana: "かれ は べんきょう もいうまでもなく、スポーツ も できる ゆうとうせい だ。", translation: "Dia itu siswa teladan, belajar jelas pintar apalagi olahraga juga bisa." },
      { japanese: "日本の首都が東京だということは、言うまでもない。", hiragana: "にほん の しゅと が とうきょう だ と いう こと は、いうまでもない。", translation: "Sudah jelas (tidak perlu diomongkan) kalau ibu kota Jepang adalah Tokyo." },
      { japanese: "水が人間に必要なのは、言うまでもない。", hiragana: "みず が にんげん に ひつよう な の は、いうまでもない。", translation: "Air itu penting buat manusia, sudah jelas sekali." }
    ],
    notes: "Cara pakai: (1) 言うまでもなく + kalimat (penghubung); (2) 言うまでもない di akhir kalimat.",
    tags: ["N3", "Kepastian", "Tentu"]
  },
  {
    id: "n3bp_ni_yoruto",
    pattern: "～によると / ～によれば",
    romajiPattern: "~ ni yoru to / ni yoreba",
    meaning: "Menurut (sumber informasi: berita, kabar, orang, rumor)",
    formula: "Kata Benda (Sumber: ニュース, 天気予報, 彼の話, うわさ) + によると / によれば",
    level: "N3",
    category: "Informasi",
    explanation: "Menampilkan sumber info. Selalu diikuti そうだ / ということだ / らしい / ようだ (bukti itu adalah info dari luar, bukan kepastian pribadi).",
    exampleSentences: [
      { japanese: "ニュースによると、今年の冬は暖かいらしい。", hiragana: "ニュース によると、ことし の ふゆ は あたたかい らしい。", translation: "Kabarnya menurut berita, musim dingin tahun ini sepertinya hangat." },
      { japanese: "天気予報によれば、明日は雪が降るそうだ。", hiragana: "てんきよほう によれば、あした は ゆき が ふる そうだ。", translation: "Menurut prakiraan cuaca, katanya besok turun salju." },
      { japanese: "田中さんの話によると、社長は来年退社するということだ。", hiragana: "たなか さん の はなし によると、しゃちょう は らいねん たいしゃ する と いう こと だ。", translation: "Menurut cerita Tanaka-san, katanya direktur utama mundur tahun depan." }
    ],
    notes: "によると / によれば: selalu berita dari LUAR (sumber).",
    tags: ["N3", "Kutipan", "Kabar"]
  },
  {
    id: "n3bp_totan_ni",
    pattern: "～とたん（に） / ～途端（に）",
    romajiPattern: "~ totan (ni)",
    meaning: "Tepat saat / Barusan saja (kejadian kedua terjadi TEPAT setelah kejadian pertama, biasanya kejadian tak terduga / negatif)",
    formula: "Kata Kerja（た形） + とたんに + Kejadian mendadak (biasanya tak terduga)",
    level: "N3",
    category: "Momen Singkat",
    explanation: "Titik perubahan SANGAT SINGKAT (detik). Ciri khas: sering ada 'kaget / kejadian yang tidak disangka'.",
    exampleSentences: [
      { japanese: "ボタンを押したとたんに、電源が切れてしまった。", hiragana: "ボタン を おしたとたんに、でんげん が きれて しまった。", translation: "Tepat saat menekan tombol, listriknya malah mati mendadak." },
      { japanese: "家を出たとたんに、雨が激しく降り出した。", hiragana: "いえ を でたとたんに、あめ が はげしく ふりだした。", translation: "Baru keluar rumah, hujan langsung turun deras." },
      { japanese: "彼女を見たとたんに、一目惚れした。", hiragana: "かのじょ を みたとたんに、ひとめぼれ した。", translation: "Tepat saat melihat dia, langsung jatuh cinta pandangan pertama." }
    ],
    notes: "TIDAK BISA untuk perbuatan yang disengaja. Selalu peristiwa tak terduga.",
    tags: ["N3", "Waktu", "Mendadak"]
  },
  {
    id: "n3bp_saichuu_no",
    pattern: "～最中（さいちゅう）に / ～最中の",
    romajiPattern: "~ saichuu ni / saichuu no",
    meaning: "Sedang di tengah (melakukan sesuatu, di tengah-tengah acara)",
    formula: "Kata Kerja ている形 + 最中に; Kata Benda の + 最中（に / の）",
    level: "N3",
    category: "Proses Berjalan",
    explanation: "Kegiatan dalam PROGRESS / sedang berlangsung penuh, lalu ada gangguan di tengah.",
    exampleSentences: [
      { japanese: "食事最中のタバコはやめなさい。", hiragana: "しょくじ さいちゅうの タバコ は やめなさい。", translation: "Berhentilah merokok saat sedang makan." },
      { japanese: "会議の最中中に、大きな地震があった。", hiragana: "かいぎ の さいちゅう に、おおきな じしん が あった。", translation: "Di tengah rapat, terjadi gempa besar." },
      { japanese: "今、電話で話している最中だから、ちょっと待って。", hiragana: "いま、でんわ で はなして いるさいちゅう だから、ちょっと まって。", translation: "Saya lagi telepon, tunggu sebentar ya." }
    ],
    notes: "Pembacaan 最中 = さいちゅう (bukan もなか! もなか = kue bean paste Jepang 😄).",
    tags: ["N3", "Proses", "Selaan"]
  },
  {
    id: "n3bp_mono_wo",
    pattern: "～ものを",
    romajiPattern: "~ mono wo",
    meaning: "Padahal / Sekiranya (menyesali sesuatu yang tidak dilakukan, padahal bisa)",
    formula: "～たら / ～ば + 良かった ものを; ～ないものを (padahal tidak perlu)",
    level: "N3",
    category: "Penyesalan",
    explanation: "Menyesali: 'Seandainya melakukan X, pasti sukses. Tapi TIDAK dilakukan jadi menyesal'. Padahal kalau dikasih tahu / dikerjakan — hasilnya beda.",
    exampleSentences: [
      { japanese: "彼は時間だったらものを、いつも早く来る彼だけど、今日は遅いですね。", hiragana: "かれ は じかん だったらものを、いつも はやく くる かれ だけど、きょう は おそい です ね。", translation: "Padahal biasanya dia selalu datang awal cuma kenapa hari ini lambat ya (menyesali)." },
      { japanese: "「早く言ってくれれば、手伝ったものを。」", hiragana: "はやく いって くれれば、てつだった ものを。", translation: "\"Padahal kalau bilang dari tadi, aku bisa bantu lho...\" (menyesal tidak diberitahu)." },
      { japanese: "あんなに高いレストランで食事をするものではなかった。", hiragana: "あんなに たかい レストラン で しょくじ を する ものを。", translation: "Padahal tidak usah makan di restoran semahal itu saja (sayang uang)." }
    ],
    notes: "Ciri khas: Selalu ada perasaan SESAL / MENYESALKAN keadaan / kekeliruan orang lain.",
    tags: ["N3", "Penyesalan", "Seandainya"]
  },
  {
    id: "n3bp_ni_chikai",
    pattern: "～に近い（ので） / に近く",
    romajiPattern: "~ ni chikai (node)",
    meaning: "Dekat dengan (lokasi / waktu) — sehingga memberi konsekuensi praktis",
    formula: "Kata Benda + に近い + Klause akibat",
    level: "N3",
    category: "Kedekatan",
    explanation: "Menyatakan kedekatan (tempat / waktu / angka) beserta akibatnya yang menguntungkan/merugikan.",
    exampleSentences: [
      { japanese: "このマンションは駅に近いので、便利です。", hiragana: "この マンション は えき にちかい ので、べんり です。", translation: "Apartemen ini dekat stasiun, jadi praktis." },
      { japanese: "100点に近い点数が取れた！", hiragana: "ひゃくてん にちかい てんすう が とれた！", translation: "Dapat nilai hampir 100!" },
      { japanese: "締め切りに近いので、急いでください。", hiragana: "しめきり にちかい ので、いそいで ください。", translation: "Karena sudah dekat deadline, mohon segera." }
    ],
    notes: "に近い vs に近づく: に近い = STATIC (sudah dekat); に近づく = DINAMIS (mendekat).",
    tags: ["N3", "Jarak", "Waktu"]
  },
  {
    id: "n3bp_igai_ni",
    pattern: "～以外に / 以外には / よりほか（に）",
    romajiPattern: "~ igai ni / igai ni wa / yori hoka ni",
    meaning: "Selain / Kecuali (selain X, tidak ada yang lain)",
    formula: "Kata Benda / Klausa 普通形 + 以外に",
    level: "N3",
    category: "Pengecualian",
    explanation: "Menyatakan bahwa 'selain pilihan X, TIDAK ADA PILIHAN LAIN' — atau kadang 'ada juga pilihan lain'.",
    exampleSentences: [
      { japanese: "この仕事を一人と、任せられる人は彼以外にいない。", hiragana: "この しごと を ひとり と、まかせられる ひと は かれ いがいに いない。", translation: "Tidak ada orang lain selain dia yang bisa dipercaya untuk menangani pekerjaan ini sendirian." },
      { japanese: "日本料理以外に、中華料理も好きです。", hiragana: "にほんりょうり いがいに、ちゅうかりょうり も すき です。", translation: "Selain masakan Jepang, saya juga suka masakan Tiongkok." },
      { japanese: "お金を払うよりほかに、方法がない。", hiragana: "おかね を はらう より ほかに、ほうほう が ない。", translation: "Tidak ada cara lain selain membayar." }
    ],
    notes: "Frasa sering keluar: 他に方法がない (tidak ada cara lain); 彼以外に誰もいない (tidak ada orang selain dia).",
    tags: ["N3", "Pilihan", "Kecuali"]
  },
  {
    id: "n3bp_ni_tsurete",
    pattern: "～につれて / に従って（したがって）",
    romajiPattern: "~ ni tsurete / shitagatte",
    meaning: "Seiring dengan / Mengikuti (semakin X, maka semakin Y juga)",
    formula: "Kata Kerja 辞書形 / Kata Benda + につれて / にしたがって + Klausa perubahan",
    level: "N3",
    category: "Perubahan Proporsional",
    explanation: "Hubungan linear: X bertambah → Y ikut bertambah (atau berkurang sama arah). Lebih personal & natural dari にともなって.",
    exampleSentences: [
      { japanese: "日が沈むにつれて、景色がだんだん暗くなってきた。", hiragana: "ひ が しずむ につれて、けしき が だんだん くらく なって きた。", translation: "Seiring matahari terbenam, pemandangan perlahan-lahan menjadi gelap." },
      { japanese: "年をとるにつれて、記憶力が悪くなる。", hiragana: "とし を とる につれて、きおくりょく が わるく なる。", translation: "Seiring bertambahnya usia, daya ingat berkurang." },
      { japanese: "会社の方針に従って、行動してください。", hiragana: "かいしゃ の ほうしん にしたがって、こうどう してください。", translation: "Mohon bertindak sesuai dengan kebijakan perusahaan." }
    ],
    notes: "にしたがって memiliki 2 makna: (1) seiring dengan = につれて; (2) menurut / mengikuti (peraturan).",
    tags: ["N3", "Proporsional", "Perubahan"]
  },
  {
    id: "n3bp_datta_kedo_mama",
    pattern: "～だったけど / のまま（無事でした）",
    romajiPattern: "~ datta kedo / mama (buji deshita)",
    meaning: "Meskipun terjadi X / tapi dalam kondisi tetap — alhamdulillah (cerita saat bencana)",
    formula: "Peristiwa bahaya + だったけど / だから + ～のまま 無事でした",
    level: "N3",
    category: "Kondisi Meskipun",
    explanation: "Bentuk ekspresi naratif — biasanya menceritakan kejadian bencana / genting tapi berakhir selamat.",
    exampleSentences: [
      { japanese: "台風だったけど、私は家にいたのまま無事でした。", hiragana: "たいふう だったけど、わたし は いえ に いた のまま ぶじ でした。", translation: "Waktu itu ada topan kemarin, tapi karena saya di rumah jadinya tetap aman." },
      { japanese: "危なかったけど、間一髪で助かった。", hiragana: "あぶなかったけど、かんいっぱつ で たすかった。", translation: "Sangat bahaya, tapi selamat dalam seujung rambut." },
      { japanese: "地震があったけど、みんな無事だった。", hiragana: "じしん が あったけど、みんな ぶじ だった。", translation: "Ada gempa, tapi semua orang selamat." }
    ],
    notes: "まれに soal N3 — pola naratif cerita selamat dari bahaya.",
    tags: ["N3", "Meskipun", "Keselamatan"]
  }
];
