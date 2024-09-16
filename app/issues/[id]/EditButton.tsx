import React from 'react';
import { Link, Button} from "@radix-ui/themes";
import { FaPencil } from "react-icons/fa6";


const EditButton = ({issueId}:{issueId:number}) => {
    return (
        <Button className="flex text-white">
        <FaPencil />
        <Link className="!text-white" href={`/issues/${issueId}/edit`}>Edit Issues</Link>
      </Button>
    );
}

export default EditButton;
