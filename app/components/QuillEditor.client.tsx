import { useEffect, useRef } from 'react'
import { useQuill } from 'react-quilljs'
import BlotFormatter from 'quill-blot-formatter'

export default function QuillEditor({
  onTextChange,
  fullAccess,
  quillPlaceholder,
  id,
}: {
  onTextChange: (e: string) => void
  fullAccess: boolean
  quillPlaceholder: string
  id: string
}) {
  const theme = 'snow'
  const modules = fullAccess
    ? {
        toolbar: [
          ['bold', 'italic', 'underline'],
          [{ align: [] }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['link', 'image'],
          [{ color: [] }, { background: [] }],

          ['clean'],
        ],
        clipboard: {
          matchVisual: false,
        },
        blotFormatter: {},
      }
    : {
        toolbar: [['bold', 'italic', 'underline']],
        clipboard: {
          matchVisual: false,
        },
        blotFormatter: {},
      }
  const placeholder = `Write your ${quillPlaceholder} here....`
  var formats = [
    'bold',
    'italic',
    'underline',
    'list',
    'header',
    'link',
    'image',
    'align',
    'color',
    'background',
  ]

  const editorRef = useRef(null)
  const { quill, quillRef, Quill } = useQuill({
    theme,
    modules,
    formats,
    placeholder,
  })

  if (Quill && !quill) {
    Quill.register('modules/blotFormatter', BlotFormatter)
  }

  useEffect(() => {
    if (quill) {
      quill?.on('text-change', () => {
        onTextChange(quill.root.innerHTML)
      })
    }
  }, [quill, onTextChange])

  return (
    <div
      className="flex h-full w-full flex-col rounded-lg bg-white"
      id="quillEditor"
      ref={editorRef}
    >
      <div ref={quillRef} />
    </div>
  )
}