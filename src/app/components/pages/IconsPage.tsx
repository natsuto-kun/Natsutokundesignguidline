import { useState } from "react";
import {
  Home, Search, Bell, User, Settings, Heart, Star, Bookmark, Share2, Edit, Trash2,
  Check, X, Plus, Minus, ChevronLeft, ChevronRight, ChevronUp, ChevronDown,
  ArrowLeft, ArrowRight, ArrowUp, ArrowDown, Menu, MoreHorizontal, MoreVertical,
  Eye, EyeOff, Lock, Unlock, Mail, Phone, Calendar, Clock, Map, MapPin,
  Image, Video, Music, File, Folder, Download, Upload, Link, ExternalLink,
  Zap, Shield, Globe, Cloud, Camera, Mic, Volume2, VolumeX,
  Sun, Moon, Wifi, Battery, Bluetooth, Monitor, Smartphone, Tablet,
  AlertCircle, AlertTriangle, Info, HelpCircle, CheckCircle, XCircle,
  Tag, Filter, SortAsc, SortDesc, Copy, Clipboard, RefreshCw, RotateCcw,
  Palette, Type, Layers, Grid3x3, LayoutGrid, Ruler, Sparkles, Loader2,
  Send, MessageSquare, Users, BarChart2, PieChart, TrendingUp, Activity,
  ShoppingCart, CreditCard, Package, Truck, Gift,
} from "lucide-react";

const allIcons = [
  { name: "Home", icon: Home },
  { name: "Search", icon: Search },
  { name: "Bell", icon: Bell },
  { name: "User", icon: User },
  { name: "Settings", icon: Settings },
  { name: "Heart", icon: Heart },
  { name: "Star", icon: Star },
  { name: "Bookmark", icon: Bookmark },
  { name: "Share2", icon: Share2 },
  { name: "Edit", icon: Edit },
  { name: "Trash2", icon: Trash2 },
  { name: "Check", icon: Check },
  { name: "X", icon: X },
  { name: "Plus", icon: Plus },
  { name: "Minus", icon: Minus },
  { name: "ChevronLeft", icon: ChevronLeft },
  { name: "ChevronRight", icon: ChevronRight },
  { name: "ChevronUp", icon: ChevronUp },
  { name: "ChevronDown", icon: ChevronDown },
  { name: "ArrowLeft", icon: ArrowLeft },
  { name: "ArrowRight", icon: ArrowRight },
  { name: "ArrowUp", icon: ArrowUp },
  { name: "ArrowDown", icon: ArrowDown },
  { name: "Menu", icon: Menu },
  { name: "MoreHorizontal", icon: MoreHorizontal },
  { name: "MoreVertical", icon: MoreVertical },
  { name: "Eye", icon: Eye },
  { name: "EyeOff", icon: EyeOff },
  { name: "Lock", icon: Lock },
  { name: "Unlock", icon: Unlock },
  { name: "Mail", icon: Mail },
  { name: "Phone", icon: Phone },
  { name: "Calendar", icon: Calendar },
  { name: "Clock", icon: Clock },
  { name: "Map", icon: Map },
  { name: "MapPin", icon: MapPin },
  { name: "Image", icon: Image },
  { name: "Video", icon: Video },
  { name: "Music", icon: Music },
  { name: "File", icon: File },
  { name: "Folder", icon: Folder },
  { name: "Download", icon: Download },
  { name: "Upload", icon: Upload },
  { name: "Link", icon: Link },
  { name: "ExternalLink", icon: ExternalLink },
  { name: "Zap", icon: Zap },
  { name: "Shield", icon: Shield },
  { name: "Globe", icon: Globe },
  { name: "Cloud", icon: Cloud },
  { name: "Camera", icon: Camera },
  { name: "Mic", icon: Mic },
  { name: "Volume2", icon: Volume2 },
  { name: "VolumeX", icon: VolumeX },
  { name: "Sun", icon: Sun },
  { name: "Moon", icon: Moon },
  { name: "Wifi", icon: Wifi },
  { name: "Battery", icon: Battery },
  { name: "Bluetooth", icon: Bluetooth },
  { name: "Monitor", icon: Monitor },
  { name: "Smartphone", icon: Smartphone },
  { name: "Tablet", icon: Tablet },
  { name: "AlertCircle", icon: AlertCircle },
  { name: "AlertTriangle", icon: AlertTriangle },
  { name: "Info", icon: Info },
  { name: "HelpCircle", icon: HelpCircle },
  { name: "CheckCircle", icon: CheckCircle },
  { name: "XCircle", icon: XCircle },
  { name: "Tag", icon: Tag },
  { name: "Filter", icon: Filter },
  { name: "SortAsc", icon: SortAsc },
  { name: "SortDesc", icon: SortDesc },
  { name: "Copy", icon: Copy },
  { name: "Clipboard", icon: Clipboard },
  { name: "RefreshCw", icon: RefreshCw },
  { name: "RotateCcw", icon: RotateCcw },
  { name: "Palette", icon: Palette },
  { name: "Type", icon: Type },
  { name: "Layers", icon: Layers },
  { name: "Grid3x3", icon: Grid3x3 },
  { name: "LayoutGrid", icon: LayoutGrid },
  { name: "Ruler", icon: Ruler },
  { name: "Sparkles", icon: Sparkles },
  { name: "Loader2", icon: Loader2 },
  { name: "Send", icon: Send },
  { name: "MessageSquare", icon: MessageSquare },
  { name: "Users", icon: Users },
  { name: "BarChart2", icon: BarChart2 },
  { name: "PieChart", icon: PieChart },
  { name: "TrendingUp", icon: TrendingUp },
  { name: "Activity", icon: Activity },
  { name: "ShoppingCart", icon: ShoppingCart },
  { name: "CreditCard", icon: CreditCard },
  { name: "Package", icon: Package },
  { name: "Truck", icon: Truck },
  { name: "Gift", icon: Gift },
];

