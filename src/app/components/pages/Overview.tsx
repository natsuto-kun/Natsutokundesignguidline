import { Link } from "react-router";
import {
  Palette,
  Type,
  Ruler,
  Layers,
  LayoutGrid,
  Zap,
  Grid3x3,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const sections = [
  {
    icon: Palette,
    label: "カラー",
    desc: "ブランドカラー、セマンティックカラー、ニュートラルカラーのパレット",
    path: "/colors",
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    iconColor: "text-pink-500",
  },
  {
    icon: Type,
    label: "タイポグラフィ",
    desc: "フォントファミリー、サイズ、ウェイト、行間のガイドライン",
    path: "/typography",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: Ruler,
    label: "スペーシング",
    desc: "余白、パディング、マージンの一貫したスペーシングシステム",
    path: "/spacing",
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    icon: Layers,
    label: "コンポーネント",
    desc: "ボタン、フォーム、カード、モーダルなどのUIコンポーネント",
    path: "/components",
    color: "from-violet-500 to-purple-500",
    bg: "bg-violet-50",
    iconColor: "text-violet-500",
  },
  {
    icon: LayoutGrid,
    label: "アイコン",
    desc: "一貫性のあるアイコンセットと使用ガイドライン",
    path: "/icons",
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    icon: Zap,
    label: "モーション",
    desc: "アニメーション、トランジション、インタラクションのパターン",
    path: "/motion",
    color: "from-yellow-500 to-orange-500",
    bg: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    icon: Grid3x3,
    label: "グリッド",
    desc: "レスポンシブグリッドシステムとレイアウトガイドライン",
    path: "/grid",
    color: "from-teal-500 to-cyan-500",
    bg: "bg-teal-50",
    iconColor: "text-teal-500",
  },
];

const principles = [
  { label: "一貫性", desc: "すべての要素が統一されたビジュアル言語を持つ" },
  { label: "アクセシビリティ", desc: "すべてのユーザーが使いやすいデザイン" },
  { label: "スケーラビリティ", desc: "プロジェクトの成長に合わせて拡張可能" },
  { label: "効率性", desc: "開発・デザインの速度を最大化する" },
];

export function Overview() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-100 text-violet-600 text-[12px] rounded-full px-4 py-1.5 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Design System v1.0.0</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
          デザインシステム<br />
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            ドキュメント & ガイドライン
          </span>
        </h1>
        <p className="text-[16px] text-gray-500 max-w-2xl leading-relaxed">
          このデザインシステムは、一貫性のある優れたユーザー体験を提供するための
          コンポーネント、パターン、ガイドラインの集合体です。
          デザイナーと開発者が共通の言語で効率的に協業するための基盤となります。
        </p>
      </div>

      {/* Principles */}
      <div className="mb-16">
        <h2 className="text-[18px] font-semibold text-gray-900 mb-6">デザイン原則</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-violet-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[13px] font-semibold text-gray-900 mb-1">{p.label}</div>
                  <div className="text-[12px] text-gray-500 leading-relaxed">{p.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="mb-16">
        <h2 className="text-[18px] font-semibold text-gray-900 mb-6">セクション一覧</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.path}
                to={section.path}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-50 transition-all duration-200"
              >
                <div className={`w-10 h-10 ${section.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${section.iconColor}`} />
                </div>
                <div className="text-[15px] font-semibold text-gray-900 mb-1.5 group-hover:text-violet-700 transition-colors">
                  {section.label}
                </div>
                <div className="text-[12px] text-gray-500 leading-relaxed mb-4">{section.desc}</div>
                <div className="flex items-center gap-1 text-[12px] text-violet-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>詳細を見る</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-3xl p-8 text-white">
        <h2 className="text-[20px] font-semibold mb-3">クイックスタート</h2>
        <p className="text-violet-200 text-[13px] leading-relaxed mb-6 max-w-lg">
          デザインシステムを使い始めるには、まずカラーパレットとタイポグラフィのガイドラインを確認することをお勧めします。
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/colors"
            className="inline-flex items-center gap-2 bg-white text-violet-700 rounded-xl px-4 py-2.5 text-[13px] font-medium hover:bg-violet-50 transition-colors"
          >
            <Palette className="w-4 h-4" />
            カラーを見る
          </Link>
          <Link
            to="/components"
            className="inline-flex items-center gap-2 bg-violet-500/30 text-white border border-violet-400/40 rounded-xl px-4 py-2.5 text-[13px] font-medium hover:bg-violet-500/40 transition-colors"
          >
            <Layers className="w-4 h-4" />
            コンポーネントを見る
          </Link>
        </div>
      </div>
    </div>
  );
}
