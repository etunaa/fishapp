import FishCard from "../FishCard/FishCard";
import "../FishiesWrapper/FishiesWrapper.css"




const FishiesWrapper= ({fishies})=>{
 const fishClickedDone=({info,region})=>{
    console.log(info,region);
 };
 return(
    <div className="fishies-wrapper">
        {fishies.map((fish)=>{
            return(
                <FishCard
                key={fish.index}
                Name={fish.Name}
                info={fish.info}
                region={fish.region}
                scientificName={fish.scientificName}
                illustrationPhoto={fish.illustrationPhoto.src}
                fishClicked={({info,region})=>fishClickedDone({info,region})}
                fishillustrationPhotoClicked={({illustrationPhoto})=>console.log(illustrationPhoto)}
                />
            )
        })

        }
    </div>
 )
}

export default FishiesWrapper