const sizes = [
  { label: "XS", value: 12 },
  { label: "SM", value: 16 },
  { label: "MD", value: 20 },
  { label: "LG", value: 24 },
  { label: "XL", value: 32 },
];

export function IconsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSize, setSelectedSize] = useState(20);
  const [selectedColor, setSelectedColor] = useState("text-gray-700");
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const filtered = allIcons.filter((icon) =>
    icon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const colorOptions = [
    { label: "グレー", class: "text-gray-700" },
    { label: "バイオレット", class: "text-violet-600" },
    { label: "ブルー", class: "text-blue-500" },
    { label: "グリーン", class: "text-green-500" },
    { label: "レッド", class: "text-red-500" },
    { label: "オレンジ", class: "text-orange-500" },
  ];

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(`import { ${name} } from "lucide-react";`);
    setCopiedName(name);
    setTimeout(() => setCopiedName(null), 1500);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-[11px] rounded-full px-3 py-1 mb-4">
          アイコンライブラリ
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">アイコン</h1>
        <p className="text-[14px] text-gray-500 max-w-xl leading-relaxed">
          Lucide Reactを使用したアイコンライブラリ。
          一貫したスタイルの100以上のアイコンをカスタマイズして使用できます。
        </p>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="search"
              placeholder="アイコンを検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-[13px] focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-violet-400 transition-all"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[12px] text-gray-500">サイズ:</span>
            {sizes.map((s) => (
              <button
                key={s.label}
                onClick={() => setSelectedSize(s.value)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                  selectedSize === s.value
                    ? "bg-violet-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-[12px] text-gray-500">カラー:</span>
          {colorOptions.map((c) => (
            <button
              key={c.class}
              onClick={() => setSelectedColor(c.class)}
              className={`px-2.5 py-1 rounded-lg text-[11px] transition-all ${c.class} ${
                selectedColor === c.class ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Icon Grid */}
      <div className="mb-4 text-[12px] text-gray-400">
        {filtered.length}個のアイコン
        {searchQuery && ` (「${searchQuery}」の検索結果)`}
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2">
        {filtered.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => handleCopy(name)}
            title={name}
            className={`group flex flex-col items-center gap-2 p-3 bg-white rounded-xl border transition-all hover:border-violet-200 hover:shadow-sm ${
              copiedName === name ? "border-violet-400 bg-violet-50" : "border-gray-100"
            }`}
          >
            <Icon
              style={{ width: selectedSize, height: selectedSize }}
              className={`${selectedColor} transition-colors`}
            />
            <span className="text-[9px] text-gray-400 group-hover:text-gray-600 truncate w-full text-center transition-colors leading-none">
              {copiedName === name ? "✓" : name}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <Search className="w-8 h-8 mx-auto mb-3 opacity-30" />
          <div className="text-[14px]">「{searchQuery}」に一致するアイコンが見つかりません</div>
        </div>
      )}

      {/* Usage */}
      <section className="mt-12">
        <h2 className="text-[16px] font-semibold text-gray-900 mb-6">使用方法</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <div className="text-[13px] font-semibold text-gray-900 mb-3">インポート</div>
            <div className="bg-gray-900 rounded-xl p-4">
              <pre className="text-[11px] text-gray-300 font-mono leading-relaxed">{`import { Home, Search, Bell } from "lucide-react";

// コンポーネント内で使用
<Home className="w-5 h-5 text-gray-700" />
<Search className="w-4 h-4" />
<Bell size={20} color="#6d28d9" />`}</pre>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <div className="text-[13px] font-semibold text-gray-900 mb-3">サイズガイドライン</div>
            <ul className="space-y-2">
              {[
                { size: "w-3 h-3 (12px)", usage: "バッジ内、タグ内のアイコン" },
                { size: "w-4 h-4 (16px)", usage: "テキスト内、ラベル横" },
                { size: "w-5 h-5 (20px)", usage: "ボタン内、標準UI" },
                { size: "w-6 h-6 (24px)", usage: "ナビゲーション" },
                { size: "w-8 h-8 (32px)", usage: "アイコンボタン、強調表示" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[12px]">
                  <span className="font-mono text-violet-600 flex-shrink-0 w-36">{item.size}</span>
                  <span className="text-gray-500">{item.usage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
