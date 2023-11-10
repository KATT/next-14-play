"use server";

export async function postForm(currentState: unknown, fd: FormData) {
  console.log("postForm", { currentState, fd });
  if (!fd.get("name")) {
    return <div className="text-red">enter a name plz</div>;
  }
  return <div className="text-green">no issues!</div>;
}
