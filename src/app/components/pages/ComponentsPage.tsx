import { useState } from "react";
import {
  AlertCircle,
  CheckCircle,
  Info,
  X,
  ChevronDown,
  Search,
  Bell,
  User,
  Star,
  Heart,
  Share2,
  Loader2,
} from "lucide-react";

function SectionHeader({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-[16px] font-semibold text-gray-900">{title}</h2>
      <p className="text-[12px] text-gray-500 mt-0.5">{desc}</p>
    </div>
  );
}

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative bg-gray-900 rounded-xl p-4 mt-3">
      <button
        onClick={() => {
          navigator.clipboard.writeText(code);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="absolute top-3 right-3 text-gray-400 hover:text-white text-[11px] bg-gray-700 rounded px-2 py-1 transition-colors"
      >
        {copied ? "コピー済み" : "コピー"}
      </button>
      <pre className="text-[11px] text-gray-300 overflow-x-auto font-mono leading-relaxed">{code}</pre>
    </div>
  );
}

function PreviewCard({ children, code }: { children: React.ReactNode; code?: string }) {
  const [showCode, setShowCode] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-6">
      <div className="p-6">{children}</div>
      {code && (
        <>
          <div className="border-t border-gray-100 px-4 py-2 flex justify-end">
            <button
              onClick={() => setShowCode((v) => !v)}
              className="text-[11px] text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showCode ? "コードを非表示" : "コードを表示"}
            </button>
          </div>
          {showCode && <CodeBlock code={code} />}
        </>
      )}
    </div>
  );
}

