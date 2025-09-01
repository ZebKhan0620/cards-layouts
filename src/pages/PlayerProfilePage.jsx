import { useParams, Link } from 'react-router-dom'
import { playersData } from '../data/playersData'

const PlayerProfilePage = () => {
  const { id } = useParams()
  // Parse the route ID back into position and name
  const [position, ...nameParts] = id.split('-')
  const name = nameParts.join(' ').toUpperCase()
  
  // Find player by matching both position and name
  const player = playersData.find(p => 
    p.position.toLowerCase() === position && 
    p.name === name
  )

  if (!player) {
    return (
      <div className="min-h-screen bg-[#d60026] px-5 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Player Not Found</h1>
        <Link to="/players" className="text-white border border-white px-6 py-2 hover:bg-white hover:text-[#d60026] transition-colors">
          Back to Players
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#d60026]">
      <div className="flex flex-col sm:flex-row px-4 sm:px-0 sm:ml-[190px] gap-6 sm:gap-[40px]">
        {/* Left Column - Name, Number, and Biography */}
        <div className="w-full sm:w-[597.33px] pt-8 sm:pt-[60px]">
          {/* Header Section with Name and Number */}
          <div className="flex flex-col border-t border-b border-white">
            <div className="py-4 sm:py-[17px]">
              <h1 className="text-white font-inter text-4xl sm:text-[64px] font-black leading-tight sm:leading-[86.4px] uppercase mb-2 sm:mb-4">
                {player.name}
              </h1>
              <h2 className="text-white font-notojp text-2xl sm:text-[40px] font-black uppercase">
                {player.nameJapanese}
              </h2>
            </div>
            <div className="py-4 sm:py-[30px]">
              <span className="text-white font-inter text-8xl sm:text-[182.875px] font-black leading-[1.2] uppercase block">
                {player.number}
              </span>
            </div>
          </div>

          {/* Biography Section */}
          <div className="relative mt-8 sm:mt-[60px]">
            <div className="absolute left-[-16px] w-[1px] h-full bg-white hidden sm:block"></div>
            <div className="w-full sm:w-[472px] sm:ml-[20px] px-4 sm:px-0">
              <p className="text-white font-inter text-base sm:text-[16px] leading-[1.8] tracking-wide">
                {player.biography}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Image and Stats */}
        <div className="w-full sm:w-[570px] pt-8 sm:pt-[60px]">
          {/* Player Images */}
          <div className="flex flex-col gap-4 px-4 sm:px-0">
            {player.additionalImages && player.additionalImages.map((img, index) => (
              <div key={index} className="h-auto sm:h-[570px]">
                <img 
                  src={img}
                  alt={`${player.name} - ${index + 2}`}
                  className="w-full h-auto sm:h-[475px] object-cover"
                  onError={(e) => {
                    e.target.src = '/images/main.png'
                  }}
                />
              </div>
            ))}
          </div>

          {/* Stats Section below image */}
          <div className="mt-8 sm:mt-[60px] px-4 sm:px-0">
            <div className="relative">
              <div className="absolute left-[-16px] w-[1px] h-full bg-white hidden sm:block"></div>
              <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-6 sm:ml-[20px]">
                <div>
                  <span className="block text-white font-inter text-xs sm:text-[12.578px] uppercase mb-1">
                    CLUB
                  </span>
                  <span className="block text-white font-inter text-sm sm:text-[16px]">
                    {player.club}
                  </span>
                </div>
                <div>
                  <span className="block text-white font-inter text-xs sm:text-[12.578px] uppercase mb-1">
                    POSITION
                  </span>
                  <span className="block text-white font-inter text-sm sm:text-[16px]">
                    {player.positionJapanese}
                  </span>
                </div>
                <div>
                  <span className="block text-white font-inter text-xs sm:text-[12.578px] uppercase mb-1">
                    BIRTH YEAR
                  </span>
                  <span className="block text-white font-inter text-sm sm:text-[16px]">
                    {player.birthYear}
                  </span>
                </div>
                <div>
                  <span className="block text-white font-inter text-xs sm:text-[12.578px] uppercase mb-1">
                    HEIGHT
                  </span>
                  <span className="block text-white font-inter text-sm sm:text-[16px]">
                    {player.height}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerProfilePage
