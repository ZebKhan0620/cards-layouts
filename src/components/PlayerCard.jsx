import { Link } from 'react-router-dom'

const PlayerCard = ({ player }) => {
  // Handle both data structures
  const name = player.englishName || player.name
  const japaneseName = player.japaneseName || player.nameJapanese
  const number = player.jerseyNumber || player.number?.toString()

  // Create a unique route using position and name to differentiate players with same numbers
  const routeId = `${player.position?.toLowerCase()}-${name?.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <Link to={`/players/${routeId}`} className="block transition-transform hover:scale-105">
      <div className="flex h-[300px] sm:h-[377.61px] min-w-[160px] sm:min-w-[200px] max-w-[200px] sm:max-w-[250px] flex-col items-start bg-[#F8F8F8] rounded-lg overflow-hidden cursor-pointer">
        <div className="flex w-full sm:min-w-[250px] pt-[12px] sm:pt-[15px] flex-col items-center gap-[15px] sm:gap-[19.61px] relative">
          {/* Heading texts */}
          <div className="flex w-[90%] sm:w-[218px] flex-col items-start z-10 px-2 sm:px-0">
            {/* English name */}
            <h3 className="text-black font-inter text-[12px] sm:text-[15.5px] font-black leading-[14px] sm:leading-[16px] uppercase tracking-wide break-words min-h-[28px] sm:min-h-[32px]">
              {name}
            </h3>
            {/* Japanese name */}
            <p className="text-black font-['Noto_Sans_JP'] text-[10px] sm:text-[12px] font-black leading-[12px] sm:leading-[14.4px] uppercase tracking-wide break-words">
              {japaneseName}
            </p>
          </div>

          {/* Image container - positioned to extend beyond text boundaries */}
          <div className="flex justify-center items-center self-stretch relative">
            <div className="flex h-[250px] sm:h-[313px] px-[15px] sm:px-[19px] flex-col justify-center items-center flex-1">
              <img 
                src={player.image} 
                alt={name}
                className="w-[170px] sm:w-[212px] h-[250px] sm:h-[313px] flex-shrink-0 aspect-[212/313] object-cover"
              />
            </div>
          </div>

          {/* Jersey number - positioned to overlap the image */}
          <div className="absolute bottom-[10%] sm:bottom-4 left-3 sm:left-4 z-20">
            <span className="text-black font-inter text-[28px] sm:text-[36px] font-black leading-[36px] sm:leading-[48px] uppercase tracking-wide">
              {number}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PlayerCard
