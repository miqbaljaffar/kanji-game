import { KanjiDictionaryEntry } from "@/types";
import { kanjiData } from "./kanji";
import { kanjiDetails } from "./kanjiDetails";

/**
 * Single Kanji master database with character breakdown, strokes, mnemonics, onyomi, kunyomi
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
  // ==========================================
  // ELEMEN ALAM & CUACA (N5 & N4)
  // ==========================================
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
  "海": { onyomi: "カイ (kai)", kunyomi: "うみ (umi)", mnemonic: "Air (氵) luas tempat setiap ibu (母) laut bermuara.", strokes: 9, level: "N4", meaning: "Laut / Samudra", hiragana: "うみ", romaji: "umi" },
  "池": { onyomi: "チ (chi)", kunyomi: "いけ (ike)", mnemonic: "Genangan air (氵) jernih membentuk kolam ikan.", strokes: 6, level: "N4", meaning: "Kolam", hiragana: "いけ", romaji: "ike" },
  "林": { onyomi: "リン (rin)", kunyomi: "はやし (hayashi)", mnemonic: "Dua pohon (木) berjejer membentuk hutan kecil.", strokes: 8, level: "N4", meaning: "Hutan Kecil", hiragana: "はやし", romaji: "hayashi" },
  "森": { onyomi: "シン (shin)", kunyomi: "もり (mori)", mnemonic: "Tiga pohon (木) lebat membentuk hutan belantara rindang.", strokes: 12, level: "N4", meaning: "Hutan Belantara", hiragana: "もり", romaji: "mori" },
  "地": { onyomi: "チ (chi), ジ (ji)", kunyomi: "-", mnemonic: "Tanah bumi (土) tempat berpijak segala kehidupan.", strokes: 6, level: "N4", meaning: "Bumi / Tanah / Wilayah", hiragana: "ち", romaji: "chi" },

  // ==========================================
  // MANUSIA, TUBUH, & MASYARAKAT (N5 & N4)
  // ==========================================
  "人": { onyomi: "ジン (jin), ニン (nin)", kunyomi: "ひと (hito)", mnemonic: "Gambar siluet dua kaki manusia yang melangkah berjalan tegak.", strokes: 2, level: "N5", meaning: "Orang / Manusia", hiragana: "ひと", romaji: "hito" },
  "子": { onyomi: "シ (shi), ス (su)", kunyomi: "こ (ko)", mnemonic: "Bayi/anak kecil yang merentangkan kedua tangannya dengan gembira.", strokes: 3, level: "N5", meaning: "Anak", hiragana: "こ", romaji: "ko" },
  "男": { onyomi: "ダン (dan), ナン (nan)", kunyomi: "おとこ (otoko)", mnemonic: "Orang bekerja di sawah (田) menggunakan kekuatan fisik (力).", strokes: 7, level: "N5", meaning: "Laki-laki", hiragana: "おとこ", romaji: "otoko" },
  "女": { onyomi: "ジョ (jo), ニョ (nyo)", kunyomi: "おんな (onna)", mnemonic: "Gambar siluet seorang wanita yang sedang duduk bersimpuh sopan.", strokes: 3, level: "N5", meaning: "Perempuan", hiragana: "おんな", romaji: "onna" },
  "父": { onyomi: "フ (fu)", kunyomi: "ちち (chichi)", mnemonic: "Tangan memegang kapak kayu melambangkan kepala keluarga/ayah.", strokes: 4, level: "N5", meaning: "Ayah", hiragana: "ちち", romaji: "chichi" },
  "母": { onyomi: "ボ (bo)", kunyomi: "はは (haha)", mnemonic: "Gambar dada seorang ibu yang sedang memeluk dan menyusui bayinya.", strokes: 5, level: "N5", meaning: "Ibu", hiragana: "はは", romaji: "haha" },
  "目": { onyomi: "モク (moku)", kunyomi: "め (me)", mnemonic: "Bentuk organ mata manusia beserta iris di tengahnya.", strokes: 5, level: "N5", meaning: "Mata", hiragana: "め", romaji: "me" },
  "耳": { onyomi: "ジ (ji)", kunyomi: "みみ (mimi)", mnemonic: "Siluet bentuk daun telinga manusia untuk mendengarkan.", strokes: 6, level: "N5", meaning: "Telinga", hiragana: "みみ", romaji: "mimi" },
  "口": { onyomi: "コウ (kou), ク (ku)", kunyomi: "くち (kuchi)", mnemonic: "Bentuk rongga mulut yang terbuka lebar saat berbicara.", strokes: 3, level: "N5", meaning: "Mulut / Pintu", hiragana: "くち", romaji: "kuchi" },
  "手": { onyomi: "シュ (shu)", kunyomi: "て (te)", mnemonic: "Bentuk lima jemari tangan manusia yang siap menggenggam.", strokes: 4, level: "N5", meaning: "Tangan", hiragana: "て", romaji: "te" },
  "足": { onyomi: "ソク (soku)", kunyomi: "あし (ashi)", mnemonic: "Paha hingga telapak kaki manusia yang siap melangkah.", strokes: 7, level: "N5", meaning: "Kaki / Cukup", hiragana: "あし", romaji: "ashi" },
  "力": { onyomi: "リョク (ryoku), リキ (riki)", kunyomi: "ちから (chikara)", mnemonic: "Otot lengan yang ditekuk melambangkan kekuatan fisik.", strokes: 2, level: "N5", meaning: "Kekuatan / Tenaga", hiragana: "ちから", romaji: "chikara" },
  "心": { onyomi: "シン (shin)", kunyomi: "こころ (kokoro)", mnemonic: "Bentuk organ jantung yang memompa darah / perasaan hati.", strokes: 4, level: "N4", meaning: "Hati / Perasaan", hiragana: "こころ", romaji: "kokoro" },
  "親": { onyomi: "シン (shin)", kunyomi: "おや (oya), した・しい (shita-shii)", mnemonic: "Orang tua yang berdiri (立) di atas pohon (木) melihat (見) anaknya.", strokes: 16, level: "N4", meaning: "Orang Tua / Akrab", hiragana: "おや", romaji: "oya" },
  "犬": { onyomi: "ケン (ken)", kunyomi: "いぬ (inu)", mnemonic: "Orang besar (大) yang memelihara seekor anjing setia.", strokes: 4, level: "N4", meaning: "Anjing", hiragana: "いぬ", romaji: "inu" },
  "鳥": { onyomi: "チョウ (chou)", kunyomi: "とり (tori)", mnemonic: "Burung hinggap lengkap dengan paruh, sayap, dan empat kaki.", strokes: 11, level: "N4", meaning: "Burung", hiragana: "とり", romaji: "tori" },
  "服": { onyomi: "フク (fuku)", kunyomi: "-", mnemonic: "Pakaian jubah bertangan panjang penutup tubuh.", strokes: 8, level: "N4", meaning: "Pakaian / Baju", hiragana: "ふく", romaji: "fuku" },

  // ==========================================
  // KATA KERJA N4 LENGKAP
  // ==========================================
  "走": { onyomi: "ソウ (sou)", kunyomi: "はし・る (hashi-ru)", mnemonic: "Orang berlari kencang menggerakkan kaki di atas tanah.", strokes: 7, level: "N4", meaning: "Berlari", hiragana: "はしる", romaji: "hashiru" },
  "歩": { onyomi: "ホ (ho)", kunyomi: "ある・く (aru-ku)", mnemonic: "Dua telapak kaki melangkah maju berjalan perlahan.", strokes: 8, level: "N4", meaning: "Berjalan Kaki", hiragana: "あるく", romaji: "aruku" },
  "止": { onyomi: "シ (shi)", kunyomi: "と・まる (to-maru), と・める (to-meru)", mnemonic: "Telapak kaki yang berhenti melangkah di tempat.", strokes: 4, level: "N4", meaning: "Berhenti", hiragana: "とまる", romaji: "tomaru" },
  "動": { onyomi: "ドウ (dou)", kunyomi: "うご・く (ugo-ku)", mnemonic: "Menggunakan kekuatan tenaga (力) untuk memindahkan beban (重).", strokes: 11, level: "N4", meaning: "Bergerak", hiragana: "うごく", romaji: "ugoku" },
  "働": { onyomi: "ドウ (dou)", kunyomi: "はたら・く (hatara-ku)", mnemonic: "Seseorang (人) yang bekerja menggerakkan tubuh (動).", strokes: 13, level: "N4", meaning: "Bekerja", hiragana: "はたらく", romaji: "hataraku" },
  "使": { onyomi: "シ (shi)", kunyomi: "つか・う (tsuka-u)", mnemonic: "Seseorang (人) memegang alat untuk menggunakannya.", strokes: 8, level: "N4", meaning: "Menggunakan", hiragana: "つかう", romaji: "tsukau" },
  "作": { onyomi: "サク (saku), サ (sa)", kunyomi: "つく・る (tsuku-ru)", mnemonic: "Seseorang (人) membuat kerajinan dengan kedua tangannya.", strokes: 7, level: "N4", meaning: "Membuat", hiragana: "つくる", romaji: "tsukuru" },
  "開": { onyomi: "カイ (kai)", kunyomi: "あ・ける (a-keru), ひら・く (hira-ku)", mnemonic: "Dua tangan menarik palang pintu gerbang (門) untuk membuka.", strokes: 12, level: "N4", meaning: "Membuka", hiragana: "あける", romaji: "akeru" },
  "閉": { onyomi: "ヘイ (hei)", kunyomi: "し・める (shi-meru), と・じる (to-jiru)", mnemonic: "Memasang palang rapat menutup pintu gerbang (門).", strokes: 12, level: "N4", meaning: "Menutup", hiragana: "しめる", romaji: "shimeru" },
  "着": { onyomi: "チャク (chaku)", kunyomi: "き・る (ki-ru), つ・く (tsu-ku)", mnemonic: "Pakaian bertumpuk yang dipakai atau tiba di tujuan.", strokes: 12, level: "N4", meaning: "Memakai / Tiba", hiragana: "きる", romaji: "kiru" },
  "始": { onyomi: "シ (shi)", kunyomi: "はじ・まる (haji-maru), はじ・める (haji-meru)", mnemonic: "Wanita (女) yang mengawali ucapan dengan mulut (口) untuk memulai.", strokes: 8, level: "N4", meaning: "Mulai / Memulai", hiragana: "はじまる", romaji: "hajimaru" },
  "終": { onyomi: "シュウ (shuu)", kunyomi: "お・わる (o-waru), お・わる (o-waru)", mnemonic: "Benang (糸) yang diikat rapi menandai akhir selesai.", strokes: 11, level: "N4", meaning: "Selesai / Akhir", hiragana: "おわる", romaji: "owaru" },
  "洗": { onyomi: "セン (sen)", kunyomi: "あら・う (ara-u)", mnemonic: "Air (氵) mengalir mendahului (先) untuk mencuci bersih.", strokes: 9, level: "N4", meaning: "Mencuci", hiragana: "あらう", romaji: "arau" },
  "借": { onyomi: "シャク (shaku)", kunyomi: "か・りる (ka-riru)", mnemonic: "Seseorang (人) meminjamkan barang lama (昔).", strokes: 10, level: "N4", meaning: "Meminjam", hiragana: "かりる", romaji: "kariru" },
  "貸": { onyomi: "タイ (tai)", kunyomi: "か・す (ka-su)", mnemonic: "Mengganti (代) dengan uang kerang (貝) untuk meminjamkan.", strokes: 12, level: "N4", meaning: "Meminjamkan", hiragana: "かす", romaji: "kasu" },
  "送": { onyomi: "ソウ (sou)", kunyomi: "おく・る (oku-ru)", mnemonic: "Melangkah melintasi jalan (辶) untuk mengirim barang.", strokes: 9, level: "N4", meaning: "Mengirim", hiragana: "おくる", romaji: "okuru" },
  "切": { onyomi: "セツ (setsu)", kunyomi: "き・る (ki-ru)", mnemonic: "Pisau (刀) tajam memotong tujuh (七) bagian.", strokes: 4, level: "N4", meaning: "Memotong / Penting", hiragana: "きる", romaji: "kiru" },
  "引": { onyomi: "イン (in)", kunyomi: "ひ・く (hi-ku)", mnemonic: "Tangan menarik tali pada busur panah (弓).", strokes: 4, level: "N4", meaning: "Menarik", hiragana: "ひく", romaji: "hiku" },
  "押": { onyomi: "オウ (ou)", kunyomi: "お・す (o-su)", mnemonic: "Tangan (扌) yang mendorong pintu hingga terbuka.", strokes: 8, level: "N4", meaning: "Mendorong / Menekan", hiragana: "おす", romaji: "osu" },
  "答": { onyomi: "トウ (tou)", kunyomi: "こた・える (kota-eru)", mnemonic: "Bambu (竹) surat balasan untuk menjawab pertanyaan.", strokes: 12, level: "N4", meaning: "Menjawab / Jawaban", hiragana: "こたえる", romaji: "kotaeru" },
  "住": { onyomi: "ジュウ (juu)", kunyomi: "す・む (su-mu)", mnemonic: "Seseorang (人) yang menetap tinggal di suatu tempat.", strokes: 7, level: "N4", meaning: "Tinggal / Huni", hiragana: "すむ", romaji: "sumu" },
  "待": { onyomi: "タイ (tai)", kunyomi: "ま・つ (ma-tsu)", mnemonic: "Berdiri di persimpangan jalan (彳) menunggu kuil (寺).", strokes: 9, level: "N4", meaning: "Menunggu", hiragana: "まつ", romaji: "matsu" },
  "持": { onyomi: "ジ (ji)", kunyomi: "mo・tsu (mo-tsu)", mnemonic: "Tangan (扌) yang memegang dan membawa benda di kuil (寺).", strokes: 9, level: "N4", meaning: "Membawa / Memiliki", hiragana: "もつ", romaji: "motsu" },
  "教": { onyomi: "キョウ (kyou)", kunyomi: "おし・える (oshi-eru)", mnemonic: "Seorang guru mengajari anak (子) membaca di kelas.", strokes: 11, level: "N4", meaning: "Mengajar / Agama", hiragana: "おしえる", romaji: "oshieru" },
  "習": { onyomi: "シュウ (shuu)", kunyomi: "なら・う (nara-u)", mnemonic: "Kepakan sayap burung muda (羽) belajar berlatih terbang.", strokes: 11, level: "N4", meaning: "Belajar / Berlatih", hiragana: "ならう", romaji: "narau" },

  // ==========================================
  // KATA SIFAT & KONDISI N4 LENGKAP
  // ==========================================
  "強": { onyomi: "キョウ (kyou)", kunyomi: "つよ・い (tsuyo-i)", mnemonic: "Busur panah (弓) yang mampu menembus cangkang serangga kuat.", strokes: 11, level: "N4", meaning: "Kuat / Paksaan", hiragana: "つよい", romaji: "tsuyoi" },
  "弱": { onyomi: "ジャク (jaku)", kunyomi: "よわ・い (yowa-i)", mnemonic: "Dua busur panah patah dengan bulu burung melambangkan lemah.", strokes: 10, level: "N4", meaning: "Lemah", hiragana: "よわい", romaji: "yowai" },
  "重": { onyomi: "ジュウ (juu)", kunyomi: "おも・い (omo-i)", mnemonic: "Tumpukan beban berat di atas roda kereta.", strokes: 9, level: "N4", meaning: "Berat / Utama", hiragana: "おもい", romaji: "omoi" },
  "軽": { onyomi: "ケイ (kei)", kunyomi: "かる・い (karu-i)", mnemonic: "Kendaraan roda (車) kecil yang sangat ringan dipindahkan.", strokes: 7, level: "N4", meaning: "Ringan", hiragana: "かるい", romaji: "karui" },
  "広": { onyomi: "コウ (kou)", kunyomi: "ひろ・い (hiro-i)", mnemonic: "Atap bangunan (广) yang membentang sangat luas.", strokes: 5, level: "N4", meaning: "Luas / Lebar", hiragana: "ひろい", romaji: "hiroi" },
  "狭": { onyomi: "キョウ (kyou)", kunyomi: "せま・い (sema-i)", mnemonic: "Anjing (犭) terdesak di lorong yang sangat sempit.", strokes: 9, level: "N4", meaning: "Sempit", hiragana: "せまい", romaji: "semai" },
  "明": { onyomi: "メイ (mei)", kunyomi: "あか・るい (aka-rui)", mnemonic: "Matahari (日) dan bulan (月) bersinar bersama terang benderang.", strokes: 8, level: "N4", meaning: "Terang / Cerah", hiragana: "あかるい", romaji: "akarui" },
  "暗": { onyomi: "アン (an)", kunyomi: "くら・い (kura-i)", mnemonic: "Matahari (日) tertutup suara berbisik di malam hari (音) sehingga gelap.", strokes: 13, level: "N4", meaning: "Gelap / Rahasia", hiragana: "くらい", romaji: "kurai" },
  "早": { onyomi: "ソウ (sou)", kunyomi: "はや・い (haya-i)", mnemonic: "Matahari (日) terbit cepat di atas rumput pagi hari.", strokes: 6, level: "N4", meaning: "Cepat / Awal", hiragana: "はやい", romaji: "hayai" },
  "速": { onyomi: "ソク (soku)", kunyomi: "はや・い (haya-i)", mnemonic: "Melangkah cepat (辶) melaju melintasi jalan raya.", strokes: 10, level: "N4", meaning: "Cepat Laju", hiragana: "はやい", romaji: "hayai" },
  "遅": { onyomi: "チ (chi)", kunyomi: "おそ・い (oso-i), おく・れる (oku-reru)", mnemonic: "Domba berjalan melangkah lambat (辶) sehingga terlambat.", strokes: 12, level: "N4", meaning: "Lambat / Terlambat", hiragana: "おそい", romaji: "osoi" },
  "痛": { onyomi: "ツウ (tsuu)", kunyomi: "いた・い (ita-i)", mnemonic: "Berada di ranjang sakit (疒) menahan rasa perih nyeri hebat.", strokes: 12, level: "N4", meaning: "Sakit / Nyeri", hiragana: "いたい", romaji: "itai" },
  "暑": { onyomi: "ショ (sho)", kunyomi: "あつ・い (atsu-i)", mnemonic: "Matahari (日) terik menyengat di atas tanah musim panas.", strokes: 12, level: "N4", meaning: "Panas (Cuaca)", hiragana: "あつい", romaji: "atsui" },
  "寒": { onyomi: "カン (kan)", kunyomi: "さむ・い (samu-i)", mnemonic: "Tiga titik es membeku di bawah atap rumah musim dingin.", strokes: 12, level: "N4", meaning: "Dingin (Cuaca)", hiragana: "さむい", romaji: "samui" },
  "冷": { onyomi: "レイ (rei)", kunyomi: "つめ・たい (tsume-tai)", mnemonic: "Titik es (冫) membekukan minuman hingga sangat dingin.", strokes: 7, level: "N4", meaning: "Dingin (Benda)", hiragana: "つめたい", romaji: "tsumetai" }
};

/**
 * Compound Kanji Custom Breakdowns for 2+ Kanji Words (Jukugo N4 & N5)
 */
