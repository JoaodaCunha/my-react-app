import ClayButton from "@clayui/button";
import ClayForm, { ClayInput } from '@clayui/form';

import React, { useCallback, useEffect, useState } from "react";

stjhddsfgdfgdfsdfhdhdfDFHDSFHfdjgffgjfshsfhdh
function KnowLedgeBaseFolder() {

    const [Klb, setKlb] = useState([]);
    const [wtName, setwtName] = useState('');
    const [wtDescription, setwtDescription] = useState('');
    const [wtId, setwtId] = useState('');
    const [rwtName, setrwtName] = useState('');
    const [rwtDescription, setrwtDescription] = useState('');
    const [rwtId, setrwtId] = useState('');
    const siteid = Liferay.ThemeDisplay.getSiteGroupId();




    function GetKnowLedgeBase() {
        return Liferay.Util.fetch(
            `http://localhost:8080/o/headless-delivery/v1.0/sites/${siteid}/knowledge-base-folders`,
            {
                method: 'GET',
                headers: {
                },
                body: JSON.stringify()
            }
        )
            .then(response => (response.json()))
            .then(res => { setKlb(res.items) })
            .then(console.log(Klb))
    }

    function PostKnowLedgeBase() {
        return Liferay.Util.fetch(
            `http://localhost:8080/o/headless-delivery/v1.0/sites/${siteid}/knowledge-base-folders`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'name': wtName,
                    'description': wtDescription
                })
            }
        ).then(() => {
            setwtName('');
            setwtDescription('');
        });
    }

    function DeleteKnowLedgeBase() {
        return Liferay.Util.fetch(
            `http://localhost:8080/o/headless-delivery/v1.0/knowledge-base-folders/${wtId}`,
            {
                method: 'DELETE',
            }
        ).then(() => {
            setwtId('');
        });
    }

    function UpdateKnowLedgeBase() {
        return Liferay.Util.fetch(
            `http://localhost:8080/o/headless-delivery/v1.0/knowledge-base-folders/${rwtId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'name': rwtName,
                    'description': rwtDescription
                })
            }
        ).then(() => {
            setrwtId('');
            setrwtDescription('');
            setrwtId('');
        });
    }

    return (
        <div style={{ margin: 'auto', padding: '20px', width: '75%' }}>
            <h1>KnowLedge Base Folder</h1>

            <br></br>

            <h1 style={{ textAlign: 'center' }}>Get a KnowLedge Base Folder</h1>

            <ClayButton displayType="primary" onClick={() => { GetKnowLedgeBase() }}>
                Get
            </ClayButton>

            {Klb.map((klb) => (
                <li key={klb.id}>
                    <p style={{ font: 'caption' }}>ID: {klb.id}</p>
                    <p style={{ font: 'caption' }}>Name: {klb.name}</p>
                    <p style={{ font: 'caption' }}>Description: {klb.description}</p>
                </li>))}

            <hr></hr>

            <h1 style={{ textAlign: 'center' }}>Post a KnowLedge Base Folder</h1>

            <ClayForm.Group>
                <label htmlFor="text_id">Name: </label>

                <ClayInput
                    id="text_id"
                    onChange={event => setwtName(event.target.value)}
                    placeholder="type..."
                    type="text"
                    value={wtName}
                />
            </ClayForm.Group>

            <ClayForm.Group>
                <label htmlFor="text_id">Description: </label>

                <ClayInput
                    id="text_id"
                    onChange={event => setwtDescription(event.target.value)}
                    placeholder="type..."
                    type="text"
                    value={wtDescription}
                />
            </ClayForm.Group>

            <ClayButton displayType="primary" onClick={() => { PostKnowLedgeBase() }}>
                Post
            </ClayButton>

            <hr></hr>

            <h1 style={{ textAlign: 'center' }}>Delete a KnowLedge Base Folder</h1>

            <ClayForm.Group>
                <label htmlFor="text_id">Id: </label>

                <ClayInput
                    id="text_id"
                    onChange={event => setwtId(event.target.value)}
                    placeholder="type..."
                    type="text"
                    value={wtId}
                />
            </ClayForm.Group>

            <ClayButton displayType="primary" onClick={() => { DeleteKnowLedgeBase() }}>
                Delete
            </ClayButton>

            <hr></hr>

            <h1 style={{ textAlign: 'center' }}>Update a KnowLedge Base Folder</h1>

            <ClayForm.Group>
                <label htmlFor="text_id">Id: </label>

                <ClayInput
                    id="text_id"
                    onChange={event => setrwtId(event.target.value)}
                    placeholder="type..."
                    type="text"
                    value={rwtId}
                />
            </ClayForm.Group>

            <ClayForm.Group>
                <label htmlFor="text_id">Name: </label>

                <ClayInput
                    id="text_id"
                    onChange={event => setrwtName(event.target.value)}
                    placeholder="type..."
                    type="text"
                    value={rwtName}
                />
            </ClayForm.Group>

            <ClayForm.Group>
                <label htmlFor="text_id">Description: </label>

                <ClayInput
                    id="text_id"
                    onChange={event => setrwtDescription(event.target.value)}
                    placeholder="type..."
                    type="text"
                    value={rwtDescription}
                />
            </ClayForm.Group>

            <ClayButton displayType="primary" onClick={() => { UpdateKnowLedgeBase() }}>
                Update
            </ClayButton>


        </div>
    )
}

export default KnowLedgeBaseFolder;