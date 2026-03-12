import { useState } from "react";
import { motion } from "motion/react";
import { Play, RefreshCw } from "lucide-react";

interface AnimationDemo {
  label: string;
  desc: string;
  code: string;
  token: string;
}

const easings: AnimationDemo[] = [
  {
    label: "ease-out",
    desc: "快速に動き始め、ゆっくり止まる。自然でフレンドリーな動き。",
    code: 'transition={{ duration: 0.4, ease: "easeOut" }}',
    token: "easeOut",
  },
  {
    label: "ease-in",
    desc: "ゆっくり動き始め、速く終わる。去っていくような動き。",
    code: 'transition={{ duration: 0.4, ease: "easeIn" }}',
    token: "easeIn",
  },
  {
    label: "ease-in-out",
    desc: "ゆっくり始まり、ゆっくり終わる。丁寧でスムーズな動き。",
    code: 'transition={{ duration: 0.4, ease: "easeInOut" }}',
    token: "easeInOut",
  },
  {
    label: "spring",
    desc: "物理的なバネのような自然な動き。インタラクティブなUIに最適。",
    code: 'transition={{ type: "spring", stiffness: 300, damping: 20 }}',
    token: "spring",
  },
];

const durations = [
  { label: "Instant", value: 0.1, usage: "マイクロインタラクション（ホバー）" },
  { label: "Fast", value: 0.2, usage: "ボタン、トグル、チェックボックス" },
  { label: "Normal", value: 0.3, usage: "モーダル、ドロップダウン" },
  { label: "Slow", value: 0.5, usage: "ページトランジション" },
  { label: "Deliberate", value: 0.8, usage: "オンボーディング、ヒーローアニメーション" },
];

const animationPatterns = [
  {
    label: "フェードイン",
    desc: "透明から不透明へのフェード",
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4 },
  },
  {
    label: "スライドアップ",
    desc: "下から上へスライド",
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" },
  },
  {
    label: "スケールイン",
    desc: "拡大しながら表示",
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: "easeOut" },
  },
  {
    label: "スプリング",
    desc: "バネのような自然な動き",
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
];

function EasingDemo({ demo }: { demo: AnimationDemo }) {
  const [key, setKey] = useState(0);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setKey((k) => k + 1);
    setPlaying(true);
    const d = demo.token === "spring" ? 800 : 600;
    setTimeout(() => setPlaying(false), d);
  };

  const transition =
    demo.token === "spring"
      ? { type: "spring" as const, stiffness: 300, damping: 20 }
      : { duration: 0.4, ease: demo.token as "easeOut" | "easeIn" | "easeInOut" };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-[13px] font-semibold text-gray-900">{demo.label}</div>
          <div className="text-[11px] text-gray-500 mt-0.5">{demo.desc}</div>
        </div>
        <button
          onClick={handlePlay}
          className="flex items-center gap-1.5 text-[11px] bg-violet-50 text-violet-600 rounded-lg px-3 py-1.5 hover:bg-violet-100 transition-colors"
        >
          <Play className="w-3 h-3" />
          再生
        </button>
      </div>
      <div className="bg-gray-50 rounded-xl h-14 relative overflow-hidden flex items-center px-4 mb-3">
        <motion.div
          key={key}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: playing || key > 0 ? 0 : -20, opacity: playing || key > 0 ? 1 : 0 }}
          transition={transition}
          className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl shadow-md"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-gray-300">→</div>
      </div>
      <div className="bg-gray-900 rounded-lg px-3 py-2">
        <code className="text-[10px] text-green-400 font-mono">{demo.code}</code>
      </div>
    </div>
  );
}

function PatternDemo({ pattern }: { pattern: typeof animationPatterns[0] }) {
  const [key, setKey] = useState(0);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[13px] font-semibold text-gray-900">{pattern.label}</div>
          <div className="text-[11px] text-gray-500">{pattern.desc}</div>
        </div>
        <button
          onClick={() => setKey((k) => k + 1)}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>
      <div className="bg-gray-50 rounded-xl h-20 flex items-center justify-center">
        <motion.div
          key={key}
          initial={pattern.initial}
          animate={pattern.animate}
          transition={pattern.transition}
          className="w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
}