export const compoundBreakdowns: Record<string, {
  level: "N5" | "N4";
  components: Array<{ char: string; meaning: string; onyomi?: string; kunyomi?: string }>;
  mnemonic?: string;
  exampleSentence?: { japanese: string; hiragana: string; translation: string };
}> = {
  // ==========================================
  // ISTILAH AKADEMIK & UJIAN N4
  // ==========================================
  "試験": {
    level: "N4",
    components: [
      { char: "試", meaning: "Mencoba / Menguji", onyomi: "シ (shi)", kunyomi: "tamesu" },
      { char: "験", meaning: "Ujian / Efek", onyomi: "ケン (ken)" }
    ],
    mnemonic: "Menguji (試) dan mengevaluasi hasil (験) kemampuan = Ujian / Tes.",
    exampleSentence: {
      japanese: "来週日本語の試験があります。",
      hiragana: "らいしゅう にほんご の しけん が あります。",
      translation: "Minggu depan ada ujian bahasa Jepang."
    }
  },
  "質問": {
    level: "N4",
    components: [
      { char: "質", meaning: "Kualitas / Sifat", onyomi: "シツ (shitsu)" },
      { char: "問", meaning: "Pertanyaan / Bertanya", onyomi: "モン (mon)", kunyomi: "todou" }
    ],
    mnemonic: "Mengajukan soalan (問) untuk mengetahui substansi (質) = Pertanyaan.",
    exampleSentence: {
      japanese: "先生に質問します。",
      hiragana: "せんせい に しつもん します。",
      translation: "Bertanya (mengajukan pertanyaan) kepada guru."
    }
  },
  "宿題": {
    level: "N4",
    components: [
      { char: "宿", meaning: "Menginap / Rumah", onyomi: "シュク (shuku)" },
      { char: "題", meaning: "Judul / Topik Soal", onyomi: "ダイ (dai)" }
    ],
    mnemonic: "Topik soal (題) yang dikerjakan di rumah penginapan (宿) = Pekerjaan Rumah (PR).",
    exampleSentence: {
      japanese: "毎日宿題をします。",
      hiragana: "まいにち しゅくだい を します。",
      translation: "Setiap hari mengerjakan PR."
    }
  },
  "問題": {
    level: "N4",
    components: [
      { char: "問", meaning: "Bertanya / Soal", onyomi: "モン (mon)" },
      { char: "題", meaning: "Judul / Topik", onyomi: "ダイ (dai)" }
    ],
    mnemonic: "Topik judul (題) yang memerlukan jawaban pertanyaan (問) = Masalah / Soal.",
    exampleSentence: {
      japanese: "この問題はとても難しいです。",
      hiragana: "この もんだい は とても むずかしい です。",
      translation: "Soal / masalah ini sangat sulit."
    }
  },
  "準備": {
    level: "N4",
    components: [
      { char: "準", meaning: "Standar / Menyesuaikan", onyomi: "ジュン (jun)" },
      { char: "備", meaning: "Menyiapkan / Perlengkapan", onyomi: "ビ (bi)" }
    ],
    mnemonic: "Menyiapkan perlengkapan (備) sesuai standar aturan (準) = Persiapan.",
    exampleSentence: {
      japanese: "旅行の準備をします。",
      hiragana: "りょこう の じゅんび を します。",
      translation: "Melakukan persiapan liburan."
    }
  },
  "注意": {
    level: "N4",
    components: [
      { char: "注", meaning: "Menuang / Memfokuskan", onyomi: "チュウ (chuu)" },
      { char: "意", meaning: "Niat / Perhatian / Hati", onyomi: "イ (i)" }
    ],
    mnemonic: "Menuangkan (注) seluruh perhatian hati (意) = Berhati-hati / Peringatan.",
    exampleSentence: {
      japanese: "車に注意してください。",
      hiragana: "くるま に ちゅうい してください。",
      translation: "Tolong berhati-hati terhadap mobil."
    }
  },
  "意味": {
    level: "N4",
    components: [
      { char: "意", meaning: "Niat / Pemikiran", onyomi: "イ (i)" },
      { char: "味", meaning: "Rasa / Daya Tarik", onyomi: "ミ (mi)", kunyomi: "aji" }
    ],
    mnemonic: "Sensasi rasa (味) dari suatu pemikiran niat (意) = Arti / Makna.",
    exampleSentence: {
      japanese: "この単語の意味を教えてください。",
      hiragana: "この たんご の いみ を おしえて ください。",
      translation: "Tolong ajari saya arti kata ini."
    }
  },
  "趣味": {
    level: "N4",
    components: [
      { char: "趣", meaning: "Daya Tarik / Keindahan", onyomi: "シュ (shu)" },
      { char: "味", meaning: "Rasa / Kenikmatan", onyomi: "ミ (mi)" }
    ],
    mnemonic: "Kenikmatan rasa (味) yang memiliki daya tarik khusus (趣) = Hobi.",
    exampleSentence: {
      japanese: "私の趣味は料理です。",
      hiragana: "わたし の しゅみ は りょうり です。",
      translation: "Hobi saya adalah memasak."
    }
  },
  "運動": {
    level: "N4",
    components: [
      { char: "運", meaning: "Mengangkut / Nasib", onyomi: "ウン (un)" },
      { char: "動", meaning: "Bergerak", onyomi: "ドウ (dou)" }
    ],
    mnemonic: "Menggerakkan (動) tubuh dan mengangkut energi (運) = Olahraga.",
    exampleSentence: {
      japanese: "毎朝公園で運動します。",
      hiragana: "まいあさ こうえん で うんどう します。",
      translation: "Setiap pagi berolahraga di taman."
    }
  },
  "運転": {
    level: "N4",
    components: [
      { char: "運", meaning: "Mengangkut", onyomi: "ウン (un)" },
      { char: "転", meaning: "Berputar / Mengayuh", onyomi: "テン (ten)" }
    ],
    mnemonic: "Memutar roda (転) untuk mengangkut penumpang (運) = Mengemudi / Menyetir.",
    exampleSentence: {
      japanese: "父は車の運転が得意です。",
      hiragana: "ちち は くるま の うんてん が とくい です。",
      translation: "Ayah jago menyetir mobil."
    }
  },
  "便利": {
    level: "N4",
    components: [
      { char: "便", meaning: "Kemudahan / Berita", onyomi: "ベン (ben)" },
      { char: "利", meaning: "Keuntungan / Manfaat", onyomi: "リ (ri)" }
    ],
    mnemonic: "Memberikan kemudahan (便) dan manfaat keuntungan (利) = Praktis / Nyaman.",
    exampleSentence: {
      japanese: "このアプリはとても便利です。",
      hiragana: "この アプリ は とても べんり です。",
      translation: "Aplikasi ini sangat praktis."
    }
  },
  "料理": {
    level: "N4",
    components: [
      { char: "料", meaning: "Bahan / Biaya", onyomi: "リョウ (ryou)" },
      { char: "理", meaning: "Pengolahan / Prinsip", onyomi: "リ (ri)" }
    ],
    mnemonic: "Mengolah (理) bahan-bahan mentah (料) menjadi hidangan lezat = Masakan / Memasak.",
    exampleSentence: {
      japanese: "母の料理はとても美味しいです。",
      hiragana: "はは の りょうり は とても おいしい です。",
      translation: "Masakan ibu sangat lezat."
    }
  },

  // ==========================================
  // HARI DALAM SEMINGGU (N5)
  // ==========================================
  "月曜日": {
    level: "N5",
    components: [
      { char: "月", meaning: "Bulan", onyomi: "ゲツ (getsu)", kunyomi: "つき (tsuki)" },
      { char: "曜", meaning: "Hari dalam seminggu", onyomi: "ヨウ (you)" },
      { char: "日", meaning: "Hari / Matahari", onyomi: "ビ (bi)", kunyomi: "ひ (hi)" }
    ],
    mnemonic: "Hari (曜日) yang didedikasikan untuk Bulan (月) = Hari Senin.",
    exampleSentence: {
      japanese: "月曜日に試験があります。",
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

  // FASILITAS & TRANSPORTASI
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
      japanese: "毎日電車で学校に行きます。",
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
      hiragana: "かぜ を ひいた ので びょういん へ いきます。",
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

  // List of known N4 IDs from kanjiData
  const n4Ids = new Set([
    "b8", "b10", "b11", "b13", "c6", "c9", "c13", "d3", "d11", "d14", "d20", 
    "f1", "f2", "f7", "f12", "g6", "g7", "g15", "h28", "j5", "j9", "k9", "k20", 
    "s13", "s28", "s30", "t12", "t16", "t21", "u4", "u5", "y11", "y12", "y15"
  ]);

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
    let level: "N5" | "N4" = n4Ids.has(item.id) ? "N4" : "N5";
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
