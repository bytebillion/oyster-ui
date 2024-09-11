import React, { useEffect, useId } from "react";
import { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function EditorContainer({
	placeholder,
	onChange,
	defaultValueHtml,
}) {
	const [value, setValue] = React.useState(defaultValueHtml);

	useEffect(() => {
		setValue(defaultValueHtml);
		// console.log(defaultValueHtml);
	}, [defaultValueHtml]);

	const _onChange = (val) => {
		if (onChange) onChange(val);
		setValue(val);
	};

	const modules = {
		toolbar: {
			container: [
				["bold", "italic", "underline", "strike"],
				[{ size: ["small", false, "large", "huge"] }, { color: [] }],
				[
					{ list: "ordered" },
					{ list: "bullet" },
					{ indent: "-1" },
					{ indent: "+1" },
					{ align: [] },
					{ "code-block": true },
				],
				["link"],
				["clean"],
			],
		},
		clipboard: { matchVisual: false },
	};

	const formats = [
		"header",
		"bold",
		"italic",
		"underline",
		"strike",
		"size",
		"color",
		"list",
		"bullet",
		"indent",
		"link",
		"align",
		"code-block",
	];

	useEffect(() => {
		const extraToolbar = document.querySelector(".ql-snow");
		if (extraToolbar != null) {
			console.log("extra toolbar found");
			extraToolbar.remove();
		}

		let editor = new Quill("#quillEditor", {
			modules: modules,
			theme: "snow",
			formats: formats,
			placeholder: placeholder,
			value: value,
		});

		if (editor) {
			// editor.setContents(value);
			// editor.insertText(0, value);
			editor?.on("text-change", function () {
				_onChange({
					text: editor?.getText(),
					markdown: editor?.root.innerHTML,
				});
			});
		}
	}, []);

	return <div id="quillEditor"></div>;
}

/* TODO Usage:

	<EditorWrapperV2
		placeholder="Enter your text here"
		onChange={(obj) => {
			setDoc({ ...doc, text: obj.text, markdown: obj.markdown });
			setText(obj.text);
		}}
		defaultValueHtml={doc?.markdown}
		defaultValueText={doc?.text}
	/> 
*/
