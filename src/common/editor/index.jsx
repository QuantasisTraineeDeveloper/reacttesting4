import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorWrapper } from "./index.style";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = ({ editorState, setEditorState, onBlur }) => {
  const onChange = async (value) => {
    setEditorState(value);
  };
  return (
    <EditorWrapper>
      {/* <ReactQuill
        theme='snow'
        value={editorState}
        onChange={setEditorState}
        onBlur={onBlur}
      /> */}
      <Editor
        editorState={editorState}
        toolbarClassName='editor-toolbar'
        wrapperClassName='editor-wrapper'
        editorClassName='textEditor'
        onEditorStateChange={(value) => {
          onChange(value);
        }}
        toolbar={{
          options: ["inline", "blockType", "textAlign"],
          inline: {
            options: ["bold", "italic", "underline"],
          },
          blockType: {
            inDropdown: true,
            options: ["Normal", "H1", "H2", "H3"],
          },

          textAlign: {
            inDropdown: false,
            options: ["left", "center", "right", "justify"],
          },
        }}
      />
    </EditorWrapper>
  );
};

export default TextEditor;
