"use client";
import { TextField, Button, Callout } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface issueForm {
  title: string;
  description: string;
}
const NewIssuePage = () => {
  const [err,setErr]=useState("")
  const { register, control, handleSubmit } = useForm<issueForm>();
  const router = useRouter();
  return (
    <div className="max-w-xl">
      {err&&<Callout.Root color="red" className="my-5">
        <Callout.Text>{err}</Callout.Text>
      </Callout.Root>}
      <form
        className=" mt-2"
        onSubmit={handleSubmit(async (d) => {
          try {
            await axios.post("/api/issues", d);
            router.push("/");
          } catch (error) {
              setErr("oooooooooooooooooooooooooops!")
          }
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
    </div>
  );
};

export default NewIssuePage;
