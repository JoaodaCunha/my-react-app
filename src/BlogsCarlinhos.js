import ClayButton from "@clayui/button";
import ClayForm, { ClayInput } from "@clayui/form";
import React, { useState, useCallback } from "react";

function PostCarlinhos() {

  const idsite = Liferay.ThemeDisplay.getSiteGroupId();

  const [headline, setHeadline] = useState("");
  const [headline2, setHeadline2] = useState("");
  const [articleBody, setArticleBody] = useState("");
  const [articleBody2, setArticleBody2] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [id, setId] = useState("");
  const [id2, setId2] = useState("");

  const getb = useCallback(() => {
    Liferay.Util.fetch(
      `/o/headless-delivery/v1.0/sites/${idsite}/blog-postings/`)
      .then(res => res.json())
      .then(data => setBlogs(data.items));
  })

  const postb = useCallback(() => {
    Liferay.Util.fetch(
      `/o/headless-delivery/v1.0/sites/${idsite}/blog-postings/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 'headline': headline, 'articleBody': articleBody })
    }).then(() => {
      setHeadline("");
      setArticleBody("");
    });
  }, [
    headline,
    articleBody
  ]);

  const putb = useCallback(() => {
    Liferay.Util.fetch(
      `/o/headless-delivery/v1.0/blog-postings/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 'headline': headline2, 'articleBody': articleBody2 })
    }).then(() => {
      setHeadline2("");
      setArticleBody2("");
    });
  }, [
    id,
    headline2,
    articleBody2
  ]);

  const delb = useCallback(() => {
    Liferay.Util.fetch(
      `/o/headless-delivery/v1.0/blog-postings/${id2}`, { method: "DELETE" }).then(() => setId(""))
  });

  return (
    <>
      <div style={{ padding: "20px", marginRight: '10px' }}>

        {blogs.map(blog => (
          <div key={blog.id}>
            {blog.id} {blog.headline}
          </div>
        ))}

        <ClayButton style={{ marginRight: '20px', marginTop: '30px' }} onClick={() => getb()}>
          Get
        </ClayButton><br></br><br></br>

        <ClayButton style={{ marginRight: '20px', marginTop: '25px' }} onClick={() => postb()}>
          Post
        </ClayButton>

        <ClayForm.Group>
          <label htmlFor="basicInputText" style={{ marginTop: '10px' }}>Headline:</label>
          <ClayInput
            id="basicInputText"
            onChange={e => setHeadline(e.target.value)}
            placeholder="Enter the Headline here"
            type="text"
            value={headline}
            style={{ marginRight: '20px', marginTop: '10px' }}></ClayInput>
        </ClayForm.Group>

        <ClayForm.Group>
          <label htmlFor="basicInputText">ArticleBody:</label>
          <ClayInput
            id="basicInputText"
            onChange={e => setArticleBody(e.target.value)}
            placeholder="Enter the ArticleBody here"
            type="text"
            value={articleBody}
            style={{ marginRight: '20px', marginTop: '10px' }}></ClayInput>
        </ClayForm.Group>

        <ClayButton style={{ marginRight: '20px', marginTop: '20px' }} onClick={() => putb()} >
          Update
        </ClayButton>

        <ClayForm.Group>
          <label htmlFor="basicInputText" style={{ marginTop: '10px' }}>Headline:</label>
          <ClayInput
            id="basicInputText"
            onChange={e => setHeadline2(e.target.value)}
            placeholder="Enter the Headline here"
            type="text"
            value={headline2}
            style={{ marginRight: '20px', marginTop: '10px' }}></ClayInput>
        </ClayForm.Group>

        <ClayForm.Group>
          <label htmlFor="basicInputText">ArticleBody:</label>
          <ClayInput
            id="basicInputText"
            onChange={e => setArticleBody2(e.target.value)}
            placeholder="Enter the ArticleBody here"
            type="text"
            value={articleBody2}
            style={{ marginRight: '20px', marginTop: '10px' }}></ClayInput>
        </ClayForm.Group>

        <ClayForm.Group>
          <label htmlFor="basicInputText">Id:</label>
          <ClayInput
            id="basicInputText"
            onChange={e => setId(e.target.value)}
            placeholder="Enter the Id here for Update"
            type="text"
            value={id}
            style={{ marginRight: '20px', marginTop: '10px' }}
          ></ClayInput>
        </ClayForm.Group>

        <ClayButton style={{ marginRight: '20px', marginTop: '20px' }} onClick={() => delb()}>
          Delete
        </ClayButton>

        <ClayForm.Group>
          <label htmlFor="basicInputText" style={{marginTop: '10px'}}>Id:</label>
          <ClayInput
            id="basicInputText"
            onChange={e => setId2(e.target.value)}
            placeholder="Enter the Id here for Delete"
            type="text"
            value={id2}
            style={{ marginRight: '20px', marginTop: '10px' }}
          ></ClayInput>
        </ClayForm.Group>

      </div >
    </>
  );

}

export default PostCarlinhos;