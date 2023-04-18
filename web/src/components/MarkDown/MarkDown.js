import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import React from 'react'
import ReactMarkdown from 'react-markdown'
import * as styles from './markdown.module.scss'


const MarkDown = ({ content }) => {
    return (
        <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className={styles.reactMarkdown}/>
    )
}

export default MarkDown