
import { exampleSetup } from "prosemirror-example-setup";
import { DOMParser, Node } from "prosemirror-model";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { mySchema } from "../editor/schema";

export const docCreator = ({ initialContent }: { initialContent?: string }) => {
    let doc = null;
    if (initialContent) {
        const element = document.createElement("div");
        element.innerHTML = initialContent;
        doc = DOMParser.fromSchema(mySchema).parse(element);
        return doc
    } else {
        doc = mySchema.topNodeType.createAndFill()!;
        return doc
    }
}

export const viewCreator = ({ editorRef, doc }: {
    editorRef: React.MutableRefObject<null>,
    doc: Node
}) => {
    return new EditorView(editorRef.current, {
        state: EditorState.create({
            doc,
            schema: mySchema,
            plugins: exampleSetup({ schema: mySchema })
        })
    })
}

