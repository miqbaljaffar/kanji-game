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
  hiragana: string;
  romaji: string;
}> = {
  // Alam & Elemen Dasar (N5)
  "水": { onyomi: "スイ (sui)", kunyomi: "みず (mizu)", mnemonic: "Air yang mengalir ke bawah membentuk aliran sungai kecil.", strokes: 4, level: "N5", meaning: "Air", hiragana: "みず", romaji: "mizu" },
  "火": { onyomi: "カ (ka)", kunyomi: "ひ (hi)", mnemonic: "Kobaran api yang membumbung tinggi menjilat udara.", strokes: 4, level: "N5", meaning: "Api", hiragana: "ひ", romaji: "hi" },
  "木": { onyomi: "モク (moku), ボク (boku)", kunyomi: "き (ki)", mnemonic: "Pohon lebat dengan batang utama dan dahan bercabang.", strokes: 4, level: "N5", meaning: "Pohon / Kayu", hiragana: "き", romaji: "ki" },
  "土": { onyomi: "ト (to), ド (do)", kunyomi: "つち (tsuchi)", mnemonic: "Tumpukan tanah yang subur di atas permukaan bumi.", strokes: 3, level: "N5", meaning: "Tanah", hiragana: "つち", romaji: "tsuchi" },
  "金": { onyomi: "キン (kin), コン (kon)", kunyomi: "かね (kane)", mnemonic: "Atap tambang dengan butiran emas murni berkilau di bawahnya.", strokes: 8, level: "N5", meaning: "Emas / Uang", hiragana: "かね", romaji: "kane" },
  "日": { onyomi: "ニチ (nichi), ジツ (jitsu)", kunyomi: "ひ (hi), び (bi), か (ka)", mnemonic: "Matahari berbentuk lingkaran dengan garis horizontal di tengahnya.", strokes: 4, level: "N5", meaning: "Matahari / Hari", hiragana: "ひ", romaji: "hi" },
  "月": { onyomi: "ゲツ (getsu), ガツ (gatsu)", kunyomi: "つき (tsuki)", mnemonic: "Bentuk bulan sabit yang bersinar di langit malam.", strokes: 4, level: "N5", meaning: "Bulan", hiragana: "つき", romaji: "tsuki" },
  "山": { onyomi: "サン (san)", kunyomi: "やま (yama)", mnemonic: "Tiga puncak gunung berjejer yang menjulang tinggi.", strokes: 3, level: "N5", meaning: "Gunung", hiragana: "やま", romaji: "yama" },
  "川": { onyomi: "セン (sen)", kunyomi: "かわ (kawa)", mnemonic: "Tiga garis aliran air sungai yang mengalir sejajar.", strokes: 3, level: "N5", meaning: "Sungai", hiragana: "かわ", romaji: "kawa" },
  "天": { onyomi: "テン (ten)", kunyomi: "あまつ (amatsu)", mnemonic: "Seseorang yang berdiri di atas permukaan tanah menatap langit luas.", strokes: 4, level: "N5", meaning: "Langit / Surga", hiragana: "てん", romaji: "ten" },
  "雨": { onyomi: "ウ (u)", kunyomi: "あめ (ame)", mnemonic: "Langit berawan yang menjatuhkan titik-titik air hujan ke bumi.", strokes: 8, level: "N5", meaning: "Hujan", hiragana: "あめ", romaji: "ame" },
  "空": { onyomi: "クウ (kuu)", kunyomi: "そら (sora), あ・く (a-ku)", mnemonic: "Atap goa (穴) dengan ruang kosong (工) membumbung tinggi.", strokes: 8, level: "N5", meaning: "Langit / Kosong", hiragana: "そら", romaji: "sora" },
  "風": { onyomi: "フウ (fuu)", kunyomi: "かぜ (kaze)", mnemonic: "Hembusan angin cepat membawa serangga melayang di udara.", strokes: 9, level: "N5", meaning: "Angin", hiragana: "かぜ", romaji: "kaze" },
  "花": { onyomi: "カ (ka)", kunyomi: "はな (hana)", mnemonic: "Tanaman (艹) yang mengalami perubahan (化) mekar menjadi bunga indah.", strokes: 7, level: "N5", meaning: "Bunga", hiragana: "はな", romaji: "hana" },
  "魚": { onyomi: "ギョ (gyo)", kunyomi: "さかな (sakana)", mnemonic: "Bentuk seekor ikan berenang lengkap dengan kepala, sisik, dan ekor.", strokes: 11, level: "N5", meaning: "Ikan", hiragana: "さかな", romaji: "sakana" },

  // Manusia & Tubuh (N5)
  "人": { onyomi: "ジン (jin), ニン (nin)", kunyomi: "ひと (hito)", mnemonic: "Gambar siluet dua kaki manusia yang melangkah berjalan tegak.", strokes: 2, level: "N5", meaning: "Orang / Manusia", hiragana: "ひと", romaji: "hito" },
  "子": { onyomi: "シ (shi), ス (su)", kunyomi: "こ (ko)", mnemonic: "Bayi/anak kecil yang merentangkan kedua tangannya dengan gembira.", strokes: 3, level: "N5", meaning: "Anak", hiragana: "こ", romaji: "ko" },
  "男": { onyomi: "ダン (dan), ナン (nan)", kunyomi: "おとこ (otoko)", mnemonic: "Orang bekerja di sawah (田) menggunakan kekuatan fisik (力).", strokes: 7, level: "N5", meaning: "Laki-laki", hiragana: "おとこ", romaji: "otoko" },
  "女": { onyomi: "ジョ (jo), ニョ (nyo)", kunyomi: "おんな (onna)", mnemonic: "Gambar siluet seorang wanita yang sedang duduk bersimpuh sopan.", strokes: 3, level: "N5", meaning: "Perempuan", hiragana: "おんな", romaji: "onna" },
  "父": { onyomi: "フ (fu)", kunyomi: "ちち (chichi)", mnemonic: "Tangan memegang kapak kayu melambangkan kepala keluarga/ayah.", strokes: 4, level: "N5", meaning: "Ayah", hiragana: "ちち", romaji: "chichi" },
  "母": { onyomi: "ボ (bo)", kunyomi: "はは (haha)", mnemonic: "Gambar dada seorang ibu yang sedang memeluk dan menyusui bayinya.", strokes: 5, level: "N5", meaning: "Ibu", hiragana: "はは", romaji: "haha" },
  "目": { onyomi: "モク (moku), ボク (boku)", kunyomi: "め (me)", mnemonic: "Bentuk organ mata manusia beserta iris di tengahnya.", strokes: 5, level: "N5", meaning: "Mata", hiragana: "め", romaji: "me" },
  "耳": { onyomi: "ジ (ji)", kunyomi: "みみ (mimi)", mnemonic: "Siluet bentuk daun telinga manusia untuk mendengarkan.", strokes: 6, level: "N5", meaning: "Telinga", hiragana: "みみ", romaji: "mimi" },
  "口": { onyomi: "コウ (kou), ク (ku)", kunyomi: "くち (kuchi)", mnemonic: "Bentuk rongga mulut yang terbuka lebar saat berbicara.", strokes: 3, level: "N5", meaning: "Mulut / Pintu", hiragana: "くち", romaji: "kuchi" },
  "手": { onyomi: "シュ (shu)", kunyomi: "て (te)", mnemonic: "Bentuk lima jemari tangan manusia yang siap menggenggam.", strokes: 4, level: "N5", meaning: "Tangan", hiragana: "て", romaji: "te" },
  "足": { onyomi: "ソク (soku)", kunyomi: "あし (ashi)", mnemonic: "Paha hingga telapak kaki manusia yang siap melangkah.", strokes: 7, level: "N5", meaning: "Kaki / Cukup", hiragana: "あし", romaji: "ashi" },
  "力": { onyomi: "リョク (ryoku), リキ (riki)", kunyomi: "ちから (chikara)", mnemonic: "Otot lengan yang ditekuk melambangkan kekuatan fisik.", strokes: 2, level: "N5", meaning: "Kekuatan / Tenaga", hiragana: "ちから", romaji: "chikara" },

  // Angka & Petunjuk (N5)
  "一": { onyomi: "イチ (ichi)", kunyomi: "ひと・つ (hito-tsu)", mnemonic: "Satu garis horizontal tegak lurus melambangkan angka 1.", strokes: 1, level: "N5", meaning: "Satu", hiragana: "いち", romaji: "ichi" },
  "二": { onyomi: "ニ (ni)", kunyomi: "ふた・つ (futa-tsu)", mnemonic: "Dua garis horizontal sejajar melambangkan angka 2.", strokes: 2, level: "N5", meaning: "Dua", hiragana: "に", romaji: "ni" },
  "三": { onyomi: "サン (san)", kunyomi: "みっ・つ (mit-tsu)", mnemonic: "Tiga garis horizontal sejajar melambangkan angka 3.", strokes: 3, level: "N5", meaning: "Tiga", hiragana: "さん", romaji: "san" },
  "四": { onyomi: "シ (shi)", kunyomi: "よん (yon), よっ・つ (yot-tsu)", mnemonic: "Kotak berpagar dengan dua tirai melambangkan angka 4.", strokes: 5, level: "N5", meaning: "Empat", hiragana: "よん", romaji: "yon" },
  "五": { onyomi: "ゴ (go)", kunyomi: "いつ・つ (itsu-tsu)", mnemonic: "Simbol lima jari bersilangan melambangkan angka 5.", strokes: 4, level: "N5", meaning: "Lima", hiragana: "ご", romaji: "go" },
  "六": { onyomi: "ロク (roku)", kunyomi: "むっ・つ (mut-tsu)", mnemonic: "Topi di atas kaki bercabang melambangkan angka 6.", strokes: 4, level: "N5", meaning: "Enam", hiragana: "ろく", romaji: "roku" },
  "七": { onyomi: "シチ (shichi)", kunyomi: "なな (nana), なな・つ (nana-tsu)", mnemonic: "Garis horizontal dipotong garis melengkung melambangkan angka 7.", strokes: 2, level: "N5", meaning: "Tujuh", hiragana: "なな", romaji: "nana" },
  "八": { onyomi: "ハチ (hachi)", kunyomi: "やっ・つ (yat-tsu)", mnemonic: "Dua garis terbuka melebar ke bawah melambangkan angka 8.", strokes: 2, level: "N5", meaning: "Delapan", hiragana: "はち", romaji: "hachi" },
  "九": { onyomi: "キュウ (kyuu), ク (ku)", kunyomi: "ここの・つ (kokono-tsu)", mnemonic: "Lengan membengkok melambangkan angka 9.", strokes: 2, level: "N5", meaning: "Sembilan", hiragana: "きゅう", romaji: "kyuu" },
  "十": { onyomi: "ジュウ (juu)", kunyomi: "とお (too)", mnemonic: "Simbol salib positif (+) melambangkan sepuluh.", strokes: 2, level: "N5", meaning: "Sepuluh", hiragana: "じゅう", romaji: "juu" },
  "百": { onyomi: "ヒャク (hyaku)", kunyomi: "もも (momo)", mnemonic: "Matahari (日) dengan satu garis di atasnya melambangkan seratus.", strokes: 6, level: "N5", meaning: "Ratus", hiragana: "ひゃく", romaji: "hyaku" },
  "千": { onyomi: "セン (sen)", kunyomi: "ち (chi)", mnemonic: "Angka seribu melambangkan pasukan seribu orang (人).", strokes: 3, level: "N5", meaning: "Ribu", hiragana: "せん", romaji: "sen" },
  "万": { onyomi: "マン (man), バン (ban)", kunyomi: "-", mnemonic: "Bendera berkibar melambangkan sepuluh ribu.", strokes: 3, level: "N5", meaning: "Puluh Ribu (10.000)", hiragana: "まん", romaji: "man" },
  "円": { onyomi: "エン (en)", kunyomi: "まる・い (maru-i)", mnemonic: "Koin lingkaran mata uang Yen Jepang.", strokes: 4, level: "N5", meaning: "Yen / Lingkaran", hiragana: "えん", romaji: "en" },

  // Kata Kerja & Aksi Utama (N5/N4)
  "行": { onyomi: "コウ (kou), ギョウ (gyou)", kunyomi: "い・く (i-ku), おこな・う (okona-u)", mnemonic: "Persimpangan jalan tempat orang berjalan pergi.", strokes: 6, level: "N5", meaning: "Pergi / Melakukan", hiragana: "いく", romaji: "iku" },
  "来": { onyomi: "ライ (rai)", kunyomi: "く・る (ku-ru)", mnemonic: "Gandum matang yang datang tumbuh kembali untuk dipanen.", strokes: 7, level: "N5", meaning: "Datang", hiragana: "くる", romaji: "kuru" },
  "食": { onyomi: "ショク (shoku)", kunyomi: "た・べる (tabe-ru)", mnemonic: "Atap rumah dengan wadah makanan di bawahnya untuk makan.", strokes: 9, level: "N5", meaning: "Makan / Makanan", hiragana: "たべる", romaji: "taberu" },
  "飲": { onyomi: "イン (in)", kunyomi: "の・む (no-mu)", mnemonic: "Membuka mulut lebar-lebar di dekat makanan/minuman (食) untuk minum.", strokes: 12, level: "N5", meaning: "Minum", hiragana: "のむ", romaji: "nomu" },
  "見": { onyomi: "ケン (ken)", kunyomi: "み・る (mi-ru)", mnemonic: "Mata besar (目) di atas kaki manusia untuk melihat.", strokes: 7, level: "N5", meaning: "Melihat", hiragana: "みる", romaji: "miru" },
  "聞": { onyomi: "ブン (bun), モン (mon)", kunyomi: "き・く (ki-ku)", mnemonic: "Telinga (耳) ditaruh di dekat celah pintu (門) untuk mendengarkan.", strokes: 14, level: "N5", meaning: "Mendengar / Bertanya", hiragana: "きく", romaji: "kiku" },
  "書": { onyomi: "ショ (sho)", kunyomi: "か・く (ka-ku)", mnemonic: "Tangan memegang kuas di atas wadah tinta untuk menulis.", strokes: 10, level: "N5", meaning: "Menulis", hiragana: "かく", romaji: "kaku" },
  "読": { onyomi: "ドク (doku)", kunyomi: "よ・む (yo-mu)", mnemonic: "Kata-kata (言) yang dijual (売) ditiupkan untuk dibaca.", strokes: 14, level: "N5", meaning: "Membaca", hiragana: "よむ", romaji: "yomu" },
  "話": { onyomi: "ワ (wa)", kunyomi: "はな・す (hana-su)", mnemonic: "Kata-kata (言) keluar bantuan lidah (舌) saat berbicara.", strokes: 13, level: "N5", meaning: "Bicara / Cerita", hiragana: "はなす", romaji: "hanasu" },
  "買": { onyomi: "バイ (bai)", kunyomi: "か・う (ka-u)", mnemonic: "Membawa kantong berisi kerang uang (貝) untuk membeli.", strokes: 12, level: "N5", meaning: "Membeli", hiragana: "かう", romaji: "kau" },
  "売": { onyomi: "バイ (bai)", kunyomi: "う・る (u-ru)", mnemonic: "Melangkah membawa barang kerang (貝) untuk menjual.", strokes: 7, level: "N5", meaning: "Menjual", hiragana: "うる", romaji: "uru" },
  "立": { onyomi: "リツ (ritsu)", kunyomi: "た・つ (ta-tsu)", mnemonic: "Seseorang berdiri tegak di atas permukaan tanah.", strokes: 5, level: "N5", meaning: "Berdiri", hiragana: "たつ", romaji: "tatsu" },
  "休": { onyomi: "キュウ (kyuu)", kunyomi: "やす・む (yasu-mu)", mnemonic: "Seseorang (人) bersandar di bawah pohon (木) untuk istirahat.", strokes: 6, level: "N5", meaning: "Istirahat", hiragana: "やすむ", romaji: "yasumu" },

  // Kata Sifat (N5/N4)
  "大": { onyomi: "ダイ (dai), タイ (tai)", kunyomi: "おお・きい (oo-kii)", mnemonic: "Orang merentangkan tangan dan kaki lebar-lebar.", strokes: 3, level: "N5", meaning: "Besar", hiragana: "おおきい", romaji: "ookii" },
  "小": { onyomi: "ショウ (shou)", kunyomi: "ちい・さい (chii-sai)", mnemonic: "Satu benda dibelah menjadi tiga bagian kecil.", strokes: 3, level: "N5", meaning: "Kecil", hiragana: "ちいさい", romaji: "chiisai" },
  "高": { onyomi: "コウ (kou)", kunyomi: "たか・い (taka-i)", mnemonic: "Menara tinggi dengan jendela atap bertingkat.", strokes: 10, level: "N5", meaning: "Tinggi / Mahal", hiragana: "たかい", romaji: "takai" },
  "安": { onyomi: "アン (an)", kunyomi: "やす・い (yasu-i)", mnemonic: "Seorang wanita (女) aman tenteram di bawah atap rumah (宀).", strokes: 6, level: "N5", meaning: "Murah / Aman", hiragana: "やすい", romaji: "yasui" },
  "新": { onyomi: "シン (shin)", kunyomi: "あたら・しい (atara-shii)", mnemonic: "Memotong kayu pohon baru (木) dengan kapak tajam (斤).", strokes: 13, level: "N5", meaning: "Baru", hiragana: "あたらしい", romaji: "atarashii" },
  "古": { onyomi: "コ (ko)", kunyomi: "ふる・い (furu-i)", mnemonic: "Cerita kuno yang diwariskan sepuluh (十) mulut (口).", strokes: 5, level: "N5", meaning: "Lama / Kuno", hiragana: "ふるい", romaji: "furui" },
  "長": { onyomi: "チョウ (chou)", kunyomi: "なが・い (naga-i)", mnemonic: "Rambut panjang seorang tetua suku.", strokes: 8, level: "N5", meaning: "Panjang / Pemimpin", hiragana: "ながい", romaji: "nagai" },
  "多": { onyomi: "タ (ta)", kunyomi: "おお・い (oo-i)", mnemonic: "Tumpukan dua bulan malam (夕) melambangkan banyak.", strokes: 6, level: "N5", meaning: "Banyak", hiragana: "おおい", romaji: "ooi" },
  "少": { onyomi: "ショウ (shou)", kunyomi: "すく・ない (suku-nai), ちい・さい (chii-sai)", mnemonic: "Potongan kecil yang diiris lagi menjadi sedikit.", strokes: 4, level: "N5", meaning: "Sedikit", hiragana: "すくない", romaji: "sukunai" },
  "近": { onyomi: "キン (kin)", kunyomi: "ちか・い (chika-i)", mnemonic: "Berjalan (辶) dekat dengan mengukur jarak penggaris.", strokes: 7, level: "N5", meaning: "Dekat", hiragana: "ちかい", romaji: "chikai" },
  "遠": { onyomi: "エン (en)", kunyomi: "とお・い (too-i)", mnemonic: "Perjalanan melangkah (辶) jauh ke kota terpencil.", strokes: 13, level: "N5", meaning: "Jauh", hiragana: "とおい", romaji: "tooi" },
  "白": { onyomi: "ハク (haku)", kunyomi: "しろ・い (shiro-i)", mnemonic: "Satu pancaran sinar matahari putih bersinar murni.", strokes: 5, level: "N5", meaning: "Putih", hiragana: "しろい", romaji: "shiroi" },
  "黒": { onyomi: "コク (koku)", kunyomi: "くろ・い (kuro-i)", mnemonic: "Cerobong asap jelaga gelap berjelaga hitam.", strokes: 11, level: "N5", meaning: "Hitam", hiragana: "くろい", romaji: "kuroi" },
  "赤": { onyomi: "セキ (seki)", kunyomi: "あか・い (aka-i)", mnemonic: "Kobaran api merah membakar tanah liat.", strokes: 7, level: "N5", meaning: "Merah", hiragana: "あかい", romaji: "akai" },
  "青": { onyomi: "セイ (sei), ショウ (shou)", kunyomi: "あお・い (ao-i)", mnemonic: "Warna biru samudra jernih yang memancar murni.", strokes: 8, level: "N5", meaning: "Biru", hiragana: "あおい", romaji: "aoi" },
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
  // Hari dalam seminggu
  "月曜日": {
    level: "N5",
    components: [
      { char: "月", meaning: "Bulan", onyomi: "ゲツ (getsu)", kunyomi: "つき (tsuki)" },
      { char: "曜", meaning: "Hari dalam seminggu", onyomi: "ヨウ (you)" },
      { char: "日", meaning: "Hari / Matahari", onyomi: "ビ (bi)", kunyomi: "ひ (hi)" }
    ],
    mnemonic: "Hari (曜日) yang didedikasikan untuk Bulan (月) = Hari Senin.",
    exampleSentence: {
      japanese: "月曜日に yang / ujian があります。",
      hiragana: "げつようび に しけん が あります。",
      translation: "Ada ujian pada hari Senin."
    }
  },
  "火曜日": {
    level: "N5",
    components: [
      { char: "火", meaning: "Api", onyomi: "カ (ka)", kunyomi: "ひ (hi)" },
      { char: "曜", meaning: "Hari", onyomi: "ヨウ (you)" },
      { char: "日", meaning: "Hari", onyomi: "ビ (bi)" }
    ],
    mnemonic: "Hari (曜日) elemen Api (火) = Hari Selasa.",
    exampleSentence: {
      japanese: "火曜日は休みです。",
      hiragana: "かようび は やすみ です。",
      translation: "Hari Selasa adalah hari libur."
    }
  },
  "水曜日": {
    level: "N5",
    components: [
      { char: "水", meaning: "Air", onyomi: "スイ (sui)", kunyomi: "みず (mizu)" },
      { char: "曜", meaning: "Hari", onyomi: "ヨウ (you)" },
      { char: "日", meaning: "Hari", onyomi: "ビ (bi)" }
    ],
    mnemonic: "Hari (曜日) elemen Air (水) = Hari Rabu.",
    exampleSentence: {
      japanese: "水曜日に泳ぎに行きます。",
      hiragana: "すいようび に およぎ に いきます。",
      translation: "Hari Rabu saya pergi berenang."
    }
  },
  "木曜日": {
    level: "N5",
    components: [
      { char: "木", meaning: "Pohon", onyomi: "モク (moku)", kunyomi: "き (ki)" },
      { char: "曜", meaning: "Hari", onyomi: "ヨウ (you)" },
      { char: "日", meaning: "Hari", onyomi: "ビ (bi)" }
    ],
    mnemonic: "Hari (曜日) elemen Pohon/Kayu (木) = Hari Kamis.",
    exampleSentence: {
      japanese: "木曜日に会議があります。",
      hiragana: "もくようび に かいぎ が あります。",
      translation: "Ada rapat pada hari Kamis."
    }
  },
  "金曜日": {
    level: "N5",
    components: [
      { char: "金", meaning: "Emas / Uang", onyomi: "キン (kin)", kunyomi: "かね (kane)" },
      { char: "曜", meaning: "Hari", onyomi: "ヨウ (you)" },
      { char: "日", meaning: "Hari", onyomi: "ビ (bi)" }
    ],
    mnemonic: "Hari (曜日) elemen Emas (金) = Hari Jumat.",
    exampleSentence: {
      japanese: "金曜日の夜に友達と会います。",
      hiragana: "きんようび の よる に ともだち と あいます。",
      translation: "Jumat malam saya bertemu dengan teman."
    }
  },
  "土曜日": {
    level: "N5",
    components: [
      { char: "土", meaning: "Tanah", onyomi: "ド (do)", kunyomi: "つち (tsuchi)" },
      { char: "曜", meaning: "Hari", onyomi: "ヨウ (you)" },
      { char: "日", meaning: "Hari", onyomi: "ビ (bi)" }
    ],
    mnemonic: "Hari (曜日) elemen Tanah (土) = Hari Sabtu.",
    exampleSentence: {
      japanese: "土曜日に買い物します。",
      hiragana: "どようび に かいもの します。",
      translation: "Hari Sabtu saya berbelanja."
    }
  },
  "日曜日": {
    level: "N5",
    components: [
      { char: "日", meaning: "Matahari", onyomi: "ニチ (nichi)", kunyomi: "ひ (hi)" },
      { char: "曜", meaning: "Hari", onyomi: "ヨウ (you)" },
      { char: "日", meaning: "Hari", onyomi: "ビ (bi)" }
    ],
    mnemonic: "Hari (曜日) elemen Matahari (日) = Hari Minggu.",
    exampleSentence: {
      japanese: "日曜日は家で休 tambahkan/istirahat します。",
      hiragana: "にちようび は いえ で やすみます。",
      translation: "Hari Minggu istirahat di rumah."
    }
  },

  // Tempat & Fasilitas
  "図書館": {
    level: "N5",
    components: [
      { char: "図", meaning: "Peta / Gambar", onyomi: "ト (to)", kunyomi: "はかる (hakaru)" },
      { char: "書", meaning: "Buku / Menulis", onyomi: "ショ (sho)", kunyomi: "かく (kaku)" },
      { char: "館", meaning: "Gedung / Hall", onyomi: "カン (kan)" }
    ],
    mnemonic: "Gedung (館) penyimpanan koleksi peta (図) dan buku (書) = Perpustakaan.",
    exampleSentence: {
      japanese: "図書館で本を借ります。",
      hiragana: "としょかん で ほん を かります。",
      translation: "Meminjam buku di perpustakaan."
    }
  },
  "美術館": {
    level: "N4",
    components: [
      { char: "美", meaning: "Indah", onyomi: "ビ (bi)", kunyomi: "utsukushii" },
      { char: "術", meaning: "Seni / Teknik", onyomi: "ジュツ (jutsu)" },
      { char: "館", meaning: "Gedung", onyomi: "カン (kan)" }
    ],
    mnemonic: "Gedung (館) pemamer karya seni (術) yang indah (美) = Museum Seni.",
    exampleSentence: {
      japanese: "美術館で絵を見ます。",
      hiragana: "びじゅつかん で え を みます。",
      translation: "Melihat lukisan di museum seni."
    }
  },
  "大使館": {
    level: "N4",
    components: [
      { char: "大", meaning: "Besar", onyomi: "タイ (tai)" },
      { char: "使", meaning: "Utusan / Menggunakan", onyomi: "シ (shi)" },
      { char: "館", meaning: "Gedung", onyomi: "カン (kan)" }
    ],
    mnemonic: "Gedung (館) tempat kediaman utusan besar (大使) negara = Kedutaan Besar.",
    exampleSentence: {
      japanese: "大使館でビザを申請します。",
      hiragana: "たいしかん で ビザ を しんせい します。",
      translation: "Mengajukan visa di kedutaan besar."
    }
  },
  "地下鉄": {
    level: "N5",
    components: [
      { char: "地", meaning: "Bumi / Tanah", onyomi: "チ (chi)" },
      { char: "下", meaning: "Bawah", onyomi: "カ (ka)", kunyomi: "した (shita)" },
      { char: "鉄", meaning: "Besi", onyomi: "テツ (tetsu)" }
    ],
    mnemonic: "Jalur besi kereta (鉄) di bawah (下) tanah (地) = Kereta Bawah Tanah (Subway).",
    exampleSentence: {
      japanese: "地下鉄に乗って行きます。",
      hiragana: "ちかてつ に のって いきます。",
      translation: "Pergi dengan naik kereta bawah tanah."
    }
  },
  "新幹線": {
    level: "N4",
    components: [
      { char: "新", meaning: "Baru", onyomi: "シン (shin)" },
      { char: "幹", meaning: "Jalur Batang Utama", onyomi: "カン (kan)" },
      { char: "線", meaning: "Jalur / Garis", onyomi: "セン (sen)" }
    ],
    mnemonic: "Jalur rel baru (新) utama (幹線) untuk kereta super cepat = Shinkansen.",
    exampleSentence: {
      japanese: "新幹線で東京から大阪へ行きます。",
      hiragana: "しんかんせん で とうきょう から おおさか へ いきます。",
      translation: "Pergi dari Tokyo ke Osaka naik Shinkansen."
    }
  },
  "郵便局": {
    level: "N4",
    components: [
      { char: "郵", meaning: "Pos / Surat", onyomi: "ユウ (yuu)" },
      { char: "便", meaning: "Kemudahan / Berita", onyomi: "ビン (bin)" },
      { char: "局", meaning: "Biro / Kantor", onyomi: "キョク (kyoku)" }
    ],
    mnemonic: "Kantor biro (局) pengiriman surat pos (郵) dan berita (便) = Kantor Pos.",
    exampleSentence: {
      japanese: "郵便局で手紙を出します。",
      hiragana: "ゆうびんきょく で てがみ を だします。",
      translation: "Mengirim surat di kantor pos."
    }
  },
  "交番": {
    level: "N5",
    components: [
      { char: "交", meaning: "Saling / Lalu Lintas", onyomi: "コウ (kou)" },
      { char: "番", meaning: "Nomor / Tugas Jaga", onyomi: "バン (ban)" }
    ],
    mnemonic: "Pos tempat polisi bersiaga menjaga (番) ketertiban lalu lintas (交) = Pos Polisi.",
    exampleSentence: {
      japanese: "交番で道を尋ねます。",
      hiragana: "こうばん で みち を たずねます。",
      translation: "Bertanya jalan di pos polisi."
    }
  },
  "会社員": {
    level: "N5",
    components: [
      { char: "会", meaning: "Perkumpulan", onyomi: "カイ (kai)" },
      { char: "社", meaning: "Perusahaan", onyomi: "シャ (sha)" },
      { char: "員", meaning: "Anggota / Pegawai", onyomi: "イン (in)" }
    ],
    mnemonic: "Anggota (員) pegawai yang bekerja di kantor perusahaan (会社) = Karyawan Perusahaan.",
    exampleSentence: {
      japanese: "兄は会社員です。",
      hiragana: "あに は かいしゃいん です。",
      translation: "Kakak laki-laki saya adalah karyawan perusahaan."
    }
  },
  "銀行員": {
    level: "N5",
    components: [
      { char: "銀", meaning: "Perak", onyomi: "ギン (gin)" },
      { char: "行", meaning: "Bank / Pergi", onyomi: "コウ (kou)" },
      { char: "員", meaning: "Anggota", onyomi: "イン (in)" }
    ],
    mnemonic: "Pegawai anggota (員) institusi keuangan bank (銀行) = Pegawai Bank.",
    exampleSentence: {
      japanese: "彼女は銀行員として働いています。",
      hiragana: "かのじょ は ぎんこういん とし て はたらいています。",
      translation: "Dia bekerja sebagai pegawai bank."
    }
  },
  "医者": {
    level: "N5",
    components: [
      { char: "医", meaning: "Medis / Pengobatan", onyomi: "イ (i)" },
      { char: "者", meaning: "Orang / Ahli", onyomi: "シャ (sha)", kunyomi: "もの (mono)" }
    ],
    mnemonic: "Orang (者) ahli dalam bidang pengobatan medis (医) = Dokter.",
    exampleSentence: {
      japanese: "将来医者になりたいです。",
      hiragana: "しょうらい いしゃ に なりたい です。",
      translation: "Saya ingin menjadi dokter di masa depan."
    }
  },
  "研究者": {
    level: "N4",
    components: [
      { char: "研", meaning: "Meneliti", onyomi: "ケン (ken)" },
      { char: "究", meaning: "Mendalami", onyomi: "キュウ (kyuu)" },
      { char: "者", meaning: "Orang", onyomi: "シャ (sha)" }
    ],
    mnemonic: "Orang (者) yang mendedikasikan hidup meneliti (研) dan mendalami sains (究) = Peneliti.",
    exampleSentence: {
      japanese: "大学で研究者として働きます。",
      hiragana: "だいがく で けんきゅうしゃ とし て はたらきます。",
      translation: "Bekerja sebagai peneliti di universitas."
    }
  },
  "手紙": {
    level: "N5",
    components: [
      { char: "手", meaning: "Tangan", onyomi: "シュ (shu)", kunyomi: "て (te)" },
      { char: "紙", meaning: "Kertas", onyomi: "シ (shi)", kunyomi: "かみ (kami)" }
    ],
    mnemonic: "Lembaran kertas (紙) yang ditulis oleh genggaman tangan (手) = Surat.",
    exampleSentence: {
      japanese: "国のお母さんに手紙を書きます。",
      hiragana: "くに の おかあさん に てがみ を かきます。",
      translation: "Menulis surat untuk ibu di kampung halaman."
    }
  },
  "新聞": {
    level: "N5",
    components: [
      { char: "新", meaning: "Baru", onyomi: "シン (shin)" },
      { char: "聞", meaning: "Mendengar / Berita", onyomi: "ブン (bun)", kunyomi: "きく (kiku)" }
    ],
    mnemonic: "Kabar berita (聞) terbaru (新) yang dicetak = Koran.",
    exampleSentence: {
      japanese: "毎朝新聞を読みます。",
      hiragana: "まいあさ しんぶん を よみます。",
      translation: "Setiap pagi membaca koran."
    }
  },
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

  // 1. Process all kanjiData items
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

  // 2. Add single kanjis from singleKanjiMaster that were not in kanjiData
  Object.entries(singleKanjiMaster).forEach(([char, info]) => {
    if (seenKanjiWords.has(char)) return;
    seenKanjiWords.add(char);

    dictionary.push({
      id: `sk_${char}`,
      kanji: char,
      hiragana: info.hiragana,
      romaji: info.romaji,
      arti: info.meaning,
      level: info.level,
      kanjiCount: 1,
      category: char,
      onyomi: info.onyomi,
      kunyomi: info.kunyomi,
      mnemonic: info.mnemonic,
      strokes: info.strokes,
      tags: [info.level, "1 Kanji", "Tunggal Dasar"]
    });
  });

  // 3. Add compound kanjis from compoundBreakdowns that were not in kanjiData
  Object.entries(compoundBreakdowns).forEach(([word, info]) => {
    if (seenKanjiWords.has(word)) return;
    seenKanjiWords.add(word);

    const kChars = getKanjiChars(word);

    dictionary.push({
      id: `cb_${word}`,
      kanji: word,
      hiragana: info.exampleSentence?.hiragana || word,
      romaji: word,
      arti: info.mnemonic || word,
      level: info.level,
      kanjiCount: kChars.length > 0 ? kChars.length : 2,
      category: "Majemuk",
      components: info.components,
      mnemonic: info.mnemonic,
      exampleSentence: info.exampleSentence,
      tags: [info.level, `${kChars.length} Kanji`, "Majemuk Jukugo"]
    });
  });

  return dictionary;
}

export const kanjiDictionaryData = getKanjiDictionary();
