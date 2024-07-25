import { useEffect, useRef } from "react"

import { exampleSetup } from "prosemirror-example-setup"
import { DOMParser } from "prosemirror-model"
import { EditorState } from "prosemirror-state"
import { EditorView } from "prosemirror-view"
import { mySchema } from "./schema"

import './css/prosemirror.css'

const Editor = ({ initialContent }: { initialContent?: string }) => {
    const editorRef = useRef(null)
    useEffect(() => {
        let doc = null;
        if (initialContent) {
            const element = document.createElement("div");
            element.innerHTML = initialContent;
            doc = DOMParser.fromSchema(mySchema).parse(element);
        } else {
            doc = mySchema.topNodeType.createAndFill()!;
        }
        let newView = new EditorView(editorRef.current, {
            state: EditorState.create({
                doc,
                schema: mySchema,
                plugins: exampleSetup({ schema: mySchema })
            })
        })
        return () => {

            newView.destroy();
        };
    }, [])
    const editor = <div ref={editorRef} ></div>

    return (
        <>
            {editor}
        </>

    )
}

export default Editor