import { Copy, Check } from "lucide-react";
import { useState } from "react";

const fontScale = [
  { name: "xs", size: "12px", rem: "0.75rem", lineHeight: "1rem", usage: "注釈、補足テキスト" },
  { name: "sm", size: "14px", rem: "0.875rem", lineHeight: "1.25rem", usage: "ラベル、キャプション" },
  { name: "base", size: "16px", rem: "1rem", lineHeight: "1.5rem", usage: "本文テキスト（基準）" },
  { name: "lg", size: "18px", rem: "1.125rem", lineHeight: "1.75rem", usage: "リードテキスト" },
  { name: "xl", size: "20px", rem: "1.25rem", lineHeight: "1.75rem", usage: "小見出し (h4)" },
  { name: "2xl", size: "24px", rem: "1.5rem", lineHeight: "2rem", usage: "見出し (h3)" },
  { name: "3xl", size: "30px", rem: "1.875rem", lineHeight: "2.25rem", usage: "大見出し (h2)" },
  { name: "4xl", size: "36px", rem: "2.25rem", lineHeight: "2.5rem", usage: "ページタイトル (h1)" },
  { name: "5xl", size: "48px", rem: "3rem", lineHeight: "1", usage: "ヒーロータイトル" },
  { name: "6xl", size: "60px", rem: "3.75rem", lineHeight: "1", usage: "特大ディスプレイ" },
];

const weights = [
  { name: "Regular", value: "400", class: "font-normal", sample: "The quick brown fox" },
  { name: "Medium", value: "500", class: "font-medium", sample: "The quick brown fox" },
  { name: "Semibold", value: "600", class: "font-semibold", sample: "The quick brown fox" },
  { name: "Bold", value: "700", class: "font-bold", sample: "The quick brown fox" },
  { name: "Extrabold", value: "800", class: "font-extrabold", sample: "The quick brown fox" },
];

