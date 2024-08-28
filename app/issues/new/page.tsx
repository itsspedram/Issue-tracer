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
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";

type issueForm = z.infer<typeof createIssueSchema>;
const NewIssuePage = () => {
  const [err, setErr] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      <button>test</button>
      {err && (
        <Callout.Root color="red" className="my-5">
          <Callout.Text>{err}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className=" mt-2"
        onSubmit={handleSubmit(async (d) => {
          try {
            setIsSubmitting(true);
            await axios.post("/api/issues", d);
            router.push("/");
          } catch (error) {
            setErr("oooooooooooooooooooooooooops!");
          } finally {
            setIsSubmitting(false);
          }
        })}
      >
        <TextField.Root
          {...register("title")}
          placeholder="Search the docs…"
        ></TextField.Root>

        <ErrorMessage>{errors.title?.message}</ErrorMessage>

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
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting} className="!px-7">
          create {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
