import React, {useEffect, useState} from "react";
import FishCard from "../FishCard/FishCard";
import "../FishiesWrapper/FishiesWrapper.css"
import Modal from "../Modal/Modal";
import CreateFishForm from "../CreateFishForm/CreateFishForm";




const FishiesWrapper= ({fishies})=>{
 const [createFish, setCreateFish]=useState(false);
 const [fishList, setFishList]=useState(fishies);
 const fishClickedDone=({info,region})=>{
    console.log(info,region);
 };
 const handleFishSubmit=(fish)=>{
    if (fish){
        setFishList((prevFishies)=>{
            return[...prevFishies,fish];
        });
        setCreateFish(false);
    };
 }
 useEffect(()=>{
    const timeoutID=setTimeout(()=>{
        console.log("Fishlist changed");
    },1000);
    return ()=>{
        clearTimeout(timeoutID);
    };
 },[fishList]);
 return(
    <div className="fishies-wrapper">
        <button onClick={()=>setCreateFish(true)}>Create Fish</button>
        {createFish &&(
            <Modal onClose={()=>setCreateFish(false)}>
                <CreateFishForm onFishSubmit={handleFishSubmit}/>
            </Modal>
        )}
        <div className="fishies-container">
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
    </div>
 )
}

export default FishiesWrapper
