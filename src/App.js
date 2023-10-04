import React from 'react';
import Blogs from './Blogs';
import DocumentMedia from './DocumentMedia';
import KnowLedgeBaseFolder from './KnowledgeBaseFolder';
import KnowLedgeBaseArticle from './KnowledgeBaseArticle';
import DocumentsCarlinhos from './DocumentsCarlinhos';
import PostCarlinhos from './BlogsCarlinhos';
import KnowledgeCArlinhos from './KnowledgeCArlinhos';



function App() {
    return (
        <div>
            <Blogs />
            <hr></hr>
            <DocumentMedia />
            <hr></hr>
            <KnowLedgeBaseFolder />
            <hr></hr>
            <KnowLedgeBaseArticle />
            <hr></hr><hr></hr>
            <DocumentsCarlinhos></DocumentsCarlinhos>
            <hr></hr>
            <PostCarlinhos></PostCarlinhos>
            <hr></hr>
            <KnowledgeCArlinhos></KnowledgeCArlinhos>
            
        


        </div>
    )
}

export default App;