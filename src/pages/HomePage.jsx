import { Link } from 'react-router-dom'
import PlayerCard from '../components/PlayerCard'
import { playersData } from '../data/playersData'

const HomePage = () => {
  // Use the same data source as PlayersPage
  const players = playersData.map(player => ({
    id: player.id,
    englishName: player.name,
    japaneseName: player.nameJapanese,
    jerseyNumber: player.number.toString(),
    image: player.image,
    position: player.position,  // Added position for routing
    name: player.name          // Added original name for routing
  }))

  // Take first 10 players for the carousel
  const carouselPlayers = players.slice(0, 10)


  return (
    <div className="min-h-[254px] p-5">
      {/* Header Section */}
      <div className="flex justify-end">
        <div className="flex w-full sm:w-[935px] h-auto sm:h-[254px] pt-[17px] flex-col items-start gap-[60px] sm:gap-[120px] flex-shrink-0 border-t border-white">
          {/* Left side with white space and divider */}
          <div className="flex items-start gap-[12.57px] w-full sm:w-[925px] max-w-[1184.83px] pb-[5.39px] px-2 sm:px-0">
            
            {/* Vertical divider */}
            <div className="w-[1px] h-[180px] sm:h-[236.78px] bg-white"></div>
            
            {/* Main title */}
            <div className="flex-1">
              <h1 className="text-[#F2F1ED] font-inter text-[40px] sm:text-[70px] font-black leading-[48px] sm:leading-[86.4px] uppercase">
                ALL FOOTBALLERS<br />
                ARE INDIVIDUALS
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Player Cards Carousel Section */}
      <div className="w-full h-[350px] sm:h-[432px] py-4 pb-[50px] sm:pb-[100px] border-t border-b border-white overflow-hidden">
        <div className="flex gap-[12px] sm:gap-[16px] animate-scroll">
          {/* First set of cards */}
          {carouselPlayers.map((player) => (
            <PlayerCard key={`first-${player.id}`} player={player} />
          ))}
          {/* Second set of cards for seamless loop */}
          {carouselPlayers.map((player) => (
            <PlayerCard key={`second-${player.id}`} player={player} />
          ))}
          {/* Third set of cards for extra smoothness */}
          {carouselPlayers.map((player) => (
            <PlayerCard key={`third-${player.id}`} player={player} />
          ))}
        </div>
      </div>

      {/* Each Journey, Carefully Guided Section */}
      <div className="flex justify-end">
        <div className="flex w-full sm:w-[950px] h-auto sm:h-[254px] pt-[17px] flex-col items-start gap-[60px] sm:gap-[120px] flex-shrink-0 border-white">
          {/* Left side with white space and divider */}
          <div className="flex items-start gap-[12.57px] w-full sm:w-[925px] max-w-[1184.83px] pb-[5.39px] px-2 sm:px-0">
            
            {/* Vertical divider */}
            <div className="w-[1px] h-[180px] sm:h-[236.78px] bg-white"></div>
            
            {/* Main title */}
            <div className="flex-1">
              <h1 className="text-[#F2F1ED] font-inter text-[40px] sm:text-[70px] font-black leading-[48px] sm:leading-[86.4px] uppercase">
              Each Journey, <br /> Carefully Guided
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Japanese Text Blocks Section */}
      <div className="flex justify-end">
        <div className="flex w-full sm:w-[950px] pt-[20px] flex-col items-start gap-[20px] flex-shrink-0">
          {/* Left side with white space and divider */}
          <div className="flex items-start gap-[12.57px] w-full sm:w-[925px] max-w-[1184.83px]">
            
            {/* Text blocks side by side */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                {/* First text block */}
                <div className="w-full sm:w-[400px] px-2">
                  <p className="text-white font-inter text-[14px] sm:text-[16px] font-normal font-[400] leading-[18px] sm:leading-[19.6px]">
                    ICON REDSは、リバプールFCの2025-26シーズン全選手を紹介するサイトです。プロフィール、背番号、ポジション、最新のスタッツをわかりやすくまとめ、ファンが一目でチーム全体を把握できるようにしました。
                  </p>
                </div>
                
                {/* Vertical divider between text blocks */}
                <div className="hidden sm:block w-[1px] h-[120px] bg-white"></div>
                
                {/* Second text block */}
                <div className="w-full sm:w-[400px] px-2 sm:px-0">
                  <p className="text-white font-inter text-[14px] sm:text-[16px] font-normal font-[400] leading-[18px] sm:leading-[19.6px]">
                    リバプールを支えるのは、ピッチに立つひとりひとりの選手たち。ICON REDSでは、2025-26シーズンの全メンバーを詳しく紹介し、プロフィールやスタッツを通じて選手の魅力を発見できます。新加入から主力選手まで、レッズの現在を知るためのガイドです。
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

export default HomePage
