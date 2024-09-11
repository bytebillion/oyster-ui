import React, { useEffect, useId } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function EditorContainer({
	placeholder,
	onChange,
	defaultValue,
}) {
	const id = useId();
	const [value, setValue] = React.useState(defaultValue);

	// useEffect(() => {
	// 	const quill = new Quill(".editor");
	// 	quill.on("text-change", function (delta, oldDelta, source) {
	// 		// console.log("text-change", delta, oldDelta, source);
	// 	});
	// }, []);

	useEffect(() => {
		setValue(defaultValue);
	}, [defaultValue]);

	const _onChange = (val) => {
		if (onChange) onChange(val);
		setValue(val);
	};

	const modules = {
		toolbar: {
			container: [
				["bold", "italic", "underline"],
				[{ list: "ordered" }, { list: "bullet" }],
				["link"],
			],
		},
		clipboard: { matchVisual: false },
	};

	const formats = [
		"header",
		"bold",
		"italic",
		"underline",
		"list",
		"bullet",
		"link",
	];

	return (
		<ReactQuill
			key={id}
			placeholder={placeholder}
			theme="snow"
			modules={modules}
			formats={formats}
			value={value}
			onChange={_onChange}
			className="editor"
			scrollingContainer={".editor"}
			style={{ height: "100%" }}
		/>
	);
}
