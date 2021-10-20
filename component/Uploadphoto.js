import React,{useState} from 'react'

function Uploadphoto() {

    const [img, setimg] = useState()
    const [imgPreview, setimgPreview] = useState(null)

    const Uploadimage = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader();
        console.log(e.target.files)
        reader.onloadend = () => {
            setimg(img)
            setimgPreview(reader.result)
        }
        reader.readAsDataURL(file)
    }

    return (
        <>
        <div>
            
            <h1>Upload Photo</h1>
            <img src={imgPreview ? imgPreview : "/vercel.svg"}
            style={{width: "300px", height: "300px"}}
            />
            <div>
                <input 
                accept ="image/*"
                multiple
                type="file"
                onChange={Uploadimage}
                />
            </div>
        </div>
        </>
    )
}

export default Uploadphoto
