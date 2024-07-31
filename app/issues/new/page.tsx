"use client";
import { useState } from "react";
import { TextField, Button, Callout, Text } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
import { z } from "zod";

type issueForm = z.infer<typeof createIssueSchema>;
const NewIssuePage = () => {
  const [err, setErr] = useState("");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<issueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const router = useRouter();
  return (
    <div className="max-w-xl">
      {err && (
        <Callout.Root color="red" className="my-5">
          <Callout.Text>{err}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className=" mt-2"
        onSubmit={handleSubmit(async (d) => {
          try {
            await axios.post("/api/issues", d);
            router.push("/");
          } catch (error) {
            setErr("oooooooooooooooooooooooooops!");
          }
        })}
      >
        <TextField.Root
          {...register("title")}
          placeholder="Search the docs…"
        ></TextField.Root>
        {errors.title && (
          <Text as="p" color="red">
            {errors.title.message}
          </Text>
        )}
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
        {errors.description && (
          <Text as="p" color="red">
            {errors.description.message}
          </Text>
        )}

        <Button className="!px-7">create</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
