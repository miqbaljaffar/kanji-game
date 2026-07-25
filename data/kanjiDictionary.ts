import { KanjiDictionaryEntry } from "@/types";
import { kanjiData } from "./kanji";
import { kanjiDetails } from "./kanjiDetails";

/**
 * Single Kanji details database with character breakdown, strokes, mnemonics
 */
export const singleKanjiMaster: Record<string, {
  onyomi: string;
  kunyomi: string;
  mnemonic: string;
  strokes: number;
  level: "N5" | "N4";
  meaning: string;
}> = {
  "水": { onyomi: "スイ (sui)", kunyomi: "みず (mizu)", mnemonic: "Air yang mengalir ke bawah membentuk aliran sungai kecil.", strokes: 4, level: "N5", meaning: "Air" },
  "学": { onyomi: "ガク (gaku)", kunyomi: "まな・ぶ (mana-bu)", mnemonic: "Anak kecil (子) di bawah atap sekolah sedang belajar dengan giat.", strokes: 8, level: "N5", meaning: "Belajar / Ilmu" },
  "生": { onyomi: "セイ (sei), ショウ (shou)", kunyomi: "い・きる (i-kiru), う・まれる (u-mareru), なま (nama)", mnemonic: "Tunas tanaman baru yang tumbuh tegak dari tanah (hidup/lahir).", strokes: 5, level: "N5", meaning: "Hidup / Lahir" },
  "車": { onyomi: "シャ (sha)", kunyomi: "くるま (kuruma)", mnemonic: "Tampak atas dari sebuah kereta dorong tradisional beroda.", strokes: 7, level: "N5", meaning: "Mobil / Kendaraan / Roda" },
  "電": { onyomi: "デン (den)", kunyomi: "-", mnemonic: "Awan hujan (雨) di atas sawah (田) yang memancarkan kilatan petir (listrik).", strokes: 13, level: "N5", meaning: "Listrik / Petir" },
  "気": { onyomi: "キ (ki), ケ (ke)", kunyomi: "-", mnemonic: "Uap air hangat yang membubung ke udara (energi/perasaan).", strokes: 6, level: "N5", meaning: "Energi / Udara / Perasaan" },
  "入": { onyomi: "ニュウ (nyuu)", kunyomi: "はい・る (hai-ru), い・れる (i-reru)", mnemonic: "Dua garis bersilangan menunjukkan jalan masuk.", strokes: 2, level: "N5", meaning: "Masuk" },
  "出": { onyomi: "シュツ (shutsu)", kunyomi: "で・る (de-ru), だ・す (da-su)", mnemonic: "Dua gunung (山) yang bertumpuk mencuat keluar.", strokes: 5, level: "N5", meaning: "Keluar" },
  "買": { onyomi: "バイ (bai)", kunyomi: "か・う (ka-u)", mnemonic: "Membawa kantong (𠔿) berisi kulit kerang (貝 - uang kuno) untuk membeli.", strokes: 12, level: "N5", meaning: "Membeli" },
  "売": { onyomi: "バイ (bai)", kunyomi: "う・る (u-ru)", mnemonic: "Seseorang melangkah membawa barang dagangan di atas kerang (貝) untuk menjual.", strokes: 7, level: "N5", meaning: "Menjual" },
  "食": { onyomi: "ショク (shoku)", kunyomi: "た・べる (tabe-ru)", mnemonic: "Atap rumah dengan wadah makanan di bawahnya untuk makan.", strokes: 9, level: "N5", meaning: "Makan / Makanan" },
  "飲": { onyomi: "イン (in)", kunyomi: "の・む (no-mu)", mnemonic: "Membuka mulut lebar-lebar di dekat makanan/minuman (食) untuk minum.", strokes: 12, level: "N5", meaning: "Minum" },
  "山": { onyomi: "サン (san)", kunyomi: "やま (yama)", mnemonic: "Tiga puncak gunung berjejer yang menjulang tinggi.", strokes: 3, level: "N5", meaning: "Gunung" },
  "川": { onyomi: "セン (sen)", kunyomi: "かわ (kawa)", mnemonic: "Tiga garis aliran air sungai yang mengalir sejajar.", strokes: 3, level: "N5", meaning: "Sungai" },
  "日": { onyomi: "ニチ (nichi), ジツ (jitsu)", kunyomi: "ひ (hi), び (bi), か (ka)", mnemonic: "Matahari berbentuk lingkaran dengan garis di tengahnya.", strokes: 4, level: "N5", meaning: "Matahari / Hari" },
  "本": { onyomi: "ホン (hon)", kunyomi: "もと (moto)", mnemonic: "Pohon (木) yang diberi garis penanda di bagian akar/batangnya (buku/asal).", strokes: 5, level: "N5", meaning: "Buku / Asal" },
  "先": { onyomi: "セン (sen)", kunyomi: "さき (saki)", mnemonic: "Seseorang yang berjalan melangkah mendahului orang lain.", strokes: 6, level: "N5", meaning: "Dulu / Terlebih Dahulu" },
  "週": { onyomi: "シュウ (shuu)", kunyomi: "-", mnemonic: "Perjalanan (辶) mengelilingi daerah (周) selama satu minggu.", strokes: 11, level: "N5", meaning: "Minggu / Pekan" },
  "年": { onyomi: "ネン (nen)", kunyomi: "とし (toshi)", mnemonic: "Seseorang memikul seikat padi hasil panen raya tahunan.", strokes: 6, level: "N5", meaning: "Tahun" },
  "時": { onyomi: "ジ (ji)", kunyomi: "とき (toki)", mnemonic: "Matahari (日) di atas kuil (寺) yang dulu digunakan penunjuk waktu.", strokes: 10, level: "N5", meaning: "Waktu / Jam" },
  "間": { onyomi: "カン (kan), ゲン (gen)", kunyomi: "あいだ (aida), ま (ma)", mnemonic: "Sinar matahari (日) menerobos celah pintu gerbang (門).", strokes: 12, level: "N5", meaning: "Di Antara / Ruang / Jeda" },
  "駅": { onyomi: "エキ (eki)", kunyomi: "-", mnemonic: "Kuda (馬) yang ditambatkan di tempat pemberhentian stasiun (尺).", strokes: 14, level: "N5", meaning: "Stasiun" },
  "雨": { onyomi: "ウ (u)", kunyomi: "あめ (ame)", mnemonic: "Langit berawan yang menjatuhkan titik-titik air hujan ke bumi.", strokes: 8, level: "N5", meaning: "Hujan" },
  "男": { onyomi: "ダン (dan), ナン (nan)", kunyomi: "おとこ (otoko)", mnemonic: "Orang bekerja di sawah (田) menggunakan kekuatan fisik (力).", strokes: 7, level: "N5", meaning: "Laki-laki" },
  "女": { onyomi: "ジョ (jo)", kunyomi: "おんな (onna)", mnemonic: "Gambar siluet seorang wanita yang sedang duduk bersimpuh.", strokes: 3, level: "N5", meaning: "Perempuan" },
  "友": { onyomi: "ユウ (yuu)", kunyomi: "とも (tomo)", mnemonic: "Dua buah tangan kanan yang saling berpegangan erat (sahabat).", strokes: 4, level: "N5", meaning: "Teman / Sahabat" },
  "校": { onyomi: "コウ (kou)", kunyomi: "-", mnemonic: "Bangunan kayu (木) tempat anak berkumpul (交) belajar.", strokes: 10, level: "N5", meaning: "Sekolah" },
  "語": { onyomi: "ゴ (go)", kunyomi: "かた・る (kata-ru)", mnemonic: "Kata-kata (言) yang diucapkan oleh lima (五) mulut (口).", strokes: 14, level: "N5", meaning: "Bahasa / Kata" },
  "話": { onyomi: "ワ (wa)", kunyomi: "はな・す (hana-su), はなし (hanashi)", mnemonic: "Kata-kata (言) yang keluar dengan bantuan lidah (舌).", strokes: 13, level: "N5", meaning: "Bicara / Cerita" },
  "会": { onyomi: "カイ (kai), エ (e)", kunyomi: "あ・う (a-u)", mnemonic: "Orang-orang berkumpul bersama di bawah satu atap.", strokes: 6, level: "N5", meaning: "Bertemu / Perkumpulan" },
  "社": { onyomi: "シャ (sha)", kunyomi: "やしろ (yashiro)", mnemonic: "Altar persembahan (礻) di atas tanah (土) tempat masyarakat berkumpul.", strokes: 7, level: "N5", meaning: "Perusahaan / Masyarakat" },
  "見": { onyomi: "ケン (ken)", kunyomi: "み・る (mi-ru)", mnemonic: "Mata besar (目) di atas kaki manusia untuk melihat.", strokes: 7, level: "N5", meaning: "Melihat" },
  "書": { onyomi: "ショ (sho)", kunyomi: "か・く (ka-ku)", mnemonic: "Tangan memegang kuas di atas wadah tinta untuk menulis.", strokes: 10, level: "N5", meaning: "Menulis / Buku" },
  "休": { onyomi: "キュウ (kyuu)", kunyomi: "やす・む (yasu-mu)", mnemonic: "Seseorang (人) bersandar di bawah pohon (木) untuk istirahat.", strokes: 6, level: "N5", meaning: "Istirahat" },
  "行": { onyomi: "コウ (kou)", kunyomi: "い・く (i-ku), おこな・う (okona-u)", mnemonic: "Persimpangan jalan tempat orang berjalan pergi.", strokes: 6, level: "N5", meaning: "Pergi / Melakukan" },
  "来": { onyomi: "ライ (rai)", kunyomi: "く・る (ku-ru)", mnemonic: "Gandum matang yang datang tumbuh kembali untuk dipanen.", strokes: 7, level: "N5", meaning: "Datang" },
  "国": { onyomi: "コク (koku)", kunyomi: "くに (kuni)", mnemonic: "Wilayah kekuasaan raja yang dipagari tembok keliling.", strokes: 8, level: "N5", meaning: "Negara" },
  "道": { onyomi: "ドウ (dou)", kunyomi: "みち (michi)", mnemonic: "Kepala/pemikiran (首) yang memandu kaki melangkah (辶) di jalan.", strokes: 12, level: "N5", meaning: "Jalan / Cara" },
  "名": { onyomi: "メイ (mei)", kunyomi: "な (na)", mnemonic: "Di malam hari (夕), sebutkan nama dengan mulut (口).", strokes: 6, level: "N5", meaning: "Nama / Terkenal" },
  "前": { onyomi: "ゼン (zen)", kunyomi: "まえ (mae)", mnemonic: "Berdiri di depan perahu mengarahkan gunting potong.", strokes: 9, level: "N5", meaning: "Depan / Sebelum" },
  "後": { onyomi: "ゴ (go)", kunyomi: "あと (ato), うし・ろ (ushi-ro)", mnemonic: "Orang berjalan lambat di belakang karena kakinya terikat.", strokes: 9, level: "N5", meaning: "Belakang / Setelah" },
  "左": { onyomi: "サ (sa)", kunyomi: "ひだり (hidari)", mnemonic: "Tangan kiri memegang penggaris pertukangan.", strokes: 5, level: "N5", meaning: "Kiri" },
  "右": { onyomi: "ウ (u), ユウ (yuu)", kunyomi: "みぎ (migi)", mnemonic: "Tangan kanan menyuapkan makanan ke mulut (口).", strokes: 5, level: "N5", meaning: "Kanan" },
  "大": { onyomi: "ダイ (dai), タイ (tai)", kunyomi: "おお・きい (oo-kii)", mnemonic: "Orang merentangkan tangan dan kaki lebar-lebar.", strokes: 3, level: "N5", meaning: "Besar" },
  "小": { onyomi: "ショウ (shou)", kunyomi: "ちい・さい (chii-sai)", mnemonic: "Satu benda dibelah menjadi tiga bagian kecil.", strokes: 3, level: "N5", meaning: "Kecil" },
  "病": { onyomi: "ビョウ (byou)", kunyomi: "やまい (yamai)", mnemonic: "Orang berbaring di atas ranjang sakit (疒) dengan rasa perih.", strokes: 10, level: "N4", meaning: "Sakit / Penyakit" },
  "院": { onyomi: "イン (in)", kunyomi: "-", mnemonic: "Bangunan besar dengan tembok pagar tempat institusi resmi.", strokes: 10, level: "N4", meaning: "Institusi / Gedung" },
  "強": { onyomi: "キョウ (kyou)", kunyomi: "つよ・い (tsuyo-i)", mnemonic: "Busur panah (弓) yang mampu menembus cangkang serangga kuat.", strokes: 11, level: "N4", meaning: "Kuat / Paksaan" },
  "勉": { onyomi: "ベン (ben)", kunyomi: "つと・める (tsuto-meru)", mnemonic: "Melahirkan/berusaha keras (免) menggunakan tenaga fisik (力).", strokes: 10, level: "N4", meaning: "Berusaha / Giat" },
  "暗": { onyomi: "アン (an)", kunyomi: "くら・い (kura-i)", mnemonic: "Matahari (日) tertutup suara berbisik di malam hari (音) sehingga gelap.", strokes: 13, level: "N4", meaning: "Gelap / Rahasia" },
  "証": { onyomi: "ショウ (shou)", kunyomi: "あかし (akashi)", mnemonic: "Kata-kata (言) yang benar dan tepat (正) sebagai bukti sah.", strokes: 12, level: "N4", meaning: "Bukti / Verifikasi" },
  "番": { onyomi: "バン (ban)", kunyomi: "-", mnemonic: "Tanaman di sawah (田) yang diberi nomor urut dan dijaga.", strokes: 12, level: "N4", meaning: "Nomor / Giliran" },
  "号": { onyomi: "ゴウ (gou)", kunyomi: "-", mnemonic: "Mulut (口) yang meneriakkan perintah kode nomor.", strokes: 5, level: "N4", meaning: "Kode / Tanda / Angka" },
  "飛": { onyomi: "ヒ (hi)", kunyomi: "と・ぶ (to-bu)", mnemonic: "Burung mengepakkan sayap lebar-lebar melayang di udara.", strokes: 9, level: "N4", meaning: "Terbang" },
  "機": { onyomi: "キ (ki)", kunyomi: "hata (hata)", mnemonic: "Mesin kayu (木) kompleks dengan benang dan komponen bergerak.", strokes: 16, level: "N4", meaning: "Mesin / Kesempatan" },
  "急": { onyomi: "キュウ (kyuu)", kunyomi: "iso・gu (iso-gu)", mnemonic: "Hati (心) yang berdegup kencang karena harus bergegas.", strokes: 9, level: "N4", meaning: "Cepat / Darurat" },
  "救": { onyomi: "キュウ (kyuu)", kunyomi: "suku・u (suku-u)", mnemonic: "Memukul mundur bahaya (攵) untuk menyelamatkan orang.", strokes: 11, level: "N4", meaning: "Selamatkan / Pertolongan" },
  "忘": { onyomi: "ボウ (bou)", kunyomi: "wasu・reru (wasu-reru)", mnemonic: "Hati (心) yang hilang lenyap (亡) menyebabkan lupa.", strokes: 7, level: "N4", meaning: "Lupa" },
};

