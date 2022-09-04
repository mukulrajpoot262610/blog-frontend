import EditorJS from '@editorjs/editorjs';
import Embed from '@editorjs/embed';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import List from '@editorjs/list';
import { StyleInlineTool } from 'editorjs-style';
import Tooltip from 'editorjs-tooltip';
import _ from 'lodash.debounce';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { CloudImage } from './UploadImage/CloudImage';

const EDITTOR_HOLDER_ID = 'editorjs';

const CustomEditor = (props) => {
  const { setContent, link } = props;

  const { content } = useSelector((state) => state.course);

  const DEFAULT_INITIAL_DATA = () => {
    return content && JSON.parse(content?.content);
  };

  const isInstance = (useRef < EditorJS) | (null > null);

  /////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (!isInstance.current) {
      if (link) {
        content && initEditor();
      } else {
        initEditor();
      }
    }
    return () => {
      if (isInstance.current) {
        isInstance.current.destroy();
        isInstance.current = null;
      }
    };
  }, [content, isInstance, initEditor]);
  //////////////////////////////////////////////////////////////////////////////

  // save images in Cloudinary

  const onFileChange = async (file) => {
    const form_data = new FormData();
    let preset = 'le6z43k7';
    if (preset) {
      form_data.append('upload_preset', preset);
    }
    if (file) {
      form_data.append('file', file);
      const imageUrl = await CloudImage(form_data);

      if (imageUrl) {
        console.log(imageUrl);

        return imageUrl;
      } else {
        return 'nahi hai image'; // <-- put an error image url here
      }
    }

    return ' nahi hai hai image'; // <-- put an error image url here
  };

  //////////////////////////////////////////////////////////////////////////////////
  const initEditor = () => {
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      data: DEFAULT_INITIAL_DATA(),
      onChange: _(function () {
        try {
          contents();
        } catch (err) {
          console.log(err);
        }
      }, 3000),
      autofocus: true,
      tools: {
        style: StyleInlineTool,
        tooltip: {
          class: Tooltip,
          config: {
            location: 'left',
            highlightColor: '#FFEFD5',
            underline: true,
            backgroundColor: '#154360',
            textColor: '#FDFEFE',
            holder: 'editorId',
          },
        },

        embed: Embed,

        header: {
          class: Header,
          inlineToolbar: true,
          config: {
            defaultLevel: 1,
          },
        },
        image: {
          class: ImageTool,
          config: {
            uploader: {
              async uploadByFile(file) {
                return onFileChange(file).then((imageUrl) => {
                  return {
                    success: 1,
                    file: {
                      url: imageUrl,
                    },
                  };
                });
              },
            },
          },
        },

        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered',
          },
        },
      },
    });
    async function contents() {
      try {
        const output = await editor.save();
        setContent(JSON.stringify(output));
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="Editor_class">
        <div id={EDITTOR_HOLDER_ID}> </div>
      </div>
    </>
  );
};

export default CustomEditor;