const specimens = [
  {
    label: "Display / Hero",
    text: "デザインの力で\n世界を変える",
    style: "text-5xl font-bold leading-tight",
    desc: "ヒーローセクション・ランディングページに使用",
  },
  {
    label: "Heading 1",
    text: "ユーザー体験を最優先に考える",
    style: "text-4xl font-bold",
    desc: "ページのメインタイトルに使用",
  },
  {
    label: "Heading 2",
    text: "一貫したビジュアル言語の構築",
    style: "text-3xl font-semibold",
    desc: "セクションタイトルに使用",
  },
  {
    label: "Heading 3",
    text: "コンポーネント設計のベストプラクティス",
    style: "text-2xl font-semibold",
    desc: "サブセクションタイトルに使用",
  },
  {
    label: "Heading 4",
    text: "アクセシビリティを考慮したデザイン",
    style: "text-xl font-medium",
    desc: "カードタイトル・小見出しに使用",
  },
  {
    label: "Body Large",
    text: "このデザインシステムは、チーム全体が一貫したUIを素早く構築できるよう設計されています。",
    style: "text-lg",
    desc: "リードテキスト・概要文に使用",
  },
  {
    label: "Body",
    text: "デザインシステムは、組織全体でのデザインと開発の効率を高め、製品の一貫性を保証するための共通の基盤です。適切に管理されたデザインシステムは、チームの生産性を大幅に向上させます。",
    style: "text-base",
    desc: "一般的な本文テキストに使用",
  },
  {
    label: "Caption",
    text: "最終更新：2026年3月12日 · バージョン 1.0.0",
    style: "text-sm text-gray-500",
    desc: "補足情報・メタデータに使用",
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="p-1 rounded text-gray-300 hover:text-gray-600 transition-colors"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
}

export function Typography() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-[11px] rounded-full px-3 py-1 mb-4">
          タイポグラフィシステム
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">タイポグラフィ</h1>
        <p className="text-[14px] text-gray-500 max-w-xl leading-relaxed">
          読みやすく、階層的に整理されたタイポグラフィシステムです。
          フォントサイズ、ウェイト、行間の一貫した使用により、優れた可読性を実現します。
        </p>
      </div>

      {/* Font Family */}
      <section className="mb-12">
        <h2 className="text-[16px] font-semibold text-gray-900 mb-6">フォントファミリー</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <div className="text-[11px] text-gray-400 font-mono mb-3">Primary</div>
            <div style={{ fontFamily: "system-ui, -apple-system, sans-serif" }} className="text-[28px] text-gray-900 mb-3">
              Aa Bb Cc
            </div>
            <div className="text-[12px] text-gray-500 mb-2">System UI / Sans-serif</div>
            <div className="font-mono text-[11px] text-violet-500 bg-violet-50 rounded-lg px-3 py-1.5 inline-block">
              font-family: system-ui
            </div>
            <p className="text-[11px] text-gray-400 mt-3 leading-relaxed">
              見出し・本文・UIテキストに使用
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <div className="text-[11px] text-gray-400 font-mono mb-3">Monospace</div>
            <div style={{ fontFamily: "monospace" }} className="text-[28px] text-gray-900 mb-3">
              Aa Bb Cc
            </div>
            <div className="text-[12px] text-gray-500 mb-2">Monospace</div>
            <div className="font-mono text-[11px] text-violet-500 bg-violet-50 rounded-lg px-3 py-1.5 inline-block">
              font-family: monospace
            </div>
            <p className="text-[11px] text-gray-400 mt-3 leading-relaxed">
              コード・デザイントークンに使用
            </p>
          </div>
        </div>
      </section>

      {/* Type Scale */}
      <section className="mb-12">
        <h2 className="text-[16px] font-semibold text-gray-900 mb-6">タイプスケール</h2>
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left py-3 px-5 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">クラス</th>
                  <th className="text-left py-3 px-4 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">サイズ</th>
                  <th className="text-left py-3 px-4 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">行間</th>
                  <th className="text-left py-3 px-4 text-[11px] font-semibold text-gray-500 uppercase tracking-wide hidden sm:table-cell">用途</th>
                  <th className="py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {fontScale.map((item) => (
                  <tr key={item.name} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group">
                    <td className="py-3 px-5">
                      <span className="font-mono text-[12px] text-violet-600">text-{item.name}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-[12px] text-gray-700">{item.size}</span>
                      <span className="text-[10px] text-gray-400 ml-1">({item.rem})</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-mono text-[12px] text-gray-600">{item.lineHeight}</span>
                    </td>
                    <td className="py-3 px-4 text-[12px] text-gray-500 hidden sm:table-cell">{item.usage}</td>
                    <td className="py-3 px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <CopyButton text={`text-${item.name}`} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Font Weights */}
      <section className="mb-12">
        <h2 className="text-[16px] font-semibold text-gray-900 mb-6">フォントウェイト</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {weights.map((w) => (
            <div key={w.name} className="bg-white rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] text-gray-400">{w.name}</span>
                <span className="font-mono text-[11px] text-violet-500 bg-violet-50 rounded px-2 py-0.5">{w.class}</span>
              </div>
              <div className="text-[22px] text-gray-900 mb-2" style={{ fontWeight: w.value }}>
                {w.sample}
              </div>
              <div className="text-[11px] text-gray-400">weight: {w.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Type Specimens */}
      <section className="mb-12">
        <h2 className="text-[16px] font-semibold text-gray-900 mb-6">タイポグラフィスケール プレビュー</h2>
        <div className="space-y-4">
          {specimens.map((spec, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono text-gray-400">{spec.label}</span>
                <span className="text-[11px] text-gray-400 hidden sm:block">{spec.desc}</span>
              </div>
              <div className={`text-gray-900 ${spec.style} whitespace-pre-line`}>
                {spec.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Line Heights */}
      <section className="mb-12">
        <h2 className="text-[16px] font-semibold text-gray-900 mb-6">行間ガイドライン</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Tight", value: "1.25", class: "leading-tight", usage: "見出し、大きなディスプレイテキスト", sample: "デザインシステムで\n一貫性を実現する" },
            { label: "Normal", value: "1.5", class: "leading-normal", usage: "UIラベル、短い本文", sample: "デザインシステムで\n一貫性を実現する" },
            { label: "Relaxed", value: "1.75", class: "leading-relaxed", usage: "長い本文、読みやすさが重要な場合", sample: "デザインシステムで\n一貫性を実現する" },
          ].map((lh) => (
            <div key={lh.label} className="bg-white rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[12px] font-semibold text-gray-700">{lh.label}</span>
                <span className="font-mono text-[11px] text-violet-500 bg-violet-50 rounded px-2 py-0.5">{lh.class}</span>
              </div>
              <div className={`text-[15px] text-gray-800 whitespace-pre-line mb-3 ${lh.class}`}>{lh.sample}</div>
              <div className="text-[11px] text-gray-400">line-height: {lh.value}</div>
              <div className="text-[11px] text-gray-400 mt-1">{lh.usage}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
