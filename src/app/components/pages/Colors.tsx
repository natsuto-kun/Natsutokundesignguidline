import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface ColorSwatch {
  name: string;
  value: string;
  textColor?: string;
}

interface ColorGroup {
  label: string;
  desc: string;
  colors: ColorSwatch[];
}

const colorGroups: ColorGroup[] = [
  {
    label: "ブランドカラー",
    desc: "プライマリブランドカラーとそのバリエーション",
    colors: [
      { name: "Brand 50", value: "#f5f3ff", textColor: "#6d28d9" },
      { name: "Brand 100", value: "#ede9fe", textColor: "#6d28d9" },
      { name: "Brand 200", value: "#ddd6fe", textColor: "#6d28d9" },
      { name: "Brand 300", value: "#c4b5fd", textColor: "#4c1d95" },
      { name: "Brand 400", value: "#a78bfa", textColor: "#ffffff" },
      { name: "Brand 500", value: "#8b5cf6", textColor: "#ffffff" },
      { name: "Brand 600", value: "#7c3aed", textColor: "#ffffff" },
      { name: "Brand 700", value: "#6d28d9", textColor: "#ffffff" },
      { name: "Brand 800", value: "#5b21b6", textColor: "#ffffff" },
      { name: "Brand 900", value: "#4c1d95", textColor: "#ffffff" },
    ],
  },
  {
    label: "セマンティックカラー",
    desc: "意味を持つ機能的なカラー",
    colors: [
      { name: "Success 500", value: "#22c55e", textColor: "#ffffff" },
      { name: "Success 100", value: "#dcfce7", textColor: "#166534" },
      { name: "Warning 500", value: "#f59e0b", textColor: "#ffffff" },
      { name: "Warning 100", value: "#fef3c7", textColor: "#92400e" },
      { name: "Error 500", value: "#ef4444", textColor: "#ffffff" },
      { name: "Error 100", value: "#fee2e2", textColor: "#991b1b" },
      { name: "Info 500", value: "#3b82f6", textColor: "#ffffff" },
      { name: "Info 100", value: "#dbeafe", textColor: "#1e40af" },
    ],
  },
  {
    label: "ニュートラルカラー",
    desc: "テキスト、背景、ボーダーなどに使用",
    colors: [
      { name: "Gray 50", value: "#f9fafb", textColor: "#374151" },
      { name: "Gray 100", value: "#f3f4f6", textColor: "#374151" },
      { name: "Gray 200", value: "#e5e7eb", textColor: "#374151" },
      { name: "Gray 300", value: "#d1d5db", textColor: "#374151" },
      { name: "Gray 400", value: "#9ca3af", textColor: "#ffffff" },
      { name: "Gray 500", value: "#6b7280", textColor: "#ffffff" },
      { name: "Gray 600", value: "#4b5563", textColor: "#ffffff" },
      { name: "Gray 700", value: "#374151", textColor: "#ffffff" },
      { name: "Gray 800", value: "#1f2937", textColor: "#ffffff" },
      { name: "Gray 900", value: "#111827", textColor: "#ffffff" },
    ],
  },
  {
    label: "アクセントカラー",
    desc: "強調やハイライトに使用するカラー",
    colors: [
      { name: "Teal 500", value: "#14b8a6", textColor: "#ffffff" },
      { name: "Teal 100", value: "#ccfbf1", textColor: "#134e4a" },
      { name: "Pink 500", value: "#ec4899", textColor: "#ffffff" },
      { name: "Pink 100", value: "#fce7f3", textColor: "#831843" },
      { name: "Indigo 500", value: "#6366f1", textColor: "#ffffff" },
      { name: "Indigo 100", value: "#e0e7ff", textColor: "#3730a3" },
      { name: "Amber 500", value: "#f59e0b", textColor: "#ffffff" },
      { name: "Amber 100", value: "#fef3c7", textColor: "#78350f" },
    ],
  },
];

const usageTable = [
  { token: "--color-primary", value: "#030213", usage: "プライマリアクション、CTAボタン" },
  { token: "--color-secondary", value: "#ececf0", usage: "セカンダリアクション" },
  { token: "--color-muted", value: "#ececf0", usage: "無効化、補助テキストの背景" },
  { token: "--color-destructive", value: "#d4183d", usage: "削除、エラーアクション" },
  { token: "--color-background", value: "#ffffff", usage: "ページ背景" },
  { token: "--color-foreground", value: "#0a0a0a", usage: "メインテキスト" },
  { token: "--color-border", value: "rgba(0,0,0,0.1)", usage: "ボーダー、区切り線" },
];

function ColorCard({ swatch }: { swatch: ColorSwatch }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(swatch.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="group relative rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-200 text-left w-full"
      style={{ backgroundColor: swatch.value }}
    >
      <div className="h-16" />
      <div className="bg-white px-3 py-2.5 border-t border-gray-100">
        <div className="text-[11px] font-medium text-gray-700">{swatch.name}</div>
        <div className="text-[10px] text-gray-400 font-mono">{swatch.value}</div>
      </div>
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-black/20 backdrop-blur-sm rounded-md p-1">
          {copied ? (
            <Check className="w-3 h-3 text-white" />
          ) : (
            <Copy className="w-3 h-3 text-white" />
          )}
        </div>
      </div>
    </button>
  );
}

function TokenRow({ token, value, usage }: { token: string; value: string; usage: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
      <td className="py-3 pr-4">
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 font-mono text-[12px] text-violet-600 hover:text-violet-800 transition-colors"
        >
          {token}
          {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3 opacity-50" />}
        </button>
      </td>
      <td className="py-3 pr-4">
        <div className="flex items-center gap-2">
          <div
            className="w-5 h-5 rounded border border-gray-200 flex-shrink-0"
            style={{ backgroundColor: value }}
          />
          <span className="font-mono text-[12px] text-gray-600">{value}</span>
        </div>
      </td>
      <td className="py-3 text-[12px] text-gray-500">{usage}</td>
    </tr>
  );
}

export function Colors() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-600 text-[11px] rounded-full px-3 py-1 mb-4">
          カラーシステム
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">カラー</h1>
        <p className="text-[14px] text-gray-500 max-w-xl leading-relaxed">
          デザインシステムのカラーパレットは、ブランドの一貫性を保ちながら、
          アクセシビリティ基準（WCAG 2.1）に準拠するように設計されています。
        </p>
      </div>

      {/* Color Groups */}
      <div className="space-y-12">
        {colorGroups.map((group) => (
          <section key={group.label}>
            <div className="mb-4">
              <h2 className="text-[16px] font-semibold text-gray-900">{group.label}</h2>
              <p className="text-[12px] text-gray-500 mt-0.5">{group.desc}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
              {group.colors.map((swatch) => (
                <ColorCard key={swatch.name} swatch={swatch} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Design Tokens */}
      <section className="mt-16">
        <h2 className="text-[16px] font-semibold text-gray-900 mb-2">デザイントークン</h2>
        <p className="text-[12px] text-gray-500 mb-6">
          CSS変数として定義されたデザイントークン。コンポーネント内で一貫した使用を推奨します。
        </p>
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left py-3 px-5 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">トークン</th>
                  <th className="text-left py-3 px-4 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">値</th>
                  <th className="text-left py-3 px-4 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">用途</th>
                </tr>
              </thead>
              <tbody className="px-5">
                {usageTable.map((row) => (
                  <tr key={row.token} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="py-3 px-5">
                      <span className="font-mono text-[12px] text-violet-600">{row.token}</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-4 h-4 rounded border border-gray-200"
                          style={{ backgroundColor: row.value }}
                        />
                        <span className="font-mono text-[12px] text-gray-600">{row.value}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-[12px] text-gray-500">{row.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="mt-12">
        <h2 className="text-[16px] font-semibold text-gray-900 mb-4">アクセシビリティガイドライン</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <div className="text-[13px] font-semibold text-gray-900 mb-2">コントラスト比</div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-[12px] text-gray-600">
                <span className="w-16 text-right font-mono font-semibold text-green-600">4.5:1</span>
                <span>通常テキスト（WCAG AA）</span>
              </li>
              <li className="flex items-center gap-2 text-[12px] text-gray-600">
                <span className="w-16 text-right font-mono font-semibold text-blue-600">3:1</span>
                <span>大きなテキスト・UIコンポーネント</span>
              </li>
              <li className="flex items-center gap-2 text-[12px] text-gray-600">
                <span className="w-16 text-right font-mono font-semibold text-violet-600">7:1</span>
                <span>AAA基準（推奨）</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <div className="text-[13px] font-semibold text-gray-900 mb-2">カラーの使用ルール</div>
            <ul className="space-y-2">
              {[
                "色だけで情報を伝えない",
                "色覚多様性に配慮したパレットを選択",
                "テキストには十分なコントラストを確保",
                "装飾的な要素はコントラスト不要",
              ].map((rule, i) => (
                <li key={i} className="flex items-center gap-2 text-[12px] text-gray-600">
                  <span className="w-4 h-4 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-[9px] font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