/**
 * Compound Kanji Custom Breakdowns for 2+ Kanji Words
 */
export const compoundBreakdowns: Record<string, {
  level: "N5" | "N4";
  components: Array<{ char: string; meaning: string; onyomi?: string; kunyomi?: string }>;
  mnemonic?: string;
  exampleSentence?: { japanese: string; hiragana: string; translation: string };
}> = {
  "電車": {
    level: "N5",
    components: [
      { char: "電", meaning: "Listrik", onyomi: "デン (den)" },
      { char: "車", meaning: "Kendaraan / Mobil", onyomi: "シャ (sha)", kunyomi: "くるま (kuruma)" }
    ],
    mnemonic: "Kendaraan (車) yang digerakkan oleh tenaga listrik (電) = Kereta Listrik.",
    exampleSentence: {
      japanese: "毎日電車で tachy/sekolah に行きます。",
      hiragana: "まいにち でんしゃ で がっこう に いきます。",
      translation: "Setiap hari saya pergi ke sekolah menggunakan kereta listrik."
    }
  },
  "勉強": {
    level: "N4",
    components: [
      { char: "勉", meaning: "Berusaha keras", onyomi: "ベン (ben)" },
      { char: "強", meaning: "Kuat", onyomi: "キョウ (kyou)", kunyomi: "つよい (tsuyoi)" }
    ],
    mnemonic: "Berusaha keras (勉) agar menjadi kuat (強) dalam ilmu pengetahuan = Belajar.",
    exampleSentence: {
      japanese: "日本語を勉強します。",
      hiragana: "にほんご を べんきょう します。",
      translation: "Saya belajar bahasa Jepang."
    }
  },
  "病院": {
    level: "N5",
    components: [
      { char: "病", meaning: "Sakit / Penyakit", onyomi: "ビョウ (byou)" },
      { char: "院", meaning: "Institusi / Gedung", onyomi: "イン (in)" }
    ],
    mnemonic: "Gedung atau institusi (院) khusus untuk orang yang sedang sakit (病) = Rumah Sakit.",
    exampleSentence: {
      japanese: "風邪をひいたので病院へ行きます。",
      hiragana: "かぜ を ひいた node びょういん へ いきます。",
      translation: "Karena kena flu, saya pergi ke rumah sakit."
    }
  },
  "暗証番号": {
    level: "N4",
    components: [
      { char: "暗", meaning: "Gelap / Rahasia", onyomi: "アン (an)" },
      { char: "証", meaning: "Bukti / Verifikasi", onyomi: "ショウ (shou)" },
      { char: "番", meaning: "Nomor / Giliran", onyomi: "バン (ban)" },
      { char: "号", meaning: "Kode / Angka", onyomi: "ゴウ (gou)" }
    ],
    mnemonic: "Nomor kode (番号) rahasia (暗) untuk verifikasi identitas (証) = Nomor PIN.",
    exampleSentence: {
      japanese: "銀行で暗証番号を入力します。",
      hiragana: "ぎんこう で あんしょうばんごう を にゅうりょく します。",
      translation: "Saya memasukkan nomor PIN di bank."
    }
  },
  "飛行機": {
    level: "N5",
    components: [
      { char: "飛", meaning: "Terbang", onyomi: "ヒ (hi)", kunyomi: "とぶ (tobu)" },
      { char: "行", meaning: "Pergi / Melakukan", onyomi: "コウ (kou)", kunyomi: "いく (iku)" },
      { char: "機", meaning: "Mesin / Pesawat", onyomi: "キ (ki)" }
    ],
    mnemonic: "Mesin (機) yang terbang (飛) dan pergi (行) melintasi angkasa = Pesawat Terbang.",
    exampleSentence: {
      japanese: "飛行機で日本へ行きます。",
      hiragana: "ひこうき で にほん へ いきます。",
      translation: "Pergi ke Jepang menggunakan pesawat terbang."
    }
  },
  "救急車": {
    level: "N4",
    components: [
      { char: "救", meaning: "Menyelamatkan", onyomi: "キュウ (kyuu)" },
      { char: "急", meaning: "Darurat / Cepat", onyomi: "キュウ (kyuu)", kunyomi: "いそぐ (isogu)" },
      { char: "車", meaning: "Kendaraan / Mobil", onyomi: "シャ (sha)", kunyomi: "くるま (kuruma)" }
    ],
    mnemonic: "Kendaraan (車) yang bergerak darurat/cepat (急) untuk menyelamatkan nyawa (救) = Ambulans.",
    exampleSentence: {
      japanese: "すぐに救急車を呼びました。",
      hiragana: "すぐに きゅうきゅうしゃ を よびました。",
      translation: "Saya segera memanggil mobil ambulans."
    }
  },
  "忘年会": {
    level: "N4",
    components: [
      { char: "忘", meaning: "Melupakan", onyomi: "ボウ (bou)" },
      { char: "年", meaning: "Tahun", onyomi: "ネン (nen)", kunyomi: "とし (toshi)" },
      { char: "会", meaning: "Pesta / Pertemuan", onyomi: "カイ (kai)", kunyomi: "あう (au)" }
    ],
    mnemonic: "Pesta perkumpulan (会) untuk melupakan (忘) kesusahan selama satu tahun (年) = Pesta Akhir Tahun.",
    exampleSentence: {
      japanese: "会社の人と忘年会をします。",
      hiragana: "かいしゃ の ひと と ぼうねんかい を します。",
      translation: "Mengadakan pesta akhir tahun bersama rekan kantor."
    }
  },
  "日本語": {
    level: "N5",
    components: [
      { char: "日", meaning: "Matahari / Jepang", onyomi: "ニチ (nichi)" },
      { char: "本", meaning: "Asal / Buku", onyomi: "ホン (hon)" },
      { char: "語", meaning: "Bahasa", onyomi: "ゴ (go)" }
    ],
    mnemonic: "Bahasa (語) dari negeri asal (本) matahari (日) = Bahasa Jepang.",
    exampleSentence: {
      japanese: "日本語はとても面白いです。",
      hiragana: "にほんご は とても おもしろい です。",
      translation: "Bahasa Jepang sangat menarik."
    }
  },
  "学校": {
    level: "N5",
    components: [
      { char: "学", meaning: "Belajar / Ilmu", onyomi: "ガク (gaku)" },
      { char: "校", meaning: "Bangunan / Sekolah", onyomi: "コウ (kou)" }
    ],
    mnemonic: "Bangunan (校) tempat belajar ilmu (学) = Sekolah.",
    exampleSentence: {
      japanese: "朝8時に学校へ行きます。",
      hiragana: "あさ はちじ に がっこう へ いきます。",
      translation: "Jam 8 pagi saya pergi ke sekolah."
    }
  },
  "学生": {
    level: "N5",
    components: [
      { char: "学", meaning: "Belajar", onyomi: "ガク (gaku)" },
      { char: "生", meaning: "Lahir / Orang", onyomi: "セイ (sei)" }
    ],
    mnemonic: "Orang yang sedang dalam proses belajar (学) = Siswa / Pelajar.",
    exampleSentence: {
      japanese: "私は大学の学生です。",
      hiragana: "わたし は だいがく の がくせい です。",
      translation: "Saya adalah mahasiswa universitas."
    }
  },
  "電話": {
    level: "N5",
    components: [
      { char: "電", meaning: "Listrik", onyomi: "デン (den)" },
      { char: "話", meaning: "Bicara", onyomi: "ワ (wa)" }
    ],
    mnemonic: "Berbicara (話) menggunakan sinyal listrik (電) = Telepon.",
    exampleSentence: {
      japanese: "友達に電話をかけます。",
      hiragana: "ともだち に でんわ を かけます。",
      translation: "Saya menelepon teman."
    }
  },
  "映画館": {
    level: "N5",
    components: [
      { char: "映", meaning: "Memantulkan / Bayangan", onyomi: "エイ (ei)" },
      { char: "画", meaning: "Gambar / Gambar Bergerak", onyomi: "ガ (ga)" },
      { char: "館", meaning: "Gedung / Aula", onyomi: "カン (kan)" }
    ],
    mnemonic: "Gedung (館) pemutaran gambar (画) pantulan (映) = Gedung Bioskop.",
    exampleSentence: {
      japanese: "週末に映画館で映画を見ます。",
      hiragana: "しゅうまつ に えいがかん で えいが を みます。",
      translation: "Di akhir pekan melihat film di bioskop."
    }
  },
  "自動車": {
    level: "N5",
    components: [
      { char: "自", meaning: "Sendiri", onyomi: "ジ (ji)" },
      { char: "動", meaning: "Bergerak", onyomi: "ドウ (dou)" },
      { char: "車", meaning: "Kendaraan", onyomi: "シャ (sha)" }
    ],
    mnemonic: "Kendaraan (車) yang bergerak (動) sendiri (自) menggunakan mesin = Mobil.",
    exampleSentence: {
      japanese: "父は新しい自動車を買いました。",
      hiragana: "ちち は あたらしい じどうしゃ を かいました。",
      translation: "Ayah saya membeli mobil baru."
    }
  },
  "自転車": {
    level: "N5",
    components: [
      { char: "自", meaning: "Sendiri", onyomi: "ジ (ji)" },
      { char: "転", meaning: "Berputar / Mengayuh", onyomi: "テン (ten)" },
      { char: "車", meaning: "Kendaraan / Roda", onyomi: "シャ (sha)" }
    ],
    mnemonic: "Kendaraan roda (車) yang dikayuh berputar (転) oleh tenaga sendiri (自) = Sepeda.",
    exampleSentence: {
      japanese: "自転車で駅まで行きます。",
      hiragana: "じてんしゃ で えき まで いきます。",
      translation: "Pergi ke stasiun dengan sepeda."
    }
  },
  "天気予報": {
    level: "N4",
    components: [
      { char: "天", meaning: "Langit", onyomi: "テン (ten)" },
      { char: "気", meaning: "Udara / Cuaca", onyomi: "キ (ki)" },
      { char: "予", meaning: "Sebelumnya / Prediksi", onyomi: "ヨ (yo)" },
      { char: "報", meaning: "Laporan / Kabar", onyomi: "ホウ (hou)" }
    ],
    mnemonic: "Laporan kabar (報) ramalan (予) kondisi udara langit (天気) = Perkiraan Cuaca.",
    exampleSentence: {
      japanese: "テレビで天気予報を確認します。",
      hiragana: "テレビ で てんきよほう を かくにん します。",
      translation: "Memeriksa ramalan cuaca di TV."
    }
  }
};

