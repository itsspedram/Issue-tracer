"use client";
import { TextField, Button } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface issueForm {
  title: string;
  description: string;
}
const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<issueForm>();
  const router = useRouter()
  return (
    <>
      <form
        className="w-[700px] mt-2"
        onSubmit={handleSubmit(async (d) => {
          await axios.post("/api/issues", d);
          router.push('/')
        })}
      >
        <TextField.Root
          {...register("title")}
          placeholder="Search the docs…"
        ></TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE
              className="mt-5"
              {...field}
              placeholder="Reply to comment…"
            />
          )}
        />
        <Button className="!px-7">create</Button>
      </form>
    </>
  );
};

export default NewIssuePage;
