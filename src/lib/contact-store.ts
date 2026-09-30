import { promises as fs } from "fs";
import path from "path";

export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
};

const dataDir = path.join(process.cwd(), "data");
const filePath = path.join(dataDir, "contacts.json");

async function ensureFile() {
  await fs.mkdir(dataDir, { recursive: true });

  try {
    await fs.access(filePath);
  } catch {
    await fs.writeFile(filePath, "[]", "utf-8");
  }
}

export async function readContacts(): Promise<ContactSubmission[]> {
  await ensureFile();
  const content = await fs.readFile(filePath, "utf-8");

  try {
    return JSON.parse(content) as ContactSubmission[];
  } catch {
    return [];
  }
}

export async function saveContact(data: Omit<ContactSubmission, "id" | "createdAt">) {
  await ensureFile();
  const contacts = await readContacts();

  const submission: ContactSubmission = {
    id: crypto.randomUUID(),
    ...data,
    createdAt: new Date().toISOString(),
  };

  contacts.unshift(submission);
  await fs.writeFile(filePath, JSON.stringify(contacts, null, 2), "utf-8");
  return submission;
}
