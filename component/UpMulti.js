import React, { useState } from 'react'

function UpMulti() {

    const [Uploadimg, setUploadimg] = useState([])
    const [intName, setintName] = useState("")
    const imageHandleChange = (e) => {
        if (e.target.files) {
            console.log(e.target.files,intName)
            const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
            setUploadimg((prevImages) => prevImages.concat(fileArray))
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file)

            )
        }
    }

    const Intsame = e => {
        setintName(e.target.value)
    }

    const Clearphoto = () => {
        window.location.reload()
    };



    const renderPhotos = (source) => {
        return source.map((photo) => {
            /* console.log({ intName,photo }); */
            return <>
                <div>
                    {/* <span className="font-bold p-2 grid text-base text-red-500 ">File Name : {Namefile.name}</span>
                    <span className="font-bold p-2 grid text-blue-500">File Type : {Namefile.type}</span>
                    <span className="font-bold p-2 grid text-blue-500">Rock</span> */}
                    <img className="w-40 h-40" src={photo} key={photo} />
                </div>
            </>
        })
    }

    return (
        <div>
            <div className="bg-black min-h-screen ">
                <h1 className="text-white font-bold text-center pb-5 text-3xl uppercase ">Multi Photo Upload</h1>
                <div className="mx-5 rounded-3xl pt-5 pb-5 shadow  bg-gradient-to-r from-green-400 to-blue-500  ">
                    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 mx-10 shadow-lg">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-center" for="grid-first-name">
                            Input text 
                        </label>
                        <div className=" flex justify-center">
                        <input class="appearance-none block w-2/6 bg-blue-200 text-gray-900 border border-blue-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Text here...." onChange={Intsame}> 
                        </input>
                        </div>
                        <div className="flex justify-center pb-5">Your Input Text : {intName}</div>
                        <div className="flex  items-center justify-center bg-grey-lighter ">
                            <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white hover:font-bold">
                                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span class="mt-2 text-base leading-normal">Select a file</span>
                                <input class="hidden" type="file" multiple onChange={imageHandleChange}>
                                </input>
                            </label>
                        </div>
                        <div className="grid grid-cols-5 gap-5 pt-10 justify-start   ">
                            {renderPhotos(Uploadimg)}
                        </div>
                        <div className="flex justify-center pt-10">
                            <button onClick={Clearphoto} className="bg-red-500 shadow rounded p-2 text-white font-bold">Clear Photo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpMulti
