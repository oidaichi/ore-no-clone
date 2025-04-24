// main.js

// ページ読み込み時に初期化
window.addEventListener('DOMContentLoaded', () => {
  // 最初の質問を表示
  handleQuestion('q1', 0);
  
  // お問い合わせフォームの送信ハンドラ
  const form = document.getElementById('inquiry-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('送信ありがとうございます。');
    // ここに AJAX などでサーバー送信ロジックを追加
  });
});

// 無料相談フォーム表示
function handleContactForm() {
  document.getElementById('contact-form').style.display = 'block';
  document.getElementById('questions').style.display = 'none';
}

// 質問ステップ切替
function handleQuestion(targetId, step) {
  document.querySelectorAll('.question-box, .content-display').forEach(el => {
    el.classList.add('hidden');
  });
  document.getElementById(targetId).classList.remove('hidden');
}

// 回答コンテンツ表示
function handleContent(key) {
  const titles = {
    youtube: 'YouTube チャンネル更新支援',
    manual: '業務マニュアル動画化',
    internal: '社内報・メッセージ動画',
    'pro-expression': 'プロの表現力サポート',
    'diverse-video': '動画バリエーション強化',
    'reduce-outsourcing': '外注コスト削減',
    'minimal-resources': '社内リソース最小化',
    'ad-performance': '広告動画パフォーマンス向上',
    'website-stay': 'ウェブサイト滞在時間向上'
  };
  const bodies = {
    youtube: 'YouTube チャンネルの更新をAIで自動化し、定期的な投稿をサポートします。',
    manual: '専門家のナレーション付きマニュアル動画を自動生成します。',
    internal: '経営層メッセージ動画をプロ品質で作成します。',
    'pro-expression': 'AIによる話し手の表現力強化ソリューションです。',
    'diverse-video': '多彩なテンプレートで動画バリエーションを増やします。',
    'reduce-outsourcing': 'AI内製化で外注費用を大幅に削減します。',
    'minimal-resources': '最小限の社内設備で動画を量産します。',
    'ad-performance': '広告用動画の視聴率をAI解析で最適化します。',
    'website-stay': '説明動画でサイト滞在時間を向上させます。'
  };
  document.getElementById('content-title').textContent = titles[key] || '';
  document.getElementById('content-body').textContent = bodies[key] || '';
  document.querySelectorAll('.question-box').forEach(el => el.classList.add('hidden'));
  document.getElementById('content-display').classList.remove('hidden');
}
