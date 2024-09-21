"use client";
import { useState } from "react";
import { TextField, Button, Callout } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { IssueSchema } from "../../../validationSchemas";
import { z } from "zod";
import { ErrorMessage } from "../../../components";
import Spinner from "../../../components/Spinner";
import { Issue } from "@prisma/client";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

type issueFormDetails = z.infer<typeof IssueSchema>;
const IssueForm = ({ issue }: { issue?: Issue }) => {
  const [err, setErr] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<issueFormDetails>({
    resolver: zodResolver(IssueSchema),
  });
  const router = useRouter();

  return (
    <>
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
            defaultValue={issue?.title}
          ></TextField.Root>

          <ErrorMessage>{errors.title?.message}</ErrorMessage>

          <Controller
            name="description"
            defaultValue={issue?.description}
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
            {issue ? "edit" : "create"} {isSubmitting && <Spinner />}
          </Button>
        </form>
      </div>
    </>
  );
};

export default IssueForm;
