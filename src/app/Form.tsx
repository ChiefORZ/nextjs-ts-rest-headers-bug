"use client";

import { documentController } from "@/controller/documentController";
import classes from "./Form.module.css";

export const Form = () => {
	const documentMutation = documentController.createDocument.useMutation();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const title = formData.get("title");
		const file = formData.get("file");
		await documentMutation.mutateAsync({
			body: formData,
		});
	};

	return (
		<div>
			<h1>Document Upload Form</h1>
			<form onSubmit={handleSubmit}>
				<div className={classes.row}>
					<label htmlFor="title">Title</label>
					<input type="text" id="title" name="title" />
				</div>
				<div className={classes.row}>
					<label htmlFor="file">File</label>
					<input type="file" id="file" name="file" />
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
