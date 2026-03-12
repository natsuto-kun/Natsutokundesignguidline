import { useState } from "react";

const breakpoints = [
  { name: "xs", size: "< 640px", prefix: "（デフォルト）", device: "スマートフォン", cols: 4, margin: "16px", gutter: "8px" },
  { name: "sm", size: "640px+", prefix: "sm:", device: "大きいスマートフォン", cols: 4, margin: "20px", gutter: "16px" },
  { name: "md", size: "768px+", prefix: "md:", device: "タブレット", cols: 8, margin: "24px", gutter: "16px" },
  { name: "lg", size: "1024px+", prefix: "lg:", device: "デスクトップ", cols: 12, margin: "32px", gutter: "24px" },
  { name: "xl", size: "1280px+", prefix: "xl:", device: "大画面", cols: 12, margin: "40px", gutter: "24px" },
  { name: "2xl", size: "1536px+", prefix: "2xl:", device: "超大画面", cols: 12, margin: "48px", gutter: "32px" },
];

const layoutExamples = [
  {
    label: "1カラム（モバイル）",
    code: "grid-cols-1",
    cols: 1,
  },
  {
    label: "2カラム",
    code: "grid-cols-2",
    cols: 2,
  },
  {
    label: "3カラム",
    code: "grid-cols-3",
    cols: 3,
  },
  {
    label: "4カラム",
    code: "grid-cols-4",
    cols: 4,
  },
];

const containerSizes = [
  { name: "sm", maxWidth: "640px", usage: "ナローコンテンツ、フォーム" },
  { name: "md", maxWidth: "768px", usage: "ブログ記事、読み物" },
  { name: "lg", maxWidth: "1024px", usage: "一般的なコンテンツ" },
  { name: "xl", maxWidth: "1280px", usage: "ダッシュボード、アプリ" },
  { name: "2xl", maxWidth: "1536px", usage: "全幅レイアウト" },
];

const colors = [
  "bg-violet-100 border-violet-200",
  "bg-blue-100 border-blue-200",
  "bg-green-100 border-green-200",
  "bg-orange-100 border-orange-200",
  "bg-pink-100 border-pink-200",
  "bg-teal-100 border-teal-200",
  "bg-indigo-100 border-indigo-200",
  "bg-amber-100 border-amber-200",
  "bg-red-100 border-red-200",
  "bg-cyan-100 border-cyan-200",
  "bg-emerald-100 border-emerald-200",
  "bg-fuchsia-100 border-fuchsia-200",
];

export function GridPage() {
  const [selectedCols, setSelectedCols] = useState(3);
  const [selectedGap, setSelectedGap] = useState("gap-4");

  const gaps = ["gap-1", "gap-2", "gap-4", "gap-6", "gap-8"];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 text-[11px] rounded-full px-3 py-1 mb-4">
          グリッドシステム
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">グリッド & レイアウト</h1>
        <p className="text-[14px] text-gray-500 max-w-xl leading-relaxed">
          Tailwind CSSのグリッドシステムを活用したレスポンシブレイアウト。
          12カラムグリッドをベースに、柔軟なレイアウト構成を実現します。
        </p>
      </div>

      {/* Breakpoints */}
      <section className="mb-12">
        <h2 className="text-[16px] font-semibold text-gray-900 mb-6">ブレークポイント</h2>
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left py-3 px-5 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">名前</th>
                  <th className="text-left py-3 px-4 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">サイズ</th>
                  <th className="text-left py-3 px-4 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">プレフィックス</th>
                  <th className="text-left py-3 px-4 text-[11px] font-semibold text-gray-500 uppercase tracking-wide hidden md:table-cell">デバイス</th>
                  <th className="text-left py-3 px-4 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">カラム数</th>
                  <th className="text-left py-3 px-4 text-[11px] font-semibold text-gray-500 uppercase tracking-wide hidden lg:table-cell">マージン</th>
                </tr>
              </thead>
              <tbody>
                {breakpoints.map((bp) => (
                  <tr key={bp.name} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="py-3 px-5">
                      <span className="font-mono text-[12px] font-semibold text-violet-600">{bp.name}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-[12px] text-gray-700">{bp.size}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-mono text-[11px] bg-gray-100 text-gray-600 rounded px-2 py-0.5">{bp.prefix}</span>
                    </td>
                    <td className="py-3 px-4 text-[12px] text-gray-500 hidden md:table-cell">{bp.device}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: bp.cols }).map((_, i) => (
                          <div key={i} className="h-3 w-1.5 bg-violet-200 rounded-sm" />
                        ))}
                        <span className="ml-1.5 text-[11px] text-gray-500">{bp.cols}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-[12px] text-gray-500 hidden lg:table-cell">{bp.margin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interactive Grid Demo */}
      <section className="mb-12">
        <h2 className="text-[16px] font-semibold text-gray-900 mb-4">インタラクティブグリッドデモ</h2>
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-[12px] text-gray-500">カラム数:</span>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <button
                  key={n}
                  onClick={() => setSelectedCols(n)}
                  className={`w-8 h-8 rounded-lg text-[12px] font-medium transition-all ${
                    selectedCols === n
                      ? "bg-violet-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[12px] text-gray-500">ギャップ:</span>
              {gaps.map((g) => (
                <button
                  key={g}
                  onClick={() => setSelectedGap(g)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                    selectedGap === g
                      ? "bg-violet-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div
            className={`grid ${selectedGap}`}
            style={{ gridTemplateColumns: `repeat(${selectedCols}, minmax(0, 1fr))` }}
          >
            {Array.from({ length: selectedCols * 2 }).map((_, i) => (
              <div
                key={i}
                className={`rounded-xl border h-16 flex items-center justify-center text-[11px] font-mono font-semibold ${
                  colors[i % colors.length]
                }`}
                style={{ color: "inherit" }}
              >
                <span className="opacity-60">{i + 1}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-gray-900 rounded-xl p-4">
            <pre className="text-[11px] text-gray-300 font-mono">{`<div className="grid grid-cols-${selectedCols} ${selectedGap}">
  {items.map((item) => (
    <div key={item.id}>...</div>
  ))}
</div>`}</pre>
          </div>
        </div>
      </section>

      {/* Responsive Layout Patterns */}
      <section className="mb-12">
        <h2 className="text-[16px] font-semibold text-gray-900 mb-6">レスポンシブレイアウトパターン</h2>
        <div className="space-y-4">
          {[
            {
              label: "記事レイアウト",
              code: "grid-cols-1 md:grid-cols-3",
              desc: "モバイルでは1カラム、タブレット以上では3カラム",
              preview: [3, 1, 1],
            },
            {
              label: "カードグリッド",
              code: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
              desc: "画面サイズに応じて段階的にカラム数が増える",
              preview: [1, 2, 3],
            },
            {
              label: "サイドバーレイアウト",
              code: "grid-cols-1 lg:grid-cols-4",
              desc: "モバイルでは積み重ね、デスクトップでは4:1比のサイドバー",
              preview: [1, 3],
            },
          ].map((pattern) => (
            <div key={pattern.label} className="bg-white rounded-2xl border border-gray-100 p-5">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <div className="text-[13px] font-semibold text-gray-900 mb-1">{pattern.label}</div>
                  <div className="text-[12px] text-gray-500 mb-3">{pattern.desc}</div>
                  <div className="font-mono text-[11px] text-violet-600 bg-violet-50 rounded-lg px-3 py-1.5 inline-block">
                    {pattern.code}
                  </div>
                </div>
                <div className="sm:w-48 flex-shrink-0">
                  <div className="flex gap-1 h-12">
                    {pattern.preview.map((span, i) => (
                      <div
                        key={i}
                        className={`h-full rounded-lg flex items-center justify-center ${colors[i]}`}
                        style={{ flex: span }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Container Sizes */}
      <section className="mb-12">
        <h2 className="text-[16px] font-semibold text-gray-900 mb-6">コンテナサイズ</h2>
        <div className="space-y-3">
          {containerSizes.map((c, i) => (
            <div key={c.name} className="bg-white rounded-2xl p-5 border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="sm:w-24">
                  <span className="font-mono text-[12px] text-violet-600">max-w-{c.name}</span>
                </div>
                <div className="flex-1">
                  <div
                    className="h-8 bg-violet-100 rounded-lg border border-violet-200 relative"
                    style={{ width: `${(parseInt(c.maxWidth) / 1536) * 100}%`, minWidth: "60px" }}
                  >
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] font-mono text-violet-600">
                      {c.maxWidth}
                    </span>
                  </div>
                </div>
                <div className="sm:w-48 text-[12px] text-gray-500">{c.usage}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common Layout Patterns */}
      <section>
        <h2 className="text-[16px] font-semibold text-gray-900 mb-6">よく使うレイアウトパターン</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              label: "ページラッパー",
              code: `<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* コンテンツ */}
</div>`,
            },
            {
              label: "フレックスセンタリング",
              code: `<div className="flex items-center justify-center min-h-screen">
  {/* コンテンツ */}
</div>`,
            },
            {
              label: "スティッキーサイドバー",
              code: `<div className="flex gap-6">
  <aside className="w-64 sticky top-0 h-screen">
    {/* サイドバー */}
  </aside>
  <main className="flex-1">{/* メイン */}</main>
</div>`,
            },
            {
              label: "マソンリーグリッド",
              code: `<div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
  {items.map((item) => (
    <div className="break-inside-avoid mb-4">
      {/* アイテム */}
    </div>
  ))}
</div>`,
            },
          ].map((pattern) => (
            <div key={pattern.label} className="bg-white rounded-2xl border border-gray-100 p-5">
              <div className="text-[13px] font-semibold text-gray-900 mb-3">{pattern.label}</div>
              <div className="bg-gray-900 rounded-xl p-4">
                <pre className="text-[10px] text-gray-300 font-mono leading-relaxed overflow-x-auto">
                  {pattern.code}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
