import ClayButton from "@clayui/button";
import ClayForm, { ClayInput } from '@clayui/form';

import React, { useCallback, useEffect, useState } from "react";



function Blogs() {

    const [blogs, setBlogs] = useState([]);
    const [headline, setheadline] = useState('');
    const [articleBody, setarticleBody] = useState('');
    const [description, setdescription] = useState('');
    const [id, setId] = useState('');
    const [rwtheadline, setrwtheadline] = useState('');
    const [rwtarticleBody, setrwtarticleBody] = useState('');
    const [rwtdescription, setrwtdescription] = useState('');
    const [rwtid, setrwtid] = useState('');
    const siteid = Liferay.ThemeDisplay.getSiteGroupId();

    function GetId() {
        return Liferay.Util.fetch(
            `http://localhost:8080/o/headless-delivery/v1.0/sites/${siteid}/blog-postings/`,
            {
                method: 'GET',
                body: JSON.stringify()

            }
        )
            .then(response => (response.json()))
            .then(res => { setBlogs(res.items) })
    }

    function PostId() {
        return Liferay.Util.fetch(
            `http://localhost:8080/o/headless-delivery/v1.0/sites/${siteid}/blog-postings`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "headline": headline,
                    "articleBody": articleBody,
                    "description": description
                }),
            }
        ).then(() => {
            setheadline('');
            setarticleBody('');
            setdescription('');
        });
    }

    function DeleteId() {
        return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${id}`,
            {
                method: 'DELETE',
                headers: {
                },
            }
        ).then(() => {
            setId('');
        });
    }

    function Updateid() {
        return Liferay.Util.fetch(
            `http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${rwtid}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({
                    "headline": rwtheadline,
                    "articleBody": rwtarticleBody,
                    "description": rwtdescription,
                }),
            }
        ).then(() => {
            setrwtheadline('');
            setrwtarticleBody('');
            setrwtdescription('');
            setrwtid('');
        });
    }



    return (
        <div style={{ margin: 'auto', padding: '20px', width: '75%' }}>

            <h1>Blogs</h1>

            <br></br>

            <h1 style={{ textAlign: 'center' }}>GET </h1>

            <ClayButton style={{ textAlign: 'center' }} displayType="primary" onClick={() => { GetId() }}>
                GET
            </ClayButton>


            <div style={{ margin: 'auto', padding: '20px', width: '50%' }} >
                <h2 style={{ textAlign: 'center' }} >
                    Blogs
                </h2>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <p style={{ font: 'caption' }}>Headline: {blog.headline}</p>
                        <br></br>
                        <p style={{ font: 'caption' }}>ArticleBody: {blog.articleBody}</p>
                        <br></br>
                        <p style={{ font: 'caption' }}>Description: {blog.description}</p>
                        <br></br>
                        <p style={{ font: 'caption' }}>ID: {blog.id}</p>
                    </li>
                ))}
            </div>

            <hr></hr>

            <h1 style={{ textAlign: 'center' }}>Post </h1>

            <ClayForm.Group>
                <label htmlFor="text_id">Headline</label>

                <ClayInput
                    id="text_id"
                    onChange={event => setheadline(event.target.value)}
                    placeholder="type..."
                    type="text"
                    value={headline}
                />
            </ClayForm.Group>

            <ClayForm.Group>
                <label htmlFor="text_id">Article Body</label>

                <ClayInput
                    id="text_id"
                    onChange={event => setarticleBody(event.target.value)}
                    placeholder="type..."
                    type="text"
                    value={articleBody}
                />
            </ClayForm.Group>

            <ClayForm.Group>
                <label htmlFor="text_id">Description</label>

                <ClayInput
                    id="text_id"
                    onChange={event => setdescription(event.target.value)}
                    placeholder="type..."
                    type="text"
                    value={description}
                />
            </ClayForm.Group>


            <ClayButton displayType={"primary"} onClick={() => PostId()}>
                POST
            </ClayButton>


            <hr></hr>


            <h1 style={{ textAlign: 'center' }}>Delete </h1>

            <ClayForm.Group>
                <label htmlFor="text_id">Type Id to Delete</label>

                <ClayInput
                    id="text_id"
                    onChange={event => setId(event.target.value)}
                    placeholder="type..."
                    type="text"
                    value={id}
                />
            </ClayForm.Group>


            <ClayButton displayType="primary" onClick={() => { DeleteId() }}>
                DELETE
            </ClayButton>

            <hr></hr>

            <h1 style={{ textAlign: 'center' }}>Update </h1>

            <ClayForm.Group>
                <label htmlFor="text_id">ID</label>

                <ClayInput
                    id="text_id"
                    onChange={event => setrwtid(event.target.value)}
                    placeholder="type..."
                    type="text"
                    value={rwtid}
                />
            </ClayForm.Group>

            <ClayForm.Group>
                <label htmlFor="text_id">Headline</label>

                <ClayInput
                    id="text_id"
                    onChange={event => setrwtheadline(event.target.value)}
                    placeholder="type..."
                    type="text"
                    value={rwtheadline}
                />
            </ClayForm.Group>

            <ClayForm.Group>
                <label htmlFor="text_id">Article Body</label>

                <ClayInput
                    id="text_id"
                    onChange={event => setrwtarticleBody(event.target.value)}
                    placeholder="type..."
                    type="text"
                    value={rwtarticleBody}
                />
            </ClayForm.Group>

            <ClayForm.Group>
                <label htmlFor="text_id">Description</label>

                <ClayInput
                    id="text_id"
                    onChange={event => setrwtdescription(event.target.value)}
                    placeholder="type..."
                    type="text"
                    value={rwtdescription}
                />
            </ClayForm.Group>

            <ClayButton displayType="primary" onClick={() => { Updateid()}} >
                    UPDATE
            </ClayButton>

        </div>
    )
}

export default Blogs;