/**
 * Calculates the unique number of Kanji characters in a string
 */
export function getKanjiCount(text: string): number {
  const kanjiRegex = /[\u4e00-\u9faf\u3400-\u4dbf]/g;
  const matches = text.match(kanjiRegex);
  return matches ? matches.length : 0;
}

/**
 * Extracts individual kanji characters from a word
 */
export function getKanjiChars(text: string): string[] {
  const kanjiRegex = /[\u4e00-\u9faf\u3400-\u4dbf]/g;
  return Array.from(new Set(text.match(kanjiRegex) || []));
}

/**
 * Build the full list of Kanji Dictionary entries combining base dataset + details + breakdowns
 */
export function getKanjiDictionary(): KanjiDictionaryEntry[] {
  const dictionary: KanjiDictionaryEntry[] = [];
  const seenKanjiWords = new Set<string>();

  kanjiData.forEach((item) => {
    if (seenKanjiWords.has(item.kanji)) return;
    seenKanjiWords.add(item.kanji);

    const kChars = getKanjiChars(item.kanji);
    const kCount = kChars.length > 0 ? kChars.length : 1;
    const isSingle = kCount === 1;

    let onyomi = item.onyomi;
    let kunyomi = item.kunyomi;
    let mnemonic = item.mnemonic;
    let strokes: number | undefined = undefined;
    let level: "N5" | "N4" = "N5";
    let components: KanjiDictionaryEntry["components"] = undefined;
    let exampleSentence = undefined;

    // Check single master
    if (isSingle && singleKanjiMaster[item.kanji]) {
      const master = singleKanjiMaster[item.kanji];
      onyomi = onyomi || master.onyomi;
      kunyomi = kunyomi || master.kunyomi;
      mnemonic = mnemonic || master.mnemonic;
      strokes = master.strokes;
      level = master.level;
    } else if (isSingle && kanjiDetails[item.kanji]) {
      const detail = kanjiDetails[item.kanji];
      onyomi = onyomi || detail.onyomi;
      kunyomi = kunyomi || detail.kunyomi;
      mnemonic = mnemonic || detail.mnemonic;
    }

    // Check compound breakdown
    if (compoundBreakdowns[item.kanji]) {
      const comp = compoundBreakdowns[item.kanji];
      level = comp.level;
      components = comp.components;
      mnemonic = mnemonic || comp.mnemonic;
      exampleSentence = comp.exampleSentence;
    } else if (!isSingle && kChars.length > 0) {
      // Auto build components for compounds if available in single master
      components = kChars.map((char) => {
        const info = singleKanjiMaster[char] || kanjiDetails[char];
        return {
          char,
          meaning: info && "meaning" in info ? info.meaning : (info ? "Karakter penyusun" : char),
          onyomi: info?.onyomi,
          kunyomi: info?.kunyomi,
        };
      });
    }

    // Assign default N5 vs N4 based on category or length heuristic if not set
    if (!level) {
      level = ["b8", "b10", "b11", "b13", "c6", "c9", "c13", "d3", "d11", "d14", "d20", "f1", "f2", "f7", "f12", "g6", "g7", "g15", "h28", "j5", "j9", "k9", "k20", "s13", "s28", "s30", "t12", "t16", "t21", "u4", "u5", "y11", "y12", "y15"].includes(item.id) 
        ? "N4" 
        : "N5";
    }

    dictionary.push({
      id: item.id,
      kanji: item.kanji,
      hiragana: item.hiragana,
      romaji: item.romaji,
      arti: item.arti,
      level,
      kanjiCount: kCount,
      category: item.category,
      onyomi,
      kunyomi,
      mnemonic,
      strokes,
      components,
      exampleSentence,
      tags: [level, isSingle ? "1 Kanji" : `${kCount} Kanji`, `Kategori ${item.category}`]
    });
  });

  return dictionary;
}

export const kanjiDictionaryData = getKanjiDictionary();
