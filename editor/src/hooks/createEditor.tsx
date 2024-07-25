import { useEffect, useRef } from 'react'
import { docCreator, viewCreator } from '../lib/helpers'

const useCreatorEditor = ({ initialContent }: { initialContent?: string }) => {
    const editorRef = useRef(null)
    const editor = <div ref={editorRef} ></div>
    useEffect(() => {

        let doc = docCreator({
            initialContent
        })


        let newView = viewCreator({
            editorRef,
            doc
        })

        return () => {
            newView.destroy();
        };

    }, [])
    return {
        editor
    }
}

export default useCreatorEditor