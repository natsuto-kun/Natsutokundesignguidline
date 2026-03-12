import { useState } from "react";
import { Copy, Check } from "lucide-react";

const spacingScale = [
  { token: "0", px: "0px", rem: "0rem" },
  { token: "0.5", px: "2px", rem: "0.125rem" },
  { token: "1", px: "4px", rem: "0.25rem" },
  { token: "1.5", px: "6px", rem: "0.375rem" },
  { token: "2", px: "8px", rem: "0.5rem" },
  { token: "2.5", px: "10px", rem: "0.625rem" },
  { token: "3", px: "12px", rem: "0.75rem" },
  { token: "3.5", px: "14px", rem: "0.875rem" },
  { token: "4", px: "16px", rem: "1rem" },
  { token: "5", px: "20px", rem: "1.25rem" },
  { token: "6", px: "24px", rem: "1.5rem" },
  { token: "7", px: "28px", rem: "1.75rem" },
  { token: "8", px: "32px", rem: "2rem" },
  { token: "9", px: "36px", rem: "2.25rem" },
  { token: "10", px: "40px", rem: "2.5rem" },
  { token: "11", px: "44px", rem: "2.75rem" },
  { token: "12", px: "48px", rem: "3rem" },
  { token: "14", px: "56px", rem: "3.5rem" },
  { token: "16", px: "64px", rem: "4rem" },
  { token: "20", px: "80px", rem: "5rem" },
  { token: "24", px: "96px", rem: "6rem" },
  { token: "28", px: "112px", rem: "7rem" },
  { token: "32", px: "128px", rem: "8rem" },
  { token: "36", px: "144px", rem: "9rem" },
  { token: "40", px: "160px", rem: "10rem" },
  { token: "48", px: "192px", rem: "12rem" },
  { token: "56", px: "224px", rem: "14rem" },
  { token: "64", px: "256px", rem: "16rem" },
];

const usageGuide = [
  { range: "0–2 (0–8px)", usage: "ボーダー、微細な内側の余白", examples: ["border-gap", "icon padding", "tight spacing"] },
  { range: "3–4 (12–16px)", usage: "コンポーネント内部のパディング", examples: ["button padding", "input padding", "card inner"] },
  { range: "5–8 (20–32px)", usage: "コンポーネント間の余白", examples: ["form fields", "list items", "card gap"] },
  { range: "10–16 (40–64px)", usage: "セクション内の余白", examples: ["section padding", "content width", "sidebar"] },
  { range: "20+ (80px+)", usage: "ページレベルのレイアウト", examples: ["page margin", "hero section", "full layouts"] },
];

function SpacingRow({ item }: { item: typeof spacingScale[0] }) {
  const [copied, setCopied] = useState(false);
  const pxNum = parseInt(item.px);
  const barWidth = Math.min(pxNum, 256);

  return (
    <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group">
      <td className="py-3 px-5">
        <button
          onClick={() => {
            navigator.clipboard.writeText(`p-${item.token}`);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          className="flex items-center gap-1.5 font-mono text-[12px] text-violet-600"
        >
          {item.token}
          {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3 opacity-0 group-hover:opacity-50" />}
        </button>
      </td>
      <td className="py-3 px-4">
        <span className="text-[12px] text-gray-700">{item.px}</span>
        <span className="text-[11px] text-gray-400 ml-1.5">{item.rem}</span>
      </td>
      <td className="py-3 px-4 w-full">
        <div className="flex items-center gap-2">
          <div
            className="h-5 bg-violet-200 rounded-r-sm flex-shrink-0"
            style={{ width: `${Math.max(barWidth, 2)}px` }}
          />
          {pxNum === 0 && <div className="w-0.5 h-5 bg-gray-300" />}
        </div>
      </td>
    </tr>
  );
}

export function Spacing() {
  const [activeDemo, setActiveDemo] = useState<string>("padding");

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 text-[11px] rounded-full px-3 py-1 mb-4">
          スペーシングシステム
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">スペーシング</h1>
        <p className="text-[14px] text-gray-500 max-w-xl leading-relaxed">
          4pxを基準単位とした一貫したスペーシングシステムです。
          すべてのパディング、マージン、ギャップはこのスケールから選択します。
        </p>
      </div>

      {/* Base Unit */}
      <section className="mb-12">
        <h2 className="text-[16px] font-semibold text-gray-900 mb-6">基準単位</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
            <div className="text-3xl font-bold text-violet-600 mb-1">4px</div>
            <div className="text-[13px] text-gray-500">基本単位 (Base)</div>
            <div className="font-mono text-[11px] text-gray-400 mt-2">= 0.25rem</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
            <div className="text-3xl font-bold text-violet-600 mb-1">8px</div>
            <div className="text-[13px] text-gray-500">スモール (Small)</div>
            <div className="font-mono text-[11px] text-gray-400 mt-2">= 0.5rem (space-2)</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
            <div className="text-3xl font-bold text-violet-600 mb-1">16px</div>
            <div className="text-[13px] text-gray-500">ベース (Base)</div>
            <div className="font-mono text-[11px] text-gray-400 mt-2">= 1rem (space-4)</div>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="mb-12">
        <h2 className="text-[16px] font-semibold text-gray-900 mb-4">インタラクティブデモ</h2>
        <div className="flex gap-2 mb-6">
          {["padding", "margin", "gap"].map((mode) => (
            <button
              key={mode}
              onClick={() => setActiveDemo(mode)}
              className={`px-4 py-2 rounded-xl text-[12px] font-medium transition-all ${
                activeDemo === mode
                  ? "bg-violet-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-violet-300"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["2", "4", "6", "8", "10", "12", "16", "20"].map((val) => {
              const pxMap: Record<string, number> = {
                "2": 8, "4": 16, "6": 24, "8": 32, "10": 40, "12": 48, "16": 64, "20": 80
              };
              const px = pxMap[val];
              return (
                <div key={val} className="flex flex-col items-center gap-2">
                  <div className="text-[10px] font-mono text-gray-500">
                    {activeDemo === "padding" ? `p-${val}` : activeDemo === "margin" ? `m-${val}` : `gap-${val}`}
                  </div>
                  <div className="relative bg-violet-50 rounded-lg border-2 border-dashed border-violet-200 flex items-center justify-center"
                    style={{
                      width: activeDemo === "padding" ? `${px + 32}px` : "56px",
                      height: activeDemo === "padding" ? `${px + 32}px` : "56px",
                    }}
                  >
                    {activeDemo === "padding" && (
                      <div className="w-4 h-4 bg-violet-400 rounded-sm" />
                    )}
                    {activeDemo === "margin" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="bg-violet-400 rounded"
                          style={{
                            width: `${Math.max(8, 56 - px * 0.5)}px`,
                            height: `${Math.max(8, 56 - px * 0.5)}px`,
                          }}
                        />
                      </div>
                    )}
                    {activeDemo === "gap" && (
                      <div className="flex gap-1 items-center" style={{ gap: `${px * 0.3}px` }}>
                        <div className="w-3 h-3 bg-violet-400 rounded-sm" />
                        <div className="w-3 h-3 bg-violet-300 rounded-sm" />
                      </div>
                    )}
                  </div>
                  <div className="text-[10px] text-gray-400">{px}px</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Usage Guide */}
      <section className="mb-12">
        <h2 className="text-[16px] font-semibold text-gray-900 mb-6">使用ガイドライン</h2>
        <div className="space-y-3">
          {usageGuide.map((guide, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 flex flex-col sm:flex-row gap-4">
              <div className="sm:w-48 flex-shrink-0">
                <span className="font-mono text-[12px] text-violet-600 bg-violet-50 rounded-lg px-3 py-1.5 inline-block">
                  {guide.range}
                </span>
              </div>
              <div className="flex-1">
                <div className="text-[13px] font-medium text-gray-800 mb-1.5">{guide.usage}</div>
                <div className="flex flex-wrap gap-2">
                  {guide.examples.map((ex, j) => (
                    <span key={j} className="text-[11px] text-gray-500 bg-gray-50 rounded-md px-2 py-0.5">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full Scale */}
      <section>
        <h2 className="text-[16px] font-semibold text-gray-900 mb-6">スペーシングスケール一覧</h2>
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left py-3 px-5 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">トークン</th>
                  <th className="text-left py-3 px-4 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">サイズ</th>
                  <th className="text-left py-3 px-4 text-[11px] font-semibold text-gray-500 uppercase tracking-wide w-full">ビジュアル</th>
                </tr>
              </thead>
              <tbody>
                {spacingScale.map((item) => (
                  <SpacingRow key={item.token} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
