import ClayButton from "@clayui/button";
import ClayForm, { ClayInput } from '@clayui/form';
import React, { useCallback, useEffect, useState } from "react";


function DocumentMedia() {

    const [docs, setDocs] = useState([]);
    const [idFile, setIdFile] = useState('');
    const [rwtIdFile, setrwtidFile] = useState('');
    const siteid = Liferay.ThemeDisplay.getSiteGroupId();


    function GetFile() {
        return Liferay.Util.fetch(
            `http://localhost:8080/o/headless-delivery/v1.0/sites/${siteid}/documents`,
            {
                method: 'GET',
                headers: {
                },
                body: JSON.stringify()
            }
        )
        .then(response => (response.json()))
        .then(res => { setDocs(res.items) })
        .then(console.log(docs))
    }

    function UploadFile() {

        const fileInput = document.querySelector("#fileInput");
        const formData = new FormData();
        formData.append("file", fileInput.files[0]);

        return Liferay.Util.fetch(
            `http://localhost:8080/o/headless-delivery/v1.0/sites/${siteid}/documents`,
            {
                method: 'POST',
                headers: {
                },
                body: formData
            }
        ).then(() => {
            fileInput('');
        });
    }

    function DeleteFile() {
        return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/documents/${idFile}`,
            {
                method: 'DELETE',
                headers: {
                },
            }
        ).then(() => {
            setIdFile('');
        });
    }

    function UpdateFile() {

        const fileInput = document.querySelector("#fileInputUpdate");
        const formData = new FormData();
        formData.append("file", fileInput.files[0]);

        return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/documents/${rwtIdFile}`,
            {
                method: 'PUT',
                headers: {
                    'accept': 'application/json',
                },
                body: formData
            }
        ).then(() => {
            setrwtidFile('');
        });
    }

    return (
        <div style={{ margin: 'auto', padding: '20px', width: '75%' }}>

            <h1>Documents and Media</h1>

            <h1 style={{ textAlign: 'center' }}>Get a File</h1>

            <ClayButton displayType="primary" onClick={() => { GetFile() }}>
                Get
            </ClayButton>
            {docs.map((doc) => (
                <li key={doc.id}>
                    <p style={{ font: 'caption' }}>ID: {doc.id}</p>
                    <p style={{ font: 'caption' }}>Title: {doc.title}</p>
                </li>))}

            <h1 style={{ textAlign: 'center' }}>Post a File</h1>

            <ClayForm.Group>
                <label htmlFor="Inputfile">Post a File</label>

                <ClayInput
                    id="fileInput"
                    type="file">
                </ClayInput>
            </ClayForm.Group>

            <ClayButton displayType="primary" onClick={() => { UploadFile() }}>
                Upload
            </ClayButton>

            <hr></hr>


            <h1 style={{ textAlign: 'center' }}>Delete a File</h1>

            <ClayForm.Group>
                <label htmlFor="text_id">Type Id to Delete</label>

                <ClayInput
                    id="text_id"
                    onChange={event => setIdFile(event.target.value)}
                    placeholder="type..."
                    type="text"
                    value={idFile}
                />
            </ClayForm.Group>


            <ClayButton displayType="primary" onClick={() => { DeleteFile() }}>
                DELETE
            </ClayButton>
            
            <hr></hr>

            <h1 style={{ textAlign: 'center' }}>Update a File</h1>

            <ClayForm.Group>
                <label htmlFor="text_id">ID</label>

                <ClayInput
                    id="text_id"
                    onChange={event => setrwtidFile(event.target.value)}
                    placeholder="type..."
                    type="text"
                    value={rwtIdFile}
                />
            </ClayForm.Group>

            <ClayForm.Group>
                <label htmlFor="Inputfile">Put a File</label>

                <ClayInput
                    id="fileInputUpdate"
                    type="file">
                </ClayInput>
            </ClayForm.Group>

            <ClayButton displayType="primary" onClick={() => { UpdateFile()}} >
                    UPDATE
            </ClayButton>
        </div>

    )
}

export default DocumentMedia;
