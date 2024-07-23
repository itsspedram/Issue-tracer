'use client'
import { TextField, TextArea, Button, ThemePanel } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
const NewIssuePage = () => {
  return (
    <>
      <div className="w-[700px] mt-2">
        <TextField.Root placeholder="Search the docs…"></TextField.Root>
        <SimpleMDE className="mt-5" placeholder="Reply to comment…" />
        <Button className="!px-7">create</Button>
      </div>
    </>
  );
};

export default NewIssuePage;
