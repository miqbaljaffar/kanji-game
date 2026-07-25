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
  }
];
