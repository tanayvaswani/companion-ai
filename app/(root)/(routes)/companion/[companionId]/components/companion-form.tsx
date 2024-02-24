"use client";

import * as z from "zod";
import { Category, Companion } from "@prisma/client";

const formSchema = z.object({});

interface CompanionFormProps {
  initialData: Companion | null;
  categories: Category[];
}

const CompanionForm = ({ initialData, categories }: CompanionFormProps) => {
  return <div>CompanionForm</div>;
};

export default CompanionForm;
