"use client";

import { useEffect } from "react";
import { postForm } from "./MyForm.action";
import { useFormState, useFormStatus } from "react-dom";

export function MyForm() {
  const formStatus = useFormStatus();
  const [state] = useFormState(postForm, null);
  console.log({ state });
  return (
    <form action={postForm} className="p-4 flex flex-col space-y-4">
      <label>
        Name <br />
        <input type="text" name="name" className="border" />
      </label>
      <button type="submit" className="border" disabled={formStatus.pending}>
        Submit
      </button>
      {state}
    </form>
  );
}

MyForm.Toast = function Toast(props: { text: string }) {
  useEffect(() => {
    alert(props.text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
