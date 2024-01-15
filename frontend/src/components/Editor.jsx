import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import{ createPage} from "../adapters/page-adapter/";

const Editor = () => {
  const ejInstance = useRef();
  const pageId = useRef(null); 
  const idpage = useRef(4); 

  const initEditor = async () => {
    // await createNewPage();
    await createPage("titletest",  {
        "time": 1705173292465,
        "blocks": [],
        "version": "2.28.2"
      }, 3)
    console.log("What is goiingh on")
    const editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        ejInstance.current = editor;
      },
      autofocus: true,
      placeholder: 'test placeholeder',
      onChange: async () => {
        let content = await editor.saver.save();
        console.log(content);
        savePage(content);
      },
      tools: {
        header: Header,
        list: List,
      },
    });
  };

  const createNewPage = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/pages', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "title": "titletest3",
          "content": {
            "time": 1705173292465,
            "blocks": [],
            "version": "2.28.2"
          },
          "userID": 3  // Will make dynamic with cookie soon
        }),
      });

      const data = await response.json();
      console.log('New page created:', data);
      const zap = data;
      console.log("zap: " + zap);

      console.log(data);
      pageId.current = zap;
      idpage.current = zap;
      await mightdelete(zap);
      console.log(pageId.current);

    } catch (error) {
      console.error('Error creating news page:', error);
    }
  };

  const mightdelete = async (jap) => {
    pageId.current = jap;
  };

  const savePage = async (content) => {
    console.log(pageId.current);
    console.log(idpage.current);
    try {
      const response = await fetch(`http://localhost:3000/api/pages`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  content, page_id: (pageId.current || 4), user_id: 3 }),
      });

      const data = await response.json();
      console.log(pageId.current);
      console.log('Page saved:', data);
    } catch (error) {
      console.error('Error saving page:', error);
    }
  };

  useEffect(() => {
    if (ejInstance.current === null) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  return (
    <>
      <div id='editorjs'></div>
    </>
  );
};

export default Editor;