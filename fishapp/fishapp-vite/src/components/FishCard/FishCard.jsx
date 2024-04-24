import "../FishiesWrapper/FishiesWrapper.css"
import { useState } from "react";
import Modal from "../Modal/Modal";


const FishCard=({info,region,Name,scientificName,illustrationPhoto,img,fishClicked,fishillustrationPhotoClicked})=>{
    const [isShowing, setIsShowing]=useState(false);
    const [stars, setStars]=useState(0);

    const handleClick=()=>{
        fishClicked({info,region,scientificName});
    };
    const handleImgClick=()=>{
        fishillustrationPhotoClicked({illustrationPhoto});
    };


    const showFish=()=>{
    // console.log(`Fish info:${info}`);
    setIsShowing(true);
    }

    const handleStarClick=()=>{
    setStars(stars+1);
    setTimeout(()=>{
        setStars((prevStars)=>prevStars+1);
    },1000);

    };

    const renderStars=()=>{
    let starIcons="";
    for (let i=0; i<stars; i++){
        starIcons +="🌟";
    }
    return starIcons;
    };

    
    return(
        <>
        <div className="fish" onClick={()=>handleClick()}>
            <img src={illustrationPhoto} alt={info} onClick={()=>handleImgClick()}/>
            <h3>Name:{Name}</h3>
            <p>region:{region}</p>
            <p>scientificName:{scientificName}</p>
            <button onClick={()=>showFish()}>show</button>
        </div>
        {isShowing&&(
            <Modal onClose={()=>setIsShowing(false)}>
                <img src={illustrationPhoto} alt={info}/>
                <span style={{
                    display:"flex",
                    width:"100%",
                    justifyContent: "space-between",
                }}>
                    Stars:{renderStars()}{stars}
                    
                    <button
                    style={{border:"none", background:"none"}}
                    onClick={()=>{
                        if (stars < 10){
                            handleStarClick();
                        }
                    }}
                    >
                        👍🏼
                    </button>
                    
                </span>
            </Modal>
        )}
        </>
    );

};

export default FishCard