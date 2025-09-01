import { useState } from 'react'
import { Link } from 'react-router-dom'
import PlayerCard from '../components/PlayerCard'
import { playersData } from '../data/playersData'
import '../styles/mobile.css'

const PlayersPage = () => {
  const [isListView, setIsListView] = useState(false)

  const goalkeepers = playersData.filter(player => player.position === 'Goalkeeper')
  const midfielders = playersData.filter(player => player.position === 'Midfielder')
  const defenders = playersData.filter(player => player.position === 'Defender')
  const forwards = playersData.filter(player => player.position === 'Forward')

  return (
    <div className="min-h-screen bg-[#d60026] px-5 players-container">
      {/* Top Section - Title and Toggle */}
      <div className="flex justify-end mb-16 players-header">
        <div className="flex w-[935px] h-[254px] pt-[17px] flex-col items-start gap-[120px] flex-shrink-0 border-t border-white mt-3">
          {/* Left side with white space and divider */}
          <div className="flex items-start gap-[12.57px] w-[925px] max-w-[1184.83px] pb-[5.39px] max-[640px]:w-full">
            
            {/* Vertical divider - Same positioning as goalkeeper section */}
            <div className="w-[1px] h-[236.78px] bg-white flex-shrink-0 vertical-divider"></div>
            
            {/* Main title and toggle */}
            <div className="flex-1">
              <h1 className="text-white font-inter text-[60px] font-black uppercase mb-8 players-title">
                OUR PLAYERS
              </h1>
              
              {/* Toggle Switch */}
              <div className="flex items-center space-x-4">
                <span className="text-white text-lg font-inter uppercase font-semibold max-[640px]:text-base">LIST VIEW</span>
                <button
                  onClick={() => setIsListView(!isListView)}
                  className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors ${
                    isListView ? 'bg-black' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                      isListView ? 'translate-x-8' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Goalkeepers Section */}
      <div className="inline-flex pt-[25px] justify-end items-center gap-0 border-t border-white mb-16 player-section">
        {/* Left Container - Title */}
        <div className="flex w-[440px] h-[364px] pb-[433.7px] flex-col items-start flex-shrink-0 section-title">
          <div className="flex pb-[0.8px] flex-col items-start self-stretch">
            <h2 className="text-white font-inter text-[23.625px] font-black leading-[28.8px] uppercase max-[640px]:text-2xl max-[640px]:leading-tight">
              GOALKEEPER
            </h2>
          </div>
        </div>

        {/* Vertical Divider - Same positioning as header */}
        <div className="w-[1px] h-[460px] bg-white flex-shrink-0 ml-[12.57px]"></div>

        {/* Right Container - Player Cards */}
        <div className="flex w-[925px] h-[460px] pb-[100px] items-start content-start gap-[16px] flex-shrink-0 flex-wrap pl-4 max-[640px]:w-full max-[640px]:h-auto max-[640px]:pb-8 max-[640px]:gap-4 max-[640px]:pl-0">
          {goalkeepers.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>

      {/* Midfielders Section */}
      <div className="flex pt-[25px] justify-end items-center gap-0 border-t border-white mb-16 player-section">
        {/* Left Container - Title */}
        <div className="flex w-[440px] h-[920px] pb-[433.7px] flex-col items-start flex-shrink-0 section-title">
          <div className="flex pb-[0.8px] flex-col items-start self-stretch">
            <h2 className="text-white font-inter text-[23.625px] font-black leading-[28.8px] uppercase max-[640px]:text-2xl max-[640px]:leading-tight">
              MIDFIELDER
            </h2>
          </div>
        </div>

        {/* Vertical Divider - Same positioning as header */}
        <div className="w-[1px] h-[920px] bg-white flex-shrink-0 ml-[12.57px] max-[640px]:hidden"></div>

        {/* Right Container - Player Cards */}
        <div className="flex w-[925px] h-[920px] pb-[100px] items-start content-start gap-[16px] flex-shrink-0 flex-wrap pl-4 max-[640px]:w-full max-[640px]:h-auto max-[640px]:pb-8 max-[640px]:gap-4 max-[640px]:pl-0">
          {midfielders.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>

      {/* Defenders Section */}
      <div className="flex pt-[25px] justify-end items-center gap-0 border-t border-white mb-16 max-[640px]:flex-col max-[640px]:pt-6 max-[640px]:mb-8">
        {/* Left Container - Title */}
        <div className="flex w-[440px] h-[920px] pb-[433.7px] flex-col items-start flex-shrink-0 max-[640px]:w-full max-[640px]:h-auto max-[640px]:pb-6">
          <div className="flex pb-[0.8px] flex-col items-start self-stretch">
            <h2 className="text-white font-inter text-[23.625px] font-black leading-[28.8px] uppercase max-[640px]:text-2xl max-[640px]:leading-tight">
              DEFENDER
            </h2>
          </div>
        </div>

        {/* Vertical Divider - Same positioning as header */}
        <div className="w-[1px] h-[920px] bg-white flex-shrink-0 ml-[12.57px] max-[640px]:hidden"></div>

        {/* Right Container - Player Cards */}
        <div className="flex w-[925px] h-[920px] pb-[100px] items-start content-start gap-[16px] flex-shrink-0 flex-wrap pl-4 max-[640px]:w-full max-[640px]:h-auto max-[640px]:pb-8 max-[640px]:gap-4 max-[640px]:pl-0">
          {defenders.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PlayersPage