export function MotionPage() {
  const [loopKey, setLoopKey] = useState(0);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-600 text-[11px] rounded-full px-3 py-1 mb-4">
          モーションシステム
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">モーション</h1>
        <p className="text-[14px] text-gray-500 max-w-xl leading-relaxed">
          Motion (Framer Motion)を使用したアニメーションシステム。
          適切なモーションはユーザー体験を向上させ、インターフェースに生命感を与えます。
        </p>
      </div>

      {/* Principles */}
      <section className="mb-12">
        <h2 className="text-[16px] font-semibold text-gray-900 mb-6">モーション原則</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "目的性", desc: "アニメーションには常に目的を持たせる。装飾だけのアニメーションは避ける。", color: "bg-violet-50 text-violet-600" },
            { label: "自然さ", desc: "物理の法則に従った自然な動きを基本とする。", color: "bg-blue-50 text-blue-600" },
            { label: "簡潔さ", desc: "短く、素早いアニメーションを基本とする（200-400ms）。", color: "bg-green-50 text-green-600" },
            { label: "一貫性", desc: "同じタイプのインタラクションには同じアニメーションを使用する。", color: "bg-orange-50 text-orange-600" },
          ].map((p) => (
            <div key={p.label} className="bg-white rounded-2xl p-5 border border-gray-100">
              <div className={`inline-flex text-[11px] font-semibold rounded-lg px-2.5 py-1 mb-3 ${p.color}`}>
                {p.label}
              </div>
              <div className="text-[12px] text-gray-500 leading-relaxed">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Duration Scale */}
      <section className="mb-12">
        <h2 className="text-[16px] font-semibold text-gray-900 mb-6">デュレーションスケール</h2>
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left py-3 px-5 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">名前</th>
                <th className="text-left py-3 px-4 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">時間</th>
                <th className="text-left py-3 px-4 text-[11px] font-semibold text-gray-500 uppercase tracking-wide w-full">ビジュアル</th>
                <th className="text-left py-3 px-4 text-[11px] font-semibold text-gray-500 uppercase tracking-wide hidden sm:table-cell">用途</th>
              </tr>
            </thead>
            <tbody>
              {durations.map((d) => (
                <tr key={d.label} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="py-3 px-5 text-[12px] font-semibold text-gray-700">{d.label}</td>
                  <td className="py-3 px-4">
                    <span className="font-mono text-[12px] text-violet-600">{d.value * 1000}ms</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="bg-gray-100 rounded-full h-1.5 w-48 overflow-hidden">
                      <div
                        className="h-full bg-violet-400 rounded-full"
                        style={{ width: `${(d.value / 0.8) * 100}%` }}
                      />
                    </div>
                  </td>
                  <td className="py-3 px-4 text-[12px] text-gray-500 hidden sm:table-cell">{d.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Easing Functions */}
      <section className="mb-12">
        <h2 className="text-[16px] font-semibold text-gray-900 mb-6">イージング関数</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {easings.map((demo) => (
            <EasingDemo key={demo.label} demo={demo} />
          ))}
        </div>
      </section>

      {/* Animation Patterns */}
      <section className="mb-12">
        <h2 className="text-[16px] font-semibold text-gray-900 mb-2">アニメーションパターン</h2>
        <p className="text-[12px] text-gray-500 mb-6">
          更新ボタンをクリックしてアニメーションをプレビュー
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {animationPatterns.map((pattern) => (
            <PatternDemo key={pattern.label} pattern={pattern} />
          ))}
        </div>
      </section>

      {/* Stagger Animation */}
      <section className="mb-12">
        <h2 className="text-[16px] font-semibold text-gray-900 mb-2">スタガーアニメーション</h2>
        <p className="text-[12px] text-gray-500 mb-6">
          要素を順次表示するアニメーション
        </p>
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setLoopKey((k) => k + 1)}
              className="flex items-center gap-1.5 text-[11px] bg-violet-50 text-violet-600 rounded-lg px-3 py-1.5 hover:bg-violet-100 transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              リプレイ
            </button>
          </div>
          <div className="flex gap-3 flex-wrap">
            {["デザイン", "システム", "コンポーネント", "ガイドライン", "アクセシビリティ"].map((word, i) => (
              <motion.div
                key={`${loopKey}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: i * 0.1,
                }}
                className="bg-violet-50 text-violet-700 rounded-xl px-4 py-2 text-[13px] font-medium"
              >
                {word}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Do / Don't */}
      <section>
        <h2 className="text-[16px] font-semibold text-gray-900 mb-6">Do / Don't</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">✓</span>
              </div>
              <span className="text-[13px] font-semibold text-green-800">Do（推奨）</span>
            </div>
            <ul className="space-y-2">
              {[
                "UIの変化を明確に伝えるアニメーションを使用",
                "200〜400msの短いアニメーション時間を基本とする",
                "ease-outを入場アニメーションに使用",
                "reduced-motionに対応したフォールバックを提供",
                "アニメーションは一方向への移動を基本とする",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[12px] text-green-700">
                  <span className="flex-shrink-0 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">✗</span>
              </div>
              <span className="text-[13px] font-semibold text-red-800">Don't（非推奨）</span>
            </div>
            <ul className="space-y-2">
              {[
                "1秒以上の長すぎるアニメーション時間を使用しない",
                "目的のないアニメーションを追加しない",
                "同一画面に多数のアニメーションを混在させない",
                "エラー表示に派手なアニメーションを使わない",
                "ループするアニメーションを重要なUIに使わない",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[12px] text-red-700">
                  <span className="flex-shrink-0 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
