import React,{useState} from 'react'

function UpMulti() {

    const [Uploadimg, setUploadimg] = useState([])

    const imageHandleChange = (e) => {
        if(e.target.files) {
            const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))

            setUploadimg((prevImages)=>prevImages.concat(fileArray))
            Array.from(e.target.files).map(
                (file)=>URL.revokeObjectURL(file)
            )
        }
    }

    const renderPhotos = (source) => {
        return source.map((photo) => {
            return <> 
            <img className="w-40 h-40  " src={photo} key={photo} /> 
            </>
        })
    }

    return (
        <div>
            <h1 className="">Multi Photo Upload</h1>
            <div className="">
                <input type="file" multiple onChange={imageHandleChange}>
                </input>
                <div className="grid grid-cols-5 gap-5 pt-10 justify-start overflow-y-auto  ">
                {renderPhotos(Uploadimg)}
                </div>
            </div>
        </div>
    )
}

export default UpMulti
