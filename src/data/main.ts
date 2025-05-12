export const ranks = [
  "F",
  "E",
  "D",
  "C",
  "B",
  "A",
  "S1",
  "S2",
  "S3",
  "S4",
  "S5",
  "S6",
  "S7",
  "S8",
  "S9",
]

type Hero = {
  fullName: string;
  name: string;
};

type HeroCategory = Hero[];

type HeroData = {
  attacker: HeroCategory;
  gunner: HeroCategory;
  tank: HeroCategory;
  sprinter: HeroCategory;
}

export const hero: HeroData = {
  attacker: [
    {
      fullName: "双挽 乃保",
      name: "ノホ"
    },
    {
      fullName: "桜華 忠臣",
      name: "忠臣"
    },
    {
      fullName: "マルコス'55",
      name: "マルコス",
    },
    {
      fullName: "ソル=バッドガイ",
      name: "ソル",
    },
    {
      fullName: "リュウ",
      name: "リュウ"
    },
    {
      fullName: "マリア=S=レオンブルク",
      name: "マリア"
    },
    {
      fullName: "アダム=ユーリエフ",
      name: "アダム"
    },
    {
      fullName: "レム",
      name: "レム"
    },
    {
      fullName: "カイ=キスク",
      name: "カイ"
    },
    {
      fullName: "ポロロッチョ",
      name: "ポロ"
    },
    {
      fullName: "リヴァイ",
      name: "リヴァイ"
    },
    {
      fullName: "デビルミント鬼龍 デルミン",
      name: "デルミン"
    },
    {
      fullName: "セイバーオルタ",
      name: "オルタ"
    },
    {
      fullName: "ルルカ",
      name: "ルルカ"
    },
    {
      fullName: "アイズ・ヴァレンシュタイン",
      name: "アイズ"
    },
    {
      fullName: "狐ケ咲 甘色",
      name: "甘色"
    },
    {
      fullName: "ノクティス",
      name: "ノクト"
    },
    {
      fullName: "イグニス=ウィル=ウィスプ",
      name: "イグニス"
    },
    {
      fullName: "キリト",
      name: "キリト"
    },
    {
      fullName: "ステリア・ララ・シルワ",
      name: "ステリア"
    },
    {
      fullName: "2B",
      name: "2B"
    },
    {
      fullName: "リムル=テンペスト",
      name: "リムル"
    },
    {
      fullName: "御坂美琴",
      name: "御坂美琴"
    },
    {
      fullName: "クー・シー",
      name: "クー・シー",
    },
    {
      fullName: "デンジ",
      name: "デンジ"
    },
    {
      fullName: "ターニャ・デグレチャフ",
      name: "ターニャ"
    },
    {
      fullName: "コラプス",
      name: "コラプス"
    },
    {
      fullName: "ボンドルド",
      name: "ボンドルド"
    },
    {
      fullName: "ゴン=フリークス",
      name: "ゴン"
    }
  ],
  gunner: [
    {
      fullName: "リリカ",
      name: "リリカ"
    },
    {
      fullName: "ルチアーノ",
      name: "ルチアーノ"
    },
    {
      fullName: "深川まとい",
      name: "まとい"
    },
    {
      fullName: "ディズィー",
      name: "ディズィー"
    },
    {
      fullName: "13 †サーティーン†",
      name: "13"
    },
    {
      fullName: "エミリア",
      name: "エミリア"
    },
    {
      fullName: "メグメグ",
      name: "メグメグ"
    },
    {
      fullName: "鏡音リン",
      name: "リン"
    },
    {
      fullName: "イスタカ",
      name: "イスタカ"
    },
    {
      fullName: "ソーン",
      name: "ソーン"
    },
    {
      fullName: "猫宮 ひなた",
      name: "猫宮"
    },
    {
      fullName: "岡部 倫太郎",
      name: "オカリン"
    },
    {
      fullName: "ギルガメッシュ",
      name: "ギル"
    },
    {
      fullName: "ニーズヘッグ",
      name: "ニーズヘッグ"
    },
    {
      fullName: "芥川 龍之介",
      name: "芥川"
    },
    {
      fullName: "ゲームバズーカガール",
      name: "GBガール"
    },
    {
      fullName: "アインズ・ウール・ゴウン",
      name: "アインズ"
    },
    {
      fullName: "糸廻 輪廻",
      name: "輪廻"
    },
    {
      fullName: "Bugdoll",
      name: "バグド"
    },
    {
      fullName: "アクセラレータ",
      name: "アクセラ",
    },
    {
      fullName: "天空王 ぶれいずどらごん",
      name: "ぶれどら"
    },
    {
      fullName: "ロキシー・ミグルディア",
      name: "ロキシー"
    },
    {
      fullName: "ロックマン.EXE ＆ 光熱斗",
      name: "ロックマン"
    },
    {
      fullName: "シノン",
      name: "シノン"
    },
    {
      fullName: "みりぽゆ",
      name: "みりぽゆ"
    }
  ],
  tank: [
    {
      fullName: "ジャスティス・ハンコック",
      name: "ジャスティス"
    },
    {
      fullName: "ジャンヌ・ダルク",
      name: "ジャンヌ"
    },
    {
      fullName: "グスタフ ハイドリヒ",
      name: "グスタフ"
    },
    {
      fullName: "ヴィオレッタ ノワール",
      name: "ヴィオレッタ"
    },
    {
      fullName: "鏡音レン",
      name: "レン"
    },
    {
      fullName: "モノクマ",
      name: "モノクマ"
    },
    {
      fullName: "めぐみん",
      name: "めぐみん"
    },
    {
      fullName: "トマス",
      name: "トマス"
    },
    {
      fullName: "佐藤四郎兵衛忠信",
      name: "忠信"
    },
    {
      fullName: "ライザリン・シュタウト",
      name: "ライザ"
    },
    {
      fullName: "青春 アリス",
      name: "アリス"
    },
    {
      fullName: "ラヴィ・シュシュマルシュ",
      name: "ラヴィ"
    },
    {
      fullName: "アミスター=バランディン",
      name: "アミスター"
    },
    {
      fullName: "鬼ヶ式 うら",
      name: "うら"
    }
  ],
  sprinter: [
    {
      fullName: "十文字アタリ",
      name: "アタリ"
    },
    {
      fullName: "Voidoll",
      name: "ボイド"
    },
    {
      fullName: "ニコラ テスラ",
      name: "テスラ"
    },
    {
      fullName: "初音ミク",
      name: "ミク"
    },
    {
      fullName: "コクリコット・ブランシュ",
      name: "コクリコ"
    },
    {
      fullName: "春麗",
      name: "春麗"
    },
    {
      fullName: "かけだし勇者",
      name: "勇者"
    },
    {
      fullName: "ザック＆レイチェル",
      name: "ザクレイ"
    },
    {
      fullName: "鬼龍院 きらら",
      name: "きらら"
    },
    {
      fullName: "アクア",
      name: "アクア"
    },
    {
      fullName: "零夜",
      name: "零夜"
    },
    {
      fullName: "ピエール77世",
      name: "ピエール"
    },
    {
      fullName: "中島敦",
      name: "敦"
    },
    {
      fullName: "ジョーカー",
      name: "ジョーカー"
    },
    {
      fullName: "アスナ",
      name: "アスナ"
    },
    {
      fullName: "アル・ダハブ=アルカティア",
      name: "アル"
    },
    {
      fullName: "某 <なにがし>",
      name: "某"
    },
    {
      fullName: "パワー",
      name: "パワー"
    },
    {
      fullName: "キルア=ゾルディック",
      name: "キリア"
    },
    {
      fullName: "チーちゃん",
      name: "チーちゃん"
    }
  ]
}