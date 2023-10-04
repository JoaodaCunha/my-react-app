import React, { useState, useCallback } from 'react';
import ClayForm, { ClayInput } from '@clayui/form';
import ClayButton from '@clayui/button';

function KnowledgeCArlinhos() {
    
    const idsite = Liferay.ThemeDisplay.getSiteGroupId();
    
    // Folder const
    
    const [folders, setFolders] = useState([]);
    const [name, setName] = useState('');
    const [name2, setName2] = useState('');
    const [folderId, setFolderId] = useState('');
    const [folderId2, setFolderId2] = useState('');
       
    // Article Body const

    const [title, setTitle] = useState('');
    const [title2, setTitle2] = useState('');
    const [articleBody, setArticleBody] = useState('');
    const [articleBody2, setArticleBody2] = useState('');
    const [article, setArticle] = useState([]);
    const [idArticle, setIdArticle] = useState('');
    const [idArticle2, setIdArticle2] = useState('');

    // Knowledge Base: Folder
    
    const getbf = useCallback(() => {
        Liferay.Util.fetch(`/o/headless-delivery/v1.0/sites/${idsite}/knowledge-base-folders`)
            .then(res => res.json())
            .then(data => setFolders(data.items));
    }, [folders]);

    const postbf = useCallback(() => {
        Liferay.Util.fetch(`/o/headless-delivery/v1.0/sites/${idsite}/knowledge-base-folders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'name': name })
        }).then(() => {
            setName('');
        });
    }, [name]);

    const putbf = useCallback(() => {
        Liferay.Util.fetch('/o/headless-delivery/v1.0/knowledge-base-folders/' + folderId, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'name': name2 })
        }).then(() => {
            setName2('');
        });
    },
        [
            folderId,
            name2
        ]);

    const delbf = useCallback(() => {
        Liferay.Util.fetch(`/o/headless-delivery/v1.0/knowledge-base-folders/${folderId2}`, { method: 'DELETE' })
            .then(() => setFolderId2(''));
    }, [folderId2]);

    // Knowledge Base: Basic Article

    const getrt = useCallback(() => {
        Liferay.Util.fetch(`/o/headless-delivery/v1.0/sites/${idsite}/knowledge-base-articles/`)
            .then(res => res.json())
            .then(data => setArticle(data.items));
    }, [article]);

    const postrt = useCallback(() => {
        Liferay.Util.fetch(`/o/headless-delivery/v1.0/sites/${idsite}/knowledge-base-articles/` , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'title': title, 'articleBody': articleBody })
        }).then(() => {
            setTitle('');
            setArticleBody('');
        });
    }, [title, articleBody]);

    const putrt = useCallback(() => {

        Liferay.Util.fetch(`/o/headless-delivery/v1.0/knowledge-base-articles/${idArticle2}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'title': title2, 'articleBody': articleBody2 })
        }).then(() => {
            setTitle2('');
            setArticleBody2('')
        });
    }, [
        idArticle2,
        title2,
        articleBody2
    ]);

    const delrt = useCallback(() => {
        Liferay.Util.fetch(`/o/headless-delivery/v1.0/knowledge-base-articles/${idArticle}`, { method: 'DELETE' })
            .then(() => setIdArticle(''));
    }, [idArticle]);

    return (
        <>
            <div style={{ padding: "20px", marginRight: '10px' }}>

                <h1>
                    Folder:
                </h1>

                {folders.map(folder => (
                    <div key={folder.id}>
                        {folder.id} {folder.name}
                    </div>
                ))}

                <ClayButton style={{ marginRight: '20px', marginTop: '30px' }} onClick={() => getbf()}>
                    Get
                </ClayButton><br></br><br></br>

                <ClayButton style={{ marginRight: '20px', marginTop: '20px' }} onClick={() => postbf()}>
                    Post
                </ClayButton>

                <ClayForm.Group>
                    <label htmlFor="basicInputText" style={{marginTop: '10px'}}>Name:</label>
                    <ClayInput
                        id="basicInputText"
                        onChange={e => setName(e.target.value)}
                        placeholder="Enter the name here"
                        type="text"
                        value={name}>
                    </ClayInput>
                </ClayForm.Group>

                <ClayButton style={{ marginRight: '20px', marginTop: '20px' }} onClick={() => putbf()}>
                    Update
                </ClayButton>

                <ClayForm.Group>
                    <label htmlFor="basicInputText" style={{marginTop: '10px'}}>Name:</label>
                    <ClayInput
                        id="basicInputText"
                        onChange={e => setName2(e.target.value)}
                        placeholder="Enter the name here"
                        type="text"
                        value={name2}>
                    </ClayInput>
                </ClayForm.Group>

                <ClayForm.Group>
                    <label htmlFor="basicInputText">Id:</label>
                    <ClayInput
                        id="basicInputText"
                        onChange={e => setFolderId(e.target.value)}
                        placeholder="Enter the Id for Update"
                        type="text"
                        value={folderId}
                        style={{ marginRight: '20px', marginTop: '10px' }}></ClayInput>
                </ClayForm.Group>

                <ClayButton style={{ marginRight: '20px', marginTop: '20px' }} onClick={() => delbf()}>
                    Delete
                </ClayButton>

                <ClayForm.Group>
                    <label htmlFor="basicInputText" style={{ marginTop: '10px' }}>Id:</label>
                    <ClayInput
                        id="basicInputText"
                        onChange={e => setFolderId2(e.target.value)}
                        placeholder="Enter the Id for Delete"
                        type="text"
                        value={folderId2}
                        style={{ marginRight: '20px', marginTop: '10px' }}></ClayInput>
                </ClayForm.Group><br></br>

                <h1 style={{marginTop: '40px'}}>
                    Article:
                </h1>
                {article.map(article2 => (
                    <div key={article2.id}>
                        {article2.id} {article2.title}
                    </div>
                ))}

                <ClayButton style={{ marginRight: '20px', marginTop: '30px' }} onClick={() => getrt()}>
                    Get
                </ClayButton><br></br><br></br>

                <ClayButton style={{ marginRight: '20px', marginTop: '30px' }} onClick={() => postrt()}>
                    Post
                </ClayButton>

                <ClayForm.Group>
                    <label htmlFor="basicInputText" style={{ marginTop: '10px' }}>Title:</label>
                    <ClayInput
                        id="basicInputText"
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Enter the Title here"
                        type="text"
                        value={title}
                        style={{ marginRight: '20px', marginTop: '10px' }}></ClayInput>
                </ClayForm.Group>

                <ClayForm.Group>
                    <label htmlFor="basicInputText">Aricle Body:</label>
                    <ClayInput
                        id="basicInputText"
                        onChange={e => setArticleBody(e.target.value)}
                        placeholder="Enter the Article Body here"
                        type="text"
                        value={articleBody}
                        style={{ marginRight: '20px', marginTop: '10px' }}></ClayInput>
                </ClayForm.Group>

                <ClayButton style={{ marginRight: '20px', marginTop: '30px' }} onClick={() => putrt()}>
                    Update
                </ClayButton>

                <ClayForm.Group>
                    <label htmlFor="basicInputText" style={{ marginTop: '10px' }}>Title:</label>
                    <ClayInput
                        id="basicInputText"
                        onChange={e => setTitle2(e.target.value)}
                        placeholder="Enter the Title here"
                        type="text"
                        value={title2}
                        style={{ marginRight: '20px', marginTop: '10px' }}></ClayInput>
                </ClayForm.Group>

                <ClayForm.Group>
                    <label htmlFor="basicInputText">Aricle Body:</label>
                    <ClayInput
                        id="basicInputText"
                        onChange={e => setArticleBody2(e.target.value)}
                        placeholder="Enter the Article Body here"
                        type="text"
                        value={articleBody2}
                        style={{ marginRight: '20px', marginTop: '10px' }}></ClayInput>
                </ClayForm.Group>

                <ClayForm.Group>
                    <label htmlFor="basicInputText">Id:</label>
                    <ClayInput
                        id="basicInputText"
                        onChange={e => setIdArticle2(e.target.value)}
                        placeholder="Enter the Id here for Update"
                        type="text"
                        value={idArticle2}
                        style={{ marginRight: '20px', marginTop: '10px' }}></ClayInput>
                </ClayForm.Group>

                <ClayButton style={{ marginRight: '20px', marginTop: '30px' }} onClick={() => delrt()}>
                    Delete
                </ClayButton>

                <ClayForm.Group>
                    <label htmlFor="basicInputText" style={{ marginTop: '10px' }}>Id:</label>
                    <ClayInput
                        id="basicInputText"
                        onChange={e => setIdArticle(e.target.value)}
                        placeholder="Enter the Id here for Delete"
                        type="text"
                        value={idArticle}
                        style={{ marginRight: '20px', marginTop: '10px' }}></ClayInput>
                </ClayForm.Group>

            </div>
        </>
    )
}

export default KnowledgeCArlinhos;