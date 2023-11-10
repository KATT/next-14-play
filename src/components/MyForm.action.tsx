"use server";

function handle(fd: FormData) {
  if (!fd.get("name")) {
    return <div className="text-red">enter a name plz</div>;
  }
  return <div className="text-green">no issues!</div>;
}

export async function postForm(
  currentState: ReturnType<typeof handle>,
  fd: FormData,
) {
  console.log({ currentState, fd });
  return handle(fd);
}
