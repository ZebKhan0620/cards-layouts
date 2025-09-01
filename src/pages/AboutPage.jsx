const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#d60026] px-5">
      {/* Header Section */}
      <div className="flex justify-end mb-8 sm:mb-16">
        <div className="flex w-full sm:w-[935px] h-auto sm:h-[254px] pt-[17px] flex-col items-start gap-[60px] sm:gap-[120px] flex-shrink-0 border-t border-white mt-3">
          <div className="flex items-start gap-[12.57px] w-full sm:w-[925px] max-w-[1184.83px] pb-[5.39px]">
            {/* Vertical divider */}
            <div className="w-[1px] h-[180px] sm:h-[236.78px] bg-white flex-shrink-0"></div>
            
            {/* Main title */}
            <div className="flex-1">
              <h1 className="text-[#F2F1ED] font-inter text-[40px] sm:text-[70px] font-black leading-[48px] sm:leading-[86.4px] uppercase mb-4 sm:mb-8">
                ABOUT<br />
                ICONREDS
              </h1>
              <p className="text-white font-inter text-[18px] sm:text-[23.625px] leading-[24px] sm:leading-[28.8px]">
                リバプールFC 2025-26シーズン 完全ガイド
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="flex justify-end mb-8 sm:mb-16">
        <div className="flex w-full sm:w-[935px] pt-[25px] items-start gap-[12.57px] border-t border-white">
          {/* Vertical divider */}
          <div className="w-[1px] h-[120px] bg-white flex-shrink-0"></div>
          
          {/* Content */}
          <div className="flex-1">
            <div className="w-full sm:w-[700px] px-2 sm:px-0">
              <p className="text-white font-inter text-[18px] sm:text-[23.625px] leading-[24px] sm:leading-[32px]">
                ICONREDSは、リバプールFCの包括的なプラットフォームとして、現在のスクワッドの全選手に関する
                詳細な情報をファンの皆様に提供しています。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="flex justify-end">
        <div className="flex w-full sm:w-[935px] flex-col gap-8 sm:gap-16">
          {/* Features Section */}
          <div className="flex items-start gap-[12.57px] pt-[25px] border-t border-white">
            {/* Vertical divider */}
            <div className="w-[1px] h-[500px] sm:h-[300px] bg-white flex-shrink-0"></div>
            
            {/* Content blocks side by side */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row gap-8">
                {/* Left column */}
                <div className="w-full sm:w-[400px] px-2 sm:px-0">
                  <h2 className="text-white font-inter text-[20px] sm:text-[23.625px] font-black leading-[24px] sm:leading-[28.8px] uppercase mb-4">
                    特徴
                  </h2>
                  <ul className="text-white font-inter text-[16px] leading-[24px] space-y-4">
                    <li>• 個人情報とバックグラウンド</li>
                    <li>• 現在の背番号とポジション</li>
                    <li>• 詳細な統計とパフォーマンスデータ</li>
                    <li>• 日英バイリンガルでの選手紹介</li>
                    <li>• 高品質な選手写真</li>
                  </ul>
                </div>
                
                {/* Vertical divider */}
                <div className="hidden sm:block w-[1px] h-[300px] bg-white"></div>
                
                {/* Right column */}
                <div className="w-full sm:w-[400px] px-2 sm:px-0 pt-8 sm:pt-0">
                  <h2 className="text-white font-inter text-[20px] sm:text-[23.625px] font-black leading-[24px] sm:leading-[28.8px] uppercase mb-4 sm:px-0 border-t sm:border-t-0 border-white pt-8 sm:pt-0">
                    私たちのミッション
                  </h2>
                  <p className="text-white font-inter text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">
                    私たちの使命は、リバプールFCサポーターのために最も完全で最新のリソースを作成することです。
                    2025-26シーズンの選手プロフィール、統計、インサイトを提供します。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Statement Section */}
          <div className="flex items-start gap-[12.57px] pt-[25px] border-t border-white pb-8 sm:pb-16">
            {/* Vertical divider */}
            <div className="w-[1px] h-[300px] sm:h-[160px] bg-white flex-shrink-0"></div>
            
            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="w-full sm:w-[400px] px-2 ">
                  <p className="text-white font-inter text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">
                    長年のリバプールサポーターの方も、クラブを始めて知る方も、
                    ICONREDSではサッカー界で最も歴史あるクラブの選手たちについて、
                    必要な情報をすべて提供しています。
                  </p>
                </div>
                
                {/* Vertical divider */}
                <div className="hidden sm:block w-[1px] h-[160px] bg-white"></div>
                
                <div className="w-full sm:w-[400px] px-2 sm:px-0 border-t sm:border-t-0 border-white border-t sm:border-t-0 border-white pt-8 sm:pt-0">
                  <p className="text-white font-inter text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">
                    最新のアップデート、選手ニュース、そしてシーズンを通じての
                    リバプールFCの包括的な情報を、ぜひご活用ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
