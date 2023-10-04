import ClayButton from "@clayui/button";
import ClayForm, { ClayInput } from '@clayui/form';

import React, { useCallback, useEffect, useState } from "react";

function KnowLedgeBaseArticle() {

    const [Klb, setKlb] = useState([]);
    const [wttitle, setwttitle] = useState('');
    const [wtarticleBody, setwtarticleBody] = useState('');
    const [wtdescription, setwtdescription] = useState('');
    const [wtid, setwtid] = useState('');
    const [rwttitle, setrwttitle] = useState('');
    const [rwtarticleBody, setrwtarticleBody] = useState('');
    const [rwtdescription, setrwtdescription] = useState('');
    const [rwtid, setrwtid] = useState('');
    const siteid = Liferay.ThemeDisplay.getSiteGroupId();


    function GetKnowLedgeBaseArticle() {
        return Liferay.Util.fetch(
            `http://localhost:8080/o/headless-delivery/v1.0/sites/${siteid}/knowledge-base-articles`,
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

    function PostKnowLedgeBaseArticle() {
        return Liferay.Util.fetch(
            `http://localhost:8080/o/headless-delivery/v1.0/sites/${siteid}/knowledge-base-articles`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'title': wttitle,
                    'articleBody': wtarticleBody,
                    'description': wtdescription
                })
            }
        ).then(() => {
            setwttitle('');
            setwtarticleBody('');
            setwtdescription('');
        });
    }

    function DeleteKnowLedgeBaseArticle() {
        return Liferay.Util.fetch(
            `http://localhost:8080/o/headless-delivery/v1.0/knowledge-base-articles/${wtid}`,
            {
                method: 'DELETE',
            }
        ).then(() => {
            setwtid('');
        });
    }

    function UpdateKnowLedgeBase() {
        return Liferay.Util.fetch(
            `http://localhost:8080/o/headless-delivery/v1.0/knowledge-base-articles/${rwtid}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'title': rwttitle,
                    'articleBody': rwtarticleBody,
                    'description': rwtdescription
                })
            }
        ).then(() => {
            setrwtid('');
            setrwttitle('');
            setrwtarticleBody('');
            setrwtdescription('');
        });
    }


    return (
        <div style={{ margin: 'auto', padding: '20px', width: '75%' }}>
            <h1>KnowLedge Base Article</h1>

            <br></br>

            <h1 style={{ textAlign: 'center' }}>Get a KnowLedge Base Article</h1>

            <ClayButton displayType="primary" onClick={() => { GetKnowLedgeBaseArticle() }}>
                Get
            </ClayButton>

            {Klb.map((klb) => (
                <li key={klb.id}>
                    <p style={{ font: 'caption' }}>ID: {klb.id}</p>
                    <p style={{ font: 'caption' }}>Title: {klb.title}</p>
                    <p style={{ font: 'caption' }}>Article Body: {klb.articleBody}</p>
                    <p style={{ font: 'caption' }}>Description: {klb.description}</p>
                </li>))}

            <hr></hr>

            <h1 style={{ textAlign: 'center' }}>Post a KnowLedge Base Article</h1>


            <ClayForm.Group>
                <label htmlFor="text_id">Title: </label>

                <ClayInput
                    id="text_id"
                    onChange={event => setwttitle(event.target.value)}
                    placeholder="type..."
                    type="text"
                    value={wttitle}
                />
            </ClayForm.Group>

            <ClayForm.Group>
                <label htmlFor="text_id">Article Body: </label>

                <ClayInput
                    id="text_id"
                    onChange={event => setwtarticleBody(event.target.value)}
                    placeholder="type..."
                    type="text"
                    value={wtarticleBody}
                />
            </ClayForm.Group>

            <ClayForm.Group>
                <label htmlFor="text_id">Description: </label>

                <ClayInput
                    id="text_id"
                    onChange={event => setwtdescription(event.target.value)}
                    placeholder="type..."
                    type="text"
                    value={wtdescription}
                />
            </ClayForm.Group>

            <ClayButton displayType="primary" onClick={() => { PostKnowLedgeBaseArticle() }}>
                Post
            </ClayButton>

            <hr></hr>

            <h1 style={{ textAlign: 'center' }}>Delete a KnowLedge Base Article</h1>

            <ClayForm.Group>
                <label htmlFor="text_id">Id: </label>

                <ClayInput
                    id="text_id"
                    onChange={event => setwtid(event.target.value)}
                    placeholder="type..."
                    type="text"
                    value={wtid}
                />
            </ClayForm.Group>

            <ClayButton displayType={"primary"} onClick={() => {DeleteKnowLedgeBaseArticle()}}>
                Delete
            </ClayButton>

            <hr></hr>

            <h1 style={{ textAlign: 'center' }}>Update a KnowLedge Base Article</h1>

            <ClayForm.Group>
                <label htmlFor="text_id">Id: </label>

                <ClayInput
                    id="text_id"
                    onChange={event => setrwtid(event.target.value)}
                    placeholder="type..."
                    type="text"
                    value={rwtid}
                />
            </ClayForm.Group>

            <ClayForm.Group>
                <label htmlFor="text_id">Title: </label>

                <ClayInput
                    id="text_id"
                    onChange={event => setrwttitle(event.target.value)}
                    placeholder="type..."
                    type="text"
                    value={rwttitle}
                />
            </ClayForm.Group>

            <ClayForm.Group>
                <label htmlFor="text_id">Article Body: </label>

                <ClayInput
                    id="text_id"
                    onChange={event => setrwtarticleBody(event.target.value)}
                    placeholder="type..."
                    type="text"
                    value={rwtarticleBody}
                />
            </ClayForm.Group>

            <ClayForm.Group>
                <label htmlFor="text_id">Description: </label>

                <ClayInput
                    id="text_id"
                    onChange={event => setrwtdescription(event.target.value)}
                    placeholder="type..."
                    type="text"
                    value={rwtdescription}
                />
            </ClayForm.Group>

            <ClayButton displayType={"primary"} onClick={() => { UpdateKnowLedgeBase()}}>
                Update
            </ClayButton>


        </div>
    )
}

export default KnowLedgeBaseArticle;