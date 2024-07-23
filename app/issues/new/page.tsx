import { TextField, TextArea, Button, ThemePanel } from "@radix-ui/themes";
const NewIssuePage = () => {
  return (
    <>
      <div className="w-[700px] mt-2">
        <TextField.Root placeholder="Search the docs…"></TextField.Root>
        <TextArea className="my-5" placeholder="Reply to comment…" />
        <Button className="!px-7">create</Button>
      </div>
    </>
  );
};

export default NewIssuePage;
