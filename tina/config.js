import { defineConfig } from "tinacms";
import { accommodationFields } from "./templates";
import { anlassFields } from "./templates";
import { wohnungFields } from "./templates";
import { defaultFields } from "./templates";
import { furnishingFields } from "./templates";
import { gastronomieFields } from "./templates";
import { homeFields } from "./templates";
import { labelFields } from "./templates";
import { locationFields } from "./templates";
import { metaFields } from "./templates";
import { newsFields } from "./templates";
import { zimmerFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "2995bb02-39ae-4483-97c2-65e59b140612", // Get this from tina.io
  token: "0ac67e560020006ee793b01c388fa36ef1feac10", // Get this from tina.io
  client: { skip: true },
  build: {
    host: "0.0.0.0",
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Startseite",
        name: "startseite",
        path: "content",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Titel",
          },
          {
            type: "string",
            name: "title_emotional",
            label: "Emotionaler Titel",
          },
          {
            type: "image",
            name: "images",
            label: "Bilder",
            list: true,
          },
          ...metaFields(),
        ],
      },
      {
        format: "md",
        label: "News",
        name: "news",
        path: "content/news",
        match: {
          include: "**/*",
        },
        ui: {
          filename: {
            slugify: (values) => {
              // Values is an object containing all the values of the form.
              return `${values?.title
                ?.toString()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "") // Replace diacritical marks
                .replace(/ß/g, "ss")  // Replace "ß" with "ss"
                .toLowerCase()
                .trim()
                .replace(/\s+/g, "-")
                .replace(/[^\w-]+/g, "")
                .replace(/--+/g, "-")}`;
            },
          },
        },
        fields: [...newsFields()],
      },
      {
        format: "md",
        label: "Schlafen",
        name: "schlafen",
        path: "content",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "schlafen",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titel",
          },
          {
            type: "string",
            name: "title_emotional",
            label: "Emotionaler Titel",
          },
          {
            type: "image",
            name: "cover",
            label: "Cover",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...metaFields(),
        ],
      },
      {
        format: "md",
        label: "Zimmer",
        name: "zimmer",
        path: "content/zimmer",
        match: {
          include: "**/*",
        },
        fields: [...zimmerFields()],
      },
      {
        format: "md",
        label: "Wohnungen",
        name: "wohnungen",
        path: "content/wohnungen",
        match: {
          include: "**/*",
        },
        fields: [...wohnungFields()],
      },
      {
        format: "md",
        label: "Unterkunft",
        name: "unterkunft",
        path: "content/unterkunft",
        match: {
          include: "**/*",
        },
        fields: [...accommodationFields()],
      },
      {
        format: "md",
        label: "Locations",
        name: "locations",
        path: "content/locations",
        match: {
          include: "**/*",
        },
        fields: [...locationFields()],
      },
      {
        format: "md",
        label: "Feiern",
        name: "feiern",
        path: "content",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "feiern",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Titel",
          },
          {
            type: "string",
            name: "title_emotional",
            label: "Emotionaler Titel",
          },
          {
            type: "image",
            name: "cover",
            label: "Cover",
          },
          ...metaFields(),
        ],
      },
      {
        format: "md",
        label: "Anlass",
        name: "anlass",
        path: "content/anlass",
        match: {
          include: "**/*",
        },
        fields: [...anlassFields()],
      },
      {
        format: "md",
        label: "Essen",
        name: "essen",
        path: "content",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "essen",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titel",
          },
          {
            type: "string",
            name: "title_emotional",
            label: "Emotionaler Titel",
          },
          {
            type: "image",
            name: "cover",
            label: "Cover",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...metaFields(),
        ],
      },
      {
        format: "md",
        label: "Gastronomie",
        name: "gastronomie",
        path: "content/gastronomie",
        match: {
          include: "**/*",
        },
        fields: [...gastronomieFields()],
      },
    ],
  },
});