export function ComponentsPage() {
  const [switchOn, setSwitchOn] = useState(false);
  const [checked, setChecked] = useState(false);
  const [sliderVal, setSliderVal] = useState(60);
  const [activeTab, setActiveTab] = useState("overview");
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-600 text-[11px] rounded-full px-3 py-1 mb-4">
          UIコンポーネント
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">コンポーネント</h1>
        <p className="text-[14px] text-gray-500 max-w-xl leading-relaxed">
          再利用可能なUIコンポーネントのライブラリ。
          各コンポーネントはアクセシビリティ基準に準拠し、一貫したビジュアルスタイルを持ちます。
        </p>
      </div>

      {/* Buttons */}
      <section className="mb-12">
        <SectionHeader
          title="ボタン"
          desc="アクションを起こすためのインタラクティブなコンポーネント"
        />
        <PreviewCard
          code={`<button className="bg-violet-600 text-white px-4 py-2 rounded-xl">Primary</button>
<button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl">Secondary</button>
<button className="border border-gray-200 text-gray-700 px-4 py-2 rounded-xl">Outline</button>
<button className="text-violet-600 px-4 py-2 rounded-xl">Ghost</button>
<button className="bg-red-500 text-white px-4 py-2 rounded-xl">Destructive</button>`}
        >
          <div className="space-y-4">
            <div>
              <div className="text-[11px] text-gray-400 mb-3">バリアント</div>
              <div className="flex flex-wrap gap-3">
                <button className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2.5 rounded-xl text-[13px] transition-colors">
                  Primary
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2.5 rounded-xl text-[13px] transition-colors">
                  Secondary
                </button>
                <button className="border border-gray-200 hover:border-gray-300 text-gray-700 px-5 py-2.5 rounded-xl text-[13px] transition-colors">
                  Outline
                </button>
                <button className="text-violet-600 hover:bg-violet-50 px-5 py-2.5 rounded-xl text-[13px] transition-colors">
                  Ghost
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-xl text-[13px] transition-colors">
                  Destructive
                </button>
              </div>
            </div>
            <div>
              <div className="text-[11px] text-gray-400 mb-3">サイズ</div>
              <div className="flex flex-wrap items-center gap-3">
                <button className="bg-violet-600 text-white px-3 py-1.5 rounded-lg text-[11px]">Small</button>
                <button className="bg-violet-600 text-white px-5 py-2.5 rounded-xl text-[13px]">Medium</button>
                <button className="bg-violet-600 text-white px-7 py-3 rounded-xl text-[15px]">Large</button>
              </div>
            </div>
            <div>
              <div className="text-[11px] text-gray-400 mb-3">状態</div>
              <div className="flex flex-wrap items-center gap-3">
                <button className="bg-violet-600 text-white px-5 py-2.5 rounded-xl text-[13px] flex items-center gap-2">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Loading
                </button>
                <button disabled className="bg-gray-100 text-gray-400 px-5 py-2.5 rounded-xl text-[13px] cursor-not-allowed">
                  Disabled
                </button>
                <button className="bg-violet-600 text-white px-5 py-2.5 rounded-xl text-[13px] flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Success
                </button>
              </div>
            </div>
          </div>
        </PreviewCard>
      </section>

      {/* Form Elements */}
      <section className="mb-12">
        <SectionHeader
          title="フォーム要素"
          desc="ユーザー入力のための各種インプットコンポーネント"
        />
        <PreviewCard>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Text Input */}
            <div>
              <label className="block text-[12px] font-medium text-gray-700 mb-1.5">テキスト入力</label>
              <input
                type="text"
                placeholder="プレースホルダー"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-violet-400 transition-all"
              />
              <p className="text-[11px] text-gray-400 mt-1">ヘルパーテキスト</p>
            </div>
            {/* Search */}
            <div>
              <label className="block text-[12px] font-medium text-gray-700 mb-1.5">検索</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="search"
                  placeholder="検索..."
                  className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-violet-400 transition-all"
                />
              </div>
            </div>
            {/* Select */}
            <div>
              <label className="block text-[12px] font-medium text-gray-700 mb-1.5">セレクト</label>
              <div className="relative">
                <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-violet-400 appearance-none bg-white transition-all">
                  <option>オプション 1</option>
                  <option>オプション 2</option>
                  <option>オプション 3</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
            {/* Textarea */}
            <div>
              <label className="block text-[12px] font-medium text-gray-700 mb-1.5">テキストエリア</label>
              <textarea
                rows={3}
                placeholder="テキストを入力..."
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-violet-400 resize-none transition-all"
              />
            </div>
            {/* Checkbox + Switch */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="check1"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  className="w-4 h-4 rounded accent-violet-600"
                />
                <label htmlFor="check1" className="text-[13px] text-gray-700 cursor-pointer">
                  チェックボックス
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input type="radio" name="radio" id="r1" className="accent-violet-600" />
                <label htmlFor="r1" className="text-[13px] text-gray-700 cursor-pointer">ラジオボタン 1</label>
              </div>
              <div className="flex items-center gap-3">
                <input type="radio" name="radio" id="r2" className="accent-violet-600" />
                <label htmlFor="r2" className="text-[13px] text-gray-700 cursor-pointer">ラジオボタン 2</label>
              </div>
            </div>
            {/* Toggle */}
            <div className="space-y-4">
              <div>
                <label className="block text-[12px] font-medium text-gray-700 mb-2">スイッチ</label>
                <button
                  onClick={() => setSwitchOn((v) => !v)}
                  className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                    switchOn ? "bg-violet-600" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                      switchOn ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
                <span className="ml-3 text-[12px] text-gray-600">{switchOn ? "オン" : "オフ"}</span>
              </div>
              <div>
                <label className="block text-[12px] font-medium text-gray-700 mb-2">スライダー ({sliderVal})</label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={sliderVal}
                  onChange={(e) => setSliderVal(Number(e.target.value))}
                  className="w-full accent-violet-600"
                />
              </div>
            </div>
          </div>
        </PreviewCard>
      </section>

      {/* Cards */}
      <section className="mb-12">
        <SectionHeader title="カード" desc="コンテンツを構造化して表示するコンテナコンポーネント" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {/* Basic Card */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
            <div className="w-8 h-8 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
              <Star className="w-4 h-4 text-violet-500" />
            </div>
            <div className="text-[14px] font-semibold text-gray-900 mb-1.5">基本カード</div>
            <div className="text-[12px] text-gray-500 leading-relaxed">
              シンプルな情報表示のための基本的なカードコンポーネント。
            </div>
          </div>
          {/* Image Card */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-32 bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center">
              <div className="text-white text-[12px] opacity-70">画像エリア</div>
            </div>
            <div className="p-5">
              <div className="text-[14px] font-semibold text-gray-900 mb-1">イメージカード</div>
              <div className="text-[12px] text-gray-500">画像付きカード。メディアコンテンツの表示に使用。</div>
              <div className="flex gap-2 mt-4">
                <button className="text-gray-400 hover:text-red-500 transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          {/* User Card */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-violet-500 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-[13px] font-semibold text-gray-900">田中 太郎</div>
                <div className="text-[11px] text-gray-400">プロダクトデザイナー</div>
              </div>
            </div>
            <div className="text-[12px] text-gray-500 leading-relaxed mb-4">
              ユーザー情報を表示するためのプロフィールカード。
            </div>
            <button className="w-full border border-violet-200 text-violet-600 rounded-xl py-2 text-[12px] hover:bg-violet-50 transition-colors">
              フォロー
            </button>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="mb-12">
        <SectionHeader title="タブ" desc="コンテンツを切り替えるナビゲーションコンポーネント" />
        <PreviewCard>
          <div>
            <div className="flex border-b border-gray-200 mb-6">
              {["overview", "details", "settings", "history"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-3 text-[13px] font-medium border-b-2 transition-all -mb-px ${
                    activeTab === tab
                      ? "border-violet-500 text-violet-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {{ overview: "概要", details: "詳細", settings: "設定", history: "履歴" }[tab]}
                </button>
              ))}
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-[13px] text-gray-600">
              <span className="font-medium text-gray-800">{{ overview: "概要", details: "詳細", settings: "設定", history: "履歴" }[activeTab]}</span> タブのコンテンツがここに表示されます。
            </div>
          </div>
        </PreviewCard>
      </section>

      {/* Alerts / Badges */}
      <section className="mb-12">
        <SectionHeader title="アラート & バッジ" desc="重要な情報や状態を伝えるフィードバックコンポーネント" />
        <PreviewCard>
          <div className="space-y-4">
            {showAlert && (
              <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl p-4">
                <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-[13px] font-medium text-blue-800">情報</div>
                  <div className="text-[12px] text-blue-600 mt-0.5">参考情報や補足説明を伝えます。</div>
                </div>
                <button onClick={() => setShowAlert(false)} className="text-blue-400 hover:text-blue-600">
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
            <div className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-xl p-4">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-[13px] font-medium text-green-800">成功</div>
                <div className="text-[12px] text-green-600 mt-0.5">操作が正常に完了しました。</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl p-4">
              <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-[13px] font-medium text-red-800">エラー</div>
                <div className="text-[12px] text-red-600 mt-0.5">問題が発生しました。もう一度お試しください。</div>
              </div>
            </div>
            <div className="mt-6">
              <div className="text-[11px] text-gray-400 mb-3">バッジ</div>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "新機能", bg: "bg-violet-100 text-violet-700" },
                  { label: "ベータ", bg: "bg-blue-100 text-blue-700" },
                  { label: "完了", bg: "bg-green-100 text-green-700" },
                  { label: "警告", bg: "bg-yellow-100 text-yellow-700" },
                  { label: "エラー", bg: "bg-red-100 text-red-700" },
                  { label: "非推奨", bg: "bg-gray-100 text-gray-600" },
                ].map((badge) => (
                  <span key={badge.label} className={`${badge.bg} text-[11px] font-medium px-2.5 py-1 rounded-full`}>
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </PreviewCard>
      </section>

      {/* Avatar */}
      <section className="mb-12">
        <SectionHeader title="アバター" desc="ユーザーやエンティティを表すビジュアル要素" />
        <PreviewCard>
          <div className="space-y-6">
            <div>
              <div className="text-[11px] text-gray-400 mb-3">サイズ</div>
              <div className="flex items-end gap-4">
                {[
                  { size: "w-6 h-6", label: "XS" },
                  { size: "w-8 h-8", label: "SM" },
                  { size: "w-10 h-10", label: "MD" },
                  { size: "w-12 h-12", label: "LG" },
                  { size: "w-16 h-16", label: "XL" },
                ].map((a) => (
                  <div key={a.label} className="flex flex-col items-center gap-1.5">
                    <div className={`${a.size} bg-gradient-to-br from-violet-400 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <User className="w-1/2 h-1/2 text-white" />
                    </div>
                    <span className="text-[10px] text-gray-400">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[11px] text-gray-400 mb-3">グループ</div>
              <div className="flex -space-x-3">
                {["from-pink-400 to-rose-500", "from-violet-400 to-indigo-500", "from-blue-400 to-cyan-500", "from-green-400 to-emerald-500", "from-amber-400 to-orange-500"].map((gradient, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 bg-gradient-to-br ${gradient} rounded-full border-2 border-white flex items-center justify-center`}
                  >
                    <User className="w-5 h-5 text-white" />
                  </div>
                ))}
                <div className="w-10 h-10 bg-gray-100 rounded-full border-2 border-white flex items-center justify-center text-[11px] font-semibold text-gray-600">
                  +5
                </div>
              </div>
            </div>
          </div>
        </PreviewCard>
      </section>

      {/* Progress */}
      <section className="mb-12">
        <SectionHeader title="プログレス" desc="処理の進捗状況を視覚的に伝えるコンポーネント" />
        <PreviewCard>
          <div className="space-y-5">
            {[
              { label: "デザイン", value: 85, color: "bg-violet-500" },
              { label: "開発", value: 62, color: "bg-blue-500" },
              { label: "テスト", value: 40, color: "bg-green-500" },
              { label: "リリース", value: 15, color: "bg-orange-500" },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-[12px] font-medium text-gray-700">{item.label}</span>
                  <span className="text-[12px] text-gray-500">{item.value}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </PreviewCard>
      </section>

      {/* Notifications */}
      <section>
        <SectionHeader title="通知 & トースト" desc="一時的なメッセージやフィードバックを表示するコンポーネント" />
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <div className="space-y-3 max-w-sm">
            {[
              { icon: CheckCircle, label: "保存完了", desc: "変更が正常に保存されました", iconColor: "text-green-500", bg: "bg-green-50" },
              { icon: Bell, label: "新しい通知", desc: "3件の未読メッセージがあります", iconColor: "text-blue-500", bg: "bg-blue-50" },
              { icon: AlertCircle, label: "接続エラー", desc: "サーバーに接続できません", iconColor: "text-red-500", bg: "bg-red-50" },
            ].map((notif) => {
              const Icon = notif.icon;
              return (
                <div
                  key={notif.label}
                  className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
                >
                  <div className={`w-8 h-8 ${notif.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-4 h-4 ${notif.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-medium text-gray-900">{notif.label}</div>
                    <div className="text-[11px] text-gray-500 truncate">{notif.desc}</div>
                  </div>
                  <button className="text-gray-300 hover:text-gray-500 flex-shrink-0">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
