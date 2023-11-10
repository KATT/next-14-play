"use client"

import { post } from "./MyForm.action"


export function MyForm() {
    return <form action={post} className="p-4 flex flex-col space-y-4">
        <label>
        <input type="text" name="name" />
        </label>
        <button type="submit">Submit</button>
    </form>
}