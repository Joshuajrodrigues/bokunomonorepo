

import '../css/prosemirror.css'
import useCreatorEditor from "../hooks/createEditor"

const Editor = ({ initialContent }: { initialContent?: string }) => {

    const { editor } = useCreatorEditor({
        initialContent
    })


    return (
        <>
            {editor}
        </>

    )
}

export default Editor