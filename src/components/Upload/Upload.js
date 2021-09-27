import React, { useState } from '../../../node_modules/react';
import './Upload.css'

export default function Upload() {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [dataUri, setDataUri] = useState('')

    const changeHandler = (file) => {
        setSelectedFile(file.target.files[0]);
        if (!file) {
            alert('there was an issue with the file you uploaded')
            setDataUri('');
            return;
        }
        fileToDataUri(file.target.files[0])
            .then(dataUri => {
                setDataUri(dataUri)
            })
        setIsFilePicked(true);
    };

    const handleSubmission = () => {
        console.log(dataUri.length)
        //call api
    };

    const showUpload = () => {
        if (isFilePicked) {
            return <div className="button-container">
                <button onClick={handleSubmission}>
                    UPLOAD
                </button>
            </div>
        }
    }

    const fileToDataUri = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            resolve(event.target.result)
        };
        reader.readAsDataURL(file);
    })



    return <div className='upload-container'>
        <h3>How to upload your data</h3>
        <p>
            Step 1: <a href="https://takeout.google.com/settings/takeout" target="_blank">Click here to open Google Takeout</a>
        </p>
        <p>
            Step 2:
            Deselect all
        </p>
        <p>
            Step 3:
            Select "Location History"
        </p>
        <p>
            Step 4:
            At the bottom of the page click "Next"
        </p>
        <p>
            Step 5:
            click "Create export" with default settings
        </p>
        <p>
            Step 6:
            You will be emailed a zip of your timeline data.
            download it and upload it here:
        </p>
        <div className="button-container">
            <label for="file-upload" className={selectedFile ? "file-uploaded" : "file-upload"}>
                {selectedFile ? selectedFile.name : 'CHOOSE FILE'}
            </label>
            <input id="file-upload" type="file" onChange={changeHandler} />
        </div>
        {showUpload()}
    </div>
}