import "../FishiesWrapper/FishiesWrapper.css"

const FishCard=({info,region,Name,scientificName,illustrationPhoto,img,fishClicked,fishillustrationPhotoClicked})=>{
    const handleClick=()=>{
        fishClicked({info,region,scientificName});
    };
    const handleImgClick=()=>{
        fishillustrationPhotoClicked({illustrationPhoto});
    };
    return(
        <div className="fish" onClick={()=>handleClick()}>
            <img src={illustrationPhoto} alt={img} onClick={()=>handleImgClick()}/>
            <h3>Name:{Name}</h3>
            <p>region:{region}</p>
            <p>scientificName:{scientificName}</p>

        </div>
    )

}

export default FishCard