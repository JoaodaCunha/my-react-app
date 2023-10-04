import React, { useState, useCallback } from 'react';
import ClayButton from '@clayui/button';
import ClayForm, { ClayInput } from '@clayui/form';

function DocumentsCarlinhos() {

  const idsite = Liferay.ThemeDisplay.getSiteGroupId();

  const [docs, setDocs] = useState([]);
  const [docsId, setDocsId] = useState("");
  const [docsId2, setDocsId2] = useState("");

  const get = useCallback(() => {
    Liferay.Util.fetch(`/o/headless-delivery/v1.0/sites/${idsite}/documents/`)
      .then(res => res.json())
      .then(data => setDocs(data.items));
  })


  const post = useCallback(() => {

    const formData = new FormData();
    const fileField = document.getElementById('inp');
    formData.append("file", fileField.files[0]);
    Liferay.Util.fetch(`/o/headless-delivery/v1.0/sites/${idsite}/documents/`, {
      method: "POST", body: formData
    })
  })

  const put = useCallback(() => {
    const formData = new FormData();
    const fileField = document.getElementById('inp2');
    formData.append("file", fileField.files[0]);
    Liferay.Util.fetch(
      `/o/headless-delivery/v1.0/documents/${docsId}`, {
      method: "PUT", body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  })

  const del = useCallback(() => {
    Liferay.Util.fetch(
      `/o/headless-delivery/v1.0/documents/${docsId2}`, { method: "DELETE" }).then(() => setDocsId2(""))
  })

  return (
    <>
      <div style={{ padding: "20px", marginRight: '10px' }}>
        {docs.map(doc => (
          <div key={doc.id}>
            {doc.id} {doc.title}
          </div>
        ))}

        <ClayButton style={{ marginRight: '20px', marginTop: '30px' }} onClick={() => get()}>
          Get
        </ClayButton><br></br><br></br>

        <ClayButton style={{ marginRight: '20px', marginTop: '20px' }} onClick={() => post()}>
          Upload
        </ClayButton><br></br><input type="file" id='inp' style={{ marginRight: '20px', marginTop: '10px', fontSize: '15px' }}></input><br></br><br></br>

        <ClayButton style={{ marginRight: '20px', marginTop: '25px' }} onClick={() => put()}>
          Update
        </ClayButton><br></br><input type="file" id='inp2' style={{ marginRight: '20px', marginTop: '10px', fontSize: '15px' }}></input><br></br>

        <ClayForm.Group>
          <label htmlFor="basicInputText" style={{ marginTop: '10px' }}>Id:</label>
          <ClayInput
            id="ipt1"
            onChange={e => setDocsId(e.target.value)}
            placeholder="Enter the Id  here for Update"
            type="text"
            value={docsId}
            style={{ marginTop: '10px', fontSize: '15px' }}
          ></ClayInput>
        </ClayForm.Group>

        <ClayButton style={{ marginRight: '20px', marginTop: '20px' }} onClick={() => del()}>
          Delete
        </ClayButton><br></br>

        <ClayForm.Group>
          <label htmlFor="basicInputText" style={{ marginTop: '10px' }}>Id:</label>
          <ClayInput
            id="ipt1"
            onChange={e => setDocsId2(e.target.value)}
            placeholder="Enter the Id here for Delete"
            type="text"
            value={docsId2}
            style={{ marginTop: '10px', fontSize: '15px' }}
          ></ClayInput>
        </ClayForm.Group>

      </div>
    </>
  );
}

export default DocumentsCarlinhos